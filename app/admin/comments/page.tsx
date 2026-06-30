import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic"; // important for fresh data

export default async function AdminCommentsPage() {
  const { db } = await connectToDatabase();

  const comments = await db
    .collection("comments")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <div style={{ padding: "30px" }}>
      <h2>📩 Contact Messages</h2>

      {comments.length === 0 && <p>No messages found.</p>}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={th}>Name</th>
            <th style={th}>Email</th>
            <th style={th}>Message</th>
            <th style={th}>Date</th>
          </tr>
        </thead>

        <tbody>
          {comments.map((item: any) => (
            <tr key={item._id.toString()}>
              <td style={td}>{item.name}</td>
              <td style={td}>{item.email}</td>
              <td style={td}>{item.message}</td>
              <td style={td}>
                {new Date(item.createdAt).toLocaleString("en-IN")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ===== Inline styles (simple admin UI) ===== */
const th = {
  border: "1px solid #ddd",
  padding: "10px",
  background: "#f4f4f4",
  textAlign: "left" as const,
};

const td = {
  border: "1px solid #ddd",
  padding: "10px",
};
