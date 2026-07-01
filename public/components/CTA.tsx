import Image from "next/image";
import ctaImg from "@/public/assets/images/resources/cta-one-img-1.png";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-one" aria-labelledby="cta-heading" role="region">
      <div className="container">
        <h2 id="cta-heading" className="sr-only">
          Book a Certified Electrician in Surat Today
        </h2>
        <div className="cta-one__inner wow fadeInUp" data-wow-delay="300ms">
          <div className="cta-one__img">
            <Image
              src={ctaImg}
              alt="Professional electrician service in Surat offering discount"
            />
          </div>

          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Get To Know Us</span>
            </div>
            <div className="section-title__title-box sec-title-animation animation-style2">
             <h2 className="section-title__title title-animation">
  Save More on Professional
  <br /> Electrical Repair & Installation
</h2>
            </div>
          </div>

          <p className="cta-one__text">
  Need a reliable electrician in Surat?
  <br />
  Get fast, affordable, and expert electrical services today.
</p>

          <div className="cta-one__btn-and-call-box">
            <div className="cta-one__btn-box">
              <Link href="/contact" className="cta-one__btn thm-btn">
                Get Appointment
              </Link>
            </div>
            <div className="cta-one__call-box">
              <div className="icon">
                <span className="icon-call"></span>
              </div>
              <div className="content">
                <p>Make a call</p>
                <h4>
                  <Link
                    href="tel:+919023915357"
                    aria-label="Call electrician in Surat"
                  >
                    +91 90239 15357
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
