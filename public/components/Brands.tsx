"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel"; 

import brand1 from "@/public/assets/images/brand/brand-1-1.png";
import brand2 from "@/public/assets/images/brand/brand-1-2.png";
import brand3 from "@/public/assets/images/brand/brand-1-3.png";
import brand4 from "@/public/assets/images/brand/brand-1-4.png";
import brand5 from "@/public/assets/images/brand/brand-1-5.png";

const brands = [brand1, brand2, brand3, brand4, brand5];

export default function Brands() {
  const [slidePercent, setSlidePercent] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setSlidePercent(100); // ✅ MOBILE → 1 CENTER SLIDE
      } else if (window.innerWidth < 992) {
        setSlidePercent(33.33); // ✅ TABLET → 3 SLIDES
      } else {
        setSlidePercent(20); // ✅ DESKTOP → 5 SLIDES
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="brand-one">
      <div className="container">
        <div className="brand-one__inner">
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            transitionTime={800}
            stopOnHover
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            swipeable
            emulateTouch
            centerMode
            centerSlidePercentage={slidePercent}
            className="brand-one__carousel owl-carousel owl-theme"
          >
            {brands.map((brand, index) => (
              <div className="brand-one__single" key={index}>
                <div className="brand-one__img">
                  <Image src={brand} alt={`brand-${index + 1}`} />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
