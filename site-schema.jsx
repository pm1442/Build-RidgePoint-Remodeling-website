import { site } from "../lib/site-data";

export function SiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
        "@id": `${site.url}/#business`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "8831 SW 88th Ct",
          addressLocality: "Lake Butler",
          addressRegion: "FL",
          postalCode: "32054",
          addressCountry: "US",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: site.openingHours.days,
          opens: site.openingHours.opens,
          closes: site.openingHours.closes,
        },
        areaServed: site.cities.map((name) => ({ "@type": "City", name })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#business` },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
