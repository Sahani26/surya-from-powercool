
import { electricianAreas } from "@/data/electricianAreas";
import { connectToDatabase } from "@/lib/mongodb";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.suryaelectrician.com";

  const now = new Date();

  // 🔹 Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/electrician-in-surat`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // 🔹 Area pages (ALL 47 – SAFE)
  const areaPages: MetadataRoute.Sitemap = electricianAreas.map((area) => ({
    url: `${baseUrl}/services/electrician-in-${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 🔹 Blog pages
  const { db } = await connectToDatabase();

  const blogs = await db
    .collection("blogs")
    .find({}, { projection: { slug: 1, updatedAt: 1 } })
    .toArray();

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updatedAt
      ? new Date(blog.updatedAt)
      : now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...areaPages, ...blogPages];
}
