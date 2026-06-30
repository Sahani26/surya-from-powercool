"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import "@/public/assets/css/editblogpage.css"
import Link from "next/link";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string; // ✅ SAFE

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    author: "",
    tags: "",
    content: "",
    subTitle: "",
    subContent: "",
    quote: "",
  });

  // 🔥 LOAD BLOG DATA
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/admin/get-blog?id=${id}`);
        const data = await res.json();

        if (!res.ok) {
          alert(data.error || "Failed to load blog");
          return;
        }

        setForm({
          title: data.title || "",
          slug: data.slug || "",
          author: data.author || "",
          tags: Array.isArray(data.tags)
            ? data.tags.join(", ")
            : "",
          content: data.content || "",
          subTitle: data.subTitle || "",
          subContent: data.subContent || "",
          quote: data.quote || "",
        });
      } catch (err) {
        console.error("FETCH BLOG ERROR:", err);
        alert("Error loading blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // 🔥 UPDATE BLOG
  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`/api/admin/update-blog?id=${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Update failed");
      return;
    }

    alert("Blog updated successfully");
    router.push("/admin");
  };

  if (loading) {
    return (
      <p className="edit-blog-loading" style={{ padding: 30 }}>
        Loading blog...
      </p>
    );
  }

  return (
    <div className="edit-blog-page" style={{ padding: 30 }}>
      <h1 className="edit-blog-title">Edit Blog</h1>
<Link className="bt btn-secondary" href="/">Home</Link>
      <form className="edit-blog-form" onSubmit={handleUpdate}>
        <input
          className="edit-blog-input"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          className="edit-blog-input"
          placeholder="Slug"
          value={form.slug}
          onChange={(e) =>
            setForm({ ...form, slug: e.target.value })
          }
        />

        <input
          className="edit-blog-input"
          placeholder="Author"
          value={form.author}
          onChange={(e) =>
            setForm({ ...form, author: e.target.value })
          }
        />

        <textarea
          className="edit-blog-textarea"
          placeholder="Content"
          rows={8}
          value={form.content}
          onChange={(e) =>
            setForm({ ...form, content: e.target.value })
          }
        />

        <input
          className="edit-blog-input"
          placeholder="Sub Title"
          value={form.subTitle}
          onChange={(e) =>
            setForm({ ...form, subTitle: e.target.value })
          }
        />

        <textarea
          className="edit-blog-textarea"
          placeholder="Sub Content"
          rows={4}
          value={form.subContent}
          onChange={(e) =>
            setForm({ ...form, subContent: e.target.value })
          }
        />

        <input
          className="edit-blog-input"
          placeholder="Quote"
          value={form.quote}
          onChange={(e) =>
            setForm({ ...form, quote: e.target.value })
          }
        />

        <input
          className="edit-blog-input"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={(e) =>
            setForm({ ...form, tags: e.target.value })
          }
        />

        <button
          className="edit-blog-submit-btn"
          type="submit"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}
