"use client";

import Head from "next/head";
import Image from "next/image";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
import TeamDetails from "@/public/components/Testimonials";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>Customer Testimonials | Trusted Electrician Services in Surat</title>
        <meta
          name="description"
          content="Read genuine customer testimonials for our electrician services in Surat. Trusted by homeowners and businesses for reliable electrical work."
        />
        <meta
          name="keywords"
          content="Electrician testimonials Surat, customer reviews electrician Surat, trusted electrician Surat, best electrician Surat, electrical service reviews Surat"
        />
        <link
          rel="canonical"
          href="https://www.suryaelectrician.com/testimonials"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Customer Testimonials | Electrician in Surat" />
        <meta
          property="og:description"
          content="See what our happy customers say about our professional electrician services in Surat."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.suryaelectrician.com/testimonials" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>
      {/* ================= END SEO ================= */}

      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="Decorative page header shape" />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="Testimonials page header" />
            </div>

            <h3>Testimonials</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Testimonials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* ⭐ Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="text-center mb-4">Our Happy Clients</h2>

          <p className="text-center">
            Real reviews from customers across Surat who trust our electrician services.
          </p>
        </div>
      </section>

      <TeamDetails />
      <CTA />
      <Footer />
    </>
  );
}
