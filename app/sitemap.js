import { services, site } from "./lib/site-data";

// This date reflects the site-wide canonical and metadata update. Update it only
// when this set of public URLs is materially changed again.
const lastModified = new Date("2026-11-05T00:00:00-05:00");

export default function sitemap() {
  const staticPages = ["", "/services", "/projects", "/about", "/areas-we-serve", "/contact", "/privacy-policy", "/terms-and-conditions"];
  return [
    ...staticPages.map((path) => ({ url: `${site.url}${path}`, lastModified })),
    ...services.map((service) => ({ url: `${site.url}/services/${service.slug}`, lastModified })),
  ];
}
