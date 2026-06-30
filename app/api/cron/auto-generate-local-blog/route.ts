import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { v2 as cloudinary } from "cloudinary"; 

/* ================= ENV ================= */
const OPENROUTER_API_KEY_2 = process.env.OPENROUTER_API_KEY_2;

/* ================= CLOUDINARY ================= */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

/* ================= SURAT AREAS ================= */
const SURAT_AREAS = [
  { area: "Adajan", city: "Surat" },
  { area: "Pal", city: "Surat" },
  { area: "Vesu", city: "Surat" },
  { area: "Gauraw Ptah Road", city: "Surat" },
  { area: "Jahangir Pura", city: "Surat" },
  { area: "Udhna", city: "Surat" },
  { area: "Piplod", city: "Surat" },
  { area: "Athwa", city: "Surat" },
  { area: "Bhstan", city: "Surat" },
  { area: "Piplod", city: "Surat" },
  { area: "Parle point", city: "Surat" },
  { area: "City Light", city: "Surat" },
];

const getRandomLocation = () =>
  SURAT_AREAS[Math.floor(Math.random() * SURAT_AREAS.length)];

/* ================= HELPERS ================= */
function extractJSON(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("No JSON object found");
  return JSON.parse(match[0]);
}

function extractJSONArray(text: string) {
  const match = text.match(/\[[\s\S]*\]/);
  if (!match) throw new Error("No JSON array found");
  return JSON.parse(match[0]);
}


/* ================= LOCAL BLOG IMAGES ================= */
const BLOG_IMAGES = [
  "/assets/images/blog/blog-1-1.jpg",
  "/assets/images/blog/blog-1-2.jpg",
  "/assets/images/blog/blog-1-3.jpg",
  "/assets/images/blog/blog-1-4.jpg",
  "/assets/images/blog/blog-1-5.jpg",
  "/assets/images/blog/blog-1-6.jpg",
  "/assets/images/blog/blog-1-7.jpg",

  "/assets/images/blog/blog-2-1.jpg",
  "/assets/images/blog/blog-2-2.jpg",
  "/assets/images/blog/blog-2-3.jpg",
];

/* 🔹 Pick random image */
const getRandomBlogImage = () =>
  BLOG_IMAGES[Math.floor(Math.random() * BLOG_IMAGES.length)];


/* ================= MAIN CRON ================= */
export async function GET(req: Request) {
  try {
    /* 🔐 SECURITY */
    const { searchParams } = new URL(req.url);
    if (searchParams.get("secret") !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!OPENROUTER_API_KEY_2) {
      throw new Error("OPENROUTER_API_KEY_2 missing");
    }

    const { db } = await connectToDatabase();

    /* ========== STEP 1: TOPICS ========== */
    const topicsPrompt = `
You are a local SEO content writer for a home electrical services company in Surat, India.

Generate 5 SEO-friendly blog titles.
Each title must:
- Target a Surat locality (Adajan, Pal, Vesu, Varachha, etc.)
- Use keywords:
  Electrician in Surat,
  Home Electrical Services,
  Electrical Repair Near Me
- Sound human and natural

Return ONLY a JSON array.
`;

    const topicsResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY_2}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [{ role: "user", content: topicsPrompt }],
          temperature: 0.8,
        }),
      }
    );

    if (!topicsResponse.ok) throw new Error("Topic generation failed");

    const rawTopics =
      (await topicsResponse.json())?.choices?.[0]?.message?.content;

    const BLOG_TOPICS: string[] = extractJSONArray(rawTopics);

    /* ========== STEP 2: BLOGS ========== */
    const blogs: any[] = [];

    for (const title of BLOG_TOPICS) {
      const { area, city } = getRandomLocation();

      const blogPrompt = `
Write a local SEO blog for this title:
"${title}"

Target location:
${area}, ${city}

Rules:
- Max 250 words
- Simple Indian English
- Mention real home electrical problems
- Use keywords naturally:
electrician in ${area},
home electrical services ${city},
electrical repair near me

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
            Authorization: `Bearer ${OPENROUTER_API_KEY_2}`,
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

      const rawText =
        (await blogResponse.json())?.choices?.[0]?.message?.content;

      const parsed = extractJSON(rawText);

      const exists = await db
        .collection("blogs")
        .findOne({ slug: parsed.slug });

      if (exists) continue;

       const image = await getRandomBlogImage(); 

      blogs.push({
        title,
        slug: parsed.slug,
        content: parsed.content,
        subTitle: parsed.subTitle,
        subContent: parsed.subContent,
        quote: parsed.quote,
        tags: [
          ...parsed.tags,
          `Electrician in ${area}`,
          `Home Electrical Services ${city}`,
        ],
        author: "Admin",
        image: image ?? "/assets/images/blog/blog-details-img-1.jpg",
        status: "published",
        createdAt: new Date(),
      });
    }

    if (blogs.length) {
      await db.collection("blogs").insertMany(blogs);
    }

    return NextResponse.json({
      success: true,
      message: `${blogs.length} blogs generated successfully`,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
