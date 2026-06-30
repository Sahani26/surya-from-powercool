 

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { v2 as cloudinary } from "cloudinary";

/* ================= ENV ================= */
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

/* ================= CLOUDINARY ================= */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

/* ================= HELPERS ================= */

/* 🔹 Extract JSON OBJECT */
function extractJSON(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("No JSON object found");
  return JSON.parse(match[0]);
}

/* 🔹 Extract JSON ARRAY */
function extractJSONArray(text: string) {
  const match = text.match(/\[[\s\S]*\]/);
  if (!match) throw new Error("No JSON array found");
  return JSON.parse(match[0]);
}

/* 🔹 Generate AI Image + Upload to Cloudinary */
async function generateBlogImage(title: string) {
  try {
    const res = await fetch(
      "https://openrouter.ai/api/v1/images/generations",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-image-1",
          prompt: `
Professional blog cover image for the article:
"${title}"

Theme:
Home electrical services
Residential electrician
Modern house interior
Realistic photography
High quality
No text, no watermark
`,
          size: "1024x1024",
        }),
      }
    );

    if (!res.ok) {
      console.error("IMAGE API ERROR:", await res.text());
      return null;
    }

    const data = await res.json();
    const base64 = data?.data?.[0]?.b64_json;
    if (!base64) return null;

    /* 🔥 Upload to Cloudinary */
    const upload = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64}`,
      {
        folder: "blogs",
        resource_type: "image",
      }
    );

    return upload.secure_url;
  } catch (err) {
    console.error("IMAGE GENERATION FAILED:", err);
    return null;
  }
}

/* ================= MAIN CRON ================= */

export async function GET(req: Request) {
  try {
    /* 🔐 SECURITY */
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get("secret");

    if (secret !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!OPENROUTER_API_KEY) {
      throw new Error("OPENROUTER_API_KEY missing");
    }

    const { db } = await connectToDatabase();

    /* ========== STEP 1: GENERATE TOPICS ========== */
    const topicsPrompt = `
You are an expert SEO content writer for a home electrical services company.

Generate 5 SEO-friendly blog titles for homeowners.
Include keywords like:
home electrical services, electrician near me, electrical repair.

Return ONLY a JSON array.
No markdown.
`;

    const topicsResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [{ role: "user", content: topicsPrompt }],
          temperature: 0.7,
        }),
      }
    );

    if (!topicsResponse.ok) {
      throw new Error(await topicsResponse.text());
    }

    const topicsData = await topicsResponse.json();
    const rawTopics = topicsData?.choices?.[0]?.message?.content;
    if (!rawTopics) throw new Error("Empty topics response");

    const BLOG_TOPICS: string[] = extractJSONArray(rawTopics);
    const selectedTopics = BLOG_TOPICS.slice(0, 5);

    /* ========== STEP 2: GENERATE BLOGS ========== */
    const blogs: any[] = [];

    for (const title of selectedTopics) {
      const blogPrompt = `
You are an SEO content writer for a home electrical services company.

Write a blog using this title:
"${title}"

RULES:
- Max 250 words
- Simple English
- Paragraph-based
- Natural keywords:
home electrical services,
residential electrician,
electrical repair,
electrician near me,
electrical safety

Return ONLY JSON:
{
  "slug": "",
  "content": "",
  "subTitle": "",
  "subContent": "",
  "quote": "",
  "tags": []
}
`;

      const blogResponse = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-4o-mini",
            messages: [{ role: "user", content: blogPrompt }],
            temperature: 0.7,
          }),
        }
      );

      if (!blogResponse.ok) continue;

      const blogData = await blogResponse.json();
      const rawText = blogData?.choices?.[0]?.message?.content;
      if (!rawText) continue;

      const parsed = extractJSON(rawText);

      /* 🔹 Duplicate slug check */
      const exists = await db
        .collection("blogs")
        .findOne({ slug: parsed.slug });
      if (exists) continue;

      /* 🔥 AI IMAGE */
      const aiImage = await generateBlogImage(title);

      blogs.push({
        title,
        slug: parsed.slug,
        content: parsed.content,
        subTitle: parsed.subTitle,
        subContent: parsed.subContent,
        quote: parsed.quote,
        tags: parsed.tags,
        author: "Admin",
        image: aiImage ?? "/assets/images/blog/blog-details-img-1.jpg",
        status: "published",
        createdAt: new Date(),
      });
    }

    if (blogs.length) {
      await db.collection("blogs").insertMany(blogs);
    }

    return NextResponse.json({
      success: true,
      message: `${blogs.length} blogs generated and saved successfully`,
      topics: selectedTopics,
    });
  } catch (err: any) {
    console.error("AUTO BLOG ERROR:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
