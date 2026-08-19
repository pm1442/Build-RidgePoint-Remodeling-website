import { PageFrame } from "../components/page-frame";
import { site } from "../lib/site-data";

export const metadata = { title: "Areas We Serve" };

export default function AreasPage() {
  return <PageFrame><section className="page-hero shell"><p className="eyebrow">Service area</p><h1>Serving Lake Butler and North Florida.</h1><p>RidgePoint works with homeowners in Lake Butler and throughout North Florida, including rural communities. Reach out with your project and location to confirm availability.</p></section><section className="section shell city-grid">{site.cities.map((city) => <div key={city}>{city}, FL</div>)}</section></PageFrame>;
}
