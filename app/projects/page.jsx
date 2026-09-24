import { PageFrame } from "../components/page-frame";
import Image from "next/image";
import Link from "next/link";
import { ProjectGalleryGrid } from "../components/project-gallery-grid";
import galleries from "../../content/projects.json";

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
  return (
    <PageFrame>
      <div className="project-inspiration-experience">
        <section className="shell project-gallery-hero" id="projects-top">
          <div>
            <p className="eyebrow">Project Inspiration</p>
            <h1 className="project-inspiration-title"><span>Ideas.</span><span>Discover.</span><span>Create.</span></h1>
            <p>Browse kitchen, bathroom, cabinetry, carpentry, and outdoor ideas as you consider what could work in your home.</p>
          </div>
        </section>
        <section className="section shell project-gallery" aria-label="Project inspiration gallery"><ProjectGalleryGrid galleries={galleries} /></section>
      </div>
      <section className="project-rig-callout"><div className="shell project-rig-callout-grid"><div><p className="eyebrow">RidgePoint on the road</p><h2>Local work starts with showing up prepared.</h2><p>Behind every finished room and outdoor update is the same RidgePoint truck and branded trailer serving homeowners across North Florida.</p></div><figure><Image src="/images/ridgepoint-truck-trailer.jpg" alt="RidgePoint Remodeling & Carpentry truck and branded trailer in North Florida" fill sizes="(max-width: 820px) 100vw, 52vw" /></figure></div></section>
      <section className="quote-band"><div className="shell quote-band-inner"><h2>Have a project in mind?</h2><Link className="button button-light" href="/contact">Request a Quote</Link></div></section>
    </PageFrame>
  );
}
