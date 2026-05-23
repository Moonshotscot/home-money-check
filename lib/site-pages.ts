export type PageStatus = "live" | "comingSoon";

export type SitePage = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  accentColour: string;
  selectedCheck: string;
  status: PageStatus;
  category: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  why: string[];
  nextSteps: string[];
  uwRelated?: boolean;
  extraNote?: string;
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://homemoneycheck.co.uk";

export type NavigationItem = {
  label: string;
  href: string;
  active?: string[];
  children?: NavigationItem[];
};

export const desktopNavigation: NavigationItem[] = [
  {
    label: "Household bills",
    href: "/bills",
    active: ["/bills", "/energy", "/broadband", "/mobile"],
    children: [
      { label: "Energy", href: "/energy" },
      { label: "Broadband", href: "/broadband" },
      { label: "Mobile SIMs", href: "/mobile" },
    ],
  },
  { label: "£20K Giveaway", href: "/20k-giveaway", active: ["/20k-giveaway"] },
  {
    label: "Mortgages",
    href: "/mortgage",
    active: ["/mortgage"],
    children: [
      { label: "Mortgages", href: "/mortgage" },
      { label: "First-time buyers", href: "/mortgage/first-time-buyer" },
      { label: "Remortgages", href: "/mortgage/remortgage" },
      { label: "Moving home", href: "/mortgage/moving-home" },
    ],
  },
  {
    label: "Insurance",
    href: "/protection",
    active: ["/protection", "/private-medical-insurance"],
    children: [
      { label: "Protection", href: "/protection" },
      { label: "Private medical insurance", href: "/private-medical-insurance" },
    ],
  },
  { label: "Wills & POAs", href: "/estate-planning", active: ["/estate-planning"] },
  {
    label: "For businesses",
    href: "/business-utilities",
    active: [
      "/business-utilities",
      "/finance-services",
      "/business-protection",
      "/business-continuity",
    ],
    children: [
      { label: "Business utilities", href: "/business-utilities" },
      { label: "Finance/bookkeeping", href: "/finance-services" },
      { label: "Business protection", href: "/business-protection" },
      { label: "Business continuity", href: "/business-continuity" },
    ],
  },
  { label: "Earn extra income", href: "/extra-income", active: ["/extra-income"] },
];

export const mobileMenuGroups: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Household bills",
    href: "/bills",
    children: [
      { label: "Energy", href: "/energy" },
      { label: "Broadband", href: "/broadband" },
      { label: "Mobile SIMs", href: "/mobile" },
    ],
  },
  { label: "£20K Giveaway", href: "/20k-giveaway" },
  {
    label: "Mortgages",
    href: "/mortgage",
    children: [
      { label: "Mortgages", href: "/mortgage" },
      { label: "First-time buyers", href: "/mortgage/first-time-buyer" },
      { label: "Remortgages", href: "/mortgage/remortgage" },
      { label: "Moving home", href: "/mortgage/moving-home" },
    ],
  },
  {
    label: "Insurance",
    href: "/protection",
    children: [
      { label: "Protection", href: "/protection" },
      { label: "Private medical insurance", href: "/private-medical-insurance" },
    ],
  },
  { label: "Wills & POAs", href: "/estate-planning" },
  {
    label: "For businesses",
    href: "/business-utilities",
    children: [
      { label: "Business utilities", href: "/business-utilities" },
      { label: "Finance/bookkeeping", href: "/finance-services" },
      { label: "Business protection", href: "/business-protection" },
      { label: "Business continuity", href: "/business-continuity" },
    ],
  },
  { label: "Earn extra income", href: "/extra-income" },
];

const standardNextSteps = [
  "Tell us what you want to check.",
  "We will look at the route that seems most relevant.",
  "You can decide what, if anything, you want to do next.",
];

export const sitePages: SitePage[] = [
  {
    title: "Household bills check",
    slug: "bills",
    eyebrow: "Home checks",
    description:
      "Check whether your regular home services and household costs are still working well for you.",
    accentColour: "#F7F0E8",
    selectedCheck: "Household bills",
    status: "live",
    category: "Home checks",
    metaTitle: "Household bills check | Home Money Check",
    metaDescription:
      "A simple Home Money Check route for reviewing regular household services and costs.",
    intro:
      "A calm first step for looking at everyday household services without pressure or jargon.",
    why: [
      "Your regular bills can drift over time.",
      "Home services should still fit the way your household actually lives.",
      "A short check can help you see what may be worth reviewing.",
    ],
    nextSteps: standardNextSteps,
    uwRelated: true,
  },
  {
    title: "Energy check",
    slug: "energy",
    eyebrow: "Home checks",
    description:
      "A practical look at gas and electricity options, without pressure or jargon.",
    accentColour: "#F4CF7A",
    selectedCheck: "Energy",
    status: "live",
    category: "Home checks",
    metaTitle: "Energy check | Home Money Check",
    metaDescription:
      "Ask Home Money Check for a practical look at gas and electricity options.",
    intro:
      "Energy is one of the easiest household areas to leave unchecked for too long.",
    why: [
      "Your usage and tariff needs can change.",
      "A review can help you understand what options may be relevant.",
      "The aim is clarity before any decision.",
    ],
    nextSteps: standardNextSteps,
    uwRelated: true,
  },
  {
    title: "Broadband check",
    slug: "broadband",
    eyebrow: "Home checks",
    description:
      "Check whether your broadband still fits your home, speed needs and budget.",
    accentColour: "#BFE3FF",
    selectedCheck: "Broadband",
    status: "live",
    category: "Home checks",
    metaTitle: "Broadband check | Home Money Check",
    metaDescription:
      "A simple route for checking whether your broadband still fits your household.",
    intro:
      "Broadband should suit the way your home works now, not just when you first signed up.",
    why: [
      "Homes change, usage changes and speed needs change.",
      "A check can help you think through fit, reliability and budget.",
      "You stay in control of whether to continue.",
    ],
    nextSteps: standardNextSteps,
    uwRelated: true,
  },
  {
    title: "Mobile SIMs check",
    slug: "mobile",
    eyebrow: "Home checks",
    description:
      "A simple check for mobile SIM options and household mobile costs.",
    accentColour: "#F4D9DE",
    selectedCheck: "Mobile SIMs",
    status: "live",
    category: "Home checks",
    metaTitle: "Mobile SIMs check | Home Money Check",
    metaDescription:
      "Check mobile SIM options and household mobile costs with Home Money Check.",
    intro:
      "Mobile SIM costs can be easy to ignore, especially across a household with more than one plan.",
    why: [
      "You may be paying for data or features you no longer need.",
      "Household mobile setups can often be simplified.",
      "The check starts with what you actually use.",
    ],
    nextSteps: standardNextSteps,
    uwRelated: true,
  },
  {
    title: "£20K Giveaway",
    slug: "20k-giveaway",
    eyebrow: "Current route",
    description:
      "Ask about the current £20K Giveaway route without pretending this is an official entry form.",
    accentColour: "#EADFFD",
    selectedCheck: "£20K Giveaway",
    status: "live",
    category: "Current campaign",
    metaTitle: "£20K Giveaway route | Home Money Check",
    metaDescription:
      "Ask Home Money Check about the current £20K Giveaway route and next steps.",
    intro:
      "This page lets you ask about the £20K Giveaway route. If you choose to continue, entry is handled through the correct Utility Warehouse process.",
    why: [
      "You can ask what the route involves before taking another step.",
      "This is not an official-looking entry form.",
      "The correct process will be explained before anything proceeds.",
    ],
    nextSteps: standardNextSteps,
    uwRelated: true,
  },
  {
    title: "Earn extra income",
    slug: "extra-income",
    eyebrow: "Income route",
    description:
      "A calm, serious partner opportunity page. No hype, no income guarantees.",
    accentColour: "#D9C2F4",
    selectedCheck: "Extra income",
    status: "live",
    category: "Income",
    metaTitle: "Earn extra income | Home Money Check",
    metaDescription:
      "Ask about the Partner opportunity route through Home Money Check. No income is guaranteed.",
    intro:
      "A practical route for people who want to understand the Partner opportunity without hype.",
    why: [
      "You can ask questions before deciding if the route is suitable.",
      "No income is guaranteed. Results depend on effort, suitability, activity and the way the opportunity is approached.",
      "The focus is a clear explanation, not pressure.",
    ],
    nextSteps: standardNextSteps,
    uwRelated: true,
    extraNote:
      "No income is guaranteed. Results depend on effort, suitability, activity and the way the opportunity is approached.",
  },
  {
    title: "Start my check",
    slug: "start-my-check",
    eyebrow: "Start here",
    description: "Tell us what you want to check and we will point you in the right direction.",
    accentColour: "#FDCA55",
    selectedCheck: "Choose your check",
    status: "live",
    category: "Contact",
    metaTitle: "Start my check | Home Money Check",
    metaDescription:
      "Start a Home Money Check enquiry for bills, home services, planning or income routes.",
    intro:
      "Use this static preview page to choose the check you want to start with.",
    why: [
      "You can keep the enquiry broad if you are not sure.",
      "The next build stage will connect this form properly.",
      "For now, this page shows the intended route and consent structure.",
    ],
    nextSteps: standardNextSteps,
  },
  {
    title: "Contact Home Money Check",
    slug: "contact",
    eyebrow: "Contact",
    description: "Leave your details and tell us what you would like to check.",
    accentColour: "#BFD9C8",
    selectedCheck: "Choose your check",
    status: "live",
    category: "Contact",
    metaTitle: "Contact | Home Money Check",
    metaDescription:
      "Contact Home Money Check about household bills, planning routes, business checks or income options.",
    intro:
      "A simple contact route for questions that do not fit neatly into one check yet.",
    why: [
      "You can ask a general question.",
      "We can point you toward a more specific route.",
      "The form is static until the next build stage.",
    ],
    nextSteps: standardNextSteps,
  },
  {
    title: "Mortgage checks",
    slug: "mortgage",
    eyebrow: "Coming soon",
    description: "Mortgage check pages are being prepared for buying, moving and remortgaging.",
    accentColour: "#D8EEFF",
    selectedCheck: "Mortgage",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Mortgage checks coming soon | Home Money Check",
    metaDescription:
      "Mortgage check pages are coming soon to Home Money Check.",
    intro:
      "This route will help people ask about mortgage-related checks in plain English.",
    why: ["Buying, moving and remortgaging each need careful context."],
    nextSteps: standardNextSteps,
  },
  {
    title: "First-time buyer mortgage",
    slug: "mortgage/first-time-buyer",
    eyebrow: "Coming soon",
    description: "A first-time buyer mortgage check route is being prepared.",
    accentColour: "#D8EEFF",
    selectedCheck: "First-time buyer mortgage",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "First-time buyer mortgage coming soon | Home Money Check",
    metaDescription:
      "A first-time buyer mortgage check route is coming soon.",
    intro: "A short route for first-time buyer mortgage questions is being prepared.",
    why: ["First-time buyers often need a clear first conversation."],
    nextSteps: standardNextSteps,
  },
  {
    title: "Remortgage check",
    slug: "mortgage/remortgage",
    eyebrow: "Coming soon",
    description: "A remortgage check route is being prepared.",
    accentColour: "#D8EEFF",
    selectedCheck: "Remortgage",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Remortgage check coming soon | Home Money Check",
    metaDescription: "A remortgage check route is coming soon.",
    intro: "A short route for remortgage questions is being prepared.",
    why: ["Remortgaging can be easier to approach with a calm checklist."],
    nextSteps: standardNextSteps,
  },
  {
    title: "Moving home mortgage",
    slug: "mortgage/moving-home",
    eyebrow: "Coming soon",
    description: "A moving home mortgage check route is being prepared.",
    accentColour: "#D8EEFF",
    selectedCheck: "Moving home mortgage",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Moving home mortgage coming soon | Home Money Check",
    metaDescription: "A moving home mortgage check route is coming soon.",
    intro: "A short route for moving home mortgage questions is being prepared.",
    why: ["Moving home can create timing, affordability and planning questions."],
    nextSteps: standardNextSteps,
  },
  {
    title: "Protection check",
    slug: "protection",
    eyebrow: "Coming soon",
    description: "A protection check route for life and family cover is being prepared.",
    accentColour: "#F5D28A",
    selectedCheck: "Protection insurance",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Protection check coming soon | Home Money Check",
    metaDescription: "A protection check route is coming soon.",
    intro: "This route will help people ask about protection needs without pressure.",
    why: ["Protection should be discussed in context, not rushed."],
    nextSteps: standardNextSteps,
  },
  {
    title: "Private medical insurance",
    slug: "private-medical-insurance",
    eyebrow: "Coming soon",
    description: "A private medical insurance check route is being prepared.",
    accentColour: "#BFD9C8",
    selectedCheck: "Private medical insurance",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Private medical insurance coming soon | Home Money Check",
    metaDescription:
      "A private medical insurance check route is coming soon.",
    intro: "This route will help people ask about private medical cover in plain English.",
    why: ["Medical cover questions often need a careful explanation."],
    nextSteps: standardNextSteps,
  },
  {
    title: "Wills & POAs",
    slug: "estate-planning",
    eyebrow: "Coming soon",
    description: "An estate planning check route for wills and POAs is being prepared.",
    accentColour: "#CFE6D5",
    selectedCheck: "Wills & POAs",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Wills & POAs coming soon | Home Money Check",
    metaDescription: "An estate planning check route is coming soon.",
    intro: "This route will help people ask about wills, POAs and practical planning.",
    why: ["Planning conversations are easier when they start clearly."],
    nextSteps: standardNextSteps,
  },
  {
    title: "Business utilities",
    slug: "business-utilities",
    eyebrow: "Coming soon",
    description: "A business utilities check route is being prepared.",
    accentColour: "#D9E1E8",
    selectedCheck: "Business utilities",
    status: "comingSoon",
    category: "Business checks",
    metaTitle: "Business utilities coming soon | Home Money Check",
    metaDescription: "A business utilities check route is coming soon.",
    intro: "This route will support business utility questions when it is ready.",
    why: ["Business services need a different check from household services."],
    nextSteps: standardNextSteps,
    uwRelated: true,
  },
  {
    title: "Finance/bookkeeping",
    slug: "finance-services",
    eyebrow: "Coming soon",
    description: "A finance services check route is being prepared.",
    accentColour: "#D9E1E8",
    selectedCheck: "Finance/bookkeeping",
    status: "comingSoon",
    category: "Business checks",
    metaTitle: "Finance/bookkeeping coming soon | Home Money Check",
    metaDescription: "A finance services route is coming soon.",
    intro: "This route will help organise finance services enquiries when it is ready.",
    why: ["Finance questions should be handled with clear next steps."],
    nextSteps: standardNextSteps,
  },
  {
    title: "Business protection",
    slug: "business-protection",
    eyebrow: "Coming soon",
    description: "A business protection route is being prepared.",
    accentColour: "#D9E1E8",
    selectedCheck: "Business protection",
    status: "comingSoon",
    category: "Business checks",
    metaTitle: "Business protection coming soon | Home Money Check",
    metaDescription: "A business protection route is coming soon.",
    intro: "This route will help organise business protection enquiries when it is ready.",
    why: ["Business protection needs clear scope and suitability checks."],
    nextSteps: standardNextSteps,
  },
  {
    title: "Business continuity",
    slug: "business-continuity",
    eyebrow: "Coming soon",
    description: "A business continuity route is being prepared.",
    accentColour: "#D9E1E8",
    selectedCheck: "Business continuity",
    status: "comingSoon",
    category: "Business checks",
    metaTitle: "Business continuity coming soon | Home Money Check",
    metaDescription: "A business continuity route is coming soon.",
    intro: "This route will help organise business continuity enquiries when it is ready.",
    why: ["Business continuity questions need a practical, careful route."],
    nextSteps: standardNextSteps,
  },
  {
    title: "Local home partners",
    slug: "local-home-partners",
    eyebrow: "Coming soon",
    description: "A local home partners route is being prepared.",
    accentColour: "#D9E1E8",
    selectedCheck: "Local home partners",
    status: "comingSoon",
    category: "Business checks",
    metaTitle: "Local home partners coming soon | Home Money Check",
    metaDescription: "A local home partners route is coming soon.",
    intro:
      "This route will help organise local partner enquiries when it is ready.",
    why: ["Local home support routes need simple, trustworthy presentation."],
    nextSteps: standardNextSteps,
  },
];

export function getPageBySlug(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}

export function getRoutePath(page: SitePage) {
  return `/${page.slug}`;
}

