import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "./components/page-frame";
import { SiteSchema } from "./components/site-schema";
import { faqs, processSteps, services, site } from "./lib/site-data";

const serviceImages = ["/images/kitchen-remodel-before-after.png", "/images/rpr-lake-butler-bathroom-remodel.png", "/images/rpr-cabinet-sales-installation-clean.png", "/images/rpr-custom-carpentry-trim.jpg", "/images/rpr-outdoor-deck.jpg", "/images/rpr-flooring-siding-windows.jpg"];
const serviceCardNames = { "deck-building": "Outdoor Decks" };

export const metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RidgePoint Remodeling & Carpentry",
    title: "RidgePoint Remodeling & Carpentry | Lake Butler, FL",
    description: "Kitchen, bath, cabinetry, carpentry, deck, siding, window, and flooring work for homeowners in Lake Butler and nearby North Florida communities.",
    images: [{ url: "/images/ridgepoint-home-hero.png", alt: "Covered wood porch beside a North Florida home" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/ridgepoint-home-hero.png"] },
};

export default function HomePage() {
  return (
    <PageFrame>
      <SiteSchema />
      <section className="hero">
        <Image className="hero-image" src="/images/ridgepoint-home-hero.png" fill priority sizes="100vw" alt="Covered wood porch with steps, railings, and outdoor seating beside a North Florida home and oak trees" />
        <div className="hero-scrim" />
        <div className="shell hero-content">
          <p className="eyebrow">Lake Butler, Florida</p>
          <h1><span className="hero-title-desktop">Lake Butler Remodeling Contractor for Kitchens, Baths &amp; Custom Carpentry</span><span className="hero-title-mobile">Lake Butler Kitchen, Bath &amp; Carpentry Contractor</span></h1>
          <p className="hero-copy"><span className="hero-copy-desktop">Get a practical plan for the parts of your home that no longer work, from kitchens and baths to cabinetry, decks, siding, windows, and finish carpentry. Based in Lake Butler and serving nearby North Florida communities within about an hour&apos;s drive.</span><span className="hero-copy-mobile">Kitchens, baths, cabinetry, decks, siding, windows, and finish carpentry in Lake Butler.</span></p>
          <div className="hero-actions">
            <Link className="button" href="/projects#projects-top">View Our Projects</Link>
            <a className="button button-quiet" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="section popular-services">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Popular services</p>
            <h2>Start with the part of your home that needs attention.</h2>
          </div>
          <div className="popular-service-grid">
            <Link className="popular-service-card popular-service-card-cabinets" href="/services/cabinet-sales-installation">
              <Image src="/images/rpr-cabinet-sales-installation-clean.png" fill sizes="(max-width: 820px) 100vw, 42vw" alt="Finished white kitchen with black pendant lighting, custom cabinetry, and a central island" />
              <span className="popular-service-scrim" />
              <span className="popular-service-content"><strong>Cabinet Sales and Installation</strong><span>Ready-to-assemble cabinets for DIY projects or professional installation.</span></span>
            </Link>
            <article className="popular-service-card popular-service-card-renovations">
              <Image className="popular-service-image-bathroom" src="/images/rpr-kitchen-bath-popular-service.png" fill sizes="(max-width: 820px) 100vw, 33vw" alt="Finished bathroom remodel with a black vanity, double mirrored cabinets, and black tile flooring" />
              <span className="popular-service-scrim" />
              <span className="popular-service-content"><strong>Kitchen and Bath Renovations</strong><span>Thoughtful updates for the rooms that carry the most daily use.</span><span className="popular-service-links"><Link href="/services/kitchen-remodeling">Kitchen renovations</Link><Link href="/services/bathroom-remodeling">Bathroom renovations</Link></span></span>
            </article>
            <Link className="popular-service-card popular-service-card-exterior" href="/services/flooring-siding-windows">
              <Image className="popular-service-image-exterior" src="/images/rpr-siding-window-popular-service.png" fill sizes="(max-width: 820px) 100vw, 25vw" alt="Home exterior with board-and-batten siding and white replacement windows surrounded by mature North Florida trees" />
              <span className="popular-service-scrim" />
              <span className="popular-service-content"><strong>Siding and Window Replacement</strong><span>Practical exterior updates for existing homes.</span></span>
            </Link>
          </div>
          <div className="popular-services-action"><a className="button" href={`tel:${site.phone}`}>Call Now {site.phoneDisplay}</a></div>
        </div>
      </section>

      <section className="section section-owner">
        <div className="shell owner-grid">
          <div className="owner-image">
            <Image src="/images/jason-miller-ridgepoint-remodeling.png" alt="Jason Miller, owner of RidgePoint Remodeling & Carpentry" fill sizes="(max-width: 820px) 100vw, 42vw" />
          </div>
          <div className="owner-copy">
            <p className="eyebrow">Meet Jason Miller</p>
            <h2>Clear answers from the person leading the work.</h2>
            <p>Jason listens first, then helps you understand the practical options for your home. RidgePoint Remodeling & Carpentry is licensed and insured. Florida License #CRC1335692.</p>
            <Link className="text-link" href="/about">About Us</Link>
          </div>
        </div>
      </section>

      <section className="section section-soft process-section">
        <div className="shell">
          <h2>Start here.</h2>
          <div className="process-grid">{processSteps.map((step) => <article key={step.title}><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          <div className="process-action"><Link className="button" href="/contact">Request a Free Estimate</Link></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">What we build</p>
          <h2>Explore all services.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <Link className={`service-card service-card-${index + 1}`} href={`/services/${service.slug}`} key={service.slug} aria-label={`Explore ${service.name}`}>
              <Image className="service-card-image" src={serviceImages[index]} fill sizes="(max-width: 820px) 100vw, 50vw" alt="" />
              <span className="service-card-scrim" />
              <div className="service-card-content"><h3>{serviceCardNames[service.slug] || service.name}</h3><span>{service.summary}</span></div>
            </Link>
          ))}
        </div>
        <div className="services-action"><Link className="button" href="/contact">Request a Free Estimate</Link></div>
      </section>

      <section className="section section-soft">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow">Working with RidgePoint</p>
            <h2>Clear answers before work begins.</h2>
            <p className="section-copy">Licensed and insured. Florida License #CRC1335692. Practical guidance for homeowners who want to know what comes next.</p>
          </div>
          <div>
            {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="section shell local-section">
        <div className="local-section-copy">
          <p className="eyebrow">North Central Florida</p>
          <h2>Local help for the home you already have.</h2>
          <p>{site.serviceAreaSummary}</p>
          <Link className="text-link" href="/areas-we-serve">Explore the service area</Link>
        </div>
        <div className="service-area-map">
          <iframe title="Map centered on RidgePoint Remodeling & Carpentry in Lake Butler, Florida" src="https://www.google.com/maps?q=8831%20SW%2088th%20Ct%2C%20Lake%20Butler%2C%20FL%2032054&z=9&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

    </PageFrame>
  );
}
