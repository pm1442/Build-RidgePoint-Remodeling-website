export const site = {
  name: "RidgePoint Remodeling & Carpentry",
  shortName: "RidgePoint",
  phoneDisplay: "(386) 291-5200",
  phone: "+13862915200",
  email: "jason@ridgepointremodeling.com",
  address: "8381 SW 88th Court, Lake Butler, FL 32054",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ridgepointremodeling.com",
  cities: [
    "Lake Butler",
    "Starke",
    "Lake City",
    "Gainesville",
    "High Springs",
    "Alachua",
    "Macclenny",
    "Live Oak",
    "Keystone Heights",
  ],
};

export const services = [
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    eyebrow: "The center of daily life",
    summary: "Practical, hard-working kitchens shaped around how your household actually lives.",
    details: ["Layout updates", "Cabinet installation", "Trim and finish carpentry"],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    eyebrow: "Comfort that holds up",
    summary: "Thoughtful bathroom renovations, from focused updates to full room transformations.",
    details: ["Vanities and cabinetry", "Tile and finish coordination", "Fixture and lighting updates"],
  },
  {
    slug: "cabinet-installation",
    name: "Cabinet Installation",
    eyebrow: "Measured, level, finished right",
    summary: "Cabinet installation for kitchens, bathrooms, laundry rooms, mudrooms, and built-ins.",
    details: ["New cabinet installation", "Refacing and hardware updates", "Built-in storage"],
  },
  {
    slug: "custom-carpentry",
    name: "Custom Carpentry",
    eyebrow: "The details make the room",
    summary: "Trim carpentry, custom millwork, and built-ins that give a home its finished character.",
    details: ["Crown molding and baseboards", "Door and window casing", "Custom trim and millwork"],
  },
  {
    slug: "deck-building",
    name: "Deck Building",
    eyebrow: "Better time outside",
    summary: "Outdoor decks designed and built for everyday Florida living, entertaining, and connection.",
    details: ["New deck construction", "Deck replacements", "Railings, stairs, and covered features"],
  },
];

export const getService = (slug) => services.find((service) => service.slug === slug);
