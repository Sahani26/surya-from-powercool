import Image from "next/image";
import Link from "next/link";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";

// Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";

/* =========================
   SEO METADATA
========================= */
export const metadata = {
  title: "Frequently Asked Questions | Electrician Services in Surat",
  description:
    "Find answers to common questions about electrical services, repairs, pricing, and safety. Get expert electrician FAQs for homes and businesses in Surat.",
  alternates: {
    canonical: "https://www.suryaelectrician.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <Header />

      {/* ================= PAGE HEADER ================= */}
      <section className="page-header">
        <div className="page-header__shape-1">
          {/* Decorative image */}
          <Image src={shape1} alt="" priority />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image
                src={headerImg}
                alt="Frequently asked questions about electrician services"
                priority
              />
            </div>

            {/* ✅ SEO: ONE H1 */}
            <h1>Frequently Asked Questions</h1>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ CONTENT ================= */}
      <section className="faq-page">
        <div className="container">
          <div className="row">

            {/* LEFT COLUMN */}
            <div className="col-xl-6">
              <div className="faq-page__left">
                <div className="faq-one__right">
                  <div
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-left"
                  >
                    <AccordionItem
                      title="How often should I service my electrical system?"
                      content="It is recommended to have your electrical system inspected by a certified electrician at least once every 3–5 years, or immediately if you notice power issues or safety concerns."
                    />
                    <AccordionItem
                      title="Why do circuit breakers trip frequently?"
                      content="Frequent breaker trips usually indicate overloaded circuits, faulty wiring, or damaged appliances. A professional electrician can diagnose and fix the issue safely."
                    />
                    <AccordionItem
                      title="Is it safe to repair electrical issues myself?"
                      content="DIY electrical repairs are risky and can cause fire hazards or electric shocks. Always hire a licensed electrician for safe and compliant repairs."
                    />
                    <AccordionItem
                      title="Do you provide emergency electrical services?"
                      content="Yes, we offer emergency electrical repair services for power failures, short circuits, and urgent safety issues."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-xl-6">
              <div className="faq-page__right">
                <div className="faq-one__right">
                  <div
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-right"
                  >
                    <AccordionItem
                      title="How much does an electrician visit cost?"
                      content="The cost depends on the type of service, complexity of work, and time required. Contact us for a free quote and transparent pricing."
                    />
                    <AccordionItem
                      title="Can you upgrade old electrical panels?"
                      content="Yes, we specialize in upgrading outdated electrical panels to meet modern safety standards and power requirements."
                    />
                    <AccordionItem
                      title="Are your electricians licensed and insured?"
                      content="All our electricians are fully licensed, trained, and insured to ensure safe and reliable electrical services."
                    />
                    <AccordionItem
                      title="Do you provide commercial electrical services?"
                      content="Yes, we offer professional electrical services for offices, shops, factories, and commercial buildings."
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
      <Footer />

      {/* ================= FAQ SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How often should I service my electrical system?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "It is recommended to have your electrical system inspected by a certified electrician at least once every 3–5 years or when issues occur.",
                },
              },
              {
                "@type": "Question",
                name: "Why do circuit breakers trip frequently?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Frequent breaker trips indicate overloaded circuits, faulty wiring, or appliance issues that require professional inspection.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide emergency electrical services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, we provide emergency electrical repair services for urgent power and safety issues.",
                },
              },
              {
                "@type": "Question",
                name: "Are your electricians licensed and insured?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, all our electricians are licensed, trained, and insured.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}

/* ================= ACCORDION ITEM ================= */
function AccordionItem({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="accrodion">
      <div className="accrodion-title">
        <h2>{title}</h2>
      </div>
      <div className="accrodion-content">
        <div className="inner">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
