import { PageFrame } from "../components/page-frame";
import Image from "next/image";
import Link from "next/link";
import { ProjectGalleryGrid } from "../components/project-gallery-grid";
import galleries from "../../content/projects.json";
import { pageUrl } from "../lib/seo";

export const metadata = {
  title: "Our Remodeling & Carpentry Projects | Lake Butler, FL",
  description: "See real kitchen, bathroom, carpentry, deck, siding, and window projects completed by Ridge Point Remodeling & Carpentry in Lake Butler and nearby North Florida communities.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: pageUrl("/projects"),
    type: "website",
    locale: "en_US",
    siteName: "Ridge Point Remodeling & Carpentry",
    title: "Ridge Point Remodeling & Carpentry Projects",
    description: "See real kitchen, bathroom, carpentry, deck, siding, and window projects from Ridge Point Remodeling & Carpentry.",
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
            <p className="eyebrow">Recent projects</p>
            <h1>Our work in Lake Butler and North Florida.</h1>
            <p>See real kitchen, bathroom, cabinetry, carpentry, and outdoor work completed for homeowners in the communities we serve.</p>
          </div>
        </section>
        <section className="section shell project-gallery" aria-label="Ridge Point project gallery"><ProjectGalleryGrid galleries={galleries} /></section>
      </div>
      <section className="project-rig-callout"><div className="shell project-rig-callout-grid"><div><p className="eyebrow">Ridge Point on the road</p><h2>Local work starts with showing up prepared.</h2><p>Behind every finished room and outdoor update is the same Ridge Point truck and branded trailer serving homeowners across North Florida.</p></div><figure><Image src="/images/ridgepoint-truck-trailer.jpg" alt="Ridge Point Remodeling & Carpentry truck and branded trailer in North Florida" fill sizes="(max-width: 820px) 100vw, 52vw" /></figure></div></section>
      <section className="quote-band"><div className="shell quote-band-inner"><h2>Have a project in mind?</h2><Link className="button button-light" href="/contact">Request a Quote</Link></div></section>
    </PageFrame>
  );
}
