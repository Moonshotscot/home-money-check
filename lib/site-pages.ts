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
  mainCopy?: string[];
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

const comingSoonIntro =
  "This service is being prepared and is not live on Home Money Check yet.";

const comingSoonCopy = [
  comingSoonIntro,
  "Leave your details and we’ll let you know when this service is ready.",
];

const billsCopy = [
  "Household bill checks are the simple place to start if you want energy, broadband or Mobile SIM deals reviewed together.",
  "Tell us what you want checked and we’ll ask the right questions. Then we’ll explain what is available in plain English before you decide.",
];

const energyCopy = [
  "We’ll take a few details about your home, your current supplier or deal and what you need from your energy service.",
  "Energy can feel confusing because tariffs, standing charges, usage and contract details can all affect the answer. We’ll check what is available and explain the options clearly before you decide.",
];

const broadbandCopy = [
  "We’ll ask about your postcode, current provider, speed, household usage and what you need broadband for day to day.",
  "Cheapest is not always best if the speed or reliability is wrong. We’ll help you understand the option clearly before you decide.",
];

const mobileCopy = [
  "Mobile SIM deals are about SIM-only options, not phone handsets.",
  "We’ll ask about your current network, data usage and what you want from the deal. Then we’ll explain the available options clearly before you decide.",
];

const willsCopy = [
  "Estate planning is about making things easier for the people you care about and making sure your wishes are properly recorded.",
  "Wills: a will records who should receive your estate and who should deal with things when the time comes.",
  "Powers of Attorney: a Power of Attorney can help if you are alive but unable to deal with decisions yourself.",
  "Trusts: trusts can be useful in some situations, but they are not right for everyone. We’ll keep the conversation practical and avoid heavy jargon.",
];

const businessUtilitiesCopy = [
  "Business utilities can be harder to compare because contract terms, usage, standing charges and renewal dates all matter.",
  "We’ll take the details, understand the business and check what is available. You’ll get a clear explanation of the quote and the next steps.",
];

const financeCopy = [
  "Finance/bookkeeping starts with a short discovery call so we can understand what the business needs.",
  "We’ll recommend the right service route and provide a clear quote. This is about bookkeeping and finance admin support, not investment, pension or credit advice.",
];

const businessProtectionCopy = [
  "Business protection is about starting a conversation around what happens if a key person, owner or director dies or becomes seriously ill.",
  "We can talk through risks such as lost income, business debt, ownership disruption and pressure on the remaining people. Nothing is promised or assumed at this stage.",
];

const businessContinuityCopy = [
  "Business continuity is about what happens if an owner, director or key person cannot continue.",
  "We’ll help you think through practical planning around control, succession, decision-making, documents and keeping the business moving.",
];

const extraIncomeCopy = [
  "If you’re looking for an extra income opportunity, we’ll explain how it works and what is involved.",
  "There is no guaranteed income. We’ll be honest about that, answer your questions and help you decide whether it suits you. No pressure.",
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
    mainCopy: billsCopy,
    nextSteps: standardNextSteps,
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
    mainCopy: energyCopy,
    nextSteps: standardNextSteps,
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
    mainCopy: broadbandCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Mobile SIM deals",
    slug: "mobile",
    eyebrow: "Home checks",
    description:
      "A simple check for mobile SIM options and household mobile costs.",
    accentColour: "#F4D9DE",
    selectedCheck: "Mobile SIM deals",
    status: "live",
    category: "Home checks",
    metaTitle: "Mobile SIM deals | Home Money Check",
    metaDescription:
      "Check mobile SIM options and household mobile costs with Home Money Check.",
    intro:
      "Mobile SIM costs can be easy to ignore, especially across a household with more than one plan.",
    why: [
      "You may be paying for data or features you no longer need.",
      "Household mobile setups can often be simplified.",
      "The check starts with what you actually use.",
    ],
    mainCopy: mobileCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "£20K Giveaway",
    slug: "20k-giveaway",
    eyebrow: "Current route",
    description:
      "Ask about the current £20K Giveaway route and what happens next.",
    accentColour: "#EADFFD",
    selectedCheck: "£20K Giveaway",
    status: "live",
    category: "Current campaign",
    metaTitle: "£20K Giveaway route | Home Money Check",
    metaDescription:
      "Ask Home Money Check about the current £20K Giveaway route and next steps.",
    intro:
      "This page lets you ask about the current £20K Giveaway route. Send a few details and we’ll get back to you personally.",
    why: [
      "You can ask what the route involves before taking another step.",
      "You are not committing to anything by submitting the form.",
      "We will explain the next step clearly before anything proceeds.",
    ],
    nextSteps: standardNextSteps,
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
    mainCopy: extraIncomeCopy,
    nextSteps: standardNextSteps,
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
    mainCopy: [
      "Home Money Check is a friendly check and advice service. You send a few basic details, we get in touch, then we help you understand the best route for what you need.",
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
    title: "Coming soon",
    slug: "mortgage",
    eyebrow: "Coming soon",
    description: comingSoonIntro,
    accentColour: "#D8EEFF",
    selectedCheck: "Mortgage",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Mortgage checks coming soon | Home Money Check",
    metaDescription:
      "Mortgage check pages are coming soon to Home Money Check.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Coming soon",
    slug: "mortgage/first-time-buyer",
    eyebrow: "Coming soon",
    description: comingSoonIntro,
    accentColour: "#D8EEFF",
    selectedCheck: "First-time buyer mortgage",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "First-time buyer mortgage coming soon | Home Money Check",
    metaDescription:
      "A first-time buyer mortgage check route is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Coming soon",
    slug: "mortgage/remortgage",
    eyebrow: "Coming soon",
    description: comingSoonIntro,
    accentColour: "#D8EEFF",
    selectedCheck: "Remortgage",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Remortgage check coming soon | Home Money Check",
    metaDescription: "A remortgage check route is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Coming soon",
    slug: "mortgage/moving-home",
    eyebrow: "Coming soon",
    description: comingSoonIntro,
    accentColour: "#D8EEFF",
    selectedCheck: "Moving home mortgage",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Moving home mortgage coming soon | Home Money Check",
    metaDescription: "A moving home mortgage check route is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Coming soon",
    slug: "protection",
    eyebrow: "Coming soon",
    description: comingSoonIntro,
    accentColour: "#F5D28A",
    selectedCheck: "Protection insurance",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Protection check coming soon | Home Money Check",
    metaDescription: "A protection check route is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Coming soon",
    slug: "private-medical-insurance",
    eyebrow: "Coming soon",
    description: comingSoonIntro,
    accentColour: "#BFD9C8",
    selectedCheck: "Private medical insurance",
    status: "comingSoon",
    category: "Life planning checks",
    metaTitle: "Private medical insurance coming soon | Home Money Check",
    metaDescription:
      "A private medical insurance check route is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Wills & POAs",
    slug: "estate-planning",
    eyebrow: "Planning checks",
    description: "An estate planning check route for wills and POAs is being prepared.",
    accentColour: "#CFE6D5",
    selectedCheck: "Wills & POAs",
    status: "live",
    category: "Life planning checks",
    metaTitle: "Wills & POAs coming soon | Home Money Check",
    metaDescription: "An estate planning check route is coming soon.",
    intro: "This route will help people ask about wills, POAs and practical planning.",
    why: ["Planning conversations are easier when they start clearly."],
    mainCopy: willsCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Business utilities",
    slug: "business-utilities",
    eyebrow: "Business checks",
    description: "A business utilities check route is being prepared.",
    accentColour: "#D9E1E8",
    selectedCheck: "Business utilities",
    status: "live",
    category: "Business checks",
    metaTitle: "Business utilities coming soon | Home Money Check",
    metaDescription: "A business utilities check route is coming soon.",
    intro: "This route will support business utility questions when it is ready.",
    why: ["Business services need a different check from household services."],
    mainCopy: businessUtilitiesCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Finance/bookkeeping",
    slug: "finance-services",
    eyebrow: "Business checks",
    description: "A finance/bookkeeping check route is being prepared.",
    accentColour: "#D9E1E8",
    selectedCheck: "Finance/bookkeeping",
    status: "live",
    category: "Business checks",
    metaTitle: "Finance/bookkeeping coming soon | Home Money Check",
    metaDescription: "A finance/bookkeeping route is available through Home Money Check.",
    intro: "This route will help organise finance/bookkeeping enquiries.",
    why: ["Finance questions should be handled with clear next steps."],
    mainCopy: financeCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Business protection",
    slug: "business-protection",
    eyebrow: "Business checks",
    description: "A business protection route is being prepared.",
    accentColour: "#D9E1E8",
    selectedCheck: "Business protection",
    status: "live",
    category: "Business checks",
    metaTitle: "Business protection coming soon | Home Money Check",
    metaDescription: "A business protection route is coming soon.",
    intro: "This route will help organise business protection enquiries when it is ready.",
    why: ["Business protection needs clear scope and suitability checks."],
    mainCopy: businessProtectionCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Business continuity",
    slug: "business-continuity",
    eyebrow: "Business checks",
    description: "A business continuity route is being prepared.",
    accentColour: "#D9E1E8",
    selectedCheck: "Business continuity",
    status: "live",
    category: "Business checks",
    metaTitle: "Business continuity coming soon | Home Money Check",
    metaDescription: "A business continuity route is coming soon.",
    intro: "This route will help organise business continuity enquiries when it is ready.",
    why: ["Business continuity questions need a practical, careful route."],
    mainCopy: businessContinuityCopy,
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

