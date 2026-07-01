"use client";

import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import sliderBg1 from "@/public/assets/images/backgrounds/slider-1-1.jpg";
import sliderBg2 from "@/public/assets/images/backgrounds/slider-1-2.jpeg";
import sliderBg3 from "@/public/assets/images/backgrounds/slider-1-3.jpg";

import sliderImg1 from "@/public/assets/images/resources/main-slider-img-1-1.png";
import sliderImg2 from "@/public/assets/images/resources/main-slider-img-1-2.png";
import sliderImg3 from "@/public/assets/images/resources/main-slider-img-1-3.png";
import Link from "next/link";

const slides = [
  { 
    bg: sliderBg1, 
    img: sliderImg1,
    title: "Professional Electrician Services in Surat",
    description: "Expert electrical repairs, wiring, installations, and maintenance for homes, offices, and commercial properties."
  },
  { 
    bg: sliderBg2, 
    img: sliderImg2,
    title: "24/7 Emergency Electrical Support",
    description: "Fast response for power failures, short circuits, MCB trips, electrical faults, and urgent repair services."
  },
  { 
    bg: sliderBg3, 
    img: sliderImg3,
    title: "Trusted Electrical Experts Near You",
    description: "Providing safe, affordable, and reliable electrical solutions across Surat with experienced electricians."
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="main-slider" aria-label="Main Homepage Slider">
      <Carousel
        autoPlay={true}       // SEO-friendly: autoplay makes content visible to search engines
        infiniteLoop
        interval={6000}       // slightly longer interval for readability
        showThumbs={false}
        showStatus={false}
        swipeable
        emulateTouch
        selectedItem={activeIndex}
        onChange={(index) => setActiveIndex(index)}
        className="main-slider__carousel owl-carousel owl-theme"
      >
        {slides.map((slide, index) => (
          <article
            key={index}
            className={`owl-item ${activeIndex === index ? "active" : ""}`}
            itemScope
            itemType="https://schema.org/Service"   // Schema for SEO
          >
            <div className="item">
              <div
                className="main-slider__bg"
                style={{ backgroundImage: `url(${slide.bg.src})` }}
              ></div>

              <div className="main-slider__shape-1"></div>
              <div className="main-slider__shape-2"></div>
              <div className="main-slider__shape-3"></div>

              <div className="main-slider__img">
                <Image
                  src={slide.img}
                  alt={slide.title}      // descriptive alt text for SEO
                  priority={index === 0}
                />
              </div>

              <div className="container">
                <div className="main-slider__content">
                  <div className="main-slider__sub-title-box">
                    <p className="main-slider__sub-title" itemProp="provider">
                      Service Company in Surat
                    </p>
                    <div className="main-slider__sub-title-shape"></div>
                  </div>

                  <h2 className="main-slider__title" itemProp="name">
                    {slide.title}
                  </h2>

                  <p className="main-slider__text" itemProp="description">
                    {slide.description}
                  </p>

                  <div className="main-slider__btn-box">
                    <Link
                      href="tel:+919023915357"
                      className="main-slider__btn thm-btn call-btn"
                      itemProp="telephone"
                    >
                      <i className="fa fa-phone"></i> Call Now
                    </Link>

                    <Link
                      href="https://wa.me/919023915357"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="main-slider__btn thm-btn whatsapp-btn"
                    >
                      <span className="icon-whatsapp"></span> WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  );
}
