import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="RidgePoint home">
          <span className="brand-mark" aria-hidden="true"><Image src="/images/ridgepoint-mark.webp" alt="" width={38} height={42} /></span>
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
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/areas-we-serve">Service Area</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </details>
        <a className="button button-small" href={`tel:${site.phone}`}><span className="call-label-full">Call {site.phoneDisplay}</span><span className="call-label-short">Call</span></a>
      </div>
    </header>
  );
}
