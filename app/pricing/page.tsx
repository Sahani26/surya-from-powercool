import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
import Pricing from "@/public/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing for Electrician Services in Surat | surya electrician",
  description:
    "Check pricing for electrician and AC services in Surat, including repairs, installations, maintenance, and emergency service fees.",
  keywords: [
    "electrician pricing Surat",
    "AC service prices Surat",
    "electrician rate Surat",
    "electrical service quote Surat",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/pricing",
  },
  openGraph: {
    title: "Pricing for Electrician Services in Surat | surya electrician",
    description:
      "Explore transparent pricing for electrician and AC services in Surat with no hidden fees.",
    url: "https://www.suryaelectrician.com/pricing",
    siteName: "surya electrician",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="Shape" />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="Header Image" />
            </div>

            <h3>Pricing</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      <Pricing />

      <div className="col-xl-6 m-auto pb-5">
        <div className="contact-three__right">
          <h2 className="get-call-cack">
            Request a Callback
          </h2>
          <p className="contact-three__text">
            Call us at <Link href="tel:+919428654794">+91 9428654794</Link> or email{' '}
            <Link href="mailto:suryaelectrician24@gmail.com">
              suryaelectrician24@gmail.com
            </Link>{' '}
            for a transparent price estimate and fast electrician quote.
          </p>
        </div>
      </div>

      <CTA />

      <Footer />
    </>
  );
}
