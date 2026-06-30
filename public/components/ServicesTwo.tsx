"use client";

import Link from "next/link";

export default function ServicesTwo() {
  return (
    <section className="services-two">
      <div className="services-two__shape-1 img-bounce">
        <img
          src="/assets/images/shapes/services-two-shape-1.png"
          alt="Professional electrician services in Surat"
        />
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Electrical Services</span>
          </div>
          <div className="section-title__title-box sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              Trusted Electrician Services in Surat
              <br />
              for Homes & Businesses
            </h2>
          </div>
        </div>

        <div className="row">
          {/* Service 1 */}
          <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
            <div className="services-two__single">
              <div className="services-two__icon">
                <span className="icon-socket"></span>
              </div>
              <p className="services-two__sub-title">
                Electrical Repair Service
              </p>
              <h3 className="services-two__title">
                <Link href="/electric-panel-repair">
                  Electric Repair in Surat
                </Link>
              </h3>
              <p className="services-two__text">
                Expert electricians for short circuits, wiring faults,
                power failures, and electric panel repair in Surat.
              </p>
              <Link
                href="/electric-panel-repair"
                className="services-two__learn-more"
              >
                Learn More
                <span className="icon-arrow-right"></span>
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="services-two__single">
              <div className="services-two__icon">
                <span className="icon-ceiling-lamp"></span>
              </div>
              <p className="services-two__sub-title">
                Lighting Installation Service
              </p>
              <h3 className="services-two__title">
                <Link href="/lighting-fixtures">
                  Lighting & Fixture Installation
                </Link>
              </h3>
              <p className="services-two__text">
                Professional installation of lights, ceiling lamps,
                LED panels, and decorative lighting for homes and offices.
              </p>
              <Link
                href="/lighting-fixtures"
                className="services-two__learn-more"
              >
                Learn More
                <span className="icon-arrow-right"></span>
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="500ms">
            <div className="services-two__single">
              <div className="services-two__icon">
                <span className="icon-ceiling-lamp-2"></span>
              </div>
              <p className="services-two__sub-title">
                Electrical Maintenance
              </p>
              <h3 className="services-two__title">
                <Link href="/maintenance-service">
                  Electrical Maintenance Service
                </Link>
              </h3>
              <p className="services-two__text">
                Regular electrical maintenance, safety checks, and
                preventive inspections to avoid breakdowns.
              </p>
              <Link
                href="/maintenance-service"
                className="services-two__learn-more"
              >
                Learn More
                <span className="icon-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
