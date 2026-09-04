import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ugcbymysbah.com",
      lastModified: new Date("2026-09-05"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
