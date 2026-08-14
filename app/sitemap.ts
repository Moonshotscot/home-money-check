import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-pages";

const sitemapPaths = [
  "",
  "/energy",
  "/broadband",
  "/20k-giveaway",
  "/build-a-second-income",
  "/updates",
  "/household-bills-check",
  "/how-it-works",
  "/about",
  "/contact",
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
