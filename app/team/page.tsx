

import Image from "next/image";

import team1 from "@/public/assets/images/team/team-1-1.jpg";
import team4 from "@/public/assets/images/team/team-1-2.jpg";
import team3 from "@/public/assets/images/team/team-1-3.jpg";
import team2 from "@/public/assets/images/team/team-1-4.png";
import team5 from "@/public/assets/images/team/team-1-5.jpg";
import team6 from "@/public/assets/images/team/team-1-6.jpg";

import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg1 from "@/public/assets/images/resources/page-header-img-1.png";
import Header from "@/public/components/Header";
import Footer from "@/public/components/Footer";
import CTA from "@/public/components/CTA";
import Link from "next/link";
export const metadata = {
    title: "Expert AC Repair & Electrician Team in Pal Adajan Green City, Surat | suryaelectrician",
    description:
        "Meet the certified AC repair technicians and electricians at suryaelectrician serving Pal Adajan Green City, Surat. We provide fast AC installation, inverter AC service, gas filling, cooling repair, and complete electrical maintenance for homes and businesses.",
    keywords:
        "AC repair Pal Adajan Green City, electrician Pal Adajan Surat, AC service near me Pal Adajan, AC installation Pal Adajan, inverter AC repair Surat, electrical repair Pal Adajan Green City, suryaelectrician team",
    openGraph: {
        title: "Professional AC & Electrical Experts in Pal Adajan Green City, Surat | suryaelectrician",
        description:
            "Trusted AC repair and electrician professionals delivering fast, affordable, and doorstep home services in Pal Adajan Green City, Surat.",
        type: "website",
    },
};

export default function page() {
    return (
        <>
            <Header />
            <div className="page-wrapper">
                <section className="page-header">
                    <div className="page-header__shape-1">
                        <Image src={shape1} alt="Decorative background shape design" />
                    </div>
                    <div className="container">
                        <div className="page-header__inner">
                            <div className="page-header__img-1">
                                <Image src={headerImg1} alt="suryaelectrician professional AC repair and electrician team in Surat" />
                            </div>
                            <h3>Team – AC & Electrical Experts in Surat all Areas</h3>
                            <div className="thm-breadcrumb__inner">
                                <ul className="thm-breadcrumb list-unstyled">
                                    <li><Link href="/">Home</Link></li>
                                    <li><span className="icon-angle-right"></span></li>
                                    <li>Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-page">
                    <div className="container">
                        <div className="row">

                       {/* SEO Content Section */}
<div className="col-xl-12">
    <div style={{ marginBottom: "40px" }}>
        <h2>Certified AC Repair & Electrician Professionals in Pal Adajan Green City, Surat</h2>
        <p>
            suryaelectrician is a trusted home service provider in <strong>Pal Adajan Green City, Surat</strong> offering
            expert AC repair, AC installation, inverter AC servicing, AC gas filling,
            cooling issue repair, and complete electrical maintenance solutions.
            Our skilled technicians provide fast doorstep service for apartments,
            societies, and residential homes in the Pal Adajan area.
        </p>
        <p>
            If you are searching for "AC repair near me in Pal Adajan Green City"
            or "electrician in Pal Adajan Surat", our experienced professionals are
            ready to deliver reliable, affordable, and same-day service support
            for both residential and commercial properties.
        </p>
    </div>
</div>
                            {/* Team Members */}

                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team1} alt="Akhilesh Bhai Senior Electrician in Surat 395009" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <Link href="#">Akhilesh Bhai</Link>
                                            </h3>
                                            <p className="team-one__sub-title">Senior Electrician & Wiring Specialist</p>
                                            <div className="team-one__social">
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                                <Link href="#"><span className="icon-xpa"></span></Link>
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team2} alt="Golu Sahani AC Installation Expert in Surat" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <Link href="#">Golu Sahani</Link>
                                            </h3>
                                            <p className="team-one__sub-title">AC Installation & Service Engineer</p>
                                            <div className="team-one__social">
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                                <Link href="#"><span className="icon-xpa"></span></Link>
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* 
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team3} alt="Warren Wade AC Repair Technician Surat 395009" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <Link href="#">Warren Wade</Link>
                                            </h3>
                                            <p className="team-one__sub-title">AC Repair & Maintenance Specialist</p>
                                            <div className="team-one__social">
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                                <Link href="#"><span className="icon-xpa"></span></Link>
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team4} alt="Rohit Sahani Emergency Electrician Surat 395009" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <Link href="#">Rohit Sahani</Link>
                                            </h3>
                                            <p className="team-one__sub-title">Emergency Electrical Service Expert</p>
                                            <div className="team-one__social">
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                                <Link href="#"><span className="icon-xpa"></span></Link>
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team5} alt="Raj  Customer Service Manager Surat" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <Link href="#">Raj </Link>
                                            </h3>
                                            <p className="team-one__sub-title">Emergency Electrical Service Expert</p>
                                            <div className="team-one__social">
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                                <Link href="#"><span className="icon-xpa"></span></Link>
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={team6} alt="Jitendra Kumar Co-founder suryaelectrician Surat 395009" />
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <Link href="#">Jitendra Kumar</Link>
                                            </h3>
                                            <p className="team-one__sub-title">Emergency Electrical Service Expert</p>
                                            <div className="team-one__social">
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                                <Link href="#"><span className="icon-xpa"></span></Link>
                                                <Link href="#"><span className="icon-link-in"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <CTA />
            <Footer />
        </>
    )
}