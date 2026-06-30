import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const body = await req.json();

  const { db } = await connectToDatabase();
  await db.collection("blogs").updateOne(
    { _id: new ObjectId(id!) },
    { $set: body }
  );

  return NextResponse.json({ success: true });
}
