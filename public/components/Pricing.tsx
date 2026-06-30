import Image from "next/image";
import shape1 from "@/public/assets/images/shapes/pricing-one-shape-1.png";
import Link from "next/link";

export default function Pricing() {

const commonServices = [
  "Professional Electrician Visit",
  "Switch & Socket Installation",
  "Fan Installation & Repair",
  "MCB & Distribution Board Service",
  "House Wiring Inspection",
  "Emergency Electrical Support",
];

const plans = [
  {
    name: "Basic Electrical Service",
    duration: "Starting From",
    price: "₹299",
    points: [
      ...commonServices,
      "Single Electrical Issue Resolution",
      "Fan, Switch & Socket Repairs",
      "Quick Same-Day Service",
      "Ideal for Homes & Apartments",
    ],
    delay: "100ms",
  },
  {
    name: "Standard Electrical Package",
    duration: "Starting From",
    price: "₹799",
    points: [
      ...commonServices,
      "Multiple Electrical Repairs",
      "MCB & Wiring Troubleshooting",
      "Lighting Installation Support",
      "Priority Technician Visit",
    ],
    delay: "200ms",
  },
  {
    name: "Complete Electrical Solution",
    duration: "Starting From",
    price: "₹1,499",
    points: [
      ...commonServices,
      "Complete Home Electrical Inspection",
      "Wiring, DB & Load Check",
      "Emergency Breakdown Support",
      "Commercial & Residential Service",
      "Dedicated Expert Electrician",
    ],
    delay: "300ms",
  },
];

  return (
    <section className="pricing-one">
      <div className="pricing-one__shape-1">
        <Image
          src={shape1}
          alt="Affordable electrician and home repair service pricing plans"
        />
      </div>

      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline pt10">Our Pricing</span>
          </div>
          <div className="section-title__title-box sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">
              Affordable Electrical Home
              <br /> Repair Plans in Surat
            </h2>
          </div>
        </div>

        <div className="row">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay={plan.delay}
            >
              <div className="pricing-one__single">
                <div className="pricing-one__price-pack">
                  <div className="pricing-one__price-month">
                    <h3>{plan.name}</h3>
                    <p>{plan.duration}</p>
                  </div>
                  <h2>{plan.price}</h2>
                </div>
                <div className="pricing-one__points-and-btn">
                  <ul className="pricing-one__price-points list-unstyled">
                    {plan.points.map((point, i) => (
                      <li key={i}>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-one__btn-box">
                    <Link href="/pricing" className="pricing-one__btn thm-btn">
                      Book Electrician Service
                    </Link>
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
