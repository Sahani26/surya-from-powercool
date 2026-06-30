
"use client";

import { useEffect, useState } from "react";

export default function AdminSitemapPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [duplicateTotal, setDuplicateTotal] = useState(0);

  const limit = 10;

  const loadData = async () => {
    const res = await fetch(
      `/api/admin/sitemap?page=${page}&limit=${limit}`
    );
    const json = await res.json();

    setRows(json.data);
    setPages(json.pages);
    setTotal(json.total);
    setDuplicateTotal(json.duplicateTotal);
  };

  useEffect(() => {
    loadData();
  }, [page]);

  const deleteItem = async (slug: string, type: string) => {
    if (!confirm("Delete this blog URL?")) return;

    await fetch("/api/admin/sitemap/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, type }),
    });

    loadData();
  };

  return (
    <div className="container py-4">
      <h1 className="mb-3">📄 Sitemap Manager</h1>

      {/* 🔥 TOP SUMMARY */}
      <div className="mb-3 d-flex gap-3">
        <span>
          <strong>Total URLs:</strong> {total}
        </span>

        <span>
          <strong>Duplicate URLs:</strong>{" "}
          <span
            style={{
              color: duplicateTotal > 0 ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            {duplicateTotal}
          </span>
        </span>
      </div>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>URL</th>
            <th>Type</th>
            <th>Duplicate?</th>
            <th>Count</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((item, i) => (
            <tr
              key={i}
              style={{
                backgroundColor: item.duplicate ? "#ffe5e5" : "transparent",
              }}
            >
              <td>{(page - 1) * limit + i + 1}</td>
              <td style={{ wordBreak: "break-all" }}>{item.url}</td>
              <td>{item.type}</td>

              <td>
                {item.duplicate ? (
                  <span
                    style={{
                      background: "red",
                      color: "#fff",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  >
                    YES
                  </span>
                ) : (
                  <span
                    style={{
                      background: "green",
                      color: "#fff",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  >
                    NO
                  </span>
                )}
              </td>

              <td>{item.count}</td>

              <td>
                {item.type === "blog" ? (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteItem(item.slug, item.type)}
                  >
                    Delete
                  </button>
                ) : (
                  <span style={{ color: "#999" }}>Locked</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex gap-2 align-items-center">
        <button
          className="btn btn-secondary"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span>
          Page <strong>{page}</strong> / {pages}
        </span>

        <button
          className="btn btn-secondary"
          disabled={page === pages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
