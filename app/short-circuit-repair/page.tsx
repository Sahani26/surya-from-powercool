


//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//       {/* Service Details End */}

//       <CTA />
//       <Footer />
//     </>
//   );
// }
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import serviceImg from "@/public/assets/images/services/service-details-img-1.jpg";
import serviceBoxImg1 from "@/public/assets/images/services/service-details-img-box-img-1.jpg";
import serviceBoxImg2 from "@/public/assets/images/services/service-details-img-box-img-2.jpg";
import GetStartedToday from "../Get-Started-Today/page";
import OurServiceTab from "../OurServiceTab/page";
import Link from "next/link";

/* ================= SEO META (SURAT TARGETED) ================= */
export const metadata: Metadata = {
  title: "Short Circuit Repair in Surat | Emergency Electrician Near You",
  description:
    "Need short circuit repair in Surat? Our expert electricians provide fast, safe, and reliable short circuit repair services across all areas of Surat for homes and businesses.",
  keywords: [
    "Short circuit repair in Surat",
    "Emergency electrician in Surat",
    "Short circuit electrician Surat",
    "Electrical short circuit repair Surat",
    "Fuse repair Surat",
    "Electrician near me Surat",
    "Emergency electrical repair Surat",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/services/short-circuit-repair",
  },
  openGraph: {
    title: "Short Circuit Repair in Surat",
    description:
      "Professional short circuit repair services in Surat with quick response and expert electricians.",
    url: "https://www.suryaelectrician.com/services/short-circuit-repair",
    images: [
      {
        url: "/assets/images/services/service-details-img-1.jpg",
        width: 800,
        height: 450,
        alt: "Short circuit repair service in Surat",
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

export default function ShortCircuitRepair() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="Decorative page header shape" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="Short circuit repair service header" />
            </div>
            <h3>Short Circuit Repair</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li><Link href="/">Home</Link></li>
                <li><span className="icon-angle-right"></span></li>
                <li><Link href="/services">Services</Link></li>
                <li><span className="icon-angle-right"></span></li>
                <li>Short Circuit Repair</li>
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
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                <div className="service-details__img">
                  <Image
                    src={serviceImg}
                    alt="Emergency short circuit repair service in Surat"
                  />
                </div>

                <h3 className="service-details__title-1">
                  Short Circuit Repair in Surat
                </h3>

                <p className="service-details__text-1">
                  If you are facing frequent power trips or electrical faults,
                  our professional electricians in Surat provide fast and reliable
                  short circuit repair services to restore safety quickly.
                </p>

                <p className="service-details__text-2">
                  We diagnose wiring problems, damaged circuits, and faulty connections
                  using safe and modern techniques for homes and commercial spaces
                  across Surat.
                </p>

                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Quick diagnosis of short circuit issues</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Safe repair with proper insulation and wiring checks</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Emergency electrical repair support</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Residential and commercial services in Surat</p>
                  </li>
                </ul>

                <div className="service-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image
                            src={serviceBoxImg1}
                            alt="Professional short circuit repair work"
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
                            Safe and durable electrical repair solutions by
                            experienced electricians in Surat.
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
                            Trusted short circuit repair services across all areas of Surat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
      {/* Service Details End */}

      <CTA />
      <Footer />
    </>
  );
}
