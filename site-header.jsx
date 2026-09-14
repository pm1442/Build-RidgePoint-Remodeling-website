import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="RidgePoint home">
          <span className="brand-mark" aria-hidden="true"><Image src="/images/ridgepoint-mark.png" alt="" width={38} height={42} /></span>
          <span>
            <strong>RidgePoint</strong>
            <small>Remodeling & Carpentry</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="site-nav">
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/areas-we-serve">Service Area</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="button button-small" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
      </div>
    </header>
  );
}
