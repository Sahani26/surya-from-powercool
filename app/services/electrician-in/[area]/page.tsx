import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";

import { electricianAreas } from "@/data/electricianAreas";

// Images (UNCHANGED)
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import serviceImg from "@/public/assets/images/services/service-details-img-5.jpg";
import serviceBoxImg1 from "@/public/assets/images/services/service-details-img-box-img-1.jpg";
import serviceBoxImg2 from "@/public/assets/images/services/service-details-img-box-img-2.jpg";
import OurServiceTab from "@/app/OurServiceTab/page";
import GetStartedToday from "@/app/Get-Started-Today/page";



type Props = {
  params: Promise<{ area: string }>;
};

/* =========================
   SEO METADATA (DYNAMIC)
========================= */
export async function generateMetadata({ params }: Props) {
  const { area } = await params;
  const areaData = electricianAreas.find((a) => a.slug === area);

  if (!areaData) {
    return { title: "Service Not Found" };
  }

  return {
    title: `Electrician in ${areaData.name}, Surat | Fast & Affordable`,
    description: `Professional electrician services in ${areaData.name}, Surat. Same-day service, expert technicians, affordable pricing.`,
    keywords: [
      `Electrician in ${areaData.name}, Surat`,
      `Electrician near ${areaData.name}`,
      `Electrical services in ${areaData.name}`,
      `Home electrician in ${areaData.name}`,
      `Emergency electrician in ${areaData.name}`,
      `Emergency electrician near ${areaData.name}`,
      `Local electrician ${areaData.name}`,
      `Residential electrician ${areaData.name}`,
      `Commercial electrician ${areaData.name}`,
      `Electrician near me`,
    ],

    alternates: {
      canonical: `https://www.suryaelectrician.com/services/electrician-in-${areaData.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },

  };

}

/* =========================
   PAGE
========================= */
export default async function Page({ params }: Props) {
  const { area } = await params;
  const areaData = electricianAreas.find((a) => a.slug === area);

  if (!areaData) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* Page Header Start */}
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="shape" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg} alt="header" />
            </div>
            <h3>Electrician in {areaData.name}, Surat</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li><Link href="/">Home</Link></li>
                <li><span className="icon-angle-right"></span></li>
                <li><Link href="/services">Services</Link></li>
                <li><span className="icon-angle-right"></span></li>
                <li>Electrician in {areaData.name}</li>
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

            {/* LEFT */}
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">

                <div className="service-details__img">
                  <Image src={serviceImg} alt={`Electrician in ${areaData.name}`} />
                </div>

                <h3 className="service-details__title-1">
                  Best Electrician in {areaData.name}, Surat for Home & Commercial Services
                </h3>

                <p className="service-details__text-1">
                  Need a trusted electrician in <strong>{areaData.name}</strong>, Surat?
                  From quick repairs to complete rewiring, our certified professionals deliver safe,
                  efficient, and high-quality electrical solutions for homes and businesses.
                  Enjoy fast response times and expert workmanship you can count on.
                </p>

                <p className="service-details__text-unique">
                  Living or working near <strong>{areaData.landmarks}</strong> in <strong>{areaData.name}</strong>? If you're dealing with frustrating power fluctuations, outdated panels, or frequent trips, you aren't alone. Our expert local electricians understand the unique electrical layout of this neighborhood's societies, providing fast diagnostics and modern safety upgrades to keep your property safe.
                </p>
               <p className="service-details__text-unique pt10">
  Dealing with <strong>{areaData.uniqueIssue}</strong> near <strong>{areaData.landmarks}</strong>? We regularly service homes and high-rise societies across <strong>{areaData.name}</strong>, providing fast diagnostics and reliable fixes for this exact issue.
</p>

              <p className="service-details__text-2">
  Get reliable, expert service from our verified and highly skilled electrical team in <strong>{areaData.name}</strong>. We specialize in complete house wiring, smart appliance setups, quick trouble-shooting, and rapid response emergency repairs for both residential and commercial spaces.
</p>

                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Electrical wiring & rewiring</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Fan, light & switch installation</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Short circuit & fuse repair</p>
                  </li>
                  <li>
                    <div className="icon"><span className="icon-arrow-right"></span></div>
                    <p>Emergency electrician service</p>
                  </li>
                </ul>

                <div className="service-details__img-box">
                  <div className="row">

                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image src={serviceBoxImg1} alt="Quality Work" />
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
                            Safe, durable, and high-quality electrical work in {areaData.name}.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-img">
                          <Image src={serviceBoxImg2} alt="100% Satisfaction" />
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
                            Trusted electrician services near {areaData.landmarks}.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT */}
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
