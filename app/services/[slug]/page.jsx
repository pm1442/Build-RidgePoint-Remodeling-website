import { notFound } from "next/navigation";
import { PageFrame } from "../../components/page-frame";
import { ServiceDetailPage } from "../../components/service-detail-page";
import { getService } from "../../lib/site-data";
import { pageUrl } from "../../lib/seo";

export function generateStaticParams() {
  return ["kitchen-remodeling", "bathroom-remodeling", "cabinet-sales-installation", "custom-carpentry", "deck-building", "flooring-siding-windows"].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: `${service.name} in Lake Butler, FL`, description: `${service.summary} Ridge Point serves homeowners across nearby North Florida communities.`, alternates: { canonical: `/services/${service.slug}` }, openGraph: { url: pageUrl(`/services/${service.slug}`) } } : {};
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <PageFrame><ServiceDetailPage slug={service.slug} /></PageFrame>;
}
