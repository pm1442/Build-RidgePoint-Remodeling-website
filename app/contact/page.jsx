import { PageFrame } from "../components/page-frame";
import { QuoteForm } from "../components/quote-form";
import { site } from "../lib/site-data";

export const metadata = { title: "Request a Quote" };

export default function ContactPage() {
  return <PageFrame><section className="shell contact-page"><div className="contact-page-intro"><p className="eyebrow">Request a quote</p><h1>Tell Jason what needs attention.</h1><p>Start with the room, repair, or outdoor space you want to improve. A few details are enough to begin a practical conversation.</p><div className="contact-callout"><p className="eyebrow">Prefer to call?</p><a href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a><p>Based in Lake Butler. Open Monday through Friday, 8:00 AM to 5:00 PM.</p></div></div><div className="contact-form-panel"><div><p className="eyebrow">Start here</p><h2>Share a few details.</h2><p>Tell us what is not working and how you would like the space to feel when it is done.</p></div><QuoteForm /></div></section></PageFrame>;
}
