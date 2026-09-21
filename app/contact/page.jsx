import { PageFrame } from "../components/page-frame";
import { QuoteForm } from "../components/quote-form";
import { site } from "../lib/site-data";

export const metadata = {
  title: "Request a Quote",
  description: "Request a quote for remodeling, carpentry, cabinets, decks, siding, windows, and home updates in Lake Butler and nearby North Florida communities.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RidgePoint Remodeling & Carpentry",
    title: "Request a Quote from RidgePoint Remodeling",
    description: "Share a few details about the room, repair, or outdoor space you want to improve.",
    images: [{ url: "/images/contact-quote-og.png", alt: "RidgePoint Remodeling quote request form" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/contact-quote-og.png"] },
};

export default function ContactPage() {
  return <PageFrame><section className="shell contact-page"><div className="contact-page-intro"><p className="eyebrow">Request a quote</p><h1>Tell Jason what needs attention.</h1><p>Start with the room, repair, or outdoor space you want to improve. A few details are enough to begin a practical conversation.</p><div className="contact-callout"><p className="eyebrow">Prefer to call?</p><a href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a><p>Based in Lake Butler. Serving nearby North Florida communities within roughly a 60-minute drive.</p></div></div><div className="contact-form-panel"><div><p className="eyebrow">Start here</p><h2>Share a few details.</h2><p>Tell us what is not working and how you would like the space to feel when it is done.</p></div><QuoteForm /></div></section></PageFrame>;
}
