import { PageFrame } from "../components/page-frame";
import Image from "next/image";
import Link from "next/link";
import { ProjectInspirationSScroll } from "../components/project-inspiration-s-scroll";

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
    { id: "kitchens-and-cabinetry", title: "Kitchens and cabinetry", copy: "Cabinet layouts, storage, and finish details that support everyday use.", images: [["/images/rpr-jasons-kitchen-completed.jpg", "Completed kitchen remodel in January 2026 in Lake Butler, Florida"], ["/images/rpr-new-kitchen-lake-butler.jpg", "Brand new white kitchen by RidgePoint Remodeling & Carpentry in Lake Butler, Florida"], ["/images/kitchen-gallery-02.png", "Finished kitchen with light cabinets, stainless appliances, and a window over the sink"], ["/images/kitchen-gallery-03.png", "Open kitchen with a green island, pendant lights, and natural wood flooring"], ["/images/kitchen-gallery-04.jpg", "White kitchen with a marble-look island and stainless appliances"]] },
    { id: "bathrooms-and-finish-work", title: "Bathrooms and finish work", copy: "Thoughtful room updates paired with trim, storage, and cabinetry details that make a space feel complete.", images: [["/images/bathroom-gallery-01.png", "Bathroom with a white vanity, subway-tile tub surround, and wood-look floor"], ["/images/bathroom-gallery-02.png", "Bathroom with a wood vanity, glass shower, and black fixtures"], ["/images/bathroom-gallery-03.png", "Bathroom with a white vanity, black fixtures, and glass shower"], ["/images/bathroom-gallery-04.png", "Simple bathroom with a white vanity, tub surround, and North Florida view"], ["/images/rpr-updated-ceiling.jpg", "Updated white beadboard ceiling with trim details by RidgePoint Remodeling & Carpentry"], ["/images/rpr-loft-railing.jpg", "Open North Florida interior with black loft railing, barn doors, and finished flooring"], ["/images/bathroom-gallery-05.png", "Before and after interior trim work around a window"], ["/images/carpentry-gallery-01.png", "Built-in mudroom storage with a wood bench and black-framed door"], ["/images/carpentry-gallery-02.png", "Custom mudroom built-in with storage cabinets, cubbies, and a wood bench"]] },
    { id: "outdoor-and-exterior-updates", title: "Outdoor and exterior updates", copy: "Decks, siding, windows, and the practical details that help a home feel renewed inside and out.", images: [["/images/rpr-outdoor-deck.jpg", "Finished RidgePoint deck with evening lighting and wood steps"], ["/images/outdoor-exterior-gallery-02.png", "North Florida deck with a wood pergola and a finished lawn"], ["/images/rpr-siding-windows-house.jpg", "North Florida home with board-and-batten siding and replacement windows"], ["/images/outdoor-exterior-gallery-08.png", "Window trim work in progress beside newly installed exterior siding"], ["/images/outdoor-exterior-gallery-09.png", "North Florida home with board-and-batten exterior siding and replacement windows"]] },
  ];
  const galleryImages = galleries.flatMap((gallery) => gallery.images);

  return (
    <PageFrame>
      <section className="shell project-gallery-hero" id="projects-top">
        <div>
          <p className="eyebrow">Project Inspiration</p>
          <h1 className="project-inspiration-title"><span>Ideas.</span><span>Discover.</span><span>Create.</span></h1>
          <p>Browse kitchen, bathroom, cabinetry, carpentry, and outdoor ideas as you consider what could work in your home.</p>
        </div>
      </section>
      <section className="section shell project-gallery" aria-label="Project inspiration gallery"><ProjectInspirationSScroll images={galleryImages} /></section>
      <section className="project-rig-callout"><div className="shell project-rig-callout-grid"><div><p className="eyebrow">RidgePoint on the road</p><h2>Local work starts with showing up prepared.</h2><p>Behind every finished room and outdoor update is the same RidgePoint truck and branded trailer serving homeowners across North Florida.</p></div><figure><Image src="/images/ridgepoint-truck-trailer.jpg" alt="RidgePoint Remodeling & Carpentry truck and branded trailer in North Florida" fill sizes="(max-width: 820px) 100vw, 52vw" /></figure></div></section>
      <section className="quote-band"><div className="shell quote-band-inner"><h2>Have a project in mind?</h2><Link className="button button-light" href="/contact">Request a Quote</Link></div></section>
    </PageFrame>
  );
}
