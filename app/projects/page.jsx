import { PageFrame } from "../components/page-frame";
import Link from "next/link";

export const metadata = { title: "Project Gallery" };

export default function ProjectsPage() {
  return (
    <PageFrame>
      <section className="page-hero shell">
        <p className="eyebrow">Projects</p>
        <h1>Craft is easier to see than to describe.</h1>
        <p>RidgePoint project photography and case studies will live here. Before launch, add real before-and-after work from kitchens, bathrooms, carpentry, and decks.</p>
      </section>
      <section className="section shell project-placeholder-grid">
        {["Kitchen remodeling", "Custom carpentry", "Deck building"].map((title) => <article key={title}><p>Project photography needed</p><h2>{title}</h2><span>Replace this placeholder with an approved RidgePoint project and a concise project story.</span></article>)}
      </section>
      <section className="quote-band"><div className="shell quote-band-inner"><h2>Have a project in mind?</h2><Link className="button button-light" href="/contact">Request a Quote</Link></div></section>
    </PageFrame>
  );
}
