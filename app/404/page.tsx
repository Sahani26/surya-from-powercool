

import Image from "next/image";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";

// Page Header Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import Link from "next/link";

export const metadata = {
  title: "404 Error | suryaelectrician",
  description: "Page not found",
};

export default function Error404Page() {
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
            <h3>404 Error</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li><Link href="/">Home</Link></li>
                <li><span className="icon-angle-right"></span></li>
                <li>404 Error</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Error Page Start */}
      <section className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__inner">
                <div className="error-page__title-box">
                  <h2 className="error-page__title">404</h2>
                </div>
                <h3 className="error-page__tagline">Sorry, we can't find that page!</h3>
                <p className="error-page__text">The page you are looking for does not exist.</p>
                <form className="error-page__form">
                  <div className="error-page__form-input">
                    <input type="search" placeholder="Search here" />
                    <button type="submit"><i className="icon-search-interface-symbol"></i></button>
                  </div>
                </form>
                <Link href="/" className="thm-btn error-page__btn">Back to home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Error Page End */}

      <CTA />
      <Footer />
    </>
  );
}
