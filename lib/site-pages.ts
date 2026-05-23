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

const householdBillsCopy = [
  "For energy, broadband and Mobile SIM deals we’ll take a few details, check what is available and explain your options really clearly before you decide.",
  "This is designed to be simple. Tell us what you want checked, we’ll ask the right questions, then we’ll let you know what options are available.",
];

const mortgageCopy = [
  "Mortgage advice should be based on your real circumstances, not a quick guess from a comparison box.",
  "We are not tied to one particular lender. We can search and advise from the whole of the market, then explain what options are available for you.",
  "We’ll look at your income, deposit, credit history, plans, preferences and what you want the mortgage to do for you. Then we’ll talk you through the next step properly.",
  "If you want us to, we can also recommend and liaise closely with solicitors and other property professionals so the process feels more joined up.",
];

const firstTimeBuyerCopy = [
  ...mortgageCopy,
  "Buying your first home can feel confusing, but the process becomes much easier when you know what you can borrow, what deposit you need, what the costs look like and what your next step should be.",
  "We’ll help you understand your position, check what mortgage options are available and explain the process in plain English.",
];

const remortgageCopy = [
  ...mortgageCopy,
  "If your current deal is ending, or you want to check whether your mortgage is still right for you, we’ll review your situation and search for suitable options.",
  "We’ll look at your current mortgage, your plans, your income and what you want from the next deal.",
];

const movingHomeCopy = [
  ...mortgageCopy,
  "If you’re moving home, we’ll help you understand what you can afford, what happens with your current mortgage and what options are available for your next property.",
];

const protectionCopy = [
  "Protection is about making sure the right money is there if something serious happens.",
  "We’ll ask about your mortgage, family, income, existing cover, budget and what you want protected. Then we’ll explain the options that fit your situation.",
];

const privateMedicalCopy = [
  "Private medical insurance can vary a lot depending on your age, health, budget and what level of cover you want.",
  "We’ll take the details, help you understand the options and explain what is worth considering before you decide.",
];

const willsCopy = [
  "Good estate planning starts with understanding your family, your property, your wishes and the people you trust.",
  "We’ll talk through what you want to happen, explain the role of wills, powers of attorney and trusts, then recommend the right next step.",
  "This is about making things easier for the people you care about and making sure your wishes are properly recorded.",
];

const businessUtilitiesCopy = [
  "For business utilities, we’ll take details about your business, your current supply and what you need. Then we’ll check what is available and explain the quote clearly.",
];

const financeCopy = [
  "We’ll start with a short discovery call so we can understand exactly what you need. Then we’ll recommend which service is best suited to you and give you a fully transparent quote.",
];

const businessProtectionCopy = [
  "Business protection helps a business plan for serious illness, death or the loss of a key person.",
  "We’ll ask the right questions about the business, the people involved, ownership, debt, income and continuity. Then we’ll explain what options are available.",
];

const businessContinuityCopy = [
  "Business continuity is about what happens to the business if an owner, director or key person dies, loses capacity or can no longer work.",
  "We’ll help you think through the practical risks, then explain what planning may be needed to protect the business, the owners and the people who depend on it.",
];

const extraIncomeCopy = [
  "If you’re looking for an extra income opportunity, we’ll explain how it works, what is involved and what you would need to do.",
  "There is no guaranteed income. We’ll be honest about that. But if it suits you, we’ll show you the process properly and help you decide whether it is worth exploring.",
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
    mainCopy: householdBillsCopy,
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
    mainCopy: householdBillsCopy,
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
    mainCopy: householdBillsCopy,
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
    mainCopy: householdBillsCopy,
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
    mainCopy: extraIncomeCopy,
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
    mainCopy: [
      "Home Money Check is not an instant comparison site. It is a friendly check and advice service. You send a few basic details, we get in touch, then we help you understand the best route for what you need.",
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
    mainCopy: mortgageCopy,
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
    mainCopy: firstTimeBuyerCopy,
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
    mainCopy: remortgageCopy,
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
    mainCopy: movingHomeCopy,
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
    mainCopy: protectionCopy,
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
    mainCopy: privateMedicalCopy,
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
    mainCopy: willsCopy,
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
    mainCopy: businessUtilitiesCopy,
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
    mainCopy: financeCopy,
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
    mainCopy: businessProtectionCopy,
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

