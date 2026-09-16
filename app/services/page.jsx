import { PageFrame } from "../components/page-frame";
import { services } from "../lib/site-data";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Remodeling and Carpentry Services" };

const serviceImages = {
  "kitchen-remodeling": { src: "/images/kitchen-remodel-before-after.png", alt: "Before and after kitchen remodel with white cabinets and a marble-look island" },
  "bathroom-remodeling": { src: "/images/bathroom-remodel-before-after.png", alt: "Before and after bathroom remodel with a glass shower and modern vanity" },
  "cabinet-sales-installation": { src: "/images/north-fl-kitchen-cabinets.png", alt: "Finished North Florida kitchen with light cabinets and a central island" },
  "custom-carpentry": { src: "/images/custom-carpentry-built-ins.png", alt: "Custom built-in shelving and fireplace trim in a finished living room" },
  "deck-building": { src: "/images/north-florida-deck.png", alt: "Wood deck with railings and outdoor seating at a North Florida home" },
  "flooring-siding-windows": { src: "/images/north-florida-siding-windows.png", alt: "North Florida home with updated siding and replacement windows" },
};

export default function ServicesPage() {
  return (
    <PageFrame>
      <section className="page-hero shell">
        <p className="eyebrow">Services</p>
        <h1>Home remodeling and carpentry services for North Florida.</h1>
        <p>Explore practical kitchen and bathroom remodeling, cabinet sales and installation, custom carpentry, deck building, flooring, siding, and window updates for homeowners in and around Lake Butler.</p>
      </section>
      <section className="section shell services-directory" aria-labelledby="services-directory-heading">
        <div className="services-directory-intro">
          <p className="eyebrow">Explore the work</p>
          <h2 id="services-directory-heading">Start with the part of your home that needs attention.</h2>
          <p>Each service page explains the work RidgePoint can discuss, common homeowner questions, and a straightforward way to begin.</p>
        </div>
        <div className="services-directory-grid">
          {services.map((service, index) => {
            const image = serviceImages[service.slug];

            return (
              <article className="service-directory-card" key={service.slug} style={{ "--service-delay": `${index * 80}ms` }}>
                <Link href={`/services/${service.slug}`} className="service-directory-link" aria-label={`Learn about ${service.name}`}>
                  <div className="service-directory-image">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 33vw" />
                  </div>
                  <div className="service-directory-content">
                    <p className="eyebrow">{service.eyebrow}</p>
                    <h2>{service.name}</h2>
                    <p>{service.summary}</p>
                    <span className="service-directory-action">Explore service <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </PageFrame>
  );
}
