import { services, site } from "./lib/site-data";

export default function sitemap() {
  const staticPages = ["", "/services", "/projects", "/about", "/areas-we-serve", "/contact"];
  return [...staticPages.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date() })), ...services.map((service) => ({ url: `${site.url}/services/${service.slug}`, lastModified: new Date() }))];
}
