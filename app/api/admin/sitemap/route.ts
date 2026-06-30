import { NextResponse } from "next/server";
import { electricianAreas } from "@/data/electricianAreas";
import { connectToDatabase } from "@/lib/mongodb";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.suryaelectrician.com";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);

  // 🔹 Static URLs
  const staticPages = [
    { url: `${BASE_URL}/`, type: "static" },
    { url: `${BASE_URL}/services/electrician-in-surat`, type: "static" },
    { url: `${BASE_URL}/blog`, type: "static" },
  ];

  // 🔹 Area URLs
  const areaPages = electricianAreas.map((area) => ({
    url: `${BASE_URL}/services/electrician-in-${area.slug}`,
    type: "area",
    slug: area.slug,
  }));

  // 🔹 Blog URLs
  const { db } = await connectToDatabase();
  const blogs = await db
    .collection("blogs")
    .find({}, { projection: { slug: 1 } })
    .toArray();

  const blogPages = blogs.map((b: any) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    type: "blog",
    slug: b.slug,
  }));

  // 🔹 Merge all
  const all = [...staticPages, ...areaPages, ...blogPages];

  // 🔹 Duplicate detection
  const urlCount: Record<string, number> = {};
  all.forEach((item) => {
    urlCount[item.url] = (urlCount[item.url] || 0) + 1;
  });

  const finalData = all.map((item) => ({
    ...item,
    count: urlCount[item.url],
    duplicate: urlCount[item.url] > 1,
  }));

  // 🔹 Duplicate TOTAL
  const duplicateTotal = finalData.filter((i) => i.duplicate).length;

  // 🔹 Pagination
  const start = (page - 1) * limit;
  const paginated = finalData.slice(start, start + limit);

  return NextResponse.json({
    total: finalData.length,
    duplicateTotal, // 👈 IMPORTANT
    pages: Math.ceil(finalData.length / limit),
    data: paginated,
  });
}
