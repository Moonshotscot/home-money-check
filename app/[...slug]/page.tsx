import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoonPage } from "@/components/ComingSoonPage";
import { ServicePage } from "@/components/ServicePage";
import { getPageBySlug, getRoutePath, sitePages, siteUrl } from "@/lib/site-pages";

type RouteParams = {
  slug: string[];
};

type PageProps = {
  params: Promise<RouteParams>;
};

export function generateStaticParams() {
  return sitePages.map((page) => ({
    slug: page.slug.split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug.join("/"));

  if (!page) {
    return {};
  }

  const path = getRoutePath(page);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteUrl}${path}`,
      siteName: "Home Money Check",
      type: "website",
    },
  };
}

export default async function RoutedPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug.join("/"));

  if (!page) {
    notFound();
  }

  if (page.status === "comingSoon") {
    return <ComingSoonPage page={page} />;
  }

  return <ServicePage page={page} />;
}
