"use client";

import Image from "next/image";
import comingSoonBg from "@/public/assets/images/backgrounds/coming-soon-page-bg.jpg";



export default function ComingSoonPage() {
  return (
    <div className="page-wrapper">
      {/* Start Coming Soon page */}
      <section className="coming-soon-page full-height relative">
        {/* Background Image */}
        <div className="coming-soon-page__bg absolute inset-0 -z-10">
          <Image
            src={comingSoonBg}
            alt="Coming Soon Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="coming-soon-page__content relative z-10">
          <div className="inner">
            <h1 className="big-title">We're Coming Soon</h1>

            <div className="timer-box clearfix">
              <div className="countdown-timer">
                <div className="default-coundown">
                  <div className="box">
                    <div
                      className="countdown coming-soon-countdown"
                      data-countdown-time="2025/08/28"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text">
              <p>
                Our electrician service website is getting a fresh update.
                <br />
                Subscribe to get launch alerts, service updates, and priority booking.
              </p>
            </div>

            <div className="coming-soon-page__subscribe-box">
              <form className="subscribe-form" action="#">
                <input
                  placeholder="Enter your email address"
                  type="email"
                  required
                />
                <button
                  type="submit"
                  className="thm-btn coming-soon-page__btn"
                >
                  send message <span className="icon-dubble-arrow-right"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Coming Soon page */}
    </div>
  );
}
