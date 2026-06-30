
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
  title: "Electrical Maintenance Service in Surat | Home & Office Electrician",
  description:
    "Professional electrical maintenance service in Surat for homes, offices, and commercial properties. Regular inspection, repairs, and preventive maintenance by expert electricians.",
  keywords: [
    // Core
    "Electrical maintenance service in Surat",
    "Electrician maintenance Surat",
    "Home electrical maintenance Surat",
    "Commercial electrical maintenance Surat",

    // Area-wise Surat
    "Electrical maintenance in Vesu Surat",
    "Electrical maintenance in Adajan Surat",
    "Electrical maintenance in Varachha Surat",
    "Electrical maintenance in Katargam Surat",
    "Electrical maintenance in City Light Surat",
    "Electrical maintenance in Pal Surat",
    "Electrical maintenance in Piplod Surat",
    "Electrical maintenance in Udhna Surat",
    "Electrical maintenance in Althan Surat",
    "Electrical maintenance in Bhatar Surat",

    // High intent
    "Annual electrical maintenance Surat",
    "Preventive electrical maintenance Surat",
    "Electrical AMC service Surat",
    "Maintenance electrician near me",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/services/maintenance-service",
  },
  openGraph: {
    title: "Electrical Maintenance Service in Surat",
    description:
      "Reliable electrical maintenance services in Surat. Ensure safety, performance, and long life of your electrical systems.",
    url: "https://www.suryaelectrician.com/services/maintenance-service",
    images: [
      {
        url: "/assets/images/services/service-details-img-2.jpg",
        width: 800,
        height: 450,
        alt: "Electrical maintenance service in Surat",
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

export default function MaintenanceServicePage() {
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

            <h3>Maintenance Service</h3>

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
                <li>Maintenance Service</li>
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
                    src="/assets/images/services/service-details-img-2.jpg"
                    alt="Electrical maintenance service for home and office in Surat"
                    width={800}
                    height={450}
                  />
                </div>

                <h3 className="service-details__title-1">
                  Maintenance Service
                </h3>

                <p className="service-details__text-1">
                  Our electrical maintenance service in Surat helps keep your home
                  and workplace safe, efficient, and trouble-free. We handle routine
                  inspections, fault detection, and timely repairs to prevent problems.
                </p>

                <p className="service-details__text-2">
                  From preventive maintenance to emergency electrical fixes, our
                  experienced electricians ensure reliable performance and long-term
                  safety for every electrical system.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  {[
                    "Regular electrical inspection and safety checks",
                    "Preventive maintenance to avoid breakdowns",
                    "Quick fault detection and repair",
                    "Residential and commercial maintenance support",
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
                            alt="Professional electrical maintenance work"
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
                              Quality Maintenance
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Skilled electricians delivering safe and reliable
                            electrical maintenance services.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image
                            src="/assets/images/services/service-details-img-box-img-2.jpg"
                            alt="Customer satisfaction guaranteed for maintenance service"
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
                            Trusted maintenance solutions with complete customer
                            satisfaction.
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
