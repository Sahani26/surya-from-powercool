"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { electricianAreas } from "@/data/electricianAreas";

export default function AreasWeServe() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="service-details__services-box">
      <h3 className="service-details__services-title">
        Areas We Serve in Surat
      </h3>

      <ul className="service-details__services-list list-unstyled">
        {electricianAreas.map((area) => {
          const url = `/services/electrician-in-${area.slug}`;

          return (
            <li key={area.slug} className={isActive(url) ? "active" : ""}>
              <Link href={url}>
                Electrician in {area.name}
                <span className="icon-arrow-right" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
