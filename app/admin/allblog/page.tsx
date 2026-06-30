"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "@/public/assets/css/editblog.css";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false); // ✅ added

  const LIMIT = 8;

  const fetchBlogs = async () => {
    setLoading(true); // ✅ start skeleton
    const res = await fetch(
      `/api/admin/get-blog?page=${page}&limit=8&search=${search}`
    );
    const data = await res.json();
    setBlogs(data.blogs || []);
    setTotalPages(data.totalPages || 1);
    setLoading(false); // ✅ stop skeleton
  };

  useEffect(() => {
    fetchBlogs();
  }, [page, search]);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const deleteSelected = async () => {
    if (!selected.length) return alert("No blog selected");

    await fetch("/api/admin/delete-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: selected }),
    });

    setSelected([]);
    fetchBlogs();
  };

  return (
    <div className="admin-blogs-page" style={{ padding: 30 }}>
      <h1 className="admin-blogs-title">Admin Blogs</h1>

      <input
        type="text"
        placeholder="Search title..."
        value={search}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        style={{ marginBottom: 10 }}
      />

      <button onClick={deleteSelected} style={{ marginLeft: 10 }}>
        🗑 Delete Selected
      </button>

      <table className="admin-blogs-table" border={1} cellPadding={10} width="100%">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={(e) =>
                  setSelected(e.target.checked ? blogs.map((b) => b._id) : [])
                }
              />
            </th>
            <th>#</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {/* 🔥 SKELETON LOADING */}
          {loading &&
            [...Array(LIMIT)].map((_, i) => (
              <tr key={i}>
                <td colSpan={6}>
                  <div
                    style={{
                      height: 20,
                      background: "#e0e0e0",
                      borderRadius: 4,
                      animation: "pulse 1.5s infinite",
                    }}
                  />
                </td>
              </tr>
            ))}

          {/* ✅ DATA */}
          {!loading &&
            blogs.map((blog, index) => (
              <tr key={blog._id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(blog._id)}
                    onChange={() => toggleSelect(blog._id)}
                  />
                </td>
                <td>{(page - 1) * LIMIT + index + 1}</td>
                <td>{blog.title}</td>
                <td>{blog.slug}</td>
                <td>
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString()
                    : "-"}
                </td>
                <td>
                  <Link href={`/admin/edit/${blog._id}`}>✏️ Edit</Link>
                  {" | "}
                  <form
                    action={`/api/admin/delete-blog?id=${blog._id}`}
                    method="POST"
                    style={{ display: "inline" }}
                  >
                    <button type="submit">🗑 Delete</button>
                  </form>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div style={{ marginTop: 10 }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
