import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";

/* ================= SEO META ================= */
export const metadata: Metadata = {
  title: "Electrician Services in Surat | Home & Commercial Electrical Services",
  description:
    "Discover electrician services in Surat for homes and businesses, including repairs, installations, maintenance, and emergency electrical support.",
  keywords: [
    "Electrician services in Surat",
    "Electrical repair Surat",
    "Lighting installation Surat",
    "Electrical maintenance Surat",
    "Short circuit repair Surat",
    "Commercial electrician Surat",
    "Ceiling fan installation Surat",
    "Electrician near me Surat",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/services",
  },
  openGraph: {
    title: "Electrician Services in Surat | Surya Electrician",
    description:
      "Professional electrician services in Surat for residential and commercial electrical work.",
    url: "https://www.suryaelectrician.com/services",
    siteName: "Surya Electrician",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
/* ================= END SEO ================= */

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image
            src="/assets/images/shapes/page-header-shape-1.png"
            alt="Decorative page header shape"
            width={500}
            height={300}
          />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image
                src="/assets/images/resources/page-header-img-1.png"
                alt="Services page header image"
                width={300}
                height={300}
              />
            </div>

            <h1>Professional Electrician Services in Surat</h1>
            <p className="services-page__intro">
              Surya Electrician provides reliable electrical services for homes and
              businesses across Surat. Our team delivers fast repairs, safe
              installations, and maintenance you can trust.
            </p>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Services Page Start */}
      <section className="services-two services-page">
        <div className="services-two__shape-1 img-bounce">
          <Image
            src="/assets/images/shapes/services-two-shape-1.png"
            alt="Decorative services background shape"
            width={400}
            height={300}
          />
        </div>

        <div className="container">
          <div className="row">

            {/* Service Item */}
            <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-socket"></span>
                </div>
                <p className="services-two__sub-title">Electrical Repair</p>
                <h3 className="services-two__title">
                  <Link href="/electric-panel-repair">Electric Repair</Link>
                </h3>
                <p className="services-two__text">
                  Fast, dependable electrical repairs for homes and businesses in Surat.
                </p>
                <Link href="/electric-panel-repair" className="services-two__learn-more">
                  Learn More <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-ceiling-lamp"></span>
                </div>
                <p className="services-two__sub-title">Lighting & Fixtures</p>
                <h3 className="services-two__title">
                  <Link href="/lighting-fixtures">Lighting & Fixtures</Link>
                </h3>
                <p className="services-two__text">
                  Professional lighting and fixture installation with safe, precise wiring.
                </p>
                <Link href="/lighting-fixtures" className="services-two__learn-more">
                  Learn More <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="500ms">
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-ceiling-lamp-2"></span>
                </div>
                <p className="services-two__sub-title">Preventive Maintenance</p>
                <h3 className="services-two__title">
                  <Link href="/maintenance-service">Maintenance Service</Link>
                </h3>
                <p className="services-two__text">
                  Scheduled electrical maintenance to keep your systems safe and reliable.
                </p>
                <Link href="/maintenance-service" className="services-two__learn-more">
                  Learn More <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            {/* Remaining service items unchanged */}
            {/* ... */}

          </div>
        </div>
      </section>
      {/* Services Page End */}

      <CTA />
      <Footer />
    </>
  );
}
