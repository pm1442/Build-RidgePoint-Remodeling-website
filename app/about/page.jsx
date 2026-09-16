import Image from "next/image";
import { PageFrame } from "../components/page-frame";

export const metadata = { title: "About RidgePoint" };

export default function AboutPage() {
  return <PageFrame><section className="section shell owner-grid"><div className="owner-image"><Image src="/images/jason-miller-ridgepoint-remodeling.png" alt="Jason Miller, owner of RidgePoint Remodeling & Carpentry" fill sizes="(max-width: 820px) 100vw, 42vw" /></div><div className="owner-copy"><p className="eyebrow">Meet Jason Miller</p><h2>A contractor who keeps the next step clear.</h2><p>Jason works with homeowners on kitchen and bath renovations, cabinet sales and installation, trim, flooring, siding, windows, and porch and deck additions. His work is grounded in general carpentry with a strong focus on finish details.</p><p>Before scheduling work, RidgePoint discusses the existing space, scope, materials, timing, and the outcome you want. RidgePoint Remodeling & Carpentry is licensed and insured. Florida License #CRC1335692.</p></div></section></PageFrame>;
}
