import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ugcbymysbah.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UGC by Mysbah | Lifestyle, Beauty & Travel UGC Creator",
    template: "%s | UGC by Mysbah",
  },
  description:
    "Short, creative UGC landing page for Mysbah, a lifestyle, beauty, and travel UGC creator making TikTok and Reels content that feels real and performs like paid media.",
  keywords: [
    "UGC creator",
    "TikTok ad creator",
    "Reels ad creator",
    "short-form video creator",
    "beauty UGC creator",
    "skincare UGC creator",
    "lifestyle content creator",
    "travel UGC creator",
    "product demo videos",
    "testimonial videos",
    "UGC portfolio",
    "Mysbah",
  ],
  authors: [{ name: "Mysbah" }],
  creator: "Mysbah",
  publisher: "Mysbah",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UGC by Mysbah | Lifestyle, Beauty & Travel Creator",
    description:
      "Content that does not look like an ad, but performs like one. Lifestyle, beauty, travel, product demos, testimonials, and short-form UGC.",
    url: siteUrl,
    siteName: "UGC by Mysbah",
    images: [
      {
        url: "/images/mysbah-hero.jpeg",
        width: 960,
        height: 1280,
        alt: "Mysbah UGC creator portfolio profile image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC by Mysbah | TikTok & Reels UGC Creator",
    description:
      "Lifestyle, beauty, and travel UGC that feels real and performs like paid media.",
    images: ["/images/mysbah-hero.jpeg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
