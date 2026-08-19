import { PageFrame } from "../components/page-frame";
import { site, services } from "../lib/site-data";

export const metadata = { title: "Request a Quote" };

export default function ContactPage() {
  return <PageFrame><section className="page-hero shell"><p className="eyebrow">Request a quote</p><h1>Tell RidgePoint what you are planning.</h1><p>Call or email to start the conversation. A production quote form can be connected to your preferred email or CRM provider before launch.</p></section><section className="section shell contact-grid"><div><p className="footer-label">Call</p><a className="contact-link" href={`tel:${site.phone}`}>{site.phoneDisplay}</a><p className="footer-label">Email</p><a className="contact-link" href={`mailto:${site.email}`}>{site.email}</a><p className="footer-label">Address</p><p>{site.address}</p><p className="footer-label">Business hours</p><p>{site.hours}</p></div><form className="quote-form"><label>Project type<select defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.slug}>{service.name}</option>)}</select></label><label>Your name<input name="name" autoComplete="name" /></label><label>Email or phone<input name="contact" autoComplete="email" /></label><label>Project details<textarea name="details" rows="5" /></label><button className="button" type="button">Form delivery setup required</button><p className="form-note">This visible form is ready for a Vercel-compatible email or CRM connection. Do not launch it until delivery is configured.</p></form></section></PageFrame>;
}
