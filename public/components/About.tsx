import Link from "next/link";

export default function About() {
  return (
    <section className="about-one" aria-labelledby="about-heading">
      <div className="about-one__shape-one float-bob-y">
        <img
          src="/assets/images/shapes/about-one-shape-1.png"
          alt="Professional electrician working in Surat"
        />
      </div>

      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-xl-6">
            <div
              className="about-one__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="row">
                <div className="col-xl-6">
                  <div className="about-one__img-box-1">
                    <div className="about-one__img-1">
                      <img
                        src="/assets/images/resources/about-one-img-1.jpg"
                        alt="Certified electrician service in Surat"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="about-one__cirtified">
                    <div className="icon">
                      <span className="icon-certified"></span>
                    </div>
                    <h3>
                      We are certified
                      <br />
                      company since 1997
                    </h3>
                  </div>

                  <div className="about-one__img-box-2">
                    <div className="about-one__img-2">
                      <img
                        src="/assets/images/resources/about-one-img-2.jpg"
                        alt="Residential electrical repair work"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
    {/* Right Side */}

<div className="col-xl-6">
  <div
    className="about-one__right wow fadeInRight"
    data-wow-delay="300ms"
  >
    <div className="section-title text-left">
      <div className="section-title__tagline-box">
        <span className="section-title__tagline">
          About Surya Electrician
        </span>
      </div>
 
  <div className="section-title__title-box sec-title-animation animation-style2">
    <h2
      id="about-heading"
      className="section-title__title title-animation"
    >
      Trusted Electrician in Surat for Residential & Commercial Services
    </h2>
  </div>
</div>

<p className="about-one__text-1">
  Surya Electrician is a trusted electrical service provider in Surat,
  offering professional electrical installation, repair, maintenance,
  and troubleshooting solutions. We specialize in house wiring,
  switchboard repair, fan installation, MCB replacement, inverter
  installation, LED lighting setup, and emergency electrical services.
</p>

<p className="about-one__text-2">
  Our experienced electricians are committed to delivering safe,
  reliable, and affordable electrical solutions for homes, apartments,
  offices, shops, and commercial properties across Surat. Whether you
  need a minor electrical repair or a complete wiring project, we ensure
  quality workmanship, timely service, and customer satisfaction.
  We proudly serve areas including Vesu, Piplod, Adajan, Pal,
  Citylight, Althan, Udhna, Dindoli, Katargam, Varachha, Bhatar,
  and nearby locations.
</p>

<div className="about-one__features">
  <ul>
    <li>✓ House Wiring Installation & Repair</li>
    <li>✓ Switchboard & Socket Repair</li>
    <li>✓ Ceiling Fan Installation</li>
    <li>✓ MCB Replacement & Maintenance</li>
    <li>✓ Inverter Installation Services</li>
    <li>✓ Emergency Electrician Support</li>
  </ul>
</div>

<div className="about-one__btn-box">
  <Link
    href="/about-us"
    className="about-one__btn thm-btn"
    aria-label="Learn more about Surya Electrician in Surat"
  >
    Learn More About Us
  </Link>
</div> 

  </div>
</div>

        </div>
      </div>
    </section>
  );
}
