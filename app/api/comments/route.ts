import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    await db.collection("comments").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
