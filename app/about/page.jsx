import { PageFrame } from "../components/page-frame";

export const metadata = { title: "About RidgePoint" };

export default function AboutPage() {
  return <PageFrame><section className="page-hero shell"><p className="eyebrow">About RidgePoint</p><h1>Hands-on work. Clear communication. Details that matter.</h1><p>RidgePoint Remodeling & Carpentry is an owner-operated remodeling business serving homeowners across North Central Florida.</p></section><section className="section shell intro-grid"><div><h2>Meet Jason Miller.</h2></div><div className="intro-copy"><p>Replace the previous placeholder portrait with a real, approachable photo of Jason at work or on site. This page should earn trust by showing the person homeowners will actually work with.</p><p>Add verified experience, license and insurance information, and a short explanation of how RidgePoint approaches estimates and job communication.</p></div></section></PageFrame>;
}
