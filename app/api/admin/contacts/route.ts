import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    const { db } = await connectToDatabase();

    /* 🔹 Remove duplicate phone numbers */
    const pipeline = [
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: "$phone",
          doc: { $first: "$$ROOT" },
        },
      },
      { $replaceRoot: { newRoot: "$doc" } },
      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: limit },
    ];

    const contacts = await db
      .collection("contacts")
      .aggregate(pipeline)
      .toArray();

    const totalUnique = await db.collection("contacts").aggregate([
      {
        $group: {
          _id: "$phone",
        },
      },
      { $count: "count" },
    ]).toArray();

    const total = totalUnique[0]?.count || 0;

    return NextResponse.json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("❌ ADMIN CONTACT ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to load contacts" },
      { status: 500 }
    );
  }
}
