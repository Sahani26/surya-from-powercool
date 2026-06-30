import type { Metadata } from "next";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import Link from "next/link";

/* ================= SEO META ================= */
export const metadata: Metadata = {
  title: "Privacy Policy | Electrician Services in Surat",
  description:
    "Read our Privacy Policy to understand how we collect, use, and protect your personal information while providing electrician services in Surat.",
  alternates: {
    canonical: "https://www.suryaelectrician.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};
/* ================= END SEO ================= */

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <h3>Privacy Policy</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Privacy Policy</li>
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
                  Privacy Policy
                </h3>

                <p className="service-details__text-1">
                  Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you contact us or request electrician services in Surat.
                </p>

                <h3 className="service-details__title-2">
                  Information We Collect
                </h3>
                <p className="service-details__text-2">
                  We may collect personal details such as your name, phone
                  number, email address, and service location when you contact
                  us or request our services.
                </p>

                <h3 className="service-details__title-2">
                  How We Use Your Information
                </h3>
                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>To respond to service requests and schedule electrician visits.</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>To respond to service requests and inquiries</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-arrow-right"></span>
                    </div>
                    <p>To improve our website and customer experience</p>
                  </li>
                </ul>

                <h3 className="service-details__title-2">
                  Information Sharing
                </h3>
                <p className="service-details__text-2">
                  We do not sell or rent your personal information to third
                  parties. Information is shared only when necessary to provide
                  our services or comply with legal obligations.
                </p>

                <h3 className="service-details__title-2">
                  Data Security
                </h3>
                <p className="service-details__text-2">
                  We take reasonable security measures to protect your personal information from unauthorized access or misuse while managing electrician service requests.
                </p>

                <h3 className="service-details__title-2">
                  Cookies
                </h3>
                <p className="service-details__text-2">
                  Our website may use cookies to enhance user experience and
                  analyze website performance. You can disable cookies through
                  your browser settings.
                </p>

                <h3 className="service-details__title-2">
                  Third-Party Links
                </h3>
                <p className="service-details__text-2">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of those websites.
                </p>

                <h3 className="service-details__title-2">
                  Policy Updates
                </h3>
                <p className="service-details__text-2">
                  This Privacy Policy may be updated from time to time. Any
                  changes will be posted on this page.
                </p>

                <h3 className="service-details__title-2">
                  Contact Us
                </h3>
                <p className="service-details__text-2">
                  If you have any questions regarding this Privacy Policy,
                  please contact us through our website or phone number.
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
