import Link from "next/link";
import { faqs, getService, site } from "../lib/site-data";

export function ServiceDetailPage({ slug }) {
  const service = getService(slug);
  const pageFaqs = [...service.serviceFaqs, ...faqs.slice(2, 4)];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.cities.map((name) => ({ "@type": "City", name })),
    url: `${site.url}/services/${service.slug}/`,
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><section className="page-hero shell service-hero"><p className="eyebrow">Serving Lake Butler and North Florida</p><h1>{service.name}</h1><p>{service.summary}</p><Link className="button" href="/contact">Request a Quote</Link></section><section className="section shell intro-grid"><div><p className="eyebrow">Start with what matters</p><h2>Is this the right next step for your home?</h2></div><div className="intro-copy"><p>{service.pageIntro}</p><p>Jason starts by listening to what you want to improve, then helps you talk through a practical path forward. You do not need every answer before reaching out.</p></div></section><section className="section shell detail-grid"><div><p className="eyebrow">Project scope</p><h2>What your project can include</h2><p>Every scope is shaped around the home, the materials, and the outcome you are after. RidgePoint will confirm the details during the estimate process.</p></div><ul className="detail-list">{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></section><section className="section section-soft"><div className="shell faq-grid"><div><p className="eyebrow">A better conversation</p><h2>What to think about before you reach out.</h2></div><div className="planning-list">{service.planningPoints.map((point) => <article key={point}><h3>{point}</h3><p>Bring this up when you contact RidgePoint so Jason can better understand your goals and the right next step.</p></article>)}</div></div></section><section className="section shell faq-grid"><div><p className="eyebrow">Common questions</p><h2>Answers before you commit to a project.</h2></div><div>{pageFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section><section className="quote-band"><div className="shell quote-band-inner"><div><p className="eyebrow">Talk it through</p><h2>Ready to make a plan for your home?</h2></div><Link className="button button-light" href="/contact">Request a Quote</Link></div></section></>;
}
