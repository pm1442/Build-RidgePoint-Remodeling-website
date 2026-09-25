import Link from "next/link";
import { PageFrame } from "../components/page-frame";
import { site } from "../lib/site-data";

export const metadata = {
  title: "Lake Butler Remodeling Contractor Serving Nearby North Florida",
  description: "Ridge Point Remodeling & Carpentry is based in Lake Butler and serves homeowners within roughly a 60-minute drive across nearby North Florida communities.",
  alternates: { canonical: "/areas-we-serve" },
};

const localAnswers = [
  { question: "Do you serve Gainesville?", answer: "Yes. Ridge Point serves Gainesville and nearby communities when the project scope and schedule are a fit. Share your location and the work you have in mind so Jason can confirm availability." },
  { question: "How far from Lake Butler do you travel?", answer: "Ridge Point typically serves homeowners within roughly a 60-minute drive of Lake Butler. Travel time, project scope, and scheduling all matter, so availability is confirmed before work is scheduled." },
  { question: "What remodeling projects does Ridge Point handle?", answer: "Ridge Point discusses kitchen and bathroom renovations, cabinet sales and installation, custom carpentry, trim, flooring, siding, windows, and deck additions." },
];

export default function AreasPage() {
  return <PageFrame>
    <section className="section shell service-area-towns" aria-labelledby="service-area-towns-heading">
      <div className="service-area-heading"><p className="eyebrow">Service area</p><h1 id="service-area-towns-heading">Lake Butler Remodeling Contractor Serving a 60-Minute Drive</h1><p>{site.serviceAreaSummary}</p></div>
      <div className="city-grid service-area-city-grid">{site.cities.map((city, index) => <div className="service-area-city" key={city} style={{ "--pulse-delay": `${index * 0.32}s` }}><span className="location-marker" aria-hidden="true" /><span>{city}, FL</span></div>)}</div>
    </section>
    <section className="shell service-area-callout"><span className="location-marker service-area-callout-marker" aria-hidden="true" /><div><p className="eyebrow">Outside the list?</p><h2>Not seeing your town?</h2><p>Check your drive time to Lake Butler, then reach out with your project details. Jason can confirm whether the location, scope, and current schedule are a fit.</p></div><div className="service-area-actions"><a className="button button-map" href="https://www.google.com/maps/dir/?api=1&destination=8831%20SW%2088th%20Ct%2C%20Lake%20Butler%2C%20FL%2032054" target="_blank" rel="noreferrer">Check drive time in Google Maps</a><a className="button" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a></div></section>
    <section className="section section-soft"><div className="shell faq-grid"><div><p className="eyebrow">Local questions</p><h2>Clear answers before you reach out.</h2><p>Ridge Point is based in Lake Butler and plans projects with the actual location, scope, and schedule in mind.</p></div><div>{localAnswers.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
    <section className="quote-band"><div className="shell quote-band-inner"><div><p className="eyebrow">Talk it through</p><h2>Have a project in mind?</h2></div><Link className="button button-light" href="/contact">Request a Quote</Link></div></section>
  </PageFrame>;
}
