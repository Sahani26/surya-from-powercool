"use client";

import { useEffect, useState } from "react";

interface CounterItem {
  iconClass: string;
  count: number;
  text: string;
  delay: string;
  extraClass?: string;
}

const counters: CounterItem[] = [
  {
    iconClass: "icon-hands-on-experience",
    count: 20,
    text: "Years of Electrical Experience",
    delay: "100ms",
    extraClass: "counter-one__single-1",
  },
  {
    iconClass: "icon-technician-1",
    count: 5000,
    text: "Electrical Services Completed",
    delay: "100ms",
  },
  {
    iconClass: "icon-project-complete",
    count: 2500,
    text: "Home & Office Wiring Projects",
    delay: "100ms",
  },
  {
    iconClass: "icon-happy-customer",
    count: 4500,
    text: "Happy Customers Across Surat",
    delay: "100ms",
  },
];

export default function Counter() {
  const [counts, setCounts] = useState<number[]>(counters.map(() => 0));

  useEffect(() => {
    const intervals = counters.map((counter, index) => {
      const stepTime = Math.floor(2000 / counter.count);
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < counter.count) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      className="counter-one"
      aria-labelledby="counter-heading"
      role="region"
    >
      <div className="container">
        <h2 id="counter-heading" className="sr-only">
          Professional Electrical Services and Customer Satisfaction Statistics
        </h2>
        <div className="counter-one__inner">
          <div className="row">
            {counters.map((counter, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={counter.delay}
              >
                <div className={`counter-one__single ${counter.extraClass || ""}`}>
                  <div className="counter-one__icon">
                    <span
                      className={counter.iconClass}
                      aria-hidden="true"
                    ></span>
                  </div>

                  <div className="counter-one__count-box">
                    <h3
                      className="odometer"
                      data-value={counter.count}
                      aria-label={`${counter.count}+ ${counter.text}`}
                    >
                      {counts[i].toString().padStart(2, "0")}
                    </h3>
                    <span aria-hidden="true">+</span>
                  </div>

                  <p className="counter-one__text">{counter.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
