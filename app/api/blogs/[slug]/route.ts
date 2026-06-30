
// app/api/blogs/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      slug,
      content,
      author,
      subTitle,
      subContent,
      quote,
      tags,
      image,
      status,
    } = body;

    // 🔴 Required fields
    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "title, slug and content are required" },
        { status: 400 }
      );
    }

    // ✅ Normalize slug (SEO-safe)
    const cleanSlug = slug
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const { db } = await connectToDatabase();
    const collection = db.collection("blogs");

    // 🚫 Check existing slug
    const exists = await collection.findOne({ slug: cleanSlug });
    if (exists) {
      return NextResponse.json(
        { error: "slug already exists" },
        { status: 409 }
      );
    }

    const now = new Date();

    const insertRes = await collection.insertOne({
      title,
      slug: cleanSlug,
      content,

      // SEO / AI fields
      subTitle: subTitle || "",
      subContent: subContent || "",
      quote: quote || "",
      tags: Array.isArray(tags) ? tags : [],
      image: image || "/uploads/default-electrical.jpg",

      // meta
      author: author || "Admin",
      status: status || "published", // published | draft

      createdAt: now,
      updatedAt: now,
    });

    const inserted = await collection.findOne({
      _id: insertRes.insertedId,
    });

    return NextResponse.json(
      {
        success: true,
        blog: inserted,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("POST /api/blogs error", err);

    // Mongo duplicate key error (if unique index exists)
    if (err?.code === 11000) {
      return NextResponse.json(
        { error: "slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
