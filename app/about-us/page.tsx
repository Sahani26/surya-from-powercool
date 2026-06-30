import Image from "next/image";
import Link from "next/link";

import shape1 from "@/public/assets/images/shapes/about-one-shape-1.png";
import pageheader from "@/public/assets/images/resources/page-header-img-1.png";

import About from "@/public/components/About";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";

/* =========================
   SEO METADATA
========================= */
export const metadata = {
  title: "About Us – Trusted Electrician Services in Surat | surya electrician",
  description:
    "Learn about our professional electrician services in Surat. We provide safe, affordable, and reliable home and commercial electrical solutions.",
  keywords: [
    "about electrician company",
    "electrician in Surat",
    "home electrical services",
    "commercial electrician",
    "emergency electrician",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/about-us",
  },
  openGraph: {
    title: "About Us – Professional Electricians in Surat",
    description:
      "Trusted electrician company in Surat offering residential and commercial electrical services.",
    url: "https://www.suryaelectrician.com/about-us",
    siteName: "surya electrician",
    images: [
      {
        url: "https://www.suryaelectrician.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Professional electrician company in Surat",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   PAGE COMPONENT
========================= */
export default async function Page() {
  return (
    <>
      <Header />

      {/* =========================
          PAGE HEADER
      ========================= */}
      <div className="page-wrapper">
        <section className="page-header">
          <div className="page-header__shape-1">
            <Image
              src={shape1}
              alt="Decorative background shape for About Us page"
              priority
            />
          </div>

          <div className="container">
            <div className="page-header__inner">
              <div className="page-header__img-1">
                <Image
                  src={pageheader}
                  alt="Professional electrician team working on electrical panel"
                  width={1200}
                  height={400}
                  priority
                />
              </div>

              {/* ✅ SEO RULE: ONE H1 */}
              <h1>About Our Electrician Company in Surat</h1>

              {/* =========================
                  BREADCRUMB (UI)
              ========================= */}
              <div className="thm-breadcrumb__inner">
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <span className="icon-angle-right"></span>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================
          ABOUT CONTENT
      ========================= */}
      <About />

      {/* =========================
          CTA & FOOTER
      ========================= */}
      <CTA />
      <Footer />

      {/* =========================
          SCHEMA: ORGANIZATION
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "surya electrician",
            url: "https://www.suryaelectrician.com",
            areaServed: "Surat",
            serviceType: "Electrician Services",
          }),
        }}
      />

      {/* =========================
          SCHEMA: BREADCRUMB
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.suryaelectrician.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About Us",
                item: "https://www.suryaelectrician.com/about",
              },
            ],
          }),
        }}
      />
    </>
  );
}
