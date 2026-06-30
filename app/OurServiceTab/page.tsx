"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OurServiceTab() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="service-details__services-box">
      <h3 className="service-details__services-title">Our Service</h3>

      <ul className="service-details__services-list list-unstyled">
        <li className={isActive("/electric-panel-repair") ? "active" : ""}>
          <Link href="/electric-panel-repair">
            Electric Panel Repair
            <span className="icon-arrow-right" />
          </Link>
        </li>

        <li className={isActive("/short-circuit-repair") ? "active" : ""}>
          <Link href="/short-circuit-repair">
            Short circuit repair
            <span className="icon-arrow-right" />
          </Link>
        </li>

        <li className={isActive("/commercial-services") ? "active" : ""}>
          <Link href="/commercial-services">
            Commercial services
            <span className="icon-arrow-right" />
          </Link>
        </li>

        <li className={isActive("/installing-ceiling-fan") ? "active" : ""}>
          <Link href="/installing-ceiling-fan">
            Installing a ceiling fan
            <span className="icon-arrow-right" />
          </Link>
        </li>

        <li className={isActive("/lighting-fixtures") ? "active" : ""}>
          <Link href="/lighting-fixtures">
            Lighting &amp; Fixtures
            <span className="icon-arrow-right" />
          </Link>
        </li>

        <li className={isActive("/maintenance-service") ? "active" : ""}>
          <Link href="/maintenance-service">
            Maintenance Service
            <span className="icon-arrow-right" />
          </Link>
        </li>
        <li className={isActive("/ac-service-installation") ? "active" : ""}>
          <Link href="/ac-service-installation">
            AC Service & Installation
            <span className="icon-arrow-right" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
