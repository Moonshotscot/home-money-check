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
  contentTitle?: string;
  contentSections?: {
    title: string;
    body: string[];
  }[];
  householdSections?: {
    title: string;
    body: string[];
    support?: string;
  }[];
  processSteps?: {
    title: string;
    body: string;
  }[];
  heroCard?: {
    pill: string;
    heading: string;
    body: string;
  };
  formHelperText?: string;
  submitLabel?: string;
  primaryCta?: string;
  noteSection?: {
    title: string;
    body: string[];
  };
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
    href: "",
    active: ["/energy", "/broadband", "/mobile"],
    children: [
      { label: "Energy", href: "/energy" },
      { label: "Broadband", href: "/broadband" },
      { label: "Mobile SIMs", href: "/mobile" },
    ],
  },
  { label: "£20K Giveaway", href: "/20k-giveaway", active: ["/20k-giveaway"] },
  {
    label: "Mortgages",
    href: "",
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
    href: "",
    active: ["/protection", "/private-medical-insurance"],
    children: [
      { label: "Protection", href: "/protection" },
      { label: "Private medical insurance", href: "/private-medical-insurance" },
    ],
  },
  { label: "Wills & POAs", href: "/estate-planning", active: ["/estate-planning"] },
  {
    label: "For businesses",
    href: "",
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
  { label: "Partner with us", href: "/partner-with-us", active: ["/partner-with-us"] },
];

export const mobileMenuGroups: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Household bills",
    href: "",
    children: [
      { label: "Energy", href: "/energy" },
      { label: "Broadband", href: "/broadband" },
      { label: "Mobile SIMs", href: "/mobile" },
    ],
  },
  { label: "£20K Giveaway", href: "/20k-giveaway" },
  {
    label: "Mortgages",
    href: "",
    children: [
      { label: "Mortgages", href: "/mortgage" },
      { label: "First-time buyers", href: "/mortgage/first-time-buyer" },
      { label: "Remortgages", href: "/mortgage/remortgage" },
      { label: "Moving home", href: "/mortgage/moving-home" },
    ],
  },
  {
    label: "Insurance",
    href: "",
    children: [
      { label: "Protection", href: "/protection" },
      { label: "Private medical insurance", href: "/private-medical-insurance" },
    ],
  },
  { label: "Wills & POAs", href: "/estate-planning" },
  {
    label: "For businesses",
    href: "",
    children: [
      { label: "Business utilities", href: "/business-utilities" },
      { label: "Finance/bookkeeping", href: "/finance-services" },
      { label: "Business protection", href: "/business-protection" },
      { label: "Business continuity", href: "/business-continuity" },
    ],
  },
  { label: "Partner with us", href: "/partner-with-us" },
];

const standardNextSteps = [
  "Tell us what you want to check.",
  "We will look at the option that seems most relevant.",
  "You can decide what, if anything, you want to do next.",
];

const comingSoonIntro =
  "This service is being prepared and is not live on Home Money Check yet.";

const comingSoonCopy = [
  comingSoonIntro,
  "Leave your details and we’ll let you know when this service is ready.",
];

const householdBillsIntro = [
  "Through Home Money Check, our Authorised Utility Warehouse Partner, Neill Connolly, will contact you and go through a detailed online quote.",
  "You’ll see how things work, what they cost, what benefits are on offer and what savings you can make.",
  "We can look at electricity, gas, broadband, Mobile SIM deals, EV tariffs, the UW Cashback Card and help towards existing cancellation fees.",
  "The very best value is often found when more than one service is added to your account.",
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
      "For electricity, gas, broadband and mobile services, your quote will be for Utility Warehouse services. We do not search the whole market.",
      "We will always be transparent about our services, explain your quote clearly and help you make a fully informed decision.",
    ],
  },
};

const willsCopy = [
  "Home Money Check works with advisers who cover all your estate planning needs.",
];

const businessUtilitiesCopy = [
  "Business utilities can be a serious cost, and it is easy to let renewals, contract dates and supplier paperwork drift.",
  "Home Money Check can help you review your business electricity, gas, water, telecoms, phone, broadband and mobile services where available.",
  "We can also discuss energy efficiency support, solar options and EV charger options where they are relevant to your business.",
  "We’ll take the key details, understand your business and talk through the quote so you know what the costs are, what the contract means and what happens next.",
];

const financeCopy = [
  "Finance/bookkeeping starts with a short discovery call so we can understand what the business needs.",
  "We’ll recommend the right service option and provide a clear quote. This is about bookkeeping and finance admin support, not investment, pension or credit advice.",
];

const businessProtectionCopy = [
  "Business protection is about starting a conversation around what happens if a key person, owner or director dies or becomes seriously ill.",
  "We can talk through risks such as lost income, business debt, ownership disruption and pressure on the remaining people. Nothing is promised or assumed at this stage.",
];

const businessContinuityCopy = [
  "Business continuity is about making sure the business can keep moving if something happens to an owner, director or key person.",
  "Home Money Check can help you start the conversation, identify the practical risks and understand what planning may be needed.",
  "This could include control of the business, decision-making, succession, key documents, access to information and making sure the right people can step in when needed.",
];

const extraIncomeCopy = [
  "Home Money Check is built to help people check services, understand their options and get to the right person quickly.",
  "As the site grows, we want to work with people and businesses who can help us serve customers well.",
  "That might mean building your own income stream, receiving leads for your business, or using a Home Money Check partner page to point people towards services you can help with.",
  "No big claims. No false promises. Just a practical way to create more conversations, more enquiries and more opportunities.",
];

export const sitePages: SitePage[] = [
  {
    title: "Energy checks",
    slug: "energy",
    eyebrow: "Household bill checks",
    description:
      "See how our quote could bring your energy, broadband and Mobile SIM deals together to maximise your savings.",
    accentColour: "#F4CF7A",
    selectedCheck: "Energy",
    status: "live",
    category: "Home checks",
    metaTitle: "Energy check | Home Money Check",
    metaDescription:
      "Ask Home Money Check about energy, broadband and Mobile SIM deals.",
    intro: "",
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
    title: "Broadband checks",
    slug: "broadband",
    eyebrow: "Household bill checks",
    description:
      "See how our quote could bring your energy, broadband and Mobile SIM deals together to maximise your savings.",
    accentColour: "#BFE3FF",
    selectedCheck: "Broadband",
    status: "live",
    category: "Home checks",
    metaTitle: "Broadband check | Home Money Check",
    metaDescription:
      "Ask Home Money Check about broadband, energy and Mobile SIM deals.",
    intro: "",
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
    eyebrow: "Household bill checks",
    description:
      "See how our quote could bring your energy, broadband and Mobile SIM deals together to maximise your savings.",
    accentColour: "#F4D9DE",
    selectedCheck: "Mobile SIM deals",
    status: "live",
    category: "Home checks",
    metaTitle: "Mobile SIM deals | Home Money Check",
    metaDescription:
      "Check mobile SIM options and household mobile costs with Home Money Check.",
    intro: "",
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
    eyebrow: "CURRENT CAMPAIGN",
    description:
      "Enter for free for your chance to win £20,000. No purchase necessary.",
    accentColour: "#EADFFD",
    selectedCheck: "£20K Giveaway",
    status: "live",
    category: "Current campaign",
    metaTitle: "£20K Giveaway | Home Money Check",
    metaDescription:
      "Enter for free for your chance to win £20,000 through Home Money Check.",
    intro: "",
    why: [],
    contentTitle: "Your chance to win £20,000",
    mainCopy: [
      "Utility Warehouse is giving away £20,000 and you can enter for free.",
      "No purchase is needed. You do not need to be a Utility Warehouse customer.",
      "Through Home Money Check, our Authorised Utility Warehouse Partner, Neill Connolly, will contact you and help you enter the current UW £20K Giveaway.",
      "It is simple: send your details, we’ll get back to you, help with the entry and explain anything you need to know.",
    ],
    contentSections: [
      {
        title: "Why enter?",
        body: [
          "£20,000 could make a serious difference.",
          "It could help with bills, savings, home improvements, clearing debt, treating your family or simply giving yourself more breathing room.",
          "It is free to enter, quick to do and there is no purchase needed.",
        ],
      },
    ],
    processSteps: [
      {
        title: "Send your details",
        body: "Enter your name and contact details.",
      },
      {
        title: "We’ll get back to you",
        body: "Our Authorised Utility Warehouse Partner, Neill Connolly, will contact you and help with the giveaway entry.",
      },
      {
        title: "You’re entered",
        body: "Once your entry is completed and submitted, you’re in the draw.",
      },
      {
        title: "You decide what else to check",
        body: "You can also ask about household bills if you want to, but entering the giveaway does not require a purchase.",
      },
    ],
    heroCard: {
      pill: "FREE TO ENTER",
      heading: "A chance to win £20,000",
      body: "Send your details and our Authorised Utility Warehouse Partner, Neill Connolly, will help you enter the current UW £20K Giveaway.",
    },
    formHelperText: "Pop in your details and we’ll get back to you quickly. No obligation at all.",
    submitLabel: "Enter the giveaway",
    primaryCta: "Enter the giveaway",
    noteSection: {
      title: "Important note",
      body: [
        "The £20K Giveaway is run by Utility Warehouse and is subject to its prize draw terms and eligibility rules.",
        "No purchase is necessary.",
        "Open to UK residents aged 18+ only. Existing UW customers are excluded under the current terms.",
        "One entry per person.",
        "Entries must be completed by 31 August 2026. The draw is due to take place by 31 October 2026.",
      ],
    },
    nextSteps: standardNextSteps,
  },
  {
    title: "Partner with us",
    slug: "partner-with-us",
    eyebrow: "PARTNER WITH HOME MONEY CHECK",
    description:
      "Make extra money, grow your business, or bring Home Money Check to your own audience.",
    accentColour: "#D9C2F4",
    selectedCheck: "Partner with us",
    status: "live",
    category: "Income",
    metaTitle: "Partner with us | Home Money Check",
    metaDescription:
      "Partner with Home Money Check to make extra money, grow your business or bring Home Money Check to your own audience.",
    intro: "",
    why: [],
    contentTitle: "How you can partner with Home Money Check",
    mainCopy: extraIncomeCopy,
    contentSections: [
      {
        title: "Make extra money",
        body: [
          "If you like the idea of earning extra income, Home Money Check could give you a practical place to start.",
          "You do not need to be pushy. You do need to be willing to learn, talk to people, follow the process and build steadily.",
          "We’ll explain the options, what is involved, how the support works and whether it feels like a good fit for you.",
          "For the right person, this could become a useful side income. For someone more ambitious, it could become something bigger over time.",
        ],
      },
      {
        title: "Your own Home Money Check partner page",
        body: [
          "Selected partners may be offered their own Home Money Check page.",
          "This gives you a simple place to send people from social media, messages, conversations, emails or your existing client base.",
          "The page can be set up around your name, your audience and the services that make sense for you.",
          "The aim is simple: make it easier for people to ask for help, and make sure the right enquiries go to the right person.",
        ],
      },
      {
        title: "Get more leads for your business",
        body: [
          "If your business provides a service that helps households, families, homeowners or small businesses, Home Money Check may be able to send suitable leads your way.",
          "We want to work with businesses that respond quickly, treat customers well and provide a good service.",
          "This could suit local service providers, professional firms, business service providers and selected specialists who want more enquiries without building everything from scratch.",
          "If there is a good fit, we’ll agree how it works before any leads are sent.",
        ],
      },
      {
        title: "Already work with clients?",
        body: [
          "If you are a mortgage adviser, estate planner, accountant, IFA, letting agent, estate agent or another professional, you may already speak to people who need help in more than one area.",
          "Home Money Check can give you a simple way to add more value, keep conversations open and point clients towards services that make sense for them.",
          "You keep doing what you are good at. Home Money Check helps with the wider opportunities around the client.",
        ],
      },
      {
        title: "A real opportunity, not a promise",
        body: [
          "There is no guaranteed income and not every person or business will be the right fit.",
          "The opportunity depends on what you want to do, how active you are, how well you follow the process and whether there is a good match between you, Home Money Check and the customers we serve.",
          "We’ll talk it through with you before anything is agreed.",
        ],
      },
    ],
    processSteps: [
      {
        title: "Send your details",
        body: "Tell us who you are and what kind of partnership you are interested in.",
      },
      {
        title: "We’ll get in touch",
        body: "We’ll arrange a time to talk through your situation, your goals and what might fit.",
      },
      {
        title: "We’ll explain the options",
        body: "We’ll cover the different ways to work with Home Money Check and what would be involved.",
      },
      {
        title: "You decide",
        body: "You can ask questions, think it over and decide whether it is right for you.",
      },
    ],
    heroCard: {
      pill: "WAYS TO WORK TOGETHER",
      heading: "One brand. Different opportunities.",
      body: "You might want to make extra money, get more leads for your business, or offer Home Money Check to your own clients and contacts.",
    },
    formHelperText: "Pop in your details and we’ll get back to you quickly. No obligation at all.",
    submitLabel: "Talk to us about partnering",
    primaryCta: "Talk to us about partnering",
    nextSteps: standardNextSteps,
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
      "Start a Home Money Check enquiry for bills, home services, planning or income options.",
    intro:
      "Choose the check you want to start with and send a few details.",
    why: [
      "You can keep the enquiry broad if you are not sure.",
      "We will get back to you quickly.",
      "You are not committing to anything by submitting the form.",
    ],
    mainCopy: [
      "Home Money Check is a friendly check and advice service. You send a few basic details, we get in touch, then we help you understand the best option for what you need.",
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
      "Contact Home Money Check about household bills, planning, business checks or income options.",
    intro:
      "A simple contact page for questions that do not fit neatly into one check yet.",
    why: [
      "You can ask a general question.",
      "We can point you toward a more specific option.",
      "You are not committing to anything by submitting the form.",
    ],
    nextSteps: standardNextSteps,
  },
  {
    title: "Mortgages",
    slug: "mortgage",
    eyebrow: "Mortgage, insurance & planning",
    description: comingSoonIntro,
    accentColour: "#D8EEFF",
    selectedCheck: "Mortgages",
    status: "comingSoon",
    category: "Mortgage, insurance & planning",
    metaTitle: "Mortgage checks coming soon | Home Money Check",
    metaDescription:
      "Mortgage check pages are coming soon to Home Money Check.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "First-time buyers",
    slug: "mortgage/first-time-buyer",
    eyebrow: "Mortgage, insurance & planning",
    description: comingSoonIntro,
    accentColour: "#D8EEFF",
    selectedCheck: "First-time buyers",
    status: "comingSoon",
    category: "Mortgage, insurance & planning",
    metaTitle: "First-time buyer mortgage coming soon | Home Money Check",
    metaDescription:
      "A first-time buyer mortgage check is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Remortgages",
    slug: "mortgage/remortgage",
    eyebrow: "Mortgage, insurance & planning",
    description: comingSoonIntro,
    accentColour: "#D8EEFF",
    selectedCheck: "Remortgages",
    status: "comingSoon",
    category: "Mortgage, insurance & planning",
    metaTitle: "Remortgage check coming soon | Home Money Check",
    metaDescription: "A remortgage check is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Moving home",
    slug: "mortgage/moving-home",
    eyebrow: "Mortgage, insurance & planning",
    description: comingSoonIntro,
    accentColour: "#D8EEFF",
    selectedCheck: "Moving home",
    status: "comingSoon",
    category: "Mortgage, insurance & planning",
    metaTitle: "Moving home mortgage coming soon | Home Money Check",
    metaDescription: "A moving home mortgage check is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Protection",
    slug: "protection",
    eyebrow: "Mortgage, insurance & planning",
    description: comingSoonIntro,
    accentColour: "#F5D28A",
    selectedCheck: "Protection",
    status: "comingSoon",
    category: "Mortgage, insurance & planning",
    metaTitle: "Protection check coming soon | Home Money Check",
    metaDescription: "A protection check is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Private medical insurance",
    slug: "private-medical-insurance",
    eyebrow: "Mortgage, insurance & planning",
    description: comingSoonIntro,
    accentColour: "#BFD9C8",
    selectedCheck: "Private medical insurance",
    status: "comingSoon",
    category: "Mortgage, insurance & planning",
    metaTitle: "Private medical insurance coming soon | Home Money Check",
    metaDescription:
      "A private medical insurance check is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Wills & POAs",
    slug: "estate-planning",
    eyebrow: "MORTGAGE, INSURANCE & PLANNING",
    description: "Protect your family's inheritance and prepare for the future.",
    accentColour: "#CFE6D5",
    selectedCheck: "Wills & POAs",
    status: "live",
    category: "Life planning checks",
    metaTitle: "Wills & POAs | Home Money Check",
    metaDescription: "Ask Home Money Check about wills, POAs and practical planning.",
    intro: "",
    why: [],
    contentTitle: "What we’ll help with",
    mainCopy: willsCopy,
    contentSections: [
      {
        title: "Wills",
        body: [
          "A will lets you decide who should receive your estate, who should deal with things and what you want to happen after you die.",
          "Without a clear will, the people you care about can be left with more stress, delay and uncertainty at the worst possible time.",
          "We’ll talk through your family, property, wishes and concerns, then help you plan and implement the best strategy for your future.",
        ],
      },
      {
        title: "Powers of Attorney",
        body: [
          "Unlike a will, a Power of Attorney is designed to help you when you are alive.",
          "It lets people you trust deal with decisions when you lose capacity or cannot manage things yourself. This can include money, property, welfare and practical decisions.",
          "This is one of the most important documents you can have. Without it, your family may have delays, additional costs and stress at an already difficult time.",
        ],
      },
      {
        title: "Trusts",
        body: [
          "Trusts can be useful in many situations, especially where there are children, blended families, property concerns, vulnerable beneficiaries or more complex wishes.",
          "They can provide strong frameworks to make sure the right people get the right benefits at the right time.",
          "They are not right for everyone, so we’ll explain when they make sense and when a simpler approach is better.",
        ],
      },
      {
        title: "Why it matters",
        body: [
          "Good estate planning is about making your wishes clear, reducing stress for your family and helping the right people deal with things when needed.",
          "It can make life easier for the people you care about and give you confidence that the important decisions have been thought through.",
        ],
      },
    ],
    processSteps: [
      {
        title: "Send your details",
        body: "Tell us the best way to contact you.",
      },
      {
        title: "We’ll arrange a call",
        body: "We’ll get back to you and arrange a good time for a phone or video call.",
      },
      {
        title: "We’ll talk through your wishes",
        body: "We’ll discuss your family, property, wishes, concerns and what you want to achieve.",
      },
      {
        title: "You decide the next step",
        body: "We’ll explain the options and help you understand what documents or planning may be right for you.",
      },
    ],
    heroCard: {
      pill: "HOW IT WORKS",
      heading: "We’ll talk it through with you.",
      body: "Enter your details and we’ll get back to you to arrange a good time to talk through what you want to achieve and discuss your requirements.",
    },
    formHelperText: "Pop in your details and we’ll get back to you quickly. No obligation at all.",
    submitLabel: "Start my check",
    primaryCta: "Start my check",
    nextSteps: standardNextSteps,
  },
  {
    title: "Business utilities",
    slug: "business-utilities",
    eyebrow: "BUSINESS & INCOME CHECKS",
    description:
      "If your current energy, water or telecoms contract is ending in the next 12 months, we can check to get you the best deals.",
    accentColour: "#D9E1E8",
    selectedCheck: "Business utilities",
    status: "live",
    category: "Business checks",
    metaTitle: "Business utilities | Home Money Check",
    metaDescription: "Ask Home Money Check about business utility checks.",
    intro: "",
    why: [],
    contentTitle: "What we’ll check",
    mainCopy: businessUtilitiesCopy,
    contentSections: [
      {
        title: "Energy, water and telecoms",
        body: [
          "Business electricity, gas, water and telecoms contracts can be awkward to compare because usage, contract end dates, standing charges, call packages, broadband needs and supplier terms all matter.",
          "We’ll look at your current position, your renewal dates and what your business needs day to day.",
          "The aim is simple: help you understand the quote, reduce hassle and arrange business utility options that make sense for your business.",
        ],
      },
      {
        title: "Why check now?",
        body: [
          "Business owners are busy, and utilities are easy to leave until the last minute.",
          "Checking early gives you more control. It can help you avoid rushed decisions, understand your renewal options and see whether a better deal can be arranged before you are under pressure.",
        ],
      },
      {
        title: "What we’ll need",
        body: [
          "To start the check, we will usually need a few details about your business, your current suppliers, your usage and your contract position.",
          "Recent bills for energy, water or telecoms can make the process easier.",
          "We’ll keep it straightforward and explain what information is needed before anything moves forward.",
        ],
      },
    ],
    processSteps: [
      {
        title: "Send your details",
        body: "Tell us about your business and the best way to contact you.",
      },
      {
        title: "We’ll get in touch",
        body: "We’ll arrange a time to talk through your current utility position.",
      },
      {
        title: "We’ll review the details",
        body: "We’ll look at your supplier, usage, contract dates and what your business needs.",
      },
      {
        title: "You decide the next step",
        body: "We’ll talk through the quote, answer your questions and help you decide what works for your business.",
      },
    ],
    heroCard: {
      pill: "HOW IT WORKS",
      heading: "We’ll talk it through with you.",
      body: "Send your details and we’ll get back to you to understand your business, discuss your options and help you make the right decision.",
    },
    formHelperText: "Pop in your details and we’ll get back to you quickly. No obligation at all.",
    submitLabel: "Start my check",
    primaryCta: "Start my check",
    nextSteps: standardNextSteps,
  },
  {
    title: "Finance/bookkeeping",
    slug: "finance-services",
    eyebrow: "Business & income checks",
    description: comingSoonIntro,
    accentColour: "#D9E1E8",
    selectedCheck: "Finance/bookkeeping",
    status: "comingSoon",
    category: "Business & income checks",
    metaTitle: "Finance/bookkeeping | Home Money Check",
    metaDescription: "A finance/bookkeeping service is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Business protection",
    slug: "business-protection",
    eyebrow: "Business & income checks",
    description: comingSoonIntro,
    accentColour: "#D9E1E8",
    selectedCheck: "Business protection",
    status: "comingSoon",
    category: "Business & income checks",
    metaTitle: "Business protection coming soon | Home Money Check",
    metaDescription: "A business protection service is coming soon.",
    intro: comingSoonIntro,
    why: ["Leave your details and we’ll let you know when this service is ready."],
    mainCopy: comingSoonCopy,
    nextSteps: standardNextSteps,
  },
  {
    title: "Business continuity",
    slug: "business-continuity",
    eyebrow: "BUSINESS & INCOME CHECKS",
    description:
      "Make sure your business has a plan if an owner, director or key person can no longer carry on.",
    accentColour: "#D9E1E8",
    selectedCheck: "Business continuity",
    status: "live",
    category: "Business checks",
    metaTitle: "Business continuity | Home Money Check",
    metaDescription: "Ask Home Money Check about business continuity conversations.",
    intro: "",
    why: [],
    contentTitle: "What we’ll help you think through",
    mainCopy: businessContinuityCopy,
    contentSections: [
      {
        title: "Why it matters",
        body: [
          "Many businesses rely heavily on one or two people.",
          "If one of those people can no longer work, make decisions or deal with the business, everything can become harder very quickly.",
          "A continuity plan helps reduce confusion, protect the people involved and give the business a clearer way forward.",
        ],
      },
      {
        title: "What can be reviewed",
        body: [
          "We can talk through who owns the business, who makes decisions, who has access to key information and what would happen if someone important could no longer act.",
          "We can also discuss whether wills, powers of attorney, shareholder arrangements, business documents or professional advice may be needed.",
        ],
      },
      {
        title: "Who this helps",
        body: [
          "This can help company directors, business owners, family businesses, partnerships, sole traders and firms that rely heavily on key people.",
          "If the business would struggle without one person, it is worth having the conversation.",
        ],
      },
    ],
    processSteps: [
      {
        title: "Send your details",
        body: "Tell us about the business and the best way to contact you.",
      },
      {
        title: "We’ll arrange a call",
        body: "We’ll get back to you and arrange a good time to talk.",
      },
      {
        title: "We’ll discuss the risks",
        body: "We’ll talk through ownership, key people, decision-making and what would happen if someone could no longer act.",
      },
      {
        title: "You decide the next step",
        body: "We’ll explain what planning may help and what the next step could look like.",
      },
    ],
    heroCard: {
      pill: "HOW IT WORKS",
      heading: "We’ll talk it through with you.",
      body: "Enter your details and we’ll get back to you to discuss the business, the people involved and what needs to be protected.",
    },
    formHelperText: "Pop in your details and we’ll get back to you quickly. No obligation at all.",
    submitLabel: "Start my check",
    primaryCta: "Start my check",
    nextSteps: standardNextSteps,
  },
  {
    title: "Local home partners",
    slug: "local-home-partners",
    eyebrow: "Coming soon",
    description: "A local home partners page is being prepared.",
    accentColour: "#D9E1E8",
    selectedCheck: "Local home partners",
    status: "comingSoon",
    category: "Business checks",
    metaTitle: "Local home partners coming soon | Home Money Check",
    metaDescription: "A local home partners page is coming soon.",
    intro:
      "This page will help organise local partner enquiries when it is ready.",
    why: ["Local home support needs simple, trustworthy presentation."],
    nextSteps: standardNextSteps,
  },
];

export function getPageBySlug(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}

export function getRoutePath(page: SitePage) {
  return `/${page.slug}`;
}

