const sourceLabels: Record<string, string> = {
  "/": "Home page",
  "/20k-giveaway": "£20K Giveaway page",
  "/broadband": "Broadband page",
  "/build-a-second-income": "Build a Second Income page",
  "/contact": "Contact page",
  "/energy": "Energy page",
  "/for-your-clients": "For Your Clients page",
  "/for-your-clients/client": "Introduced client page",
  "/household-bills-check": "Household Bills Check page",
  "/partner-bills-check": "Partner Bills Check page",
  "/partner-bills-check/start": "Partner customer page",
  "/staff-bills-check": "Staff Bills Check page",
  "/staff-bills-check/employee": "Employee bills page",
  "/updates": "Offers and updates page",
};

const trackingKeys = [
  "company",
  "organisation",
  "partner",
  "ref",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
] as const;

function titleFromPath(pathname: string) {
  const lastPart = pathname.split("/").filter(Boolean).at(-1);

  if (!lastPart) {
    return "Home page";
  }

  return `${lastPart
    .split("-")
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ")} page`;
}

function parseSource(sourcePage: string | null | undefined) {
  const fallback = sourcePage?.trim() || "/";

  try {
    return new URL(fallback, "https://www.homemoneycheck.co.uk");
  } catch {
    return new URL("/", "https://www.homemoneycheck.co.uk");
  }
}

export function captureLeadSource(fallbackSourcePage: string) {
  if (typeof window === "undefined") {
    return fallbackSourcePage;
  }

  const fallback = parseSource(fallbackSourcePage);
  const current = new URL(window.location.href);
  const source = new URL(current.pathname || fallback.pathname, current.origin);

  trackingKeys.forEach((key) => {
    const value = current.searchParams.get(key)?.trim();

    if (value) {
      source.searchParams.set(key, value.slice(0, 80));
    }
  });

  const result = `${source.pathname}${source.search}`;
  return result.slice(0, 200);
}

export function getLeadSourceDetails(sourcePage: string | null | undefined) {
  const source = parseSource(sourcePage);
  const pathname = source.pathname || "/";
  const baseLabel = sourceLabels[pathname] || titleFromPath(pathname);
  const context = [
    ["Company", source.searchParams.get("company")],
    ["Organisation", source.searchParams.get("organisation")],
    ["Partner", source.searchParams.get("partner")],
    ["Reference", source.searchParams.get("ref")],
    ["Campaign", source.searchParams.get("utm_campaign")],
    ["Source", source.searchParams.get("utm_source")],
  ]
    .filter((item): item is [string, string] => Boolean(item[1]))
    .map(([label, value]) => `${label}: ${value}`);

  return {
    context,
    href: `${source.pathname}${source.search}`,
    label: baseLabel,
    pathname,
    raw: sourcePage?.trim() || "/",
  };
}
