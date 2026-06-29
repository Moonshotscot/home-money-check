export type CampaignChoice = {
  key: string;
  label: string;
};

export type CampaignSection = {
  heading: string;
  body?: string[];
  items?: string[];
};

export type CampaignPageConfig = {
  slug: string;
  metadataTitle: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  reassurance: string;
  intro: string[];
  coversHeading: string;
  covers: string[];
  audienceHeading: string;
  audience: string[];
  sections?: CampaignSection[];
  noPressure: string;
  formTitle: string;
  formIntro?: string;
  formChoiceLabel?: string;
  formChoices?: CampaignChoice[];
  defaultCheck: CampaignChoice;
  contextField?: {
    label: string;
    options: CampaignChoice[];
  };
};

const householdCheckChoices: CampaignChoice[] = [
  { key: "energy", label: "Energy" },
  { key: "broadband", label: "Broadband" },
  { key: "mobile", label: "Mobile SIMs" },
  { key: "all-household-bills", label: "All household bills" },
];

const householdBillsFunnelChoices: CampaignChoice[] = [
  { key: "energy", label: "Gas and electricity" },
  { key: "broadband", label: "Broadband" },
  { key: "mobile", label: "Mobile SIMs" },
  { key: "all-household-bills", label: "All household bills" },
];

export const campaignPages = {
  "household-bills-check": {
    slug: "household-bills-check",
    metadataTitle: "Household Bills Check | Home Money Check",
    eyebrow: "HOUSEHOLD BILLS CHECK",
    title: "Let’s see if we can save you money!",
    subtitle:
      "Pop in your details below and we’ll check if we can save you money on your household bills.",
    ctaLabel: "Start my bills check",
    reassurance: "Free! No cost to you",
    intro: [
      "Everyone is feeling the pinch at the moment and your household bills probably aren’t helping! We can’t promise any miracles but we can promise to do our best to help you save money.",
      "Here at Home Money Check we’ll discuss what you pay for, what you use, what you actually need and if we can help you get a cheaper deal. If we can help you save then great. And if we can’t, we’ll tell you straight away.",
    ],
    coversHeading: "What we check",
    covers: [
      "Gas and electricity",
      "Broadband",
      "Mobile SIMs",
      "Current offers",
      "Bundle options",
      "Cashback promotions",
    ],
    audienceHeading: "This is for you if...",
    audience: [
      "Your bills are getting more expensive or are too high",
      "You’d like to see if you can get a better deal",
      "You pay for your own electricity, gas, or broadband",
      "You are moving home soon and need new services",
      "You have a mobile phone and want a SIM only deal",
    ],
    noPressure:
      "We’ll talk you through a new quote, discuss your options and what’s available for you and your home. We can get your new deal in place quickly and with minimal fuss. You are always in control.",
    formTitle: "Pop in your details",
    formIntro: "Let us know what’s important to you and how to get in touch.",
    formChoiceLabel: "What would you like checked?",
    formChoices: householdBillsFunnelChoices,
    defaultCheck: { key: "household-bills-check", label: "Household Bills Check" },
  },
  "perthshire-bills-check": {
    slug: "perthshire-bills-check",
    metadataTitle: "Perthshire Bills Check | Home Money Check",
    eyebrow: "Perthshire household bills",
    title: "Perthshire household bills check",
    subtitle:
      "A free household bills check for people in Perthshire who want to review energy, broadband, mobile and home services.",
    ctaLabel: "Start my Perthshire bills check",
    reassurance: "No cost to you. No obligation.",
    intro: [
      "If you live in Perthshire, Home Money Check can help you review the household services you already use and see whether there is a better deal available.",
      "We'll look at your energy, broadband, Mobile SIMs and home services, then explain your options clearly so you can decide what works best for your home.",
    ],
    coversHeading: "What this check covers",
    covers: [
      "Gas and electricity",
      "Broadband availability for your address",
      "Mobile SIM deals",
      "Household service bundles",
      "Current offers and savings opportunities",
    ],
    audienceHeading: "Who it is for",
    audience: [
      "Perthshire households looking to reduce bills",
      "Homeowners, tenants and families",
      "People moving home in or around Perthshire",
      "Anyone who wants a simple local check before switching",
    ],
    noPressure:
      "This is about helping you understand your options. We'll show you what is available, explain the costs and let you decide whether it fits.",
    formTitle: "Start your Perthshire bills check",
    formChoiceLabel: "What would you like checked?",
    formChoices: householdCheckChoices,
    defaultCheck: { key: "perthshire-bills-check", label: "Perthshire Bills Check" },
  },
  "dundee-bills-check": {
    slug: "dundee-bills-check",
    metadataTitle: "Dundee Bills Check | Home Money Check",
    eyebrow: "Dundee household bills",
    title: "Dundee household bills check",
    subtitle:
      "A free household bills check for people in Dundee who want to review energy, broadband, mobile and home services.",
    ctaLabel: "Start my Dundee bills check",
    reassurance: "No cost to you. No obligation.",
    intro: [
      "If you live in Dundee, Home Money Check can help you check the services you already use and see whether your household could get a better deal.",
      "We'll talk through your current bills, what your household needs and what options are available for your address.",
    ],
    coversHeading: "What this check covers",
    covers: [
      "Gas and electricity",
      "Broadband and home internet",
      "Mobile SIM deals",
      "Home service bundles",
      "Current offers and savings opportunities",
    ],
    audienceHeading: "Who it is for",
    audience: [
      "Dundee households who want to check their bills",
      "Families with energy, broadband and mobile costs to review",
      "People moving home in Dundee",
      "Anyone who wants a clearer deal before deciding",
    ],
    noPressure:
      "We'll explain your options in plain English. If there is a saving or a better fit, we'll show you. If not, you can leave it there.",
    formTitle: "Start your Dundee bills check",
    formChoiceLabel: "What would you like checked?",
    formChoices: householdCheckChoices,
    defaultCheck: { key: "dundee-bills-check", label: "Dundee Bills Check" },
  },
  "staff-bills-check": {
    slug: "staff-bills-check",
    metadataTitle: "Your Staff's Bills Check | Home Money Check",
    eyebrow: "Staff wellbeing support",
    title: "Give your staff a free household bills check",
    subtitle:
      "A simple no-cost way to give your team access to a private household bills check covering energy, broadband, mobile and home services.",
    ctaLabel: "Ask about staff bills checks",
    reassurance: "No cost to the employer. A practical extra benefit for your team.",
    intro: [
      "Many employees are under pressure from household bills. A staff bills check gives your team a simple way to review energy, broadband, mobile and home services without you needing to manage the advice yourself.",
      "Home Money Check can provide a clear way for staff to ask for help, understand their options and see whether a better deal is available.",
    ],
    coversHeading: "What staff can check",
    covers: [
      "Energy",
      "Broadband",
      "Mobile SIMs",
      "Home services",
      "Current offers and savings opportunities",
    ],
    audienceHeading: "Who it is for",
    audience: [
      "Employers who want to offer a practical staff benefit",
      "Small businesses looking after their team",
      "HR and wellbeing contacts",
      "Managers who want a simple, low-friction support option",
    ],
    sections: [
      {
        heading: "A practical no-cost support option for your team",
        body: [
          "This can work well as a simple staff wellbeing benefit. You do not need to set up a complicated scheme or manage individual conversations. You simply give staff access to the check, and Home Money Check handles the enquiry.",
        ],
      },
      {
        heading: "What the employer needs to do",
        items: [
          "Ask about the service",
          "Agree how staff will be introduced to it",
          "Share the agreed link or information with your team",
          "Let staff choose whether they want to use it",
        ],
      },
    ],
    noPressure:
      "Staff are free to ask, free to listen and free to decide. The aim is to give them a simple way to check their household bills and understand their options.",
    formTitle: "Ask about staff bills checks",
    defaultCheck: { key: "staff-bills-check", label: "Staff Bills Check" },
    contextField: {
      label: "Are you enquiring as...",
      options: [
        { key: "business-owner", label: "Business owner" },
        { key: "manager", label: "Manager" },
        { key: "hr-staff-wellbeing", label: "HR / staff wellbeing" },
        { key: "employee", label: "Employee" },
        { key: "other", label: "Other" },
      ],
    },
  },
  "for-your-clients": {
    slug: "for-your-clients",
    metadataTitle: "Home Money Check for Your Clients | Home Money Check",
    eyebrow: "For professionals",
    title: "Give your clients a household bills check",
    subtitle:
      "A simple extra service for your clients, without you having to explain household bills, energy, broadband or mobile yourself.",
    ctaLabel: "Ask about client introductions",
    reassurance: "A practical extra conversation for clients who already trust you.",
    intro: [
      "Your clients often speak to you at important moments: buying a home, arranging protection, planning their estate, moving house, sorting finances or dealing with family changes.",
      "Home Money Check gives you a simple way to add extra value by giving them access to a household bills check.",
      "This is not the Connolly Partner Hub portal. This is the public explanation page for professionals who want to understand how client introductions could work.",
    ],
    coversHeading: "What your client gets",
    covers: [
      "A clear check of energy, broadband and Mobile SIM options",
      "A practical conversation around household costs",
      "A simple explanation of any suitable options",
      "Support before they decide",
    ],
    audienceHeading: "Who this suits",
    audience: [
      "Mortgage advisors",
      "Estate planners and will writers",
      "Accountants and bookkeepers",
      "Letting agents and property professionals",
      "Removals and home services businesses",
      "Other professional introducers",
    ],
    sections: [
      {
        heading: "A simple extra service for your clients",
        body: [
          "Your client gets a clear household bills check. You stay focused on your own professional work. Home Money Check deals with the bills conversation and keeps the process simple.",
        ],
      },
      {
        heading: "What you get",
        items: [
          "A valuable extra service for your clients",
          "A stronger reason to stay in touch",
          "A simple way to help beyond your own core service",
          "Clear tracking of introductions once onboarded",
          "Referral terms agreed in advance where appropriate",
        ],
      },
      {
        heading: "How the handover works",
        items: [
          "You ask about becoming an introducer",
          "We agree the process",
          "You introduce suitable clients",
          "The client receives their Home Money Check conversation",
          "Introductions can be tracked through the agreed introducer process once set up",
        ],
      },
    ],
    noPressure:
      "This should feel helpful for your client and simple for you. If there is a good fit, we'll explain the next step and agree how introductions would work.",
    formTitle: "Ask about client introductions",
    defaultCheck: { key: "client-introductions", label: "Client Introductions" },
    contextField: {
      label: "Who are you?",
      options: [
        { key: "mortgage-advisor", label: "Mortgage advisor" },
        { key: "estate-planner-will-writer", label: "Estate planner / will writer" },
        { key: "accountant-bookkeeper", label: "Accountant / bookkeeper" },
        { key: "letting-agent-property-professional", label: "Letting agent / property professional" },
        { key: "removals-home-services", label: "Removals / home services business" },
        { key: "other-professional-introducer", label: "Other professional introducer" },
      ],
    },
  },
} satisfies Record<string, CampaignPageConfig>;
