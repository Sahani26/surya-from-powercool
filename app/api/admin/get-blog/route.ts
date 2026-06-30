
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 5);
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;
    const { db } = await connectToDatabase();

    // 🔹 SINGLE BLOG (unchanged)
    if (id) {
      const blog = await db
        .collection("blogs")
        .findOne({ _id: new ObjectId(id) });

      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json({
        ...blog,
        _id: blog._id.toString(),
      });
    }

    // 🔹 BLOG LIST (new)
    const query = search
      ? { title: { $regex: search, $options: "i" } }
      : {};

    const total = await db.collection("blogs").countDocuments(query);

    const blogs = await db
      .collection("blogs")
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      blogs: blogs.map((b: any) => ({ ...b, _id: b._id.toString() })),
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("GET BLOG ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
