import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://maganji.co.ke";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}