import { PageFrame } from "../components/page-frame";
import { services } from "../lib/site-data";
import Link from "next/link";

export const metadata = { title: "Remodeling and Carpentry Services" };

export default function ServicesPage() {
  return (
    <PageFrame>
      <section className="page-hero shell">
        <p className="eyebrow">Services</p>
        <h1>Made for the rooms and moments that matter.</h1>
        <p>Explore RidgePoint home improvement, cabinet sales and installation, finish carpentry, and deck-building services for North Central Florida homeowners.</p>
      </section>
      <section className="section shell service-list">
        {services.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug} className="service-list-item">
            <span>{service.eyebrow}</span>
            <h2>{service.name}</h2>
            <p>{service.summary}</p>
          </Link>
        ))}
      </section>
    </PageFrame>
  );
}
