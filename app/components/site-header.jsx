import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";
import { site } from "../lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="RidgePoint home">
          <Image src="/images/ridgepoint-remodeling-logo-official.png" alt="RidgePoint Remodeling & Carpentry" width={820} height={225} sizes="(max-width: 720px) 150px, 210px" priority />
        </Link>
        <nav aria-label="Primary navigation" className="site-nav">
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/areas-we-serve">Service Area</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <MobileNav />
        <a className="button button-small" href={`tel:${site.phone}`}><span className="call-label-full">Call {site.phoneDisplay}</span><span className="call-label-short">Call</span></a>
      </div>
    </header>
  );
}
