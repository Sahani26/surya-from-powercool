import type { Metadata } from "next";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Archive | Electrical Safety Tips & Guides in Surat",
  description:
    "Explore electrician blog posts and electrical safety tips in Surat. Learn about wiring, repairs, AC service, and home electrical maintenance.",
  alternates: {
    canonical: "https://www.suryaelectrician.com/blog-list",
  },
};

export default function BlogListPage() {
  return (
    <>
      <Header />

      <section className="page-header">
        <div className="page-header__shape-1">
          <img src="/assets/images/shapes/page-header-shape-1.png" alt="Decorative page header shape" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <img src="/assets/images/resources/page-header-img-1.png" alt="Blog archive header" />
            </div>
            <h1>Blog Archive</h1>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Blog Archive</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-list">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-list__left">
                <div className="blog-list__content">
                  <h2>Latest Electrical Insights</h2>
                  <p>
                    Discover useful electrician tips, safety advice, and service updates for Surat homes and businesses. Our blog covers wiring, AC repair, maintenance, and smart electrical solutions.
                  </p>
                  <Link href="/blog" className="thm-btn">
                    View Blog Posts
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div className="sidebar__single sidebar__search">
                  <form action="#" className="sidebar__search-form">
                    <input type="search" placeholder="Search blog topics" />
                    <button type="submit">
                      <i className="icon-search-interface-symbol" />
                    </button>
                  </form>
                </div>
                <div className="sidebar__single sidebar__widget">
                  <h3 className="sidebar__title">Blog Categories</h3>
                  <ul className="sidebar__category-list list-unstyled">
                    <li>
                      <Link href="/blog">Electrical Safety</Link>
                    </li>
                    <li>
                      <Link href="/blog">Home Wiring</Link>
                    </li>
                    <li>
                      <Link href="/blog">AC Repair</Link>
                    </li>
                    <li>
                      <Link href="/blog">Maintenance Tips</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
