import type { MetadataRoute } from "next";
import { getRoutePath, sitePages, siteUrl } from "@/lib/site-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sitePages.map((page) => ({
      url: `${siteUrl}${getRoutePath(page)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.status === "live" ? 0.8 : 0.5,
    })),
  ];
}
