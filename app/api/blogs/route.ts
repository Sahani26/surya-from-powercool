
// app/api/blogs/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import path from "path";
import fs from "fs/promises";

const PAGE_SIZE = 6;

/* =======================
   GET BLOGS (PAGINATION)
======================= */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const skip = (page - 1) * PAGE_SIZE;

    const { db } = await connectToDatabase();

    const blogs = await db
      .collection("blogs")
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(PAGE_SIZE)
      .toArray();

    const total = await db.collection("blogs").countDocuments();

    return NextResponse.json({
      blogs,
      hasMore: skip + PAGE_SIZE < total,
    });
  } catch (err) {
    console.error("BLOG FETCH ERROR:", err);
    return NextResponse.json(
      { error: "Failed to load blogs" },
      { status: 500 }
    );
  }
}

/* =======================
   POST BLOG (FORMDATA)
======================= */
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("image") as File | null;
    const defaultImage =
      (formData.get("defaultImage") as string) ||
      "assets/images/blog/blog-details-img-1.jpg";

    let imagePath = defaultImage;

    // ✅ If user uploaded image
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadDir = path.join(process.cwd(), "public/uploads");
      await fs.mkdir(uploadDir, { recursive: true });

      const fileName = `${Date.now()}-${file.name}`;
      await fs.writeFile(path.join(uploadDir, fileName), buffer);

      imagePath = `/uploads/${fileName}`;
    }

    const blog = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      image: imagePath,
      author: formData.get("author"),
      tags: String(formData.get("tags") || "")
        .split(",")
        .map((t) => t.trim()),
      content: formData.get("content"),
      subTitle: formData.get("subTitle"),
      subContent: formData.get("subContent"),
      quote: formData.get("quote"),
      createdAt: new Date(),
    };

    const { db } = await connectToDatabase();
    await db.collection("blogs").insertOne(blog);

    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
      slug: blog.slug,
    });
  } catch (err) {
    console.error("BLOG SAVE ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
