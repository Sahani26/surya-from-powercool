

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Head from "next/head";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import PageLoader from "@/public/components/PageLoader";


interface Blog {
  _id: string;
  title: string;
  slug: string;
  author?: string;
  image?: string;
  createdAt?: string;
}

const delays = [100, 300, 600, 900, 1200, 1500];

function formatDayMonth(iso?: string) {
  if (!iso) return { day: "", month: "" };
  const d = new Date(iso);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleString("en-US", { month: "short" }),
  };
}
/* ================= PAGE ================= */
export default function Page() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [loadCount, setLoadCount] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const fallbackImages = [
    "/assets/images/blog/blog-1-1.jpg",
    "/assets/images/blog/blog-1-2.jpg",
    "/assets/images/blog/blog-1-3.jpg",
    "/assets/images/blog/blog-1-4.jpg",
    "/assets/images/blog/blog-1-5.jpg",
    "/assets/images/blog/blog-1-6.jpg",
  ];

  /* ================= FETCH BLOGS ================= */
  const loadBlogs = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/blogs?page=${page}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }

      const data = await res.json();

      setBlogs((prev) => {
        const ids = new Set(prev.map((b) => b._id));
        const unique = data.blogs.filter(
          (b: Blog) => !ids.has(b._id)
        );
        return [...prev, ...unique];
      });

      setHasMore(data.hasMore);
      setPage((p) => p + 1);
      setLoadCount((c) => c + 1);
    } finally {
      setLoading(false);
    }
  };

  /* ================= FIRST LOAD ================= */
  useEffect(() => {
    loadBlogs();
  }, []);

  /* ================= INFINITE SCROLL ================= */
  useEffect(() => {
    if (!loaderRef.current || !hasMore || !scrollEnabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && scrollEnabled) {
          loadBlogs();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading, scrollEnabled]);

  /* ================= STOP AFTER 4 LOADS ================= */
  useEffect(() => {
    if (loadCount >= 4) {
      setScrollEnabled(false);
    }
  }, [loadCount]);

  /* ================= CLICK HANDLER ================= */
  const handleBlogClick = (slug: string) => {
    setShowLoader(true);
    router.push(`/blog/${slug}`);
  };


  const getSkeletonCount = () => {
    if (typeof window === "undefined") return 6;
    return window.innerWidth < 768 ? 1 : 6;
  };

  return (
    <>
      {/* ================= SEO META ================= */}
      <Head>
        <title>
          Electrical Blogs, Safety Tips & Wiring Guides | radhyelectrician
        </title>
        <meta
          name="description"
          content="Read expert electrician blogs on electrical safety, home wiring, AC repair, and power solutions in Surat."
        />
        <link
          rel="canonical"
          href="https://www.radhyelectrician.com/blog"
        />
      </Head>

      {/* ================= PAGE LOADER ================= */}
      <PageLoader show={showLoader} />

      <Header />

      {/* ✅ SEO H1 (HIDDEN – NO UI CHANGE) */}
      <h1 className="sr-only">
        Electrical Blogs, Safety Tips & Wiring Guides
      </h1>

      <section className="blog-page">
        <div className="container">
          <div className="row">
            {blogs.map((b, i) => {
              const { day, month } = formatDayMonth(b.createdAt);
              const img =
                b.image ?? fallbackImages[i % fallbackImages.length];
              const delay = delays[i % delays.length];

              return (
                <div
                  key={b._id}
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay={`${delay}ms`}
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img-box">
                      <div
                        className="blog-one__img"
                        onClick={() => handleBlogClick(b.slug)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={img}
                          alt={`${b.title} – Electrical safety & wiring guide`}
                          loading="lazy"
                        />
                        <img
                          src={img}
                          alt={`${b.title} – Electrical safety & wiring guide`}
                          loading="lazy"
                        />
                        <Link
                          href={`/blog/${b.slug}`}
                          className="blog-one__link"
                        >
                          <span className="sr-only">
                            Read {b.title}
                          </span>
                        </Link>
                      </div>

                      <div className="blog-one__date">
                        <p>
                          {day}
                          <br />
                          {month}
                        </p>
                      </div>
                    </div>

                    <div className="blog-one__content">
                      <div className="blog-one__user">
                        <p>
                          <span className="icon-user" />
                          By {b.author ?? "Certified Electrician"}
                          <Link
                            href="/about-us"
                            aria-label="About author"
                          />
                        </p>
                      </div>

                      <h3 className="blog-one__title">
                        {/* <Link href={`/blog/${b.slug}`}>
                          {b.title}
                        </Link> */}
                         <button
                          className="link-reset blog-load"
                          onClick={() => handleBlogClick(b.slug)}
                        >
                          {b.title}
                        </button>
                      </h3>

                      {/* <Link
                        href={`/blog/${b.slug}`}
                        className="blog-one__learn-more"
                      >
                        Learn More
                        <span className="icon-arrow-right" />
                      </Link> */}
                        <button
                        className="blog-one__learn-more blog-load" 
                        onClick={() => handleBlogClick(b.slug)}
                      >
                        Learn More
                        <span className="icon-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 🔥 SKELETON LOADING */}
          {loading && (
            <div className="row mt-4">
              {[...Array(getSkeletonCount())].map((_, i) => (
                <div
                  key={i}
                  className="col-xl-4 col-lg-4 col-md-6"
                >
                  <div className="blog-skeleton">
                    <div className="skeleton-img"></div>
                    <div className="skeleton-text short"></div>
                    <div className="skeleton-text"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 🔥 LOAD MORE BUTTON */}
          {!scrollEnabled && hasMore && (
            <div className="text-center mt-5">
              <button
                className="thm-btn"
                onClick={() => {
                  setScrollEnabled(true);
                  setLoadCount(0);
                }}
              >
                Load More
              </button>
            </div>
          )}

          {/* 🔥 OBSERVER TARGET */}
          {hasMore && <div ref={loaderRef} style={{ height: 1 }} />}

          {/* ✅ SEO PAGINATION (HIDDEN) */}
          {hasMore && (
            <Link href={`/blog?page=${page}`} className="sr-only">
              Next Page
            </Link>
          )}
        </div>
      </section>

      <CTA />
      <Footer />

      {/* ✅ BLOG LIST SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Electrical Tips & Guides Blog",
            url: "https://www.radhyelectrician.com/blog",
          }),
        }}
      />
    </>
  );
}
