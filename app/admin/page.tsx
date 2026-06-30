

 "use client";

import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import "@/public/assets/css/admin-dashboard.css";

export default function AdminDashboardPage() {
  const cards = [
    {
      title: "Show Call Request",
      desc: "customer form submit for call back",
      path: "/admin/contacts",
      type: "internal",
    },
    {
      title: "blog comments",
      desc: "customer form submit comments",
      path: "/admin/comments",
      type: "internal",
    },
    {
      title: "Add Blog",
      desc: "Create a new blog post manual",
      path: "/admin/add-blog",
      type: "internal",
    },
    {
      title: "Manage Blogs",
      desc: "Edit / Delete existing blogs",
      path: "/admin/allblog",
      type: "internal",
    },
    {
      title: "Openrouter",
      desc: "Manually trigger AI blog generation",
      path: "/api/cron/auto-generate-blogs?secret=sunil2026",
      type: "external",
    },
    {
      title: "Openrouter local",
      desc: "Manually trigger AI blog generation",
      path: "/api/cron/auto-generate-local-blog?secret=sunil2026",
      type: "external",
    },
    {
      title: "Gemini local",
      desc: "Manually trigger AI blog generation",
      path: "/api/cron/auto-generate-local-blog-gemini?secret=sunil2026",
      type: "external",
    },
    {
      title: "Gemini",
      desc: "Manually trigger AI blog generation",
      path: "/api/cron/auto-generate-blog-gemini?secret=sunil2026",
      type: "external",
    },
    {
      title: "View Sitemap XML",
      desc: "Live sitemap.xml",
      path: "/sitemap.xml",
      type: "external",
    },
    {
      title: "Sitemap Manager",
      desc: "Manage & detect duplicate URLs",
      path: "/admin/sitemap",
      type: "internal",
    },
    {
      title: "Test Site",
      desc: "Preview test deployment",
      path: "https://theme-test-git-test-site-sahani26s-projects.vercel.app/",
      type: "external",
    },
  ];

  const handleCardClick = (card: any) => {
    if (card.type === "internal") {
      window.location.href = card.path;
    } else {
      window.open(card.path, "_blank");
    }
  };

  const handleLogout = async () => {
    if (!confirm("Do you want to logout?")) return;

    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <>
      <Header />

      {/* 🔐 Logout Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px 20px",
        }}
      >
        <button
          onClick={handleLogout}
          className="btn btn-danger"
        >
          Logout
        </button>
      </div>

      <div className="admin-dashboard">
        <h1 className="admin-title">⚙️ Admin Dashboard</h1>

        <div className="admin-grid">
          {cards.map((card) => (
            <div
              key={card.title}
              className="admin-card"
              onClick={() => handleCardClick(card)}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CTA />
      <Footer />
    </>
  );
}
