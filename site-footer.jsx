import Link from "next/link";
import { site } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-brand">RidgePoint</p>
          <p>Remodeling and carpentry for homeowners across North Central Florida.</p>
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
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>{site.address}</p>
          <p>{site.hours}</p>
        </div>
      </div>
      <div className="shell footer-bottom">© {new Date().getFullYear()} RidgePoint Remodeling & Carpentry</div>
    </footer>
  );
}
