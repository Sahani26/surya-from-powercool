import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, company, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and Email are required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    await db.collection("contacts").insertOne({
      name,
      email,
      phone,
      company,
      message,
      createdAt: new Date(),
    });

    // ✅ ALWAYS RETURN JSON
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ CONTACT API ERROR:", error);

    // ✅ EVEN ON ERROR → RETURN JSON
    return NextResponse.json(
      {
        success: false,
        message: "Server error while sending message",
      },
      { status: 500 }
    );
  }
}
