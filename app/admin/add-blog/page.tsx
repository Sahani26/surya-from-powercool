"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import "@/public/assets/css/addblog.css";

export default function AddBlogPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    author: "",
    tags: "",
    content: "",
    subContent: "",
    quote: "",
    subTitle: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePrompt, setImagePrompt] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [loadingImageAI, setLoadingImageAI] = useState(false);

  // 🔹 GENERATE BLOG (AI)
  const generateWithAI = async () => {
    if (!form.title) return alert("Enter title first");

    setLoadingAI(true);
    const res = await fetch("/api/ai/generate-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: form.title }),
    });

    const data = await res.json();
    setLoadingAI(false);

    if (!res.ok) return alert(data.error);

    setForm((prev) => ({
      ...prev,
      slug: data.slug,
      content: data.content,
      subTitle: data.subTitle,
      subContent: data.subContent,
      quote: data.quote,
      tags: data.tags.join(", "),
    }));
  };

  // 🔹 GENERATE IMAGE PROMPT
  const generateImageWithAI = async () => {
    if (!form.title) return alert("Enter title first");

    setLoadingImageAI(true);
    const res = await fetch("/api/ai/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: form.title }),
    });

    const data = await res.json();
    setLoadingImageAI(false);

    if (!res.ok) return alert(data.error);

    setImagePrompt(data.imagePrompt);
  };

  // 🔹 SAVE BLOG
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) =>
      formData.append(k, v)
    );

    if (imageFile) {
      formData.append("image", imageFile);
    } else {
      formData.append(
        "defaultImage",
        "assets/images/blog/blog-details-img-1.jpg"
      );
    }

    formData.append("imagePrompt", imagePrompt);

    const res = await fetch("/api/blogs", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert(data.message || data.error);

    if (data.slug) router.push(`/blog/${data.slug}`);
  };

  return (
    <>
      <Header />

      <div className="add-blog-wrapper">
        <h1>Add Blog</h1>

        <form onSubmit={handleSubmit} className="add-blog-form">
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <button type="button" onClick={generateWithAI}>
            {loadingAI ? "Generating..." : "Generate Blog with AI"}
          </button>

          <button type="button" onClick={generateImageWithAI}>
            {loadingImageAI ? "Generating..." : "Generate Image Prompt"}
          </button>

          {imagePrompt && (
            <p>
              <b>AI Image Prompt:</b><br />
              {imagePrompt}
            </p>
          )}

          <input
            placeholder="Slug"
            value={form.slug}
            onChange={(e) =>
              setForm({ ...form, slug: e.target.value })
            }
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImageFile(e.target.files?.[0] || null)
            }
          />

          <input
            placeholder="Author"
            onChange={(e) =>
              setForm({ ...form, author: e.target.value })
            }
          />

          <input
            placeholder="Tags"
            value={form.tags}
            onChange={(e) =>
              setForm({ ...form, tags: e.target.value })
            }
          />

          <textarea
            placeholder="Content"
            rows={8}
            value={form.content}
            onChange={(e) =>
              setForm({ ...form, content: e.target.value })
            }
          />

          <input
            placeholder="Quote"
            value={form.quote}
            onChange={(e) =>
              setForm({ ...form, quote: e.target.value })
            }
          />

          <input
            placeholder="Sub Title"
            value={form.subTitle}
            onChange={(e) =>
              setForm({ ...form, subTitle: e.target.value })
            }
          />

          <textarea
            placeholder="Sub Content"
            rows={4}
            value={form.subContent}
            onChange={(e) =>
              setForm({ ...form, subContent: e.target.value })
            }
          />

          <button className="main-menu__btn thm-btn">
            Create Blog
          </button>
        </form>
      </div>

      <CTA />
      <Footer />
    </>
  );
}
