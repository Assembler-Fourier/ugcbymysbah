import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UGC by Mysbah",
    short_name: "Mysbah UGC",
    description:
      "Beauty, skincare, lifestyle, and travel UGC by Mysbah Ahmad.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6ebe6",
    theme_color: "#a8c686",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
