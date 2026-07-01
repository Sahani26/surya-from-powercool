

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import AreasWeServe from "../components/AreasWeServe";

// Images (same as other pages)
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import GetStartedToday from "@/app/Get-Started-Today/page"; 
import OurServiceTab from "@/app/OurServiceTab/page";

/* ================= SEO META ================= */
export const metadata: Metadata = {
  title: "Electrician Services in Surat | Areas We Serve",
  description:
    "We provide professional electrician services across all major areas of Surat including Vesu, Adajan, Varachha, Katargam, City Light, Pal, Piplod, and nearby locations.",
  keywords: [
    "Electrician services in Surat",
    "Electrician near me Surat",
    "Electrician in Vesu",
    "Electrician in Adajan",
    "Electrician in Varachha",
    "Electrician in Katargam",
    "Electrician in City Light",
    "Electrician in Pal Surat",
    "Electrician in Piplod Surat",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/services/areas-we-serve",
  },
  robots: {
    index: true,
    follow: true,
  },
};
/* ================= END SEO ================= */

export default function AreasPage() {
  return (
    <>
      <Header />

      {/* Page Header Start (DEFAULT UI) */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="Page header shape" />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="Areas we serve header" />
            </div>

            <h3>Areas We Serve</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Areas We Serve</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Content Start */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">

              {/* 🔥 DEFAULT CONTENT SECTION */}
              <AreasWeServe />

            </div>
            <div className="col-xl-4 col-lg-5">
                  <OurServiceTab />
              <GetStartedToday />
          
            </div>

          </div>
        </div>
      </section>
      {/* Content End */}

      <CTA />
      <Footer />

      {/* ================= FAQ SCHEMA (SEO BOOST) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which areas do you serve in Surat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "We provide electrician services across all major areas of Surat including Vesu, Adajan, Varachha, Katargam, City Light, Pal, Piplod, and nearby locations.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you provide electrician service near me?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, our electricians are available near you anywhere in Surat with fast response.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you offer emergency electrician services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, we offer emergency electrician services across Surat for urgent electrical issues.",
                },
              },
            ],
          }),
        }}
      />
      {/* ================= END FAQ SCHEMA ================= */}
    </>
  );
}
