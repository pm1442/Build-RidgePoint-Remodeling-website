import { PageFrame } from "../components/page-frame";
import { site } from "../lib/site-data";
import Link from "next/link";

export const metadata = { title: "Areas We Serve" };

export default function AreasPage() {
  const cityPage = (city) => site.locationPages.find((page) => page.city === city && page.slug.startsWith("remodeling-contractor"));
  return <PageFrame><section className="page-hero shell"><p className="eyebrow">Service area</p><h1>Serving Lake Butler and North Florida.</h1><p>RidgePoint works with homeowners in Lake Butler and throughout North Florida, including rural communities. Reach out with your project and location to confirm availability.</p></section><section className="section shell"><div className="city-grid">{site.cities.map((city) => { const page = cityPage(city); return page ? <Link className="city-link" href={`/${page.slug}`} key={city}>{city}, FL<span>Explore services</span></Link> : <div key={city}>{city}, FL</div>; })}</div></section></PageFrame>;
}
