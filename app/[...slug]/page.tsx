import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalBillsCampaignPage } from "@/components/home/LocalBillsCampaignPage";
import { siteUrl } from "@/lib/site-pages";

const localCampaigns: Record<string, string> = {
  "perthshire-bills-check": "Perthshire",
  "dundee-bills-check": "Dundee",
  "edinburgh-bills-check": "Edinburgh",
  "glasgow-bills-check": "Glasgow",
  "aberdeen-bills-check": "Aberdeen",
  "stirling-bills-check": "Stirling",
  "inverness-bills-check": "Inverness",
  "fife-bills-check": "Fife",
  "scotland-bills-check": "Scotland",
};

type RouteParams = {
  slug: string[];
};

type PageProps = {
  params: Promise<RouteParams>;
};

export function generateStaticParams() {
  return Object.keys(localCampaigns).map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = slug.join("/");
  const location = localCampaigns[route];

  if (!location) {
    return {};
  }

  const path = `/${route}`;
  const title = `${location} Household Bills Check | Home Money Check`;
  const description = `Check your gas, electricity and broadband bills in ${location}. We build a quote around your home and look for every available saving.`;

  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: "Home Money Check",
      type: "website",
    },
  };
}

export default async function RoutedPage({ params }: PageProps) {
  const { slug } = await params;
  const route = slug.join("/");
  const location = localCampaigns[route];

  if (!location) {
    notFound();
  }

  return <LocalBillsCampaignPage location={location} sourcePage={`/${route}`} />;
}
