import { PageFrame } from "../components/page-frame";

export const metadata = { title: "About RidgePoint" };

export default function AboutPage() {
  return <PageFrame><section className="page-hero shell"><p className="eyebrow">About RidgePoint</p><h1>Hands-on work. Clear communication. Details that matter.</h1><p>Ridge Point Remodeling and Carpentry is a North Florida home repair and improvement contractor led by Jason Miller, focused on thoughtful renovations, finish carpentry, and practical updates for existing homes.</p></section><section className="section shell intro-grid"><div><h2>You deserve a guide who makes the next step clearer.</h2></div><div className="intro-copy"><p>Jason works with homeowners on kitchen and bath renovations, cabinetry, trim, flooring, siding, windows, and porch and deck additions. The work is grounded in general carpentry with a strong focus on finish details.</p><p>Before scheduling work, RidgePoint discusses the existing space, scope, materials, timing, and the outcome you want. Ask about current insurance information and any documentation relevant to your project during that conversation.</p></div></section></PageFrame>;
}
