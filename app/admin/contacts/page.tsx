"use client";

import { useEffect, useState } from "react";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  createdAt: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  async function fetchContacts(pageNo: number) {
    const res = await fetch(
      `/api/admin/contacts?page=${pageNo}&limit=${limit}`
    );
    const data = await res.json();

    if (data.success) {
      setContacts(data.data);
      setTotalPages(data.pagination.totalPages);
    }
  }

  useEffect(() => {
    fetchContacts(page);
  }, [page]);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>
        Contact Requests
      </h1>

      <div style={{ overflowX: "auto" }}>
        <table
          border={1}
          cellPadding={10}
          cellSpacing={0}
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Call</th>
              <th>Email</th>
              <th>Company</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>
                  {c.phone && (
                    <a
                      href={`tel:${c.phone}`}
                      style={{
                        padding: "6px 12px",
                        background: "green",
                        color: "#fff",
                        borderRadius: "5px",
                        textDecoration: "none",
                      }}
                    >
                      Call
                    </a>
                  )}
                </td>
                <td>{c.email}</td>
                <td>{c.company || "-"}</td>
                <td style={{ maxWidth: "300px" }}>
                  {c.message || "-"}
                </td>
                <td>
                  {new Date(c.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔹 PAGINATION */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() =>
            setPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
