import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "./components/page-frame";
import { SiteSchema } from "./components/site-schema";
import { faqs, processSteps, services, site } from "./lib/site-data";

const serviceImages = ["/images/placement-kitchen.webp", "/images/placement-bathroom.webp", "/images/placement-cabinetry.webp", "/images/placement-cabinetry.webp", "/images/placement-deck.webp", "/images/deck-concept-placeholder.webp"];

export default function HomePage() {
  return (
    <PageFrame>
      <SiteSchema />
      <section className="hero">
        <Image className="hero-image" src="/images/deck-concept-placeholder.webp" fill priority sizes="100vw" alt="Concept placeholder for a RidgePoint deck project" />
        <div className="hero-scrim" />
        <div className="shell hero-content">
          <p className="eyebrow">Lake Butler and North Florida</p>
          <h1>Home remodeling and carpentry built around your life.</h1>
          <p className="hero-copy">From kitchens and bathrooms to cabinets, trim, and decks, Jason helps you turn a frustrating to-do list into a home that works better.</p>
          <div className="hero-actions">
            <Link className="button" href="/contact">Request a Quote</Link>
            <a className="button button-quiet" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="section shell intro-grid">
        <div>
          <p className="eyebrow">You do not have to solve it alone</p>
          <h2>Start with what is not working in your home.</h2>
        </div>
        <div className="intro-copy">
          <p>Whether you are planning a kitchen renovation, looking for cabinets, or thinking about a deck, you do not need to know every construction detail. Jason listens to what you want to improve, helps you understand the options, and gives you a practical next step.</p>
          <Link className="text-link" href="/about">Meet Jason and RidgePoint</Link>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <p className="eyebrow">A simple way forward</p>
          <h2>From a project idea to a clear next step.</h2>
          <div className="process-grid">{processSteps.map((step) => <article key={step.title}><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">What we build</p>
          <h2>Spaces you will use every day.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <Link className={`service-card service-card-${index + 1}`} href={`/services/${service.slug}`} key={service.slug} aria-label={`Explore ${service.name}`}>
              <Image className="service-card-image" src={serviceImages[index]} fill sizes="(max-width: 820px) 100vw, 50vw" alt="" />
              <span className="service-card-scrim" />
              <div className="service-card-content"><p>{service.eyebrow}</p><h3>{service.name}</h3><span>{service.summary}</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section project-callout">
        <div className="shell project-callout-grid">
          <div>
            <p className="eyebrow">See what feels possible</p>
            <h2>Every good project starts with a clear idea of what better looks like.</h2>
          </div>
          <div>
            <p>Explore kitchen, bath, cabinetry, finish-work, and outdoor inspiration. The gallery currently uses clearly marked placement images while RidgePoint gathers approved photos of completed work.</p>
            <Link className="button button-dark" href="/projects">Explore project ideas</Link>
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
        <h2>Local help for the home you already have.</h2>
        <p>RidgePoint serves homeowners in and around Lake Butler, including {site.cities.slice(1, 5).join(", ")}, and surrounding North Florida communities.</p>
        <Link className="text-link" href="/areas-we-serve">Explore the service area</Link>
      </section>

      <section className="quote-band">
        <div className="shell quote-band-inner">
          <div>
            <p className="eyebrow">Take the next step</p>
            <h2>Tell Jason what you want to improve.</h2>
          </div>
          <Link className="button button-light" href="/contact">Request a Quote</Link>
        </div>
      </section>
    </PageFrame>
  );
}
