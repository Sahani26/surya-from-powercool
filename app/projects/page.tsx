
import Header from "@/public/components/Header"
import Footer from "@/public/components/Footer"
import CTA from "@/public/components/CTA"
import Project from "@/public/components/Project"
import Image from "next/image"
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg1 from "@/public/assets/images/resources/page-header-img-1.png";
import Link from "next/link"
// ⭐ SEO Metadata
export const metadata = {
  title: "Our Projects | suryaelectrician",
  description: "Explore our latest projects, portfolio, and completed works.",
};

export default function page() {
  return (
    <>
      <Header />
      <section className="page-header">
        <div className="page-header__shape-1">
          <Image src={shape1} alt="shape" />
        </div>

        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <Image src={headerImg1} alt="header image" />
            </div>

            <h3>Projects</h3>

            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-right"></span>
                </li>
                <li>Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Project></Project>
      <CTA />
      <Footer />
    </>
  )
}
