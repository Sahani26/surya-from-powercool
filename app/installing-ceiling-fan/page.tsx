
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
  title: "Ceiling Fan Installation Service in Surat | Safe, Fast Electrician",
  description:
    "Get professional ceiling fan installation in Surat from certified electricians. Fast, safe, and affordable ceiling fan fitting for homes, shops, and offices.",
  keywords: [
    "Ceiling fan installation in Surat",
    "Ceiling fan electrician Surat",
    "fan installation service Surat",
    "ceiling fan wiring Surat",
    "remote fan installation Surat",
    "hotel ceiling fan installation Surat",
    "office ceiling fan installation Surat",
    "home ceiling fan installation Surat",
    "same day ceiling fan installation Surat",
    "affordable ceiling fan installation Surat",
    "ceiling fan replacement Surat",
    "fan installation electrician Surat",
    "ceiling fan balancing service Surat",
    "electrical fan installation Surat",
    "Surat ceiling fan installer",
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
                  Our certified electricians install ceiling fans across Surat with secure mounting, proper wiring, and neat finishing. We handle new fan fitments, replacement installations, and complete electrical connection work for every room.
                </p>

                <p className="service-details__text-2">
                  From bedrooms and living rooms to shops and offices, we offer fast, affordable ceiling fan installation with safety checks, load balancing, and performance testing to ensure reliable, quiet operation.
                </p>

                <p className="service-details__text-2">
                  Book same-day ceiling fan installation in Surat and get expert support for remote control setup, energy-efficient fan upgrades, and clean electrical panel connections.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Professional ceiling fan installation and wiring</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Balanced mounting for quiet, wobble-free operation</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Switchboard connection, remote setup, and safety earthing</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Residential and commercial fan installation across Surat</p>
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
