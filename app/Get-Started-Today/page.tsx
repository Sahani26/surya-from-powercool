import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";
import Header from "@/public/components/Header";
import Link from "next/link";

export default function GetStartedToday() {
  return (
    <> 
    <div className="project-details__get-started">
      
      {/* ✅ SEO Heading */}
      <h2 className="project-details__get-started-title">
        Get Started with Professional Electrician Services
      </h2>

      {/* ✅ SEO Content */}
      <p className="project-details__get-started-text">
        Looking for a trusted electrician near you? Contact our certified
        electricians today for fast, safe, and affordable electrical services
        for homes and businesses.
      </p>

      {/* ✅ Semantic Contact Info */}
      <address className="project-details__get-started-points list-unstyled">
        <li>
          <div className="icon">
            <span className="icon-call"></span>
          </div>
          <p>
            <Link href="tel:+919428654794">
              Call Us: +91 9428654794
            </Link>
          </p>
        </li>

        <li>
          <div className="icon">
            <span className="icon-envelope"></span>
          </div>
          <p>
            <Link href="mailto:suryaelectrician24@gmail.com">
              Email: suryaelectrician24@gmail.com
            </Link>
          </p>
        </li>

        <li>
          <div className="icon">
            <span className="icon-location"></span>
          </div>
          <p>
            Adajan, Surat – 395009 Gujarat, India<br /> 
          </p>
        </li>
      </address>

      {/* ✅ SEO-Friendly CTA */}
      <div className="project-details__get-started-btn-box">
        <Link
          href="/contact"
          className="project-details__get-started-btn thm-btn"
        >
          Request a Free Electrical Quote
        </Link>
      </div>
    </div> 
    </>
  );
}
