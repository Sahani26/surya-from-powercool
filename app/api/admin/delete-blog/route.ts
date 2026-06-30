

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json().catch(() => null);

    const { db } = await connectToDatabase();

    // 🔹 MULTI DELETE
    if (body?.ids?.length) {
      await db.collection("blogs").deleteMany({
        _id: { $in: body.ids.map((i: string) => new ObjectId(i)) },
      });

      return NextResponse.json({
        success: true,
        message: "Selected blogs deleted successfully",
      });
    }

    // 🔹 SINGLE DELETE (unchanged)
    if (!id) {
      return NextResponse.json({ error: "Blog ID missing" }, { status: 400 });
    }

    await db.collection("blogs").deleteOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}

