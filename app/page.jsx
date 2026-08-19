import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "./components/page-frame";
import { SiteSchema } from "./components/site-schema";
import { faqs, services, site } from "./lib/site-data";

export default function HomePage() {
  return (
    <PageFrame>
      <SiteSchema />
      <section className="hero">
        <Image className="hero-image" src="/images/deck-concept-placeholder.png" fill priority sizes="100vw" alt="Concept placeholder for a RidgePoint deck project" />
        <div className="hero-scrim" />
        <div className="shell hero-content">
          <p className="eyebrow">Lake Butler, Florida</p>
          <h1>Craftsmanship that feels at home.</h1>
          <p className="hero-copy">Home improvement, finish carpentry, cabinet sales and installation, and outdoor decks built for the way you live.</p>
          <div className="hero-actions">
            <Link className="button" href="/contact">Request a Quote</Link>
            <a className="button button-quiet" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="section shell intro-grid">
        <div>
          <p className="eyebrow">Built around the details</p>
          <h2>A straightforward partner for projects that matter.</h2>
        </div>
        <div className="intro-copy">
          <p>RidgePoint brings hands-on home improvement and finish carpentry together under one roof. From a kitchen update to a new outdoor deck, the work starts with a clear conversation and ends with details that hold up.</p>
          <Link className="text-link" href="/about">Meet RidgePoint</Link>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">What we build</p>
          <h2>Spaces you will use every day.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <Link className={`service-card service-card-${index + 1}`} href={`/services/${service.slug}`} key={service.slug}>
              <p>{service.eyebrow}</p>
              <h3>{service.name}</h3>
              <span>{service.summary}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section project-callout">
        <div className="shell project-callout-grid">
          <div>
            <p className="eyebrow">Work, not stock claims</p>
            <h2>Every good project has a story worth showing.</h2>
          </div>
          <div>
            <p>The finished site will feature RidgePoint project photography, scope notes, and practical results. This concept image is temporary and will be replaced before launch.</p>
            <Link className="button button-dark" href="/projects">See the project gallery</Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow">Helpful answers</p>
            <h2>Start with the questions that matter.</h2>
            <p className="section-copy">A clear conversation is the best first step for any home improvement project.</p>
          </div>
          <div>
            {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="section shell local-section">
        <p className="eyebrow">North Central Florida</p>
        <h2>Local work deserves local understanding.</h2>
        <p>RidgePoint serves homeowners in and around Lake Butler, including {site.cities.slice(1, 5).join(", ")}, and surrounding communities.</p>
        <Link className="text-link" href="/areas-we-serve">Explore the service area</Link>
      </section>

      <section className="quote-band">
        <div className="shell quote-band-inner">
          <div>
            <p className="eyebrow">Start the conversation</p>
            <h2>Tell us what you are planning.</h2>
          </div>
          <Link className="button button-light" href="/contact">Request a Quote</Link>
        </div>
      </section>
    </PageFrame>
  );
}
