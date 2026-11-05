import { canonicalOrigin } from "./lib/seo";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api/"] },
    ],
    sitemap: `${canonicalOrigin}/sitemap.xml`,
  };
}
