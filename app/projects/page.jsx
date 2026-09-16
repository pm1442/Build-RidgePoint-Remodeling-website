import { PageFrame } from "../components/page-frame";
import Link from "next/link";
import Image from "next/image";
import { ProjectGalleryRail } from "../components/project-gallery-rail";

export const metadata = { title: "Project Gallery" };

export default function ProjectsPage() {
  const galleries = [
    { id: "kitchens-and-cabinetry", title: "Kitchens and cabinetry", copy: "Cabinet layouts, storage, and finish details that support everyday use.", images: [["/images/kitchen-gallery-01.png", "Compact kitchen with white cabinets and a breakfast bar"], ["/images/kitchen-gallery-02.png", "Finished kitchen with light cabinets, stainless appliances, and a window over the sink"], ["/images/kitchen-gallery-03.png", "Open kitchen with a green island, pendant lights, and natural wood flooring"], ["/images/kitchen-gallery-04.jpg", "White kitchen with a marble-look island and stainless appliances"], ["/images/kitchen-gallery-05.jpg", "Large kitchen with white cabinets, dark islands, and pendant lights"]] },
    { id: "bathroom-remodeling", title: "Bathroom remodeling", copy: "Thoughtful updates that make the room more comfortable, useful, and easier to live with.", images: [["/images/bathroom-gallery-01.png", "Bathroom with a white vanity, subway-tile tub surround, and wood-look floor"], ["/images/bathroom-gallery-02.png", "Bathroom with a wood vanity, glass shower, and black fixtures"], ["/images/bathroom-gallery-03.png", "Bathroom with a white vanity, black fixtures, and glass shower"]] },
    { id: "custom-carpentry", title: "Custom carpentry", copy: "Built-ins and finish details that add useful storage and help a room feel complete.", images: [["/images/carpentry-gallery-01.png", "Built-in mudroom storage with a wood bench and black-framed door"], ["/images/carpentry-gallery-02.png", "Custom mudroom built-in with storage cabinets, cubbies, and a wood bench"]] },
    { id: "decks-and-outdoor-living", title: "Decks and outdoor living", copy: "Outdoor structures designed around the home, the yard, and the way you want to spend time outside.", images: [["/images/placement-deck.webp", "Outdoor deck placement image"], ["/images/deck-concept-placeholder.webp", "Outdoor deck concept placement image"]] },
    { id: "exterior-and-home-updates", title: "Exterior and home updates", copy: "Ideas for siding, windows, flooring, and the details that help a home feel renewed.", images: [["/images/north-florida-siding-windows.png", "North Florida home with updated siding and windows"]] },
  ];

  return (
    <PageFrame>
      <section className="shell project-gallery-hero">
        <div>
          <p className="eyebrow">Project Gallery</p>
          <h1>Find the starting point for your next project.</h1>
          <p>Browse kitchen, bathroom, cabinetry, carpentry, and outdoor ideas as you consider what could work in your home.</p>
        </div>
        <p className="project-gallery-words" aria-label="Ideas. Discover. Create."><span>Ideas.</span><span>Discover.</span><span>Create.</span></p>
      </section>
      <section className="section shell project-gallery">
        {galleries.map((gallery) => <section className="project-gallery-section" id={gallery.id} key={gallery.title}><div><p className="eyebrow">Placement gallery</p><h2>{gallery.title}</h2><p>{gallery.copy}</p></div>{["kitchens-and-cabinetry", "bathroom-remodeling", "custom-carpentry"].includes(gallery.id) ? <ProjectGalleryRail galleryName={gallery.title} images={gallery.images} /> : <div className={`project-image-pair${gallery.images.length === 1 ? " project-image-single" : ""}`}>{gallery.images.map(([src, alt]) => <figure key={src + alt}><Image src={src} alt={alt} fill sizes="(max-width: 820px) 100vw, 50vw" /><figcaption>Visual placement image</figcaption></figure>)}</div>}</section>)}
      </section>
      <section className="quote-band"><div className="shell quote-band-inner"><h2>Have a project in mind?</h2><Link className="button button-light" href="/contact">Request a Quote</Link></div></section>
    </PageFrame>
  );
}
