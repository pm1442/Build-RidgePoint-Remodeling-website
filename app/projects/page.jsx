import { PageFrame } from "../components/page-frame";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Project Gallery" };

export default function ProjectsPage() {
  const galleries = [
    { title: "Kitchens and cabinetry", copy: "Cabinet layouts, storage, and finish details that support everyday use.", images: [["/images/placement-kitchen.png", "Kitchen renovation placement image"], ["/images/placement-cabinetry.png", "Cabinetry and finish carpentry placement image"]] },
    { title: "Bathrooms and finish work", copy: "Thoughtful room updates paired with the trim and cabinetry details that make a space feel complete.", images: [["/images/placement-bathroom.png", "Bathroom renovation placement image"], ["/images/placement-cabinetry.png", "Finish carpentry placement image"]] },
    { title: "Decks and outdoor living", copy: "Outdoor structures designed around the home, the yard, and the way you want to spend time outside.", images: [["/images/placement-deck.png", "Outdoor deck placement image"], ["/images/deck-concept-placeholder.png", "Outdoor deck concept placement image"]] },
  ];

  return (
    <PageFrame>
      <section className="page-hero shell">
        <p className="eyebrow">Project gallery</p>
        <h1>Ideas for the spaces you want to improve.</h1>
        <p>This gallery uses visual placement images while RidgePoint collects approved photography of its own completed work. They illustrate service types and are not represented as RidgePoint projects.</p>
      </section>
      <section className="section shell project-gallery">
        {galleries.map((gallery) => <section className="project-gallery-section" key={gallery.title}><div><p className="eyebrow">Placement gallery</p><h2>{gallery.title}</h2><p>{gallery.copy}</p></div><div className="project-image-pair">{gallery.images.map(([src, alt]) => <figure key={src + alt}><Image src={src} alt={alt} fill sizes="(max-width: 820px) 100vw, 50vw" /><figcaption>Visual placement image</figcaption></figure>)}</div></section>)}
      </section>
      <section className="quote-band"><div className="shell quote-band-inner"><h2>Have a project in mind?</h2><Link className="button button-light" href="/contact">Request a Quote</Link></div></section>
    </PageFrame>
  );
}
