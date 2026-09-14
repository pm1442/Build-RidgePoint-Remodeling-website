export const site = {
  name: "Ridge Point Remodeling and Carpentry",
  legalName: "Ridge Point Structures LLC",
  shortName: "RidgePoint",
  ownerName: "Jason Miller",
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
    pageIntro: "A kitchen remodel should solve the everyday problems you notice most: not enough storage, an awkward layout, worn finishes, or a room that no longer fits the way your household lives. RidgePoint helps homeowners plan kitchen improvements around practical use, materials, and the finish details that make the room feel complete.",
    planningPoints: ["What is not working in the current kitchen", "Which changes will make the biggest daily difference", "How cabinetry, trim, and finishes need to work together"],
    serviceFaqs: [
      { question: "Can I improve my kitchen without changing everything?", answer: "Yes. Start by identifying the parts of the kitchen that are creating the most friction. RidgePoint can talk through a focused scope or a more complete remodel based on the room, your priorities, and the result you want." },
      { question: "Can RidgePoint help with kitchen cabinets?", answer: "Yes. Cabinet installation is part of RidgePoint's kitchen work, and ready-to-assemble cabinets are also available for homeowners who want a DIY purchase or cabinet purchase with professional installation." },
      { question: "What should I have ready for a kitchen remodeling estimate?", answer: "You do not need a finished plan. Photos, rough measurements, a list of what is not working, and your preferred timeline give Jason a useful starting point for the conversation." },
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    eyebrow: "Comfort that holds up",
    summary: "Thoughtful bathroom renovations, from focused updates to full room transformations.",
    details: ["Vanities and cabinetry", "Tile and finish coordination", "Fixture and lighting updates"],
    pageIntro: "Bathroom work can range from a focused update to a more complete renovation. RidgePoint helps you talk through the condition of the room, the changes you want to make, and the finish decisions that help the space feel comfortable, functional, and easier to maintain.",
    planningPoints: ["The condition of the existing bathroom", "Storage, lighting, and fixture priorities", "The right scope for the room and your goals"],
    serviceFaqs: [
      { question: "Does RidgePoint take on smaller bathroom updates?", answer: "RidgePoint discusses both focused bathroom updates and more complete renovations. Share the current condition of the room and the changes you have in mind so Jason can confirm whether the scope is a fit." },
      { question: "What bathroom details should I prioritize first?", answer: "That depends on how the room is used and what is currently failing you. Storage, lighting, fixtures, finishes, and the condition of existing materials are useful things to bring up in the first conversation." },
      { question: "Do I need every finish selected before I request a quote?", answer: "No. A clear description of your goals is enough to start. Material and finish choices can be discussed as the scope becomes clearer." },
    ],
  },
  {
    slug: "cabinet-sales-installation",
    name: "Cabinet Sales and Installation",
    eyebrow: "Cabinets your way",
    summary: "Ready-to-assemble cabinets available to purchase for a DIY project or with professional installation.",
    details: ["Ready-to-assemble cabinet sales", "Cabinets for DIY installation", "Professional cabinet installation", "Kitchens, baths, laundry rooms, and built-ins"],
    pageIntro: "RidgePoint offers a full line of ready-to-assemble cabinets for homeowners who want to handle installation themselves, as well as cabinet purchase and professional installation for homeowners who prefer one point of contact. The right choice depends on your space, your timeline, and how involved you want to be in the work.",
    planningPoints: ["Cabinet options that fit the room and budget", "DIY cabinet purchase versus purchase with installation", "Where careful measuring and finish work matter most"],
    serviceFaqs: [
      { question: "Can I buy cabinets and install them myself?", answer: "Yes. RidgePoint offers ready-to-assemble cabinets for homeowners who want to purchase cabinets for a DIY installation project." },
      { question: "Can I buy cabinets through RidgePoint and have them installed?", answer: "Yes. Homeowners can purchase ready-to-assemble cabinets through RidgePoint and include professional installation, giving them one point of contact for the cabinet purchase and installation work." },
      { question: "Which rooms can use ready-to-assemble cabinets?", answer: "Cabinet options can be discussed for kitchens, bathrooms, laundry rooms, mudrooms, and built-in storage projects. Tell Jason about the room and the storage problem you want to solve." },
    ],
  },
  {
    slug: "custom-carpentry",
    name: "Custom Carpentry",
    eyebrow: "The details make the room",
    summary: "Trim carpentry, custom millwork, and built-ins that give a home its finished character.",
    details: ["Crown molding and baseboards", "Door and window casing", "Custom trim and millwork"],
    pageIntro: "Finish carpentry is where a room starts to feel intentional. From trim around doors and windows to custom millwork and built-ins, RidgePoint focuses on the clean lines and practical details that help the rest of the work look finished.",
    planningPoints: ["Which details will have the greatest visual impact", "How new trim needs to meet existing finishes", "Storage and built-in opportunities in the room"],
    serviceFaqs: [
      { question: "What does custom carpentry include?", answer: "RidgePoint's custom carpentry work includes trim carpentry, crown molding, baseboards, door and window casing, custom millwork, and built-ins." },
      { question: "Can new trim work with an existing room?", answer: "That is an important part of the planning conversation. Jason can look at how new trim, millwork, or built-ins need to meet existing finishes and help identify the details that will have the strongest impact." },
      { question: "Are built-ins a good fit for my space?", answer: "Built-ins can be useful where storage or a more finished look is needed. Share photos and explain how you want the space to function so RidgePoint can discuss a practical path." },
    ],
  },
  {
    slug: "deck-building",
    name: "Deck Building",
    eyebrow: "Better time outside",
    summary: "Outdoor decks designed and built for everyday Florida living, entertaining, and connection.",
    details: ["New deck construction", "Deck replacements", "Railings, stairs, and covered features"],
    pageIntro: "A deck should give you a more useful place to spend time outside. RidgePoint helps homeowners think through the size, access, railings, stairs, and other practical details that shape how an outdoor space works with the home and yard.",
    planningPoints: ["How you want to use the deck day to day", "Access, stairs, railings, and covered areas", "The condition of an existing deck if replacement is needed"],
    serviceFaqs: [
      { question: "Does RidgePoint build new decks and replace existing decks?", answer: "Yes. RidgePoint discusses new deck construction and deck replacements, along with the practical elements that affect how the space works, including stairs, railings, and covered features." },
      { question: "What should I consider before planning a deck?", answer: "Think about how you want to use the outdoor space, where access should be, and whether stairs, railings, or covered areas are important. Photos of the yard or existing deck are helpful when you reach out." },
      { question: "Can I request a quote for a deck in North Florida?", answer: "Yes. RidgePoint serves Lake Butler and North Florida homeowners. Share your location and a brief description of the outdoor space so Jason can confirm the next step." },
    ],
  },
  {
    slug: "flooring-siding-windows",
    name: "Flooring, Siding, and Windows",
    eyebrow: "Practical updates, lasting value",
    summary: "Home improvement updates that refresh worn spaces and help protect the home from the elements.",
    details: ["Flooring replacement", "Siding replacement", "Window replacement", "Project planning and finish carpentry"],
    pageIntro: "Flooring, siding, and window updates can change how a home looks, feels, and functions. RidgePoint helps homeowners discuss the condition of the existing materials, the results they want, and how these improvements fit into the rest of the home.",
    planningPoints: ["The condition and priorities of the existing materials", "Which improvements should be handled together", "How the work connects with interior or exterior finish details"],
    serviceFaqs: [
      { question: "Can RidgePoint help with flooring, siding, and windows?", answer: "Yes. RidgePoint discusses flooring replacement, siding replacement, window replacement, related project planning, and the finish carpentry details that help the completed work come together." },
      { question: "Should I complete these updates at the same time?", answer: "The right sequence depends on the condition of the home and your priorities. Tell Jason which materials are worn or causing concern so you can discuss which improvements make sense to handle together." },
      { question: "What information is helpful before I request an estimate?", answer: "Photos of the area, the material or problem you want to address, your location, and your desired outcome are enough to start a useful conversation." },
    ],
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

export const processSteps = [
  { title: "Tell Jason what is not working", text: "Start with the room, repair, or outdoor space you want to improve. Share your goals, location, and the details you already know." },
  { title: "Talk through a practical path", text: "RidgePoint helps determine whether the project is a fit, what the scope may involve, and what needs to happen before work begins." },
  { title: "Move forward with clarity", text: "Once the scope, materials, timing, and next steps are clear, you can decide how you want to proceed." },
];
