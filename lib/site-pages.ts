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
  householdSections?: {
    title: string;
    body: string[];
    support?: string;
  }[];
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

const householdBillsIntro = [
  "Household bills can be difficult to work through on your own.",
  "Through Home Money Check, Neill Connolly, an Authorised Utility Warehouse (UW) Partner, will call you and go through a detailed online quote so you can see exactly what the services are, what benefits you get and what savings you can make.",
  "We can look at energy, broadband, Mobile SIM deals, EV tariffs, the UW Cashback Card and help towards existing cancellation fees.",
  "The best value is often found when more than one service is added to your account.",
  "We’ll talk through the quote and answer your questions so you can see exactly what is available before you decide.",
];

const householdBillSections = {
  energy: {
    title: "Energy",
    body: [
      "Energy bills are a big part of most household budgets, so it makes sense to check them carefully.",
      "Utility Warehouse offers gas and electricity with fixed, variable and EV tariff options. If you have an electric vehicle, or you are thinking about getting one, we can go through the EV tariff options as part of your quote.",
      "The best energy value is often unlocked when energy is combined with other services on your UW account.",
      "We’ll show you how the quote works, what your options are and how the services fit together.",
    ],
  },
  broadband: {
    title: "Broadband",
    body: [
      "Fast, reliable broadband is now part of everyday life and it needs to fit around you and your family.",
      "Whether you’re working from home, playing online games, making video calls, streaming TV and films, or keeping the whole family connected, it’s important to get the right deal for your own household.",
      "We’ll look at what options are available for your address and discuss what you actually need. (Spoiler: you do not always need the fastest package!)",
      "UW’s fibre and full-fibre options can reach speeds up to 944Mbps, so there is definitely a package to suit you.",
      "If you are still in contract, UW may also be able to help towards existing cancellation fees, making it easier to move when you are ready, not when your current provider lets you.",
    ],
  },
  mobile: {
    title: "Mobile SIM deals",
    body: [
      "Mobile SIM deals are for people who already have a phone they are happy with and want a better plan.",
      "We’ll look at how much data you use, what you pay now, how many SIMs your household needs and whether unlimited data makes sense.",
      "UW mobile runs on the EE network, with SIM-only plans that can include generous or unlimited data allowances, 4G and 5G, Wi-Fi Calling and monthly rolling contracts.",
      "If your current phone still does the job, a SIM-only deal can be a simple way to cut waste and get better value from the phone you already have.",
      "SIM-only deals can give great savings and are also super useful for the rest of your family.",
    ],
  },
  cashback: {
    title: "UW Cashback Card",
    body: [
      "The UW Cashback Card can help bring your bill down when you spend with participating retailers.",
      "That means your everyday spending can help reduce what you pay for your household services.",
      "We’ll show you how it works during the quote.",
    ],
  },
  contract: {
    title: "Still in contract?",
    body: [
      "Still in contract? You may not need to wait it out.",
      "UW may also be able to help towards your existing cancellation fees, making it easier to move when you are ready, not when your current provider lets you.",
      "We’ll go through this during the quote so you can see exactly how it works.",
    ],
  },
  note: {
    title: "Note",
    body: [
      "For electricity, gas, broadband and mobile services, your quote will be for Utility Warehouse services.",
      "We do not search the whole market.",
      "We will always be transparent about our services, explain your quote clearly and help you make a fully informed decision.",
    ],
  },
};

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
    title: "Household bill checks",
    slug: "bills",
    eyebrow: "Home checks",
    description: "Check energy, broadband and Mobile SIM deals in one simple place.",
    accentColour: "#F7F0E8",
    selectedCheck: "Household bills",
    status: "live",
    category: "Home checks",
    metaTitle: "Household bills check | Home Money Check",
    metaDescription:
      "Check energy, broadband and Mobile SIM deals in one simple place with Home Money Check.",
    intro: "Check energy, broadband and Mobile SIM deals in one simple place.",
    why: [],
    mainCopy: householdBillsIntro,
    householdSections: [
      householdBillSections.energy,
      householdBillSections.broadband,
      householdBillSections.mobile,
      householdBillSections.cashback,
      householdBillSections.contract,
      householdBillSections.note,
    ],
    nextSteps: standardNextSteps,
  },
  {
    title: "Energy check",
    slug: "energy",
    eyebrow: "Home checks",
    description:
      "Check your energy, broadband and Mobile SIM deals with clear help from Home Money Check.",
    accentColour: "#F4CF7A",
    selectedCheck: "Energy",
    status: "live",
    category: "Home checks",
    metaTitle: "Energy check | Home Money Check",
    metaDescription:
      "Check your energy, broadband and Mobile SIM deals with clear help from Home Money Check.",
    intro:
      "Check your energy, broadband and Mobile SIM deals with clear help from Home Money Check.",
    why: [],
    mainCopy: householdBillsIntro,
    householdSections: [
      householdBillSections.energy,
      householdBillSections.broadband,
      householdBillSections.mobile,
      householdBillSections.cashback,
      householdBillSections.contract,
      householdBillSections.note,
    ],
    nextSteps: standardNextSteps,
  },
  {
    title: "Broadband check",
    slug: "broadband",
    eyebrow: "Home checks",
    description:
      "Check your broadband, energy and Mobile SIM deals with clear help from Home Money Check.",
    accentColour: "#BFE3FF",
    selectedCheck: "Broadband",
    status: "live",
    category: "Home checks",
    metaTitle: "Broadband check | Home Money Check",
    metaDescription:
      "Check your broadband, energy and Mobile SIM deals with clear help from Home Money Check.",
    intro:
      "Check your broadband, energy and Mobile SIM deals with clear help from Home Money Check.",
    why: [],
    mainCopy: householdBillsIntro,
    householdSections: [
      householdBillSections.broadband,
      householdBillSections.energy,
      householdBillSections.mobile,
      householdBillSections.cashback,
      householdBillSections.contract,
      householdBillSections.note,
    ],
    nextSteps: standardNextSteps,
  },
  {
    title: "Mobile SIM deals",
    slug: "mobile",
    eyebrow: "Home checks",
    description:
      "Check Mobile SIM deals, broadband and energy with clear help from Home Money Check.",
    accentColour: "#F4D9DE",
    selectedCheck: "Mobile SIM deals",
    status: "live",
    category: "Home checks",
    metaTitle: "Mobile SIM deals | Home Money Check",
    metaDescription:
      "Check mobile SIM options and household mobile costs with Home Money Check.",
    intro:
      "Check Mobile SIM deals, broadband and energy with clear help from Home Money Check.",
    why: [],
    mainCopy: householdBillsIntro,
    householdSections: [
      householdBillSections.mobile,
      householdBillSections.broadband,
      householdBillSections.energy,
      householdBillSections.cashback,
      householdBillSections.contract,
      householdBillSections.note,
    ],
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
      "Choose the check you want to start with and send a few details.",
    why: [
      "You can keep the enquiry broad if you are not sure.",
      "We will get back to you personally.",
      "You are not committing to anything by submitting the form.",
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
      "You are not committing to anything by submitting the form.",
    ],
    nextSteps: standardNextSteps,
  },
  {
    title: "Coming soon",
    slug: "mortgage",
    eyebrow: "Coming soon",
    description: comingSoonIntro,
    accentColour: "#D8EEFF",
    selectedCheck: "Mortgages",
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
    selectedCheck: "First-time buyers",
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
    selectedCheck: "Remortgages",
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
    selectedCheck: "Moving home",
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
    selectedCheck: "Protection",
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
    description: "A practical route for wills, POAs and planning conversations.",
    accentColour: "#CFE6D5",
    selectedCheck: "Wills & POAs",
    status: "live",
    category: "Life planning checks",
    metaTitle: "Wills & POAs | Home Money Check",
    metaDescription: "Ask Home Money Check about wills, POAs and practical planning.",
    intro: "This route helps people ask about wills, POAs and practical planning.",
    why: ["Planning conversations are easier when they start clearly."],
    mainCopy: willsCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Business utilities",
    slug: "business-utilities",
    eyebrow: "Business checks",
    description: "A practical route for business utility checks.",
    accentColour: "#D9E1E8",
    selectedCheck: "Business utilities",
    status: "live",
    category: "Business checks",
    metaTitle: "Business utilities | Home Money Check",
    metaDescription: "Ask Home Money Check about business utility checks.",
    intro: "This route supports business utility questions.",
    why: ["Business services need a different check from household services."],
    mainCopy: businessUtilitiesCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Coming soon",
    slug: "finance-services",
    eyebrow: "Coming soon",
    description: comingSoonIntro,
    accentColour: "#D9E1E8",
    selectedCheck: "Finance/bookkeeping",
    status: "comingSoon",
    category: "Business checks",
    metaTitle: "Finance/bookkeeping | Home Money Check",
    metaDescription: "A finance/bookkeeping route is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Coming soon",
    slug: "business-protection",
    eyebrow: "Coming soon",
    description: comingSoonIntro,
    accentColour: "#D9E1E8",
    selectedCheck: "Business protection",
    status: "comingSoon",
    category: "Business checks",
    metaTitle: "Business protection coming soon | Home Money Check",
    metaDescription: "A business protection route is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Business continuity",
    slug: "business-continuity",
    eyebrow: "Business checks",
    description: "A practical route for business continuity conversations.",
    accentColour: "#D9E1E8",
    selectedCheck: "Business continuity",
    status: "live",
    category: "Business checks",
    metaTitle: "Business continuity | Home Money Check",
    metaDescription: "Ask Home Money Check about business continuity conversations.",
    intro: "This route helps organise business continuity enquiries.",
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

