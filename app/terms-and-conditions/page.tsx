import type { Metadata } from "next";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import Link from "next/link";

/* ================= SEO META ================= */
export const metadata: Metadata = {
  title: "Terms and Conditions | Electrician Services in Surat",
  description:
    "Read the Terms and Conditions for using our electrician services in Surat. Understand service usage, responsibilities, and legal terms.",
  alternates: {
    canonical: "https://www.suryaelectrician.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};
/* ================= END SEO ================= */

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <h3>Terms & Conditions</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Content Start */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__left">

                <h3 className="service-details__title-1">
                  Terms and Conditions
                </h3>

                <p className="service-details__text-1">
                  These Terms and Conditions govern the use of our website and electrician services in Surat. By requesting or using our services, you agree to these terms.
                </p>

                <h3 className="service-details__title-2">
                  1. Services
                </h3>
                <p className="service-details__text-2">
                  We provide professional electrician services including
                  installation, repair, maintenance, and emergency electrical
                  services across Surat. All services are subject to
                  availability.
                </p>

                <h3 className="service-details__title-2">
                  2. Service Booking
                </h3>
                <p className="service-details__text-2">
                  Service requests can be made through our website, phone call, or other communication channels. Booking confirmation depends on availability, service type, and location.
                </p>

                <h3 className="service-details__title-2">
                  3. Pricing & Payments
                </h3>
                <p className="service-details__text-2">
                  Service charges may vary based on the type of work, materials
                  required, and location. Final pricing will be communicated
                  before service execution.
                </p>

                <h3 className="service-details__title-2">
                  4. Customer Responsibilities
                </h3>
                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>Provide accurate service details and location</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>Ensure safe access to the service location</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>Follow safety instructions provided by technicians</p>
                  </li>
                </ul>

                <h3 className="service-details__title-2">
                  5. Service Warranty
                </h3>
                <p className="service-details__text-2">
                  Any service warranty, if applicable, will be communicated at
                  the time of service. Warranty does not cover misuse,
                  unauthorized modifications, or external damage.
                </p>

                <h3 className="service-details__title-2">
                  6. Limitation of Liability
                </h3>
                <p className="service-details__text-2">
                  We are not liable for indirect or consequential damages arising
                  from the use of our services beyond the agreed scope of work.
                </p>

                <h3 className="service-details__title-2">
                  7. Cancellation & Rescheduling
                </h3>
                <p className="service-details__text-2">
                  Customers may request cancellation or rescheduling of services
                  subject to reasonable notice. Additional charges may apply in
                  certain cases.
                </p>

                <h3 className="service-details__title-2">
                  8. Changes to Terms
                </h3>
                <p className="service-details__text-2">
                  We reserve the right to update these Terms and Conditions at
                  any time. Changes will be effective once posted on this page.
                </p>

                <h3 className="service-details__title-2">
                  9. Contact Information
                </h3>
                <p className="service-details__text-2">
                  If you have any questions regarding these Terms and
                  Conditions, please contact us through our website or phone.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content End */}

      <CTA />
      <Footer />
    </>
  );
}
