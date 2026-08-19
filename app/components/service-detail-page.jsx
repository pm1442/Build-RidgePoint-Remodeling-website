import Link from "next/link";
import { faqs, getService, site } from "../lib/site-data";

export function ServiceDetailPage({ slug }) {
  const service = getService(slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.cities.map((name) => ({ "@type": "City", name })),
    url: `${site.url}/services/${service.slug}/`,
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><section className="page-hero shell service-hero"><p className="eyebrow">{service.eyebrow}</p><h1>{service.name}</h1><p>{service.summary}</p><Link className="button" href="/contact">Request a Quote</Link></section><section className="section shell detail-grid"><div><h2>What your project can include</h2><p>Every scope is shaped around the home, the materials, and the outcome you are after. RidgePoint will confirm the details during the estimate process.</p></div><ul className="detail-list">{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></section><section className="section section-soft"><div className="shell faq-grid"><div><p className="eyebrow">Planning well</p><h2>Questions worth asking early.</h2></div><div>{faqs.slice(0, 4).map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section></>;
}
