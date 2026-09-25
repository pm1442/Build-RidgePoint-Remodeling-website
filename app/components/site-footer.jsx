import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="footer-brand" href="/" aria-label="Ridge Point home"><Image src="/images/ridgepoint-remodeling-logo-official.png" alt="Ridge Point Remodeling & Carpentry" width={820} height={225} sizes="260px" /></Link>
          <p>Based in Lake Butler, serving nearby North Florida communities within roughly a 60-minute drive.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/areas-we-serve">Service Area</Link>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          <a href="https://maps.app.goo.gl/WhDza9c2G3ArN4Zs5" target="_blank" rel="noreferrer" aria-label={`Open directions to ${site.address} in Google Maps`}>{site.address}</a>
          <p>{site.hours}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="shell footer-bottom-inner">
          <span>© {new Date().getFullYear()} Ridge Point Remodeling & Carpentry. All rights reserved.</span>
          <span>Website design and hosting by <a href="https://www.palmtec.biz" target="_blank" rel="noreferrer">PalmTec LLC</a>.</span>
        </div>
      </div>
    </footer>
  );
}
