

// // app/blog/[slug]/page.tsx
export const revalidate = 43200;

import React from "react";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
import Header from "@/public/components/Header";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import type { Metadata } from "next";
import Image from "next/image";
import shap1 from "@/public/assets/images/shapes/about-one-shape-1.png";
import pageheaderimg1 from "@/public/assets/images/resources/page-header-img-1.png";
import blogdetailsimg from "@/public/assets/images/blog/blog-details-img-box-img-1.jpg";
import blogdetailsimg2 from "@/public/assets/images/blog/blog-details-img-box-img-2.jpg";
import user from "@/public/assets/images/user/user.png";
import Link from "next/link";
import CommentForm from "@/public/components/CommentForm";
import NotFoundPage from "@/app/404/page";

type ParamsShape = { slug: string };

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatDayMonth(iso?: string) {
  if (!iso) return { day: "00", month: "Mon" };
  const d = new Date(iso);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleString("en-US", { month: "short" }),
  };
}

/* ================= SEO METADATA ================= */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams =
    params && typeof params.then === "function" ? await params : params;

  const slug = resolvedParams?.slug;
  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.suryaelectrician.com";

  if (!slug) {
    return {
      title: "Blog Not Found",
      description: "This blog post does not exist.",
      robots: { index: false },
    };
  }

  const { db } = await connectToDatabase();
  const blog = await db.collection("blogs").findOne({ slug });

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog post does not exist.",
      robots: { index: false, follow: false },
    };
  }

  const cleanText = blog.content
    ?.replace(/<[^>]+>/g, "")
    .slice(0, 155);

  const url = `${SITE_URL}/blog/${blog.slug}`;
  const image =
    blog.image?.startsWith("http")
      ? blog.image
      : `${SITE_URL}${blog.image || "/assets/images/blog/blog-details-img-1.jpg"}`;

  return {
    title: `${blog.title} | Trusted Residential Electrician`,
    description: cleanText,
    keywords: blog.tags?.join(", "),
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title: blog.title,
      description: cleanText,
      url,
      type: "article",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: cleanText,
      images: [image],
    },
  };
}

/* ================= PAGE ================= */
export default async function Page({
  params,
}: {
  params: Promise<ParamsShape> | ParamsShape;
}) {
  const resolvedParams =
    params && typeof (params as any).then === "function"
      ? await (params as Promise<ParamsShape>)
      : (params as ParamsShape);

  const slug = String(resolvedParams?.slug || "");
  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.suryaelectrician.com";

  if (!slug) return <NotFoundPage />;

  try {
    const { db } = await connectToDatabase();
    const col = db.collection("blogs");

    const blog =
      (await col.findOne({ slug })) ||
      (await col.findOne({ slug: slug.trim() })) ||
      (await col.findOne({
        slug: { $regex: new RegExp(`^${escapeRegExp(slug)}$`, "i") },
      })) ||
      (ObjectId.isValid(slug)
        ? await col.findOne({ _id: new ObjectId(slug) })
        : null);

    if (!blog) return <NotFoundPage />;

    const latestPosts = await col
      .find({ slug: { $ne: slug } })
      .sort({ createdAt: -1 })
      .limit(3)
      .project({ title: 1, slug: 1, image: 1, createdAt: 1 })
      .toArray();

    const {
      title = "Untitled",
      author = "Admin",
      content = "",
      image,
      createdAt,
      quote = "",
      subTitle = "",
      subContent = "",
    } = blog;

    const mainImage =
      image || "/assets/images/blog/blog-details-img-1.jpg";

    const { day, month } = formatDayMonth(createdAt);

    return (
      <>
        <Header />

        {/* BlogPosting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${slug}`,
              },
              headline: title,
              description: content.replace(/<[^>]+>/g, "").slice(0, 155),
              image: `${SITE_URL}${mainImage}`,
              author: {
                "@type": "Organization",
                name: "Home Electrical Services",
              },
              datePublished: new Date(createdAt).toISOString(),
              dateModified: new Date(createdAt).toISOString(),
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${SITE_URL}/blog`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: title,
                  item: `${SITE_URL}/blog/${slug}`,
                },
              ],
            }),
          }}
        />

        <>
          {/*Page Header Start*/}
          <section className="page-header">
            <div className="page-header__shape-1">
              <Image src={shap1} alt="" />

            </div>
            <div className="container">
              <div className="page-header__inner">
                <div className="page-header__img-1">
                  <Image src={pageheaderimg1} alt="" />
                </div>
                <h1>Blog Details</h1>
                <div className="thm-breadcrumb__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span className="icon-angle-right" />
                    </li>
                    <li>Blog Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Page Header End*/}

          {/*Blog Details Start*/}
          <article className="blog-details">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7">
                  <div className="blog-details__left">
                    <div className="blog-details__img">
                      <img src={blog.image} alt={blog.title} />
                      <div className="blog-details__date">
                        <p>
                          {day}
                          <br />
                          {month}
                        </p>
                      </div>
                    </div>
                    <div className="blog-details__content">
                      <div className="blog-details__user-and-meta">
                        <div className="blog-details__user">
                          <p>
                            <span className="icon-user" />
                            By {author}
                          </p>
                        </div>
                        <ul className="blog-details__meta list-unstyled">
                          <li>
                            <Link href="#">
                              <span className="icon-speech-bubbles" />
                              Comments (05)
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span className="icon-clock" />
                              4 Min Read
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <h3 className="blog-details__title">{title}</h3>

                      {/* blog content (HTML) — sanitize before using in production */}
                      <div
                        className="blog-details__text-1"
                        dangerouslySetInnerHTML={{ __html: content }}
                      />

                      {/* If you want to split content into paragraphs like original, you can */}
                      <div className="blog-details__author-box">
                        <h4 className="blog-details__author-text">
                          {quote}
                        </h4>
                        <p className="blog-details__author-name">
                          #User23EC<span> Register</span>
                        </p>
                      </div>

                      <h3 className="blog-details__title-2">
                        {subTitle}
                      </h3>

                      <p className="blog-details__text-3">
                        {subContent}
                      </p>

                      <div className="blog-details__img-box">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="blog-details__img-box-img">
                              <Image src={blogdetailsimg} alt={blog.slug} />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="blog-details__img-box-img">
                              <Image src={blogdetailsimg2} alt={blog.slug} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 
                      <div className="blog-details__tag-and-share">
                        <div className="blog-details__tag">
                          <h3 className="blog-details__tag-title">Tags :</h3>
                          <ul className="blog-details__tag-list list-unstyled">
                            <li>
                              <Link href="#">Analysis</Link>
                            </li>
                            <li>
                              <Link href="#">Planning</Link>
                            </li>
                            <li>
                              <Link href="#">Management</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="blog-details__share-box">
                          <h3 className="blog-details__share-title">Share :</h3>
                          <div className="blog-details__share">
                            <Link href="#">
                              <span className="icon-facebook" />
                            </Link>
                            <Link href="#">
                              <span className="icon-xpa" />
                            </Link>
                            <Link href="#">
                              <span className="icon-link-in" />
                            </Link>
                            <Link href="#">
                              <span className="icon-instagram" />
                            </Link>
                          </div>
                        </div>
                      </div> */}

                      <div className="blog-details__tag">
                        <h3 className="blog-details__tag-title">Tags :</h3>

                        <ul className="blog-details__tag-list list-unstyled">
                          {Array.isArray(blog.tags) && blog.tags.length > 0 ? (
                            blog.tags.slice(0, 4).map((tag: string, index: number) => (
                              <li key={index}>
                                <Link href="/blog">
                                  {tag}
                                </Link>
                                {/* <Link href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                                  {tag}
                                </Link> */}
                              </li>
                            ))
                          ) : (
                            <li>No Tags</li>
                          )}
                        </ul>
                      </div>


                      {/* Comments (static example) */}
                      <div className="comment-one">
                        <div className="comment-one__single">
                          <div className="comment-one__image">
                            <img
                              src="/assets/images/blog/comment-1-1.jpg"
                              alt="Comment author Akshat Dalal profile photo"
                            />
                          </div>
                          <div className="comment-one__content">
                            <h3>Akshat Dalal</h3>
                            <span>02 June 2024 at 03:30 pm</span>
                            <p>
                              The wise man therefore always holds in these matters
                              to this principle of selection. He rejects pleasures
                              to secure other greater pleasures...
                            </p>
                            <div className="comment-one__btn-box">
                              <Link href="#" className="comment-one__btn">
                                <span className="icon-share-alt" />
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="comment-one__single">
                          <div className="comment-one__image">
                            <img
                              src="/assets/images/blog/comment-1-2.jpg"
                              alt="Comment author Kevin Rana profile photo"
                            />
                          </div>
                          <div className="comment-one__content">
                            <h3>Kevin Rana</h3>
                            <span>02 June 2024 at 03:30 pm</span>
                            <p>
                              The wise man therefore always holds in these matters
                              to this principle of selection. He rejects pleasures
                              to secure other greater pleasures...
                            </p>
                            <div className="comment-one__btn-box">
                              <Link href="#" className="comment-one__btn">
                                <span className="icon-share-alt" />
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CommentForm />
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="col-xl-4 col-lg-5">
                  <div className="sidebar">
                    <div className="sidebar__single sidebar__search">
                      <form action="#" className="sidebar__search-form">
                        <input type="search" placeholder="Search here" />
                        <button type="submit">
                          <i className="icon-search-interface-symbol" />
                        </button>
                      </form>
                    </div>

                    <div className="sidebar__single sidebar__all-category">
                      <h3 className="sidebar__title">Categories</h3>
                      <ul className="sidebar__all-category-list list-unstyled">
                        <li>
                          <Link href="#">
                            Industrial service<span>(04)</span>
                          </Link>
                        </li>
                        <li className="active">
                          <Link href="#">
                            residential service<span>(06)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Commercial services<span>(02)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            power solution<span>(04)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            upgrade old wiring<span>(07)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="sidebar__single sidebar__post">
                      <h3 className="sidebar__title">Our Latest Post</h3>
                      <ul className="sidebar__post-list list-unstyled">
                        {latestPosts.map((post: any) => (
                          <li key={post.slug}>
                            <div className="sidebar__post-image">
                              {/* <img
                                src={post.image || "/assets/images/blog/blog-details-img-1.jpg"}
                                alt={post.title}
                              /> */}
                              <div className="user-icon">
                                <Image src={user} alt={post.title} />
                              </div>
                            </div>
                            <div className="sidebar__post-content">
                              <p className="sidebar__post-date">
                                {new Date(post.createdAt).toLocaleDateString("en-US", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </p>
                              <h3>
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                              </h3>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>


                    <div className="sidebar__single sidebar__tags">
                      <h3 className="sidebar__title">Popular Tags</h3>
                      <div className="sidebar__tags-list">
                        <Link href="/services/electrician-in-surat">Electrician in Surat</Link>
                        <Link href="#">AC Repair Surat</Link>
                        <Link href="/services/services">Home Electrical Services</Link>
                        <Link href="#">AC Installation</Link>
                        <Link href="#">24x7 Electrician</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end sidebar */}
              </div>
            </div>
          </article>
          {/*Blog Details End*/}
        </>
        <CTA />
        <Footer />
      </>
    );
  } catch (err) {
    console.error(err);
    return <NotFoundPage />;
  }
}
