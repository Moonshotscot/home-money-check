import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-pages";

export default function robots(): MetadataRoute.Robots {
  return {
    // TODO before public launch: remove noindex/nofollow and update robots once legal pages and final compliance checks are complete.
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
