import { PageFrame } from "../components/page-frame";
import Link from "next/link";
import { ProjectGalleryRail } from "../components/project-gallery-rail";

export const metadata = { title: "Project Gallery" };

export default function ProjectsPage() {
  const galleries = [
    { id: "kitchens-and-cabinetry", title: "Kitchens and cabinetry", copy: "Cabinet layouts, storage, and finish details that support everyday use.", images: [["/images/kitchen-gallery-01.png", "Compact kitchen with white cabinets and a breakfast bar"], ["/images/kitchen-gallery-02.png", "Finished kitchen with light cabinets, stainless appliances, and a window over the sink"], ["/images/kitchen-gallery-03.png", "Open kitchen with a green island, pendant lights, and natural wood flooring"], ["/images/kitchen-gallery-04.jpg", "White kitchen with a marble-look island and stainless appliances"], ["/images/kitchen-gallery-05.jpg", "Large kitchen with white cabinets, dark islands, and pendant lights"]] },
    { id: "bathrooms-and-finish-work", title: "Bathrooms and finish work", copy: "Thoughtful room updates paired with trim, storage, and cabinetry details that make a space feel complete.", images: [["/images/bathroom-gallery-01.png", "Bathroom with a white vanity, subway-tile tub surround, and wood-look floor"], ["/images/bathroom-gallery-02.png", "Bathroom with a wood vanity, glass shower, and black fixtures"], ["/images/bathroom-gallery-03.png", "Bathroom with a white vanity, black fixtures, and glass shower"], ["/images/bathroom-gallery-04.png", "Simple bathroom with a white vanity, tub surround, and North Florida view"], ["/images/bathroom-gallery-05.png", "Before and after interior trim work around a window"], ["/images/carpentry-gallery-01.png", "Built-in mudroom storage with a wood bench and black-framed door"], ["/images/carpentry-gallery-02.png", "Custom mudroom built-in with storage cabinets, cubbies, and a wood bench"]] },
    { id: "outdoor-and-exterior-updates", title: "Outdoor and exterior updates", copy: "Decks, siding, windows, and the practical details that help a home feel renewed inside and out.", images: [["/images/outdoor-exterior-gallery-01.png", "New wood deck and stairs behind a North Florida home with landscaping still in progress"], ["/images/outdoor-exterior-gallery-02.png", "North Florida deck with a wood pergola and a finished lawn"], ["/images/outdoor-exterior-gallery-03.png", "Covered wood deck with a finished North Florida yard"], ["/images/outdoor-exterior-gallery-04.png", "Small wood deck beside a screened porch in a North Florida backyard"], ["/images/outdoor-exterior-gallery-05.png", "Wood deck and steps facing a mowed North Florida lawn"], ["/images/outdoor-exterior-gallery-06.png", "New wood deck outside a screened porch with yard work still underway"], ["/images/outdoor-exterior-gallery-07.png", "Before and after deck replacement in a North Florida backyard"], ["/images/north-florida-siding-windows.png", "North Florida home with updated siding and windows"]] },
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
        {galleries.map((gallery) => <section className="project-gallery-section" id={gallery.id} key={gallery.title}><div><p className="eyebrow">Placement gallery</p><h2>{gallery.title}</h2><p>{gallery.copy}</p></div>{["kitchens-and-cabinetry", "bathrooms-and-finish-work", "outdoor-and-exterior-updates"].includes(gallery.id) ? <ProjectGalleryRail galleryName={gallery.title} images={gallery.images} /> : <div className={`project-image-pair${gallery.images.length === 1 ? " project-image-single" : ""}`}>{gallery.images.map(([src, alt]) => <figure key={src + alt}><Image src={src} alt={alt} fill sizes="(max-width: 820px) 100vw, 50vw" /><figcaption>Visual placement image</figcaption></figure>)}</div>}</section>)}
      </section>
      <section className="quote-band"><div className="shell quote-band-inner"><h2>Have a project in mind?</h2><Link className="button button-light" href="/contact">Request a Quote</Link></div></section>
    </PageFrame>
  );
}
