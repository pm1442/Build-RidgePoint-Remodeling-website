import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "../../components/page-frame";
import { faqs, getService, site } from "../../lib/site-data";

export function generateStaticParams() {
  return ["kitchen-remodeling", "bathroom-remodeling", "cabinet-sales-installation", "custom-carpentry", "deck-building", "flooring-siding-windows"].map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  return service ? { title: `${service.name} in Lake Butler, FL`, description: `${service.summary} RidgePoint serves homeowners across North Central Florida.` } : {};
}

export default function ServicePage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.cities.map((name) => ({ "@type": "City", name })),
    url: `${site.url}/services/${service.slug}/`,
  };

  return (
    <PageFrame>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero shell service-hero">
        <p className="eyebrow">{service.eyebrow}</p>
        <h1>{service.name}</h1>
        <p>{service.summary}</p>
        <Link className="button" href="/contact">Request a Quote</Link>
      </section>
      <section className="section shell detail-grid">
        <div>
          <h2>What your project can include</h2>
          <p>Every scope is shaped around the home, the materials, and the outcome you are after. RidgePoint will confirm the details during the estimate process.</p>
        </div>
        <ul className="detail-list">
          {service.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      </section>
      <section className="section section-soft">
        <div className="shell faq-grid">
          <div><p className="eyebrow">Planning well</p><h2>Questions worth asking early.</h2></div>
          <div>
            {faqs.slice(0, 4).map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
