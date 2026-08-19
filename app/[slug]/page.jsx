import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "../components/page-frame";
import { services, site } from "../lib/site-data";

const pages = {
  "remodeling-contractor-lake-butler-fl": {
    city: "Lake Butler",
    service: "Home Remodeling and Carpentry",
    title: "Remodeling Contractor in Lake Butler, FL",
    description: "RidgePoint is based in Lake Butler and helps homeowners plan practical improvements for the rooms and outdoor spaces they use every day.",
    focus: ["Kitchen and bathroom renovations", "Cabinet sales and installation", "Finish carpentry, flooring, siding, and windows"],
  },
  "remodeling-contractor-gainesville-fl": {
    city: "Gainesville",
    service: "Home Remodeling and Carpentry",
    title: "Remodeling Contractor Serving Gainesville, FL",
    description: "RidgePoint serves Gainesville homeowners looking for clear communication and hands-on help with home repair, renovation, and carpentry projects.",
    focus: ["Kitchen and bathroom improvements", "Ready-to-assemble cabinet sales and installation", "Trim, doors, built-ins, and practical home updates"],
  },
  "remodeling-contractor-lake-city-fl": {
    city: "Lake City",
    service: "Home Remodeling and Carpentry",
    title: "Remodeling Contractor Serving Lake City, FL",
    description: "RidgePoint serves Lake City homeowners with renovation planning, finish carpentry, cabinet installation, and outdoor improvement projects.",
    focus: ["Kitchen, bath, and flooring updates", "Cabinets for DIY purchase or professional installation", "Decks, siding, window replacement, and finish details"],
  },
  "deck-builder-lake-butler-fl": {
    city: "Lake Butler",
    service: "Deck Building",
    title: "Deck Builder in Lake Butler, FL",
    description: "RidgePoint builds and replaces outdoor decks for Lake Butler homeowners who want a practical, comfortable place to spend time outside.",
    focus: ["New deck construction", "Deck replacements and repairs", "Railings, stairs, and covered features"],
  },
};

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export function generateMetadata({ params }) {
  const page = pages[params.slug];
  return page ? {
    title: page.title,
    description: page.description,
    robots: { index: false, follow: true },
  } : {};
}

export default function LocalLandingPage({ params }) {
  const page = pages[params.slug];
  if (!page) notFound();
  const relevantServices = page.service === "Deck Building" ? services.filter((service) => service.slug === "deck-building") : services.filter((service) => ["kitchen-remodeling", "bathroom-remodeling", "cabinet-sales-installation", "custom-carpentry"].includes(service.slug));
  const schema = { "@context": "https://schema.org", "@type": "Service", name: `${page.service} in ${page.city}, FL`, description: page.description, provider: { "@id": `${site.url}/#business` }, areaServed: { "@type": "City", name: page.city }, url: `${site.url}/${params.slug}/` };

  return <PageFrame><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><section className="page-hero shell"><p className="eyebrow">{page.city}, Florida</p><h1>{page.title}</h1><p>{page.description}</p><Link className="button" href="/contact">Request a Quote</Link></section><section className="section shell intro-grid"><div><p className="eyebrow">How RidgePoint can help</p><h2>Start with a practical plan for your home.</h2></div><div className="intro-copy"><p>Every project begins by discussing the existing space, the work you want done, the materials involved, and timing. RidgePoint will help you determine whether the project is a fit and what the next step should be.</p><ul className="detail-list">{page.focus.map((item) => <li key={item}>{item}</li>)}</ul></div></section><section className="section section-soft"><div className="shell faq-grid"><div><p className="eyebrow">Service options</p><h2>Explore the work you are planning.</h2></div><div className="local-service-links">{relevantServices.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><strong>{service.name}</strong><span>{service.summary}</span></Link>)}</div></div></section><section className="quote-band"><div className="shell quote-band-inner"><div><p className="eyebrow">Talk through the details</p><h2>Have a {page.city} project in mind?</h2></div><a className="button button-light" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a></div></section></PageFrame>;
}
