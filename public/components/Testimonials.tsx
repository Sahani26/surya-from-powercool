"use client";

import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Homeowner, Surat",
    image: "/assets/images/testimonial/testimonial-1-1.jpg",
    alt: "Rajesh Patel - satisfied electrician service customer in Surat",
    text: "“Excellent electrician service. The team quickly fixed our wiring issues and installed new lighting. Professional, punctual, and reasonably priced.”",
    rating: 5,
  },
  {
    name: "Amit Shah",
    role: "Business Owner, Surat",
    image: "/assets/images/testimonial/testimonial-1-2.jpg",
    alt: "Amit Shah - commercial electrical service client",
    text: "“Very reliable electricians. They resolved an electrical fault at our office the same day and ensured everything was working safely. Highly recommended.”",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="testimonial-one"
      aria-label="Client Testimonials"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* 🔹 Business info for Google */}
      <meta itemProp="name" content="suryaelectrician" />
      <meta itemProp="url" content="https://www.suryaelectrician.com" />

      <div className="container">
        <h2 className="section-title">
          What Our Clients Say
        </h2>

        <Carousel
          autoPlay ={true}
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          swipeable
          emulateTouch
          className="testimonial-one__carousel"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="item"
              itemScope
              itemType="https://schema.org/Review"
              itemProp="review"
            >
              <div className="testimonial-one__single">
                <div className="testimonial-one__img">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    itemProp="image"
                  />
                </div>

                <div className="testimonial-one__content">
                  <div className="testimonial-one__quote">
                    <span className="icon-quote"></span>
                  </div>

                  <p className="testimonial-one__text" itemProp="reviewBody">
                    {testimonial.text}
                  </p>

                  {/* ✅ FIXED REVIEW RATING (Schema only) */}
                  <div
                    className="testimonial-one__rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    {/* 🔹 Schema (hidden) */}
                    <meta
                      itemProp="ratingValue"
                      content={String(testimonial.rating)}
                    />
                    <meta itemProp="bestRating" content="5" />
                    <meta itemProp="worstRating" content="1" />

                    {/* ⭐ UI Stars (unchanged) */}
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="fas fa-star">★</span>
                    ))}
                  </div>

                  <div
                    className="testimonial-one__client-info"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <h3>
                      <Link href="/testimonials" itemProp="name">
                        {testimonial.name}
                      </Link>
                    </h3>
                    <p itemProp="jobTitle">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
