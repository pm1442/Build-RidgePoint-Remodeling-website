import { services, site } from "./lib/site-data";

export default function sitemap() {
  const staticPages = ["", "/services", "/projects", "/about", "/areas-we-serve", "/contact", "/privacy-policy", "/terms-and-conditions"];
  return [
    ...staticPages.map((path) => ({ url: `${site.url}${path}` })),
    ...services.map((service) => ({ url: `${site.url}/services/${service.slug}` })),
  ];
}
