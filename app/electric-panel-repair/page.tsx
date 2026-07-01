import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import serviceImg from "@/public/assets/images/services/service-details-img-5.jpg";
import serviceBoxImg1 from "@/public/assets/images/services/service-details-img-box-img-1.jpg";
import serviceBoxImg2 from "@/public/assets/images/services/service-details-img-box-img-2.jpg";

import GetStartedToday from "../Get-Started-Today/page";
import OurServiceTab from "../OurServiceTab/page";

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title:
    "Electric Panel Repair in Surat | Licensed Electrical Panel Electricians",
  description:
    "Need electric panel repair in Surat? Our licensed electricians provide safe and reliable electrical panel repair, upgrades, and troubleshooting for homes and businesses.",
  keywords: [
    "electric panel repair Surat",
    "electrical panel replacement Surat",
    "breaker panel repair Surat",
    "licensed electrician Surat",
  ],
  alternates: {
    canonical:
      "https://www.suryaelectrician.com/services/electric-panel-repair",
  },
  openGraph: {
    title: "Electric Panel Repair in Surat | Surya Electrician",
    description:
      "Professional electrical panel repair and troubleshooting services in Surat.",
    url: "https://www.suryaelectrician.com/services/electric-panel-repair",
    siteName: "Surya Electrician",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ElectricPanelRepair() {
  return (
    <>
      <Header />

      {/* ================= PAGE HEADER ================= */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="" priority />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image
                src={headerImg}
                alt="Electric panel repair service header"
                priority
              />
            </div>

            {/* ✅ SEO: ONE H1 */}
            <h1>Electric Panel Repair Services in Surat</h1>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li><Link href="/">Home</Link></li>
                <li><span className="icon-angle-right"></span></li>
                <li><Link href="/services">Services</Link></li>
                <li><span className="icon-angle-right"></span></li>
                <li>Electric Panel Repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE DETAILS ================= */}
      <section className="service-details">
        <div className="container">
          <div className="row">

            {/* MAIN CONTENT */}
            <div className="col-xl-8 col-lg-7">
              <article className="service-details__left">

                <div className="service-details__img">
                  <Image
                    src={serviceImg}
                    alt="Licensed electrician repairing electrical panel"
                  />
                </div>

                <h2 className="service-details__title-1">
                  Professional Electric Panel Repair
                </h2>

                <p className="service-details__text-1">
                  Our expert electricians provide reliable electric panel repair
                  services in Surat to ensure your home or business electrical
                  system operates safely and efficiently. A faulty electrical
                  panel can cause power failures, fire hazards, and appliance
                  damage.
                </p>

                <p className="service-details__text-2">
                  We specialize in diagnosing panel issues, replacing damaged
                  breakers, upgrading outdated panels, and ensuring compliance
                  with electrical safety standards. Whether you need residential
                  or commercial panel repair, our licensed team is ready to help.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>Complete electrical panel inspection and repair</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>Breaker replacement and overload protection</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>Old panel upgrades for modern electrical needs</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>Safe, code-compliant electrical solutions</p>
                  </li>
                </ul>

                <div className="service-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image
                            src={serviceBoxImg1}
                            alt="High quality electrical panel repair work"
                          />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-lamp"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              Quality Electrical Work
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            We deliver precision electrical panel repairs using
                            certified tools and safety-tested components.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image
                            src={serviceBoxImg2}
                            alt="100 percent customer satisfaction electrical service"
                          />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-chirger"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              100% Customer Satisfaction
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Our electricians ensure reliable repairs backed by
                            safety standards and customer satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </article>
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

      <CTA />
      <Footer />
    </>
  );
}
