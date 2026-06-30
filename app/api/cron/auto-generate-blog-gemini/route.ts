import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { v2 as cloudinary } from "cloudinary";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

/* ================= ENV ================= */
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const CRON_SECRET = process.env.CRON_SECRET;

/* ================= GEMINI ================= */
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY!);

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

/* 🔹 Generate AI Image + Upload to Cloudinary (UNCHANGED) */
async function generateBlogImage(title: string) {
  try {
    const res = await fetch(
      "https://openrouter.ai/api/v1/images/generations",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-image-1",
          prompt: `
Professional blog cover image for:
"${title}"

Theme:
Home electrical services
Residential electrician
Modern Indian home
Realistic photography
High quality
No text, no watermark
`,
          size: "1024x1024",
        }),
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    const base64 = data?.data?.[0]?.b64_json;
    if (!base64) return null;

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

    if (secret !== CRON_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY missing");
    }

    const { db } = await connectToDatabase();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    /* ========== STEP 1: GENERATE TOPICS ========== */ 

    const topicsPrompt = `
You are an expert SEO content writer for a home electrical services business.

Generate 2 SEO-friendly blog titles for homeowners.

Include keywords naturally:
home electrical services
electrician near me
electrical repair

Return ONLY a JSON array.
No markdown.
`;

    const topicsResult = await model.generateContent(topicsPrompt);
    let topicsText = topicsResult.response.text();

    topicsText = topicsText.replace(/```json/g, "").replace(/```/g, "").trim();

    const BLOG_TOPICS: string[] = extractJSONArray(topicsText);
    const selectedTopics = BLOG_TOPICS.slice(0, 2);

    /* ========== STEP 2: GENERATE BLOGS ========== */ 

    const blogs: any[] = [];

    for (const title of selectedTopics) { 

      const blogPrompt = `
You are a professional SEO content writer for a LOCAL home electrical services business.

BLOG TITLE:
"${title}"

RULES:
- 180–220 words
- Simple English
- Paragraph-based
- No markdown
- Soft CTA at the end

SEO KEYWORDS:
home electrical services
residential electrician
electrical repair
electrician near me
electrical safety

RETURN ONLY RAW JSON:
{
  "slug": "",
  "content": "",
  "subTitle": "",
  "subContent": "",
  "quote": "",
  "tags": []
}
`;

      const blogResult = await model.generateContent(blogPrompt);
      let blogText = blogResult.response.text();

      blogText = blogText.replace(/```json/g, "").replace(/```/g, "").trim();

      const parsed = extractJSON(blogText);

      /* 🔹 Duplicate slug check */
      const exists = await db
        .collection("blogs")
        .findOne({ slug: parsed.slug });

      if (exists) { 
        continue;
      }

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
    console.error("❌ AUTO BLOG ERROR:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
