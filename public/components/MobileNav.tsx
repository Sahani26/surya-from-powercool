"use client";

import Image from "next/image";
import logo from "@/public/assets/images/resources/logo-2.png";
import Link from "next/link";

export default function MobileNav() {
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <Image
                src={logo}
                width={140}
                alt="Electrician services in Surat – Company Logo"
              />
            </Link>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container"></div>
          {/* /.mobile-nav__container */}

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:suryaelectrician24@gmail.com">
                suryaelectrician24@gmail.com
              </Link>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <Link href="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">

              <Link
                href="https://x.com/suryaelectrician"
                aria-label="Follow suryaelectrician on Twitter"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i className="fab fa-twitter"></i>
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61585625452664"
                aria-label="Follow suryaelectrician on Facebook"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i className="fab fa-facebook-square"></i>
              </Link>

              <Link
                href="https://www.instagram.com/suryaelectrician"
                aria-label="Follow suryaelectrician on Instagram"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i className="fab fa-instagram"></i>
              </Link>

              <Link
                href="https://www.linkedin.com/in/suryaelectrician-suryaelectrician-9385b73a1"
                aria-label="Connect with suryaelectrician on LinkedIn"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
                {/* Google Business */}
                                <Link href="https://www.google.co.in/search?sca_esv=265768d7d1a792dc&kgmid=%2Fg%2F11zg28vnf_&q=Surya%20Electrician&shem=epsd1%2Cltae%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm4%2F3" target="_blank">
                                    <i className="fab fa-google"></i>
                                </Link>

            </div>
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            {/* /.sr-only */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}

      <Link
        href="#"
        data-target="html"
        className="scroll-to-target scroll-to-top"
      >
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner"></span>
        </span>
        <span className="scroll-to-top__text"> Go Back Top</span>
      </Link>
    </>
  );
}
