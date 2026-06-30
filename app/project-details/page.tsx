
import type { Metadata } from "next";
import Image from "next/image";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import project1 from "@/public/assets/images/project/project-details-img-1.jpg";
import textImg from "@/public/assets/images/project/project-details-text-img.jpg";
import pointsImg from "@/public/assets/images/project/project-details-points-img.jpg";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
import Link from "next/link";

/* ================= SEO META ================= */
export const metadata: Metadata = {
  title: "Electrical Project Details | Professional Electrical Work Showcase",
  description:
    "Explore our completed electrical project showcasing professional wiring upgrade, maintenance, and electrical solutions delivered with quality and safety.",
  keywords: [
    "Electrical project details",
    "Electrical work portfolio",
    "Electrical wiring project",
    "Electrical maintenance project",
    "Professional electrician project",
    "Electrical service case study",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/project-details",
  },
  openGraph: {
    title: "Electrical Project Details | surya electrician",
    description:
      "View detailed information about our completed electrical project including challenges, solutions, and final results.",
    url: "https://www.suryaelectrician.com/project-details",
    images: [
      {
        url: "/assets/images/project/project-details-img-1.jpg",
        width: 800,
        height: 500,
        alt: "Electrical project details showcase",
      },
    ],
    locale: "en_IN",
    siteName: "surya electrician",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
/* ================= END SEO ================= */

export default function ProjectDetails() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="Page header decorative shape" />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="Project details header image" />
            </div>

            <h3>Project Details</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Project Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Project Details Start */}
      <section className="project-details">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-xl-8 col-lg-7">
              <div className="project-details__left">
                <div className="project-details__img">
                  <Image
                    src={project1}
                    alt="Completed electrical project work"
                  />
                </div>

                <h3 className="project-details__title-1">
                  About the Electrical Project
                </h3>
                <p className="project-details__text-1">
                  This project involved a complete electrical safety upgrade for a
                  residential building in Surat. Our electricians replaced outdated
                  wiring, modernized circuits, and improved lighting and power outlets.
                </p>

                <h3 className="project-details__title-2">
                  The Project Challenge
                </h3>
                <p className="project-details__text-2">
                  The property had aging wiring, overloaded circuits, and insufficient
                  grounding. We needed to deliver a safe, compliant solution with
                  minimal disruption to daily use.
                </p>

                <div className="project-details__text-and-img">
                  <p className="project-details__text-3">
                    Our team completed the work with careful planning, circuit isolation,
                    and thorough testing. The result is a reliable electrical system
                    that supports modern appliances safely.
                  </p>
                  <div className="project-details__text-img">
                    <Image
                      src={textImg}
                      alt="Electrical project explanation image"
                    />
                  </div>
                </div>

                <h3 className="project-details__title-3">
                  Project Outcome
                </h3>
                <p className="project-details__text-4">
                  The project delivered improved safety, better power distribution,
                  and upgraded electrical protection for the entire home.
                  The client now has a dependable system built to last.
                </p>

                <div className="project-details__img-and-points">
                  <div className="project-details__points-img">
                    <Image
                      src={pointsImg}
                      alt="Electrical project result highlights"
                    />
                  </div>

                  <ul className="project-details__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-arrow-right"></span>
                      </div>
                      <p>Safety-focused wiring upgrade and panel work</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-arrow-right"></span>
                      </div>
                      <p>Improved lighting, power points, and load balance</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-arrow-right"></span>
                      </div>
                      <p>Certified testing and electrical compliance checks</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-arrow-right"></span>
                      </div>
                      <p>Reliable service with a focus on customer safety</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-xl-4 col-lg-5">
              <div className="project-details__sidebar">
                <div className="project-details__information">
                  <h3 className="project-details__information-title">
                    Project Information
                  </h3>

                  <ul className="project-details__information-list list-unstyled">
                    <li>
                      <h4>Client :</h4>
                      <p>Jonathan Smith</p>
                    </li>
                    <li>
                      <h4>Category :</h4>
                      <p>Upgrade Old Wiring</p>
                    </li>
                    <li>
                      <h4>Date :</h4>
                      <p>02 June 2024</p>
                    </li>
                    <li>
                      <h4>Location :</h4>
                      <p>12 Green Road 05 New York</p>
                    </li>
                  </ul>
                </div>

                <div className="project-details__get-started">
                  <h3 className="project-details__get-started-title">
                    Get Started Today
                  </h3>
                  <p className="project-details__get-started-text">
                    Discuss your electrical project with our expert electricians.
                    Get a free consultation for wiring upgrades, panel repair, or
                    new installation work in Surat.
                  </p>

                  <ul className="project-details__get-started-points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <p>
                        <Link href="tel:+919428654794">+91 9428654794</Link>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-envelope"></span>
                      </div>
                      <p>
                        <Link href="mailto:suryaelectrician24@gmail.com">
                          suryaelectrician24@gmail.com
                        </Link>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-location"></span>
                      </div>
                      <p>
                        Adajan, Surat, Gujarat 395009
                      </p>
                    </li>
                  </ul>

                  <div className="project-details__get-started-btn-box">
                    <Link
                      href="/contact"
                      className="project-details__get-started-btn thm-btn"
                    >
                      Request Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Project Details End */}

      <CTA />
      <Footer />
    </>
  );
}
