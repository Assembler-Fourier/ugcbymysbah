import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ugcbymysbah.com",
      // Set at build time, so every publish tells search engines the page changed.
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
