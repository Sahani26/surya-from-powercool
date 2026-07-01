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
  title: "Lighting & Fixtures Installation in Surat | Expert Electricians",
  description:
    "Professional lighting and fixtures installation in Surat. We install LED lights, wall lights, ceiling lights, chandeliers, and decorative fixtures with safe wiring.",
keywords: [
  // Core Service
  "Lighting installation in Surat",
  "Lighting and fixtures electrician Surat",
  "Light fitting service in Surat",
  "Home lighting electrician Surat",

  // Area-wise Lighting Installation
  "Lighting installation in Vesu Surat",
  "Lighting installation in Adajan Surat",
  "Lighting installation in Varachha Surat",
  "Lighting installation in Katargam Surat",
  "Lighting installation in City Light Surat",
  "Lighting installation in Pal Surat",
  "Lighting installation in Piplod Surat",
  "Lighting installation in Udhna Surat",
  "Lighting installation in Althan Surat",
  "Lighting installation in Bhatar Surat",

  // Electrician Area-wise
  "Electrician for lighting in Vesu",
  "Electrician for lighting in Adajan",
  "Electrician for lighting in Varachha",
  "Electrician for lighting in Katargam",
  "Electrician for lighting in City Light",
  "Electrician for lighting in Pal",

  // High-intent (conversion)
  "LED light installation Surat",
  "Chandelier installation Surat",
  "Decorative light installation Surat",
  "Lighting fixtures installation near me",
],

  alternates: {
    canonical: "https://www.suryaelectrician.com/services/lighting-fixtures",
  },
  openGraph: {
    title: "Lighting & Fixtures Installation in Surat",
    description:
      "Expert electricians for lighting and fixture installation in Surat. Safe wiring, modern fittings, and affordable pricing.",
    url: "https://www.suryaelectrician.com/services/lighting-fixtures",
    images: [
      {
        url: "/assets/images/services/service-details-img-3.jpg",
        width: 800,
        height: 450,
        alt: "Lighting and fixtures installation service in Surat",
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

export default function LightingFixturesPage() {
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

            <h3>Lighting & Fixtures</h3>

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
                <li>Lighting & Fixtures</li>
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
                    src="/assets/images/services/service-details-img-3.jpg"
                    alt="Lighting and fixtures installation service in Surat"
                    width={800}
                    height={450}
                  />
                </div>

                <h3 className="service-details__title-1">
                  Lighting & Fixtures Installation
                </h3>

                <p className="service-details__text-1">
                  We provide professional lighting and fixtures installation services
                  in Surat for homes, offices, shops, and commercial spaces. Our
                  certified electricians ensure safe wiring and perfect finishing.
                </p>

                <p className="service-details__text-2">
                  Whether you need LED lights, decorative fixtures, wall lights,
                  ceiling lights, or chandeliers installed, we deliver reliable and
                  affordable solutions with complete safety.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  {[
                    "LED, ceiling, wall, and decorative light installation",
                    "Safe wiring and proper load management",
                    "Modern fixture fitting with clean finishing",
                    "Residential and commercial lighting solutions",
                  ].map((text, index) => (
                    <li key={index}>
                      <div className="icon">
                        <span className="icon-arrow-right"></span>
                      </div>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>

                <div className="service-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image
                            src="/assets/images/services/service-details-img-box-img-1.jpg"
                            alt="Professional lighting installation work"
                            width={400}
                            height={250}
                          />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-lamp"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              Quality Installation
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            High-quality lighting installation with attention to
                            safety, alignment, and long-lasting performance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image
                            src="/assets/images/services/service-details-img-box-img-2.jpg"
                            alt="Customer satisfaction guaranteed for lighting service"
                            width={400}
                            height={250}
                          />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-chirger"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              100% Satisfaction
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            We ensure complete customer satisfaction with reliable
                            service and professional workmanship.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
