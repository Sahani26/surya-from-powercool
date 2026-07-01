import Image from "next/image";
import Link from "next/link";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
// import ContactForm from "../contact-form/page";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg1 from "@/public/assets/images/resources/page-header-img-1.png";

/* =========================
   SEO METADATA
========================= */
export const metadata = {
  title: "Contact Electrician in Surat | Get Free Quote Today",
  description:
    "Contact our certified electricians in Surat for residential and commercial electrical services. Call now or request a free quote online.",
  alternates: {
    canonical: "https://www.suryaelectrician.com/contact",
  },
  openGraph: {
    title: "Contact Electrician in Surat",
    description:
      "Need electrical services in Surat? Contact our expert electricians today for fast and reliable service.",
    url: "https://www.suryaelectrician.com/contact",
    siteName: "suryaelectrician",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      <Header />

      {/* =========================
          PAGE HEADER
      ========================= */}
      <section className="page-header">
        <div className="page-header__shape-1">
          {/* Decorative image */}
          <Image src={shape1} alt="" priority />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image
                src={headerImg1}
                alt="Contact our electrician service team"
                priority
              />
            </div>

            {/* ✅ SEO: ONE H1 */}
            <h1>Contact Our Electrician in Surat</h1>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT INFO
      ========================= */}
      <section className="contact-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-call"></span>
                </div>
                <p>Call Us</p>
                <h3>
                  <Link href="tel:+919023915357">+91 9023915357</Link>
                </h3>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-envelope"></span>
                </div>
                <p>Email Us</p>
                <h3>
                  <Link href="mailto:suryaelectrician@gmail.com">
                    suryaelectrician@gmail.com
                  </Link>
                </h3>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-location"></span>
                </div>
                <p>Office Address</p>
                <h3>Surat, Gujarat, India</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          MAP + FORM
      ========================= */}
      <section className="contact-three">
        <div className="container">
          <div className="contact-three__inner">
            <div className="row">
              {/* Map */}
              <div className="col-xl-6">
                <div className="contact-three__left">
                  <iframe
                    title="Electrician office location in Surat"
                    src="https://www.google.com/maps?q=Surat,Gujarat,India&output=embed"
                    className="google-map__one"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                </div>
              </div>

              {/* Form */}
              <div className="col-xl-6">
                <div className="contact-three__right">
                  <h2 className="contact-three__form-title">
                    Get a Free Quote
                  </h2>
                {/* <ContactForm/> */}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
 
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "suryaelectrician",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Surat",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
            telephone: "+91-90239-15357",
            email: "suryaelectrician@gmail.com",
            url: "https://www.suryaelectrician.com/contact",
          }),
        }}
      />
    </>
  );
}
