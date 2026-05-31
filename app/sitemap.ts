import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-pages";

const sitemapPaths = [
  "",
  "/energy",
  "/broadband",
  "/mobile",
  "/20k-giveaway",
  "/updates",
  "/estate-planning",
  "/business-utilities",
  "/business-continuity",
  "/partner-with-us",
  "/mortgage",
  "/protection",
  "/private-medical-insurance",
  "/business-protection",
  "/finance-services",
  "/privacy-policy",
  "/terms",
  "/disclaimers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return sitemapPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
