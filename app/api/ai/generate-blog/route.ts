// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// export async function POST(req: Request) {
//   try {
//     const { title } = await req.json();
//     console.log("AI Blog Title:", title);

//     const model = genAI.getGenerativeModel({
//       model: "gemini-2.5-flash",
//     });

//     const prompt = `
// You are a professional blog writer.

// Create a blog using this title: "${title}"

// IMPORTANT RULES:
// - Return ONLY valid JSON
// - No markdown
// - No explanations
// - No backticks

// JSON FORMAT:
// {
//   "slug": "",
//   "content": "",
//   "subTitle": "",
//   "subContent": "",
//   "quote": "",
//   "tags": []
// }
// `;

//     const result = await model.generateContent(prompt);
//     let text = result.response.text();

//     console.log("RAW AI RESPONSE:\n", text);

//     // 🔥 CLEAN MARKDOWN & EXTRA TEXT
//     text = text
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     let parsed;
//     try {
//       parsed = JSON.parse(text);
//     } catch (jsonErr) {
//       console.error("JSON PARSE ERROR:", jsonErr);
//       console.error("CLEANED TEXT:", text);
//       return NextResponse.json(
//         {
//           success: false,
//           error: "AI returned invalid JSON",
//           raw: text,
//         },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       ...parsed,
//     });
//   } catch (err: any) {
//     console.error("AI GENERATION ERROR:", err);
//     return NextResponse.json(
//       {
//         success: false,
//         error: err.message || "Unknown AI error",
//       },
//       { status: 500 }
//     );
//   }
// }
// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// // ✅ SAFE JSON EXTRACTOR
// function extractJSON(text: string) {
//   const match = text.match(/\{[\s\S]*\}/);
//   if (!match) throw new Error("No JSON found in AI response");
//   return JSON.parse(match[0]);
// }

// export async function POST(req: Request) {
//   try {
//     const { title } = await req.json();
//     console.log("AI BLOG TITLE:", title);

//     if (!process.env.GEMINI_API_KEY) {
//       throw new Error("GEMINI_API_KEY is missing");
//     }

//     const model = genAI.getGenerativeModel({
//       model: "gemini-2.0-flash",
//     });

// //     const result = await model.generateContent(`
// // Create a blog using this title: "${title}" with tolat maximum word 250

// // Return JSON with keys:
// // slug, content, subTitle, subContent, quote, tags
// //     `);
// const result = await model.generateContent(`
// You are a professional SEO content writer for a LOCAL home electrical services business.

// GOAL:
// Create a blog that ranks on Google and converts homeowners looking for electrical help.

// BLOG TITLE:
// "${title}"

// SEARCH INTENT:
// Homeowners searching for electrical safety, repair, or professional electrician services.

// CONTENT RULES:
// - 180–220 words total
// - Simple, clear English (no technical jargon)
// - Paragraph-based writing only
// - No markdown
// - No bullet points
// - First paragraph must clearly address the search intent
// - Last paragraph must include a soft call-to-action
// - Avoid keyword stuffing

// SEO REQUIREMENTS:
// - Use the PRIMARY keyword within the first 60 words:
//   "home electrical services"
// - Naturally include SECONDARY keywords:
//   "electrician near me",
//   "electrical repair",
//   "electrical installation",
//   "residential electrician"
// - Content must sound professional, trustworthy, and helpful

// RETURN ONLY RAW JSON (no explanations, no backticks):

// {
//   "slug": "",
//   "content": "",
//   "subTitle": "",
//   "subContent": "",
//   "quote": "",
//   "tags": []
// }

// FIELD GUIDELINES:
// - slug: SEO-friendly, lowercase, hyphen-separated, unique
// - content: 120–160 words, problem → solution → benefit
// - subTitle: Service-related heading (not generic)
// - subContent: 50–70 words expanding on services
// - quote: Short trust-building line (no names)
// - tags: 5–7 SEO-focused electrical service keywords
// `);


//     const rawText = result.response.text();
//     console.log("RAW BLOG AI RESPONSE:\n", rawText);

//     const parsed = extractJSON(rawText);

//     return NextResponse.json({
//       success: true,
//       ...parsed,
//     });
//   } catch (err: any) {
//     console.error("AI BLOG ERROR FULL:", err);

//     return NextResponse.json(
//       {
//         success: false,
//         error: err.message || "AI blog generation failed",
//       },
//       { status: 500 }
//     );
//   }
// }

// // import { NextResponse } from "next/server";

// // const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY!; // TEMP TEST ONLY

// // // ✅ SAFE JSON EXTRACTOR
// // function extractJSON(text: string) {
// //   const match = text.match(/\{[\s\S]*\}/);
// //   if (!match) throw new Error("No JSON found in AI response");
// //   return JSON.parse(match[0]);
// // }

// // export async function POST(req: Request) {
// //   try {
// //     const { title } = await req.json();

// //     if (!title) throw new Error("Title is required");

// //     const prompt = `
// // You are a professional SEO content writer for a LOCAL home electrical services business.

// // GOAL:
// // Create a blog that ranks on Google and converts homeowners looking for electrical help.

// // BLOG TITLE:
// // "${title}"

// // SEARCH INTENT:
// // Homeowners searching for electrical safety, repair, or professional electrician services.

// // CONTENT RULES:
// // - 180–220 words total
// // - Simple, clear English (no technical jargon)
// // - Paragraph-based writing only
// // - No markdown
// // - No bullet points
// // - First paragraph must clearly address the search intent
// // - Last paragraph must include a soft call-to-action
// // - Avoid keyword stuffing

// // SEO REQUIREMENTS:
// // - Use the PRIMARY keyword within the first 60 words:
// //   "home electrical services"
// // - Naturally include SECONDARY keywords:
// //   "electrician near me",
// //   "electrical repair",
// //   "electrical installation",
// //   "residential electrician"

// // RETURN ONLY RAW JSON:

// // {
// //   "slug": "",
// //   "content": "",
// //   "subTitle": "",
// //   "subContent": "",
// //   "quote": "",
// //   "tags": []
// // }

// // FIELD GUIDELINES:
// // - slug: SEO-friendly, lowercase, hyphen-separated, unique
// // - content: 120–160 words, problem → solution → benefit
// // - subTitle: Service-related heading
// // - subContent: 50–70 words
// // - quote: Short trust-building line
// // - tags: 5–7 SEO keywords
// // `;

// //     // 🔥 OPENROUTER CALL (Gemini replacement)
// //     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
// //       method: "POST",
// //       headers: {
// //         Authorization: `Bearer ${OPENROUTER_API_KEY}`,
// //         "Content-Type": "application/json",
// //         "HTTP-Referer": "https://theme-test-kappa.vercel.app",
// //         "X-Title": "SEO Blog Generator",
// //       },
// //       body: JSON.stringify({
// //         model: "openai/gpt-4o-mini",
// //         messages: [
// //           { role: "user", content: prompt }
// //         ],
// //         temperature: 0.7,
// //       }),
// //     });

// //     if (!response.ok) {
// //       const errText = await response.text();
// //       throw new Error(`HTTP ${response.status}: ${errText}`);
// //     }

// //     const data = await response.json();

// //     const rawText = data?.choices?.[0]?.message?.content;

// //     if (!rawText) {
// //       throw new Error("Empty AI response");
// //     }

// //     console.log("RAW BLOG AI RESPONSE:\n", rawText);

// //     const parsed = extractJSON(rawText);

// //     return NextResponse.json({
// //       success: true,
// //       ...parsed,
// //     });

// //   } catch (err: any) {
// //     console.error("AI BLOG ERROR FULL:", err);

// //     return NextResponse.json(
// //       {
// //         success: false,
// //         error: err.message || "AI blog generation failed",
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }


// import { NextResponse } from "next/server";

// const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// // ✅ SAFE JSON EXTRACTOR
// function extractJSON(text: string) {
//   const match = text.match(/\{[\s\S]*\}/);
//   if (!match) throw new Error("No JSON found in AI response");
//   return JSON.parse(match[0]);
// }

// export async function POST(req: Request) {
//   try {
//     // ✅ only fill check (no save)
//     if (!OPENROUTER_API_KEY) {
//       throw new Error("OPENROUTER_API_KEY is not set in environment");
//     }

//     const { title } = await req.json();

//     if (!title) throw new Error("Title is required");

//     const prompt = `
// You are a professional SEO content writer for a LOCAL home electrical services business.

// GOAL:
// Create a blog that ranks on Google and converts homeowners looking for electrical help.

// BLOG TITLE:
// "${title}"

// SEARCH INTENT:
// Homeowners searching for electrical safety, repair, or professional electrician services.

// CONTENT RULES:
// - 180–220 words total
// - Simple, clear English (no technical jargon)
// - Paragraph-based writing only
// - No markdown
// - No bullet points
// - First paragraph must clearly address the search intent
// - Last paragraph must include a soft call-to-action
// - Avoid keyword stuffing

// SEO REQUIREMENTS:
// - Use the PRIMARY keyword within the first 60 words:
//   "home electrical services"
// - Naturally include SECONDARY keywords:
//   "electrician near me",
//   "electrical repair",
//   "electrical installation",
//   "residential electrician"

// RETURN ONLY RAW JSON:

// {
//   "slug": "",
//   "content": "",
//   "subTitle": "",
//   "subContent": "",
//   "quote": "",
//   "tags": []
// }
// `;

//     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${OPENROUTER_API_KEY}`,
//         "Content-Type": "application/json",
//         "HTTP-Referer": "https://theme-test-kappa.vercel.app",
//         "X-Title": "SEO Blog Generator",
//       },
//       body: JSON.stringify({
//         model: "openai/gpt-4o-mini",
//         messages: [{ role: "user", content: prompt }],
//         temperature: 0.7,
//       }),
//     });

//     if (!response.ok) {
//       const errText = await response.text();
//       throw new Error(`HTTP ${response.status}: ${errText}`);
//     }

//     const data = await response.json();

//     const rawText = data?.choices?.[0]?.message?.content;

//     if (!rawText || !rawText.trim()) {
//       throw new Error("Empty AI response");
//     }

//     const parsed = extractJSON(rawText);

//     return NextResponse.json({
//       success: true,
//       ...parsed,
//     });

//   } catch (err: any) {
//     console.error("AI BLOG ERROR FULL:", err);

//     return NextResponse.json(
//       {
//         success: false,
//         error: err.message || "AI blog generation failed",
//       },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

/**
 * ✅ SAFE JSON EXTRACTOR
 * Handles AI adding text before/after JSON
 */
function extractJSON(text: string) {
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error("No JSON object found in AI response");
  }

  const jsonString = text.slice(firstBrace, lastBrace + 1);
  return JSON.parse(jsonString);
}

export async function POST(req: Request) {
  try {
    if (!OPENROUTER_API_KEY) {
      throw new Error("OPENROUTER_API_KEY is not set");
    }

    const { title } = await req.json();
    if (!title) throw new Error("Title is required");

    const prompt = `
You are a professional SEO content writer for a LOCAL home electrical services business.

STRICT RULES:
- Respond with ONLY valid JSON
- No markdown
- No explanations
- No extra text before or after JSON

BLOG TITLE:
"${title}"

GOAL:
Create a high-converting SEO blog for homeowners searching for electrical help.

CONTENT RULES:
- 180–220 words
- Simple, clear English
- Paragraph-based writing only
- First paragraph must match search intent
- Final paragraph must include a soft call-to-action
- Avoid keyword stuffing

SEO REQUIREMENTS:
- Use "home electrical services" in first 60 words
- Naturally include:
  electrician near me
  electrical repair
  electrical installation
  residential electrician

RETURN JSON IN THIS EXACT FORMAT:

{
  "slug": "",
  "content": "",
  "subTitle": "",
  "subContent": "",
  "quote": "",
  "tags": []
}
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://theme-test-kappa.vercel.app",
          "X-Title": "SEO Blog Generator",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          temperature: 0.7,
          messages: [
            {
              role: "system",
              content:
                "You generate SEO blog content and MUST respond with valid JSON only.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errText}`);
    }

    const data = await response.json();
    const rawText = data?.choices?.[0]?.message?.content;

    if (!rawText || !rawText.trim()) {
      throw new Error("Empty AI response");
    }

    const parsed = extractJSON(rawText);

    // ✅ basic safety validation
    if (!parsed.content || !parsed.slug) {
      throw new Error("Invalid blog JSON structure");
    }

    return NextResponse.json({
      success: true,
      ...parsed,
    });
  } catch (err: any) {
    console.error("AI BLOG ERROR FULL:", err);

    return NextResponse.json(
      {
        success: false,
        error: err.message || "AI blog generation failed",
      },
      { status: 500 }
    );
  }
}
