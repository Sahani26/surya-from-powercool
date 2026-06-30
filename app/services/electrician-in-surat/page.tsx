import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import AreasWeServe from "../components/AreasWeServe";
import GetStartedToday from "@/app/Get-Started-Today/page";
import OurServiceTab from "@/app/OurServiceTab/page";

import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import serviceImg from "@/public/assets/images/services/service-details-img-5.jpg";

export const metadata: Metadata = {
  title: "Local Electrician in Surat | Fast Home & Commercial Service",
  description:
    "Hire a trusted local electrician in Surat for home repairs, wiring projects, switchboard upgrades, and emergency electrical service.",
  keywords: [
    "Electrician in Surat",
    "Local electrician Surat",
    "Home electrician Surat",
    "Commercial electrician Surat",
    "Emergency electrician Surat",
    "Wiring repair Surat",
    "Electrical service near me Surat",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/services/electrician-in-surat",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ElectricianInSuratPage() {
  return (
    <>
      <Header />

      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="Page header shape" />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="Electrician in Surat" />
            </div>

            <h1>Local Electrician in Surat</h1>
            <p className="services-page__intro">
              Fast electrician service for homes, shops, offices, and small businesses across Surat.
              Certified technicians for wiring, repairs, lighting, and emergency support.
            </p>

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
                <li>Electrician in Surat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                <div className="service-details__img">
                  <Image src={serviceImg} alt="Electrician service in Surat" />
                </div>

                <h3 className="service-details__title-1">
                  Trusted Local Electrician for Surat Homes and Businesses
                </h3>

                <p className="service-details__text-1">
                  Whether you need a quick repair or a complete wiring upgrade, our Surat electricians deliver safe, reliable work with clean installation and expert troubleshooting.
                </p>

                <p className="service-details__text-2">
                  We service apartments, houses, stores, and offices in Surat. From lighting and fan installation to switchboard repair, MCB replacement, and emergency short circuit fixes, our team is ready to help.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>House wiring, rewiring, and socket installation</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Switchboard, breaker, and safety upgrade services</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Lighting fixtures, LED lamps, and fan installations</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Emergency electrical repairs with quick local response</p>
                  </li>
                </ul>

                <AreasWeServe />
              </div>
            </div>

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
