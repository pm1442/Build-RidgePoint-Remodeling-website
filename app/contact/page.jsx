import { PageFrame } from "../components/page-frame";
import { QuoteForm } from "../components/quote-form";
import { site } from "../lib/site-data";

export const metadata = { title: "Request a Quote" };

export default function ContactPage() {
  return <PageFrame><section className="page-hero shell"><p className="eyebrow">Request a quote</p><h1>Tell Jason what you want to improve.</h1><p>Share the project you have in mind. RidgePoint will help you talk through whether it is a fit and what a practical next step looks like.</p></section><section className="section shell contact-grid"><div><p className="footer-label">Call</p><a className="contact-link" href={`tel:${site.phone}`}>{site.phoneDisplay}</a><p className="footer-label">Email</p><a className="contact-link" href={`mailto:${site.email}`}>{site.email}</a><p className="footer-label">Address</p><p>{site.address}</p><p className="footer-label">Business hours</p><p>{site.hours}</p></div><QuoteForm /></section></PageFrame>;
}
