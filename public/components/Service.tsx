import Link from "next/link";

export default function Service() {
  return (
    <section className="services-one">
      <div className="container">
        <div className="services-one__inner">
          <ul className="services-one__service-list list-unstyled">

            <li className="wow fadeInLeft" data-wow-delay="100ms">
              <div className="services-one__single">
                <div className="services-one__icon">
                  <span className="icon-affordable-price"></span>
                </div>
                <h3 className="services-one__title">
                  <Link href="/pricing">
                    Reliable Residential & Commercial Electrical Service
                  </Link>
                </h3>
                <p className="services-one__text">
                  Fast, budget-friendly electrical repairs, installations, and
                  maintenance across Surat for homes, offices, and shops.
                </p>
              </div>
            </li>

            <li className="wow fadeInUp" data-wow-delay="200ms">
              <div className="services-one__single">
                <div className="services-one__icon">
                  <span className="icon-setting"></span>
                </div>
                <h3 className="services-one__title">
                  <Link href="/about-us">
                    Certified Electricians & Safety-First Standards
                  </Link>
                </h3>
                <p className="services-one__text">
                  Experienced technicians deliver guaranteed quality with safe,
                  code-compliant electrical work on every project.
                </p>
              </div>
            </li>

            <li className="wow fadeInRight" data-wow-delay="300ms">
              <div className="services-one__single">
                <div className="services-one__icon">
                  <span className="icon-services"></span>
                </div>
                <h3 className="services-one__title">
                  <Link href="/contact">
                    24/7 Emergency Electrician Support in Surat
                  </Link>
                </h3>
                <p className="services-one__text">
                  Rapid response for short circuits, outages, and urgent
                  electrical issues with dependable service any time.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
}
