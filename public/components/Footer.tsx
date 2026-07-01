import Image from "next/image";
import footerLogo from "@/public/assets/images/resources/Footer-Logo.png";

import footerShape from "@/public/assets/images/shapes/footer-shape-1.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__shape-1 float-bob-x">
          <Image src={footerShape} alt="Footer Shape" />
        </div>

        <div className="container">
          <div className="site-footer__top">
            <div className="row">
              {/* About Widget */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="/">
                      <Image
                        src={footerLogo}
                        alt="Electrician in Surat – Professional Electrical Services"
                      />
                    </Link>
                  </div>
                 <p className="footer-widget__about-text">
  Surya Electrician provides professional electrical services
  in Surat for homes, offices, shops, and commercial spaces.
  <br />
  We specialize in wiring, lighting installation, fan fitting,
  power fault repair, and electrical maintenance.
  <br />
  Our experienced electricians ensure safe, reliable, and
  affordable solutions with quick response support.
</p>
                  <div className="site-footer__social">
                   
                    <Link
                      href="https://www.facebook.com/profile.php?id=61585625452664"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Electrician in Surat on Facebook"
                    >
                      <i className="icon-facebook" aria-hidden="true"></i>
                    </Link>

                    <Link
                      href="https://x.com/suryaelectrician"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Electrician in Surat on X (Twitter)"
                    >
                      <i className="icon-xpa" aria-hidden="true"></i>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/suryaelectrician-suryaelectrician-9385b73a1 "
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Electrician services in Surat on LinkedIn"
                    >
                      <i className="icon-link-in" aria-hidden="true"></i>
                    </Link>

                    <Link
                      href="https://www.instagram.com/suryaelectrician?igsh=bWgzcGh6ZXJ3ZjNv&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow our electrician services in Surat on Instagram"
                    >
                      <i className="icon-instagram" aria-hidden="true"></i>
                    </Link>

                      {/* Google Business */}
                                <Link href="https://www.google.co.in/search?sca_esv=265768d7d1a792dc&kgmid=%2Fg%2F11zg28vnf_&q=Surya%20Electrician&shem=epsd1%2Cltae%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm4%2F3" target="_blank">
                                    <i className="fab fa-google"></i>
                                </Link>
                  </div>
                </div>
              </div>

              {/* Useful Links */}
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__usefull-link">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Our Company</h3>
                  </div>
                  <div className="footer-widget__link-box">
                    <ul className="footer-widget__link list-unstyled">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Services Links */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__services">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Our Service</h3>
                  </div>
                  <ul className="footer-widget__link list-unstyled">
                    <li>
                      <Link href="/electric-panel-repair">
                        Electric Panel Repair in Surat
                      </Link>
                    </li>
                    <li>
                      <Link href="/lighting-fixtures">
                        Lighting Installation Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/maintenance-service">
                        Electrical Maintenance Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/installing-ceiling-fan">
                        Ceiling Fan Installation
                      </Link>
                    </li> 
                    <li>
                      <Link href="/services/electrician-in-surat">
                       Areas We Serve
                      </Link>
                    </li> 
                  </ul>
                </div>
              </div>

              {/* Contact Widget */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__contact">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Contact us</h3>
                  </div>
                  <ul className="footer-widget__contact-list list-unstyled">
                    <li>
                      <h3>Contact</h3>
                      <div className="content">
                        <p>
                          <Link href="tel:+919023915357">
                            +91 90239 15357
                          </Link>
                        </p>
                        <p>
                          <Link href="mailto:suryaelectrician@gmail.com">
                            suryaelectrician@gmail.com
                          </Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <h3>Address</h3>
                      <div className="content"
                      title="Govindji Park, L-101,
Umra Gam, Piplod,
Surat, Gujarat 395007"
>
                        <p>
                          Govindji Park, L-101,
Umra Gam, Piplod,
Surat, Gujarat 395007 Gujarat, India
                        </p>
                      </div>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                © {new Date().getFullYear()} www.suryaelectrician.com All rights reserved.

              </p>
              <ul className="list-unstyled site-footer__bottom-menu">
                 
                <li>
                  <Link href="/terms-and-conditions">Terms and Condition</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy and Policy</Link>
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div id="back-to-top" className="show">
        <Link
          href="tel:+919023915357"
          className="footer-bt"
          data-tooltip="Call Now"
        >
          <i className="fa fa-phone"></i>
        </Link>

        <Link
          href="https://wa.me/9023915357"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-bt"
          data-tooltip="WhatsApp"
        >
          <img
            src="/assets/images/social/communication.png"
            alt="Chat with Electrician in Surat on WhatsApp"
            className="whatsapp-icon"
          />
        </Link>
      </div>
    </>
  );
}
