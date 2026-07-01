

import Image from "next/image";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import serviceImg from "@/public/assets/images/services/service-details-img-6.jpg";
import serviceBoxImg1 from "@/public/assets/images/services/service-details-img-box-img-1.jpg";
import serviceBoxImg2 from "@/public/assets/images/services/service-details-img-box-img-2.jpg";
import GetStartedToday from "../Get-Started-Today/page";
import OurServiceTab from "../OurServiceTab/page";
import Link from "next/link";

export const metadata = {
  title:
    "Commercial Electrical Services in Surat | Trusted Business Electricians",
  description:
    "Looking for reliable commercial electrical services in Surat? We provide office, factory, and industrial electrical installation, maintenance, and repair services with certified electricians.",
  keywords: [
    "commercial electrical services in Surat",
    "commercial electrician Surat",
    "industrial electrical services",
    "office electrical maintenance",
    "business electrician near me",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/services/commercial-services",
  },
  openGraph: {
    title:
      "Commercial Electrical Services in Surat | Certified Electricians",
    description:
      "Expert commercial electricians in Surat offering safe, reliable, and affordable electrical services for offices, factories, and businesses.",
    url: "https://www.suryaelectrician.com/services/commercial-services",
    siteName: "Surya Electrician",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommercialServices() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="shape" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="header" />
            </div>
            <h1>Commercial Electrical Services</h1>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li><Link href="/">Home</Link></li>
                <li><span className="icon-angle-right"></span></li>
                <li><Link href="/services">Services</Link></li>
                <li><span className="icon-angle-right"></span></li>
                <li>Commercial Electrical Services</li>
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
                  <Image src={serviceImg} alt="Commercial electrical maintenance service" />
                </div>
                <h2 className="service-details__title-1">Commercial Electrical Services</h2>
                <p className="service-details__text-1">
                  Surya Electrician delivers commercial electrical services across Surat for offices, retail outlets, warehouses, and industrial spaces. Our certified electricians handle lighting upgrades, power distribution, switchboard installations, and maintenance.
                </p>
                <p className="service-details__text-2">
                  Whether you need a new business installation, regular maintenance, or emergency commercial repair, we provide reliable solutions with safety, efficiency, and minimal disruption.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Commercial lighting and power distribution installations</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Switchboard upgrades and electrical safety inspections</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Preventive maintenance for business continuity</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Emergency commercial electrical repairs in Surat</p>
                  </li>
                </ul>

                <div className="service-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image src={serviceBoxImg1} alt="Quality Full Work" />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-lamp"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">Quality Full Work</h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                              Our commercial projects are completed on schedule with precise electrical workmanship and careful safety checks.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image src={serviceBoxImg2} alt="100% Work Satisfaction" />
                        </div>
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-chirger"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">100% Work Satisfaction</h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Reliable business electrical service with a strong focus on customer satisfaction.
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

      <CTA />
      <Footer />
    </>
  );
}
