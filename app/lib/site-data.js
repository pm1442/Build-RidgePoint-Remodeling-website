export const site = {
  name: "Ridge Point Remodeling and Carpentry",
  legalName: "Ridge Point Structures LLC",
  shortName: "RidgePoint",
  phoneDisplay: "(386) 291-5200",
  phone: "+13862915200",
  email: "jason@ridgepointremodeling.com",
  address: "8831 SW 88th Ct, Lake Butler, FL 32054",
  hours: "Monday through Friday, 8:00 AM to 5:00 PM. Closed major holidays.",
  openingHours: {
    opens: "08:00",
    closes: "17:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
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
  locationPages: [
    { city: "Lake Butler", slug: "remodeling-contractor-lake-butler-fl" },
    { city: "Gainesville", slug: "remodeling-contractor-gainesville-fl" },
    { city: "Lake City", slug: "remodeling-contractor-lake-city-fl" },
    { city: "Lake Butler", slug: "deck-builder-lake-butler-fl" },
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
    slug: "cabinet-sales-installation",
    name: "Cabinet Sales and Installation",
    eyebrow: "Cabinets your way",
    summary: "Ready-to-assemble cabinets available to purchase for a DIY project or with professional installation.",
    details: ["Ready-to-assemble cabinet sales", "Cabinets for DIY installation", "Professional cabinet installation", "Kitchens, baths, laundry rooms, and built-ins"],
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
  {
    slug: "flooring-siding-windows",
    name: "Flooring, Siding, and Windows",
    eyebrow: "Practical updates, lasting value",
    summary: "Home improvement updates that refresh worn spaces and help protect the home from the elements.",
    details: ["Flooring replacement", "Siding replacement", "Window replacement", "Project planning and finish carpentry"],
  },
];

export const getService = (slug) => services.find((service) => service.slug === slug);

export const faqs = [
  {
    question: "Is my home improvement project feasible?",
    answer: "Start with a conversation about your goals, the existing space, and the result you want. RidgePoint can help assess whether the project is a practical fit and what it may involve before work begins.",
  },
  {
    question: "Is this a project RidgePoint can take on?",
    answer: "RidgePoint focuses on home repair and improvement work including kitchen and bath renovations, cabinet sales and installation, finish carpentry, flooring, siding, windows, and porch and deck additions. Share the scope to confirm fit.",
  },
  {
    question: "How soon can you start my project?",
    answer: "Start dates depend on the scope, material availability, and the current schedule. Reach out with your project details and location for the most accurate availability.",
  },
  {
    question: "How much will my project cost?",
    answer: "Project cost depends on the condition of the home, materials, and the work involved. RidgePoint discusses the scope with you first, then can provide clear next steps for pricing.",
  },
  {
    question: "Do you sell cabinets without installation?",
    answer: "Yes. RidgePoint offers ready-to-assemble cabinets for homeowners who plan to install them themselves, as well as cabinet purchase and professional installation for homeowners who want one point of contact.",
  },
  {
    question: "Do you carry insurance?",
    answer: "Ask about current insurance coverage during your initial conversation. RidgePoint can confirm the applicable coverage and documentation for your specific project before work is scheduled.",
  },
];
