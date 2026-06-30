import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import GetStartedToday from "../Get-Started-Today/page";
import OurServiceTab from "../OurServiceTab/page";

/* ================= SEO META (SURAT TARGETED) ================= */
export const metadata: Metadata = {
  title: "AC Service & Installation in Surat | Expert AC Technicians",
  description:
    "Looking for AC service and installation in Surat? We provide expert AC fitting, repair, gas refilling and preventive maintenance for homes, offices, and local businesses across Surat.",
  keywords: [
    // Core
    "AC service in Surat",
    "AC installation in Surat",
    "AC repair Surat",
    "AC gas refilling Surat",
    "Split AC installation Surat",
    "Window AC service Surat",

    // Area-wise
    "AC service in Vesu",
    "AC service in Adajan",
    "AC service in Varachha",
    "AC service in Katargam",
    "AC service in City Light",
    "AC service in Pal",
    "AC service in Piplod",
    "AC service in Udhna",
    "AC installation in Althan",
    "AC technician in Bhatar",

    // Intent
    "Best AC service near me",
    "Emergency AC repair Surat",
    "Affordable AC installation Surat",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/services/ac-service-installation",
  },
  openGraph: {
    title: "AC Service & Installation in Surat",
    description:
      "Professional AC service and installation in Surat by experienced technicians. Fast, reliable, and affordable solutions.",
    url: "https://www.suryaelectrician.com/services/ac-service-installation",
    images: [
      {
        url: "/assets/images/services/service-details-img-6.jpg",
        width: 800,
        height: 450,
        alt: "AC service and installation in Surat",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
/* ================= END SEO ================= */

export default function ACServiceInstallationPage() {
  return (
    <>
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

            <h3>AC Service & Installation</h3>

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
                <li>AC Service & Installation</li>
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

            {/* LEFT CONTENT */}
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                <div className="service-details__img">
                  <Image
                    src="/assets/images/services/service-details-img-6.jpg"
                    alt="AC service and installation in Surat"
                    width={800}
                    height={450}
                  />
                </div>

                <h3 className="service-details__title-1">
                  AC Service & Installation in Surat
                </h3>

                <p className="service-details__text-1">
                  Get fast AC service and installation in Surat from certified technicians. We install and repair split AC, window AC, and inverter AC systems with clean wiring and proper mounting.
                </p>

                <p className="service-details__text-2">
                  Whether you need a new AC installed, gas refilled, or a preventive service, our local Surat electricians deliver safe cooling solutions with reliable performance and long lifespan.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>Split & window AC installation with clean wiring</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>AC gas refill, leak repair, and performance tuning</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>Preventive maintenance to extend AC life</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>Same-day emergency AC repair across Surat</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* SIDEBAR */}
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

      <CTA />
      <Footer />
    </>
  );
}
