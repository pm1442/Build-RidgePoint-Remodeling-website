import { PageFrame } from "../components/page-frame";
import Link from "next/link";
import { ProjectGalleryRail } from "../components/project-gallery-rail";
import { ProjectInspirationSScroll } from "../components/project-inspiration-s-scroll";
import { ProjectGalleryStickyStack } from "../components/project-gallery-sticky-stack";

export const metadata = {
  title: "Project Inspiration",
  description: "Browse kitchen, bathroom, custom carpentry, deck, siding, and window project ideas from RidgePoint Remodeling & Carpentry in Lake Butler, Florida.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RidgePoint Remodeling & Carpentry",
    title: "RidgePoint Project Inspiration",
    description: "Browse kitchen, bathroom, carpentry, deck, siding, and window project ideas from RidgePoint Remodeling & Carpentry.",
    images: [{ url: "/images/outdoor-exterior-gallery-03.png", alt: "Covered wood deck with a finished North Florida yard" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/outdoor-exterior-gallery-03.png"] },
};

export default function ProjectsPage() {
  const galleries = [
    { id: "kitchens-and-cabinetry", title: "Kitchens and cabinetry", copy: "Cabinet layouts, storage, and finish details that support everyday use.", images: [["/images/kitchen-gallery-01.png", "Compact kitchen with white cabinets and a breakfast bar"], ["/images/kitchen-gallery-02.png", "Finished kitchen with light cabinets, stainless appliances, and a window over the sink"], ["/images/kitchen-gallery-03.png", "Open kitchen with a green island, pendant lights, and natural wood flooring"], ["/images/kitchen-gallery-04.jpg", "White kitchen with a marble-look island and stainless appliances"], ["/images/kitchen-gallery-05.jpg", "Large kitchen with white cabinets, dark islands, and pendant lights"]] },
    { id: "bathrooms-and-finish-work", title: "Bathrooms and finish work", copy: "Thoughtful room updates paired with trim, storage, and cabinetry details that make a space feel complete.", images: [["/images/bathroom-gallery-01.png", "Bathroom with a white vanity, subway-tile tub surround, and wood-look floor"], ["/images/bathroom-gallery-02.png", "Bathroom with a wood vanity, glass shower, and black fixtures"], ["/images/bathroom-gallery-03.png", "Bathroom with a white vanity, black fixtures, and glass shower"], ["/images/bathroom-gallery-04.png", "Simple bathroom with a white vanity, tub surround, and North Florida view"], ["/images/bathroom-gallery-05.png", "Before and after interior trim work around a window"], ["/images/carpentry-gallery-01.png", "Built-in mudroom storage with a wood bench and black-framed door"], ["/images/carpentry-gallery-02.png", "Custom mudroom built-in with storage cabinets, cubbies, and a wood bench"]] },
    { id: "outdoor-and-exterior-updates", title: "Outdoor and exterior updates", copy: "Decks, siding, windows, and the practical details that help a home feel renewed inside and out.", images: [["/images/outdoor-exterior-gallery-01.png", "New wood deck and stairs behind a North Florida home with landscaping still in progress"], ["/images/outdoor-exterior-gallery-02.png", "North Florida deck with a wood pergola and a finished lawn"], ["/images/outdoor-exterior-gallery-03.png", "Covered wood deck with a finished North Florida yard"], ["/images/outdoor-exterior-gallery-04.png", "Small wood deck beside a screened porch in a North Florida backyard"], ["/images/outdoor-exterior-gallery-05.png", "Wood deck and steps facing a mowed North Florida lawn"], ["/images/outdoor-exterior-gallery-06.png", "New wood deck outside a screened porch with yard work still underway"], ["/images/outdoor-exterior-gallery-07.png", "Before and after deck replacement in a North Florida backyard"], ["/images/north-florida-siding-windows.png", "North Florida home with updated siding and windows"], ["/images/outdoor-exterior-gallery-08.png", "Window trim work in progress beside newly installed exterior siding"], ["/images/outdoor-exterior-gallery-09.png", "North Florida home with board-and-batten exterior siding and replacement windows"]] },
  ];

  return (
    <PageFrame>
      <section className="shell project-gallery-hero" id="projects-top">
        <div>
          <p className="eyebrow">Project Inspiration</p>
          <h1 className="project-inspiration-title"><span>Ideas.</span><span>Discover.</span><span>Create.</span></h1>
          <p>Browse kitchen, bathroom, cabinetry, carpentry, and outdoor ideas as you consider what could work in your home.</p>
        </div>
      </section>
      <section className="section shell project-gallery">
        {galleries.map((gallery) => <section className={`project-gallery-section${gallery.id === "kitchens-and-cabinetry" ? " project-gallery-section-featured" : ""}`} id={gallery.id} key={gallery.title}><div><h2>{gallery.title}</h2><p>{gallery.copy}</p></div>{gallery.id === "kitchens-and-cabinetry" ? <ProjectInspirationSScroll images={gallery.images} /> : gallery.id === "bathrooms-and-finish-work" ? <ProjectGalleryStickyStack images={gallery.images} /> : <ProjectGalleryRail galleryName={gallery.title} images={gallery.images} />}</section>)}
      </section>
      <section className="quote-band"><div className="shell quote-band-inner"><h2>Have a project in mind?</h2><Link className="button button-light" href="/contact">Request a Quote</Link></div></section>
    </PageFrame>
  );
}
