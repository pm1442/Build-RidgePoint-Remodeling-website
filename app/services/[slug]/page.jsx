import { notFound } from "next/navigation";
import { PageFrame } from "../../components/page-frame";
import { ServiceDetailPage } from "../../components/service-detail-page";
import { getService } from "../../lib/site-data";

export function generateStaticParams() {
  return ["kitchen-remodeling", "bathroom-remodeling", "cabinet-sales-installation", "custom-carpentry", "deck-building", "flooring-siding-windows"].map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  return service ? { title: `${service.name} in Lake Butler, FL`, description: `${service.summary} RidgePoint serves homeowners across North Central Florida.` } : {};
}

export default function ServicePage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();
  return <PageFrame><ServiceDetailPage slug={service.slug} /></PageFrame>;
}
