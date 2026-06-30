import type { Metadata } from "next";

import Header from "../public/components/Header";
import Service from "../public/components/Service";
import About from "../public/components/About";
import ServicesTwo from "@/public/components/ServicesTwo";
import Testimonials from "../public/components/Testimonials";
import Brands from "../public/components/Brands";
import Video from "../public/components/Video";
import Counter from "../public/components/Counter";
import Project from "../public/components/Project";
import Pricing from "../public/components/Pricing";
import Blog from "../public/components/Blog";
import CTA from "../public/components/CTA";
import Footer from "../public/components/Footer";
import Sleder from "../public/components/Slider"; 

/* ================= HOME SEO META ================= */
export const metadata: Metadata = {
  title: "Electrician & AC Services in Surat | surya electrician",
  description:
    "surya electrician provides professional electrician and AC services in Surat. AC installation, AC repair, electrical repair, maintenance, short circuit repair, and more.",
  keywords: [
    "Electrician in Surat",
    "AC service in Surat",
    "AC installation Surat",
    "AC repair Surat",
    "Electrical services in Surat",
    "Emergency electrician Surat",
    "Short circuit repair Surat",
    "Home electrician Surat",
    "Commercial electrician Surat",
    "surya electrician",
    "suryaelectrician",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com",
  },
  openGraph: {
    title: "Electrician & AC Services in Surat | surya electrician",
    description:
      "Trusted electrician and AC service provider in Surat. Fast service, expert technicians, affordable pricing.",
    url: "https://www.suryaelectrician.com",
    siteName: "surya electrician",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
/* ================= END SEO ================= */

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <div className="page-wrapper">
        <Header />
        <Sleder />
        <Service />
        <About />
        <ServicesTwo />
        {/* <Testimonials /> */}
        <Video />
        <Counter />
        <Project />
        <Brands />
        <Pricing />
        <Blog />
        <CTA />
        <Footer />
      </div>
      {/* <MobileNav /> */}
    </>
  );
}
