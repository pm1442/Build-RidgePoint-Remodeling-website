import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="footer-brand" href="/" aria-label="RidgePoint home"><Image src="/images/ridgepoint-remodeling-logo-official.png" alt="RidgePoint Remodeling & Carpentry" width={820} height={225} sizes="260px" /></Link>
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
          <p>{site.address}</p>
          <p>{site.hours}</p>
        </div>
      </div>
      <div className="footer-bottom"><div className="shell">© {new Date().getFullYear()} RidgePoint Remodeling & Carpentry</div></div>
    </footer>
  );
}
