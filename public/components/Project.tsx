import Image from "next/image";
import Link from "next/link";

export default function Project() {
  const projects = [
    {
      img: "/assets/images/project/project-1-1.jpg",
      subtitle: "Electrician Service in Surat",
      title: "Outdoor Electrical Repair in Adajan",
      delay: "100ms",
      col: "col-xl-6 col-lg-6 col-md-6",
      popup: "/assets/images/project/project-1-1.jpg",
    },
    {
      img: "/assets/images/project/project-1-2.jpg",
      subtitle: "Home Electrical Services",
      title: "Switchboard Wiring Repair in Surat",
      delay: "300ms",
      col: "col-xl-3 col-lg-6 col-md-6",
      popup: "/assets/images/project/project-1-2.jpg",
    },
    {
      img: "/assets/images/project/project-1-3.jpg",
      subtitle: "Professional Electrician in Surat",
      title: "LED Lighting Installation for Home",
      delay: "600ms",
      col: "col-xl-3 col-lg-6 col-md-6",
      popup: "/assets/images/project/project-1-3.jpg",
    },
    {
      img: "/assets/images/project/project-1-4.jpg",
      subtitle: "Emergency Electrical Repair",
      title: "Short Circuit Fix by Expert Electrician",
      delay: "900ms",
      col: "col-xl-3 col-lg-6 col-md-6",
      popup: "/assets/images/project/project-1-4.jpg",
    },
    {
      img: "/assets/images/project/project-1-5.jpg",
      subtitle: "Residential Electrical Work",
      title: "Ceiling Fan Installation in Surat",
      delay: "1000ms",
      col: "col-xl-3 col-lg-6 col-md-6",
      popup: "/assets/images/project/project-1-5.jpg",
    },
    {
      img: "/assets/images/project/project-1-6.jpg",
      subtitle: "Licensed Electrician Services",
      title: "Complete Home Wiring Maintenance",
      delay: "1100ms",
      col: "col-xl-6 col-lg-6 col-md-6",
      popup: "/assets/images/project/project-1-6.jpg",
    },
  ];

  return (
    <section className="project-one">
      <div className="container">
        <div className="project-one__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Our Gallery</span>
            </div>
            <div className="section-title__title-box sec-title-animation animation-style2">
              <h2 className="section-title__title title-animation">
                Electrical Repair <br />
                Installation Work in Surat
              </h2>
            </div>
          </div>
          <div className="project-one__btn-box">
            <Link href="/projects" className="project-one__btn thm-btn">
              View Electrical Work Gallery in Surat
            </Link>
          </div>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.col} wow fadeInUp`}
              data-wow-delay={project.delay}
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <Image
                      src={project.img}
                      alt={`Electrician work in Surat - ${project.title}`}
                      width={600}
                      height={400}
                    />
                    <div className="project-one__arrow">
                      <Link href={project.popup} className="img-popup">
                        <span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="project-one__content">
                    <p className="project-one__sub-title">{project.subtitle}</p>
                    <h3 className="project-one__title">
                      <Link href="/project-details">{project.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
