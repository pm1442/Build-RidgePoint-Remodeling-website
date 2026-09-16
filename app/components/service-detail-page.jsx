import Link from "next/link";
import Image from "next/image";
import { faqs, getService, site } from "../lib/site-data";

const projectGalleryLinks = {
  "kitchen-remodeling": { href: "/projects#kitchens-and-cabinetry", label: "View kitchen ideas" },
  "bathroom-remodeling": { href: "/projects#bathrooms-and-finish-work", label: "View bathroom ideas" },
  "cabinet-sales-installation": { href: "/projects#kitchens-and-cabinetry", label: "View cabinet ideas" },
  "custom-carpentry": { href: "/projects#bathrooms-and-finish-work", label: "View carpentry ideas" },
  "deck-building": { href: "/projects#outdoor-and-exterior-updates", label: "View deck ideas" },
  "flooring-siding-windows": { href: "/projects#outdoor-and-exterior-updates", label: "View exterior ideas" },
};

export function ServiceDetailPage({ slug, showcase, heroImage, faqHeading, faqIntro, faqCtaLabel, centeredScope = false, hideIntro = false, hideBottomCta = false }) {
  const service = getService(slug);
  const projectGalleryLink = projectGalleryLinks[slug];
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

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className={`page-hero shell service-hero${heroImage ? " service-hero-with-image" : ""}`}><div className="service-hero-copy"><p className="eyebrow">Lake Butler and nearby North Florida communities</p><h1>{service.name}</h1><p>{service.summary}</p><div className="service-hero-actions"><Link className="button" href="/contact">Request a Quote</Link><Link className="button button-outline" href={projectGalleryLink.href}>{projectGalleryLink.label}</Link><Link className="text-link" href="/areas-we-serve">Check the service area</Link></div></div>{heroImage && <figure className="service-hero-media"><Image src={heroImage.src} alt={heroImage.alt} width={1024} height={576} sizes="(max-width: 820px) 100vw, 52vw" preload /></figure>}</section>
    {!hideIntro && <section className="section shell intro-grid"><div><p className="eyebrow">Start with what matters</p><h2>Is this the right next step for your home?</h2></div><div className="intro-copy"><p>{service.pageIntro}</p><p>Jason starts by listening to what you want to improve, then helps you talk through a practical path forward. You do not need every answer before reaching out.</p></div></section>}
    {showcase && <section className="section service-showcase"><div className="shell service-showcase-grid"><div><p className="eyebrow">{showcase.eyebrow}</p><h2>{showcase.title}</h2><p>{showcase.description}</p></div><figure><Image src={showcase.image} alt={showcase.alt} width={1024} height={576} sizes="(max-width: 820px) 100vw, 62vw" /><figcaption>{showcase.caption}</figcaption></figure></div></section>}
    <section className={`section shell detail-grid${centeredScope ? " detail-grid-centered scope-reveal" : ""}`}><div><p className="eyebrow">Project scope</p><h2>{service.scopeHeading || "What your project can include"}</h2><p>{service.scopeDescription || "Every scope is shaped around the home, the materials, and the outcome you are after. RidgePoint will confirm the details during the estimate process."}</p></div>{service.scopeItems ? <div className="scope-item-list">{service.scopeItems.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div> : <ul className="detail-list">{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</section>
    {!service.scopeItems && <section className="section section-soft"><div className="shell faq-grid"><div><p className="eyebrow">A better conversation</p><h2>What to think about before you reach out.</h2></div><div className="planning-list">{service.planningPoints.map((point) => <article key={point}><h3>{point}</h3><p>Bring this up when you contact RidgePoint so Jason can better understand your goals and the right next step.</p></article>)}</div></div></section>}
    <section className="section shell faq-grid"><div><p className="eyebrow">Frequently asked questions</p><h2>{faqHeading || "Answers before you commit to a project."}</h2>{faqIntro && <p>{faqIntro}</p>}{faqCtaLabel && <Link className="button faq-cta" href="/contact">{faqCtaLabel}</Link>}</div><div>{pageFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
    {!hideBottomCta && <section className="quote-band"><div className="shell quote-band-inner"><div><p className="eyebrow">Talk it through</p><h2>Ready to make a plan for your home?</h2></div><Link className="button button-light" href="/contact">Request a Quote</Link></div></section>}
  </>;
}
