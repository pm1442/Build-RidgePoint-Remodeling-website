import { PageFrame } from "../components/page-frame";
import { services } from "../lib/site-data";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Remodeling and Carpentry Services", description: "Kitchen, bathroom, cabinetry, custom carpentry, deck, siding, window, and flooring services for homeowners in Lake Butler and nearby North Florida communities.", alternates: { canonical: "/services" } };

const serviceImages = {
  "kitchen-remodeling": { src: "/images/kitchen-remodel-before-after.png", alt: "Before and after kitchen remodel with white cabinets and a marble-look island" },
  "bathroom-remodeling": { src: "/images/bathroom-remodel-before-after.png", alt: "Before and after bathroom remodel with a glass shower and modern vanity" },
  "cabinet-sales-installation": { src: "/images/rpr-cabinet-sales-installation.jpg", alt: "RidgePoint cabinet installation in a finished white kitchen with black pendant lighting and a central island" },
  "custom-carpentry": { src: "/images/custom-carpentry-built-ins.png", alt: "Custom built-in shelving and fireplace trim in a finished living room" },
  "deck-building": { src: "/images/rpr-outdoor-deck.jpg", alt: "New wood deck with railings and steps at a North Florida home" },
  "flooring-siding-windows": { src: "/images/north-florida-siding-windows.png", alt: "North Florida home with updated siding and replacement windows" },
};

const serviceCardNames = { "deck-building": "Outdoor Decks" };

export default function ServicesPage() {
  return (
    <PageFrame>
      <section className="section shell services-directory" aria-labelledby="services-directory-heading">
        <div className="services-directory-intro">
          <p className="eyebrow">Explore the work</p>
          <h1 id="services-directory-heading">What needs attention?</h1>
          <p>Start with the room, repair, or outdoor space you want to improve. Each service page outlines the work RidgePoint can discuss and answers common questions before you reach out.</p>
        </div>
        <div className="services-directory-grid">
          {services.map((service, index) => {
            const image = serviceImages[service.slug];
            const cardName = serviceCardNames[service.slug] || service.name;

            return (
              <article className="service-directory-card" key={service.slug} style={{ "--service-delay": `${index * 80}ms` }}>
                <Link href={`/services/${service.slug}`} className="service-directory-link" aria-label={`Learn about ${cardName}`}>
                  <div className="service-directory-image">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 33vw" />
                  </div>
                  <div className="service-directory-content">
                    <p className="eyebrow">{service.eyebrow}</p>
                    <h2>{cardName}</h2>
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
