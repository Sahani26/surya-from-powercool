
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function DELETE(req: Request) {
  const { slug, type } = await req.json();

  if (type !== "blog") {
    return NextResponse.json(
      { error: "Only blog URLs can be deleted" },
      { status: 400 }
    );
  }

  const { db } = await connectToDatabase();
  await db.collection("blogs").deleteOne({ slug });

  return NextResponse.json({ success: true });
}
