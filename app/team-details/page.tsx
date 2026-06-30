import Image from "next/image";

import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg1 from "@/public/assets/images/resources/page-header-img-1.png";
import teamDetailsImg from "@/public/assets/images/team/team-details-img-1.jpg";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Professional Electrician in Surat | suryaelectrician Team Expert",
  description:
    "Meet the expert electrician at suryaelectrician in Surat. We provide home electrical repair, wiring, fan installation, switchboard repair, AC power solutions, and emergency electrician services in Pal, Adajan, and nearby areas.",
  keywords:
    "Electrician in Surat, Home electrician Pal, Electrician Adajan, suryaelectrician, Electrical repair Surat, Switchboard repair, Fan installation, Wiring services, Emergency electrician Surat",
};

export default function TeamDetails() {
  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="decorative shape background" />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg1} alt="Professional electrician service in Surat" />
            </div>

            <h3>Our Electrical Expert</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Team Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Details */}
      <section className="team-details">
        <div className="container">
          <div className="team-details__inner">
            <div className="row">

              {/* LEFT SIDE */}
              <div className="col-xl-5 col-lg-5">
                <div className="team-details__left">
                  <div className="team-details__img">
                    <Image 
                      src={teamDetailsImg} 
                      alt="Certified home electrician in Surat - suryaelectrician" 
                    />
                  </div>

                  <div className="team-details__contact-box">
                    <h3 className="team-details__contact-title">Contact Info</h3>

                    <ul className="team-details__contact-list list-unstyled">
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
                          <span className="icon-phone-call"></span>
                        </div>
                        <p>
                          <Link href="tel:+919428654794">+91-9428654794</Link>
                        </p>
                      </li>

                      <li>
                        <div className="icon">
                          <span className="icon-location"></span>
                        </div>
                        <p>Pal, Adajan - Surat, Gujarat</p>
                      </li>
                    </ul>

                    <div className="team-details__social">
                      <Link href="#"><i className="fab fa-facebook"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                      <Link href="#"><i className="fab fa-linkedin"></i></Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-xl-7 col-lg-7">
                <div className="team-details__right">
                  <h3 className="team-details__title-1">suryaelectrician Electrical Expert</h3>
                  <p className="team-details__sub-title">
                    Certified Home Electrician & Electrical Repair Specialist
                  </p>

                  <p className="team-details__text-1">
                    At suryaelectrician, we provide professional and reliable 
                    electrical services in Surat, including Pal and Adajan areas. 
                    With years of hands-on experience in home electrical repair, 
                    wiring solutions, switchboard installation, fan fitting, 
                    light installation, and AC power troubleshooting, we ensure 
                    safe and long-lasting electrical work for residential and 
                    small commercial properties.
                  </p>

                  <h3 className="team-details__title-2">Professional Electrical Skills</h3>

                  <p className="team-details__text-2">
                    Our expertise includes complete home electrical maintenance, 
                    fault finding, MCB replacement, short-circuit repair, 
                    power backup solutions, inverter wiring, and emergency 
                    electrician services in Surat. We focus on safety, 
                    efficiency, and affordable pricing for every customer.
                  </p>

                  <ul className="team-details__progress-list list-unstyled">
                    <li className="team-details__progress">
                      <h4 className="team-details__progress-title">
                        Home Electrical Repair
                      </h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="95%">
                          <div className="count-text">95%</div>
                        </div>
                      </div>
                    </li>

                    <li className="team-details__progress">
                      <h4 className="team-details__progress-title">
                        Wiring & Installation
                      </h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="90%">
                          <div className="count-text">90%</div>
                        </div>
                      </div>
                    </li>

                    <li className="team-details__progress">
                      <h4 className="team-details__progress-title">
                        Electrical Diagnostics
                      </h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="92%">
                          <div className="count-text">92%</div>
                        </div>
                      </div>
                    </li>
                  </ul>

                </div>
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