
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import GetStartedToday from "../Get-Started-Today/page";
import OurServiceTab from "../OurServiceTab/page";

/* ================= SEO META ================= */
export const metadata: Metadata = {
  title: "Ceiling Fan Installation in Surat | Professional Electrician Service",
  description:
    "Looking for ceiling fan installation in Surat? Our expert electricians provide safe, fast, and affordable ceiling fan fitting services across all areas of Surat.",
  keywords: [
    // Core Service
    "Ceiling fan installation in Surat",
    "Electrician in Surat",
    "Ceiling fan fitting service",
    "Home electrician Surat",
    "Fan installation near me",

    // Popular Surat Areas
    "Ceiling fan installation in Vesu",
    "Ceiling fan installation in Adajan",
    "Ceiling fan installation in Katargam",
    "Ceiling fan installation in Varachha",
    "Ceiling fan installation in City Light",
    "Ceiling fan installation in Pal",
    "Ceiling fan installation in Piplod",
    "Ceiling fan installation in Udhna",
    "Ceiling fan installation in Althan",
    "Ceiling fan installation in Bhatar",

    // Electrician Keywords by Area
    "Electrician in Vesu Surat",
    "Electrician in Adajan Surat",
    "Electrician in Varachha Surat",
    "Electrician in Katargam Surat",
    "Electrician in City Light Surat",
    "Electrician in Pal Surat",
    "Electrician in Piplod Surat",
    "Electrician in Udhna Surat",

    // Intent Based (High Conversion)
    "Best electrician for ceiling fan installation Surat",
    "Affordable ceiling fan installation Surat",
    "Professional electrician Surat",
    "Same day fan installation Surat",
    "Residential ceiling fan installation Surat",
  ],

  alternates: {
    canonical: "https://www.suryaelectrician.com/services/installing-ceiling-fan",
  },
  openGraph: {
    title: "Ceiling Fan Installation in Surat | Expert Electricians",
    description:
      "Professional ceiling fan installation services in Surat by experienced electricians. Safe wiring, quick installation, and affordable pricing.",
    url: "https://www.suryaelectrician.com/services/installing-ceiling-fan",
    siteName: "suryaelectrician",
    images: [
      {
        url: "/assets/images/services/service-details-img-4.jpg",
        width: 800,
        height: 450,
        alt: "Ceiling Fan Installation Service in Surat",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceiling Fan Installation in Surat",
    description:
      "Hire professional electricians for ceiling fan installation in Surat. Trusted, affordable & fast service.",
    images: ["/assets/images/services/service-details-img-4.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
/* ================= END SEO ================= */

export default function InstallingCeilingFanPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image
            src="/assets/images/shapes/page-header-shape-1.png"
            alt=""
            width={500}
            height={300}
          />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image
                src="/assets/images/resources/page-header-img-1.png"
                alt=""
                width={300}
                height={300}
              />
            </div>

            <h3>Installing a ceiling fan</h3>

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
                <li>Installing a ceiling fan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Service Details Start */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                <div className="service-details__img">
                  <Image
                    src="/assets/images/services/service-details-img-4.jpg"
                    alt="Ceiling fan installation service in Surat"
                    width={800}
                    height={450}
                  />
                </div>

                <h3 className="service-details__title-1">
                  Installing a ceiling fan
                </h3>

                <p className="service-details__text-1">
                  Our electricians install ceiling fans safely and securely, including mounting, wiring, and switchboard connections. We handle all fan types and ensure the job is completed with clean finishing.
                </p>

                <p className="service-details__text-2">
                  Whether you need a new ceiling fan installed or an old unit replaced, we provide fast and affordable service across Surat with proper balance, wiring checks, and performance testing.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Safe ceiling fan mounting and wiring</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Balanced installation for quiet operation</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Switchboard setup and remote control installation</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Residential and commercial fan services</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div className="service-details__sidebar">
                <OurServiceTab />
                <GetStartedToday />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details End */}

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
}
