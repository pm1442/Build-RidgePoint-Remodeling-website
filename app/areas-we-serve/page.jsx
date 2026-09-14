import { PageFrame } from "../components/page-frame";
import { site } from "../lib/site-data";

export const metadata = { title: "Areas We Serve" };

export default function AreasPage() {
  return <PageFrame><section className="page-hero shell"><p className="eyebrow">Service area</p><h1>Serving Lake Butler and North Florida.</h1><p>RidgePoint works with homeowners in Lake Butler and throughout North Florida, including rural communities. Reach out with your project and location to confirm availability.</p></section><section className="section shell service-area-towns" aria-labelledby="service-area-towns-heading"><div className="service-area-heading"><p className="eyebrow">Nearby communities</p><h2 id="service-area-towns-heading">Places we often serve.</h2></div><div className="city-grid service-area-city-grid">{site.cities.map((city, index) => <div className="service-area-city" key={city} style={{ "--pulse-delay": `${index * 0.32}s` }}><span className="location-marker" aria-hidden="true" /><span>{city}, FL</span></div>)}</div></section><section className="shell service-area-callout"><span className="location-marker service-area-callout-marker" aria-hidden="true" /><div><p className="eyebrow">Outside the list?</p><h2>Not seeing your town?</h2><p>Give us a call. RidgePoint may still serve your area, and we can let you know whether your project is within our coverage.</p></div><a className="button" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a></section></PageFrame>;
}
