// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { prompt } = await req.json();

//     if (!process.env.OPENROUTER_API_KEY) {
//       throw new Error("OPENROUTER_API_KEY missing");
//     }

//     const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "openai/gpt-4o-mini",
//         messages: [
//           {
//             role: "system",
//             content:
//               "You generate professional image prompts for blog feature images.",
//           },
//           {
//             role: "user",
//             content: `Create a detailed realistic image prompt for a blog feature image about: ${prompt}`,
//           },
//         ],
//       }),
//     });

//     const data = await res.json();
//     const text = data?.choices?.[0]?.message?.content;

//     if (!text) throw new Error("No image prompt generated");

//     return NextResponse.json({
//       success: true,
//       imagePrompt: text.trim(),
//     });
//   } catch (err: any) {
//     console.error("IMAGE PROMPT ERROR:", err);
//     return NextResponse.json(
//       { success: false, error: err.message },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "Prompt is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENROUTER_API_KEY) {
      throw new Error("OPENROUTER_API_KEY missing");
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/images/generations",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-image-1",
          prompt: `Professional blog feature image, ${prompt}, realistic photography, high quality, 16:9, natural lighting`,
          size: "1024x576",
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }

    const data = await response.json();
    const base64Image = data?.data?.[0]?.b64_json;

    if (!base64Image) {
      throw new Error("Image generation failed");
    }

    // ✅ Save image
    const buffer = Buffer.from(base64Image, "base64");
    const fileName = `${randomUUID()}.png`;
    const uploadDir = path.join(process.cwd(), "public/uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    fs.writeFileSync(path.join(uploadDir, fileName), buffer);

    return NextResponse.json({
      success: true,
      imageUrl: `/uploads/${fileName}`,
      message: "Image generated successfully",
    });
  } catch (err: any) {
    console.error("IMAGE GENERATION ERROR:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Image generation failed" },
      { status: 500 }
    );
  }
}
