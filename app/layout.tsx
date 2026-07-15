import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ugcbymysbah.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "UGC by Mysbah",
  title: {
    default: "UGC Creator in Pakistan | UGC by Mysbah",
    template: "%s | UGC by Mysbah",
  },
  description:
    "Meet Mysbah Ahmad, a Pakistan-based UGC creator producing beauty, skincare, lifestyle, travel, TikTok, Reels, product demo, and testimonial videos for brands worldwide.",
  keywords: [
    "UGC creator in Pakistan",
    "Pakistan UGC creator",
    "best UGC creator in Pakistan",
    "top UGC creator in Pakistan",
    "TikTok ad creator",
    "Reels ad creator",
    "Instagram UGC creator",
    "Instagram Reels creator",
    "short-form video creator",
    "beauty UGC creator",
    "skincare UGC creator",
    "lifestyle content creator",
    "travel UGC creator",
    "product demo videos",
    "testimonial videos",
    "UGC portfolio",
    "Mysbah Ahmad",
    "Mysbah Butt",
    "UGC by Mysbah",
  ],
  authors: [{ name: "Mysbah Ahmad", url: siteUrl }],
  creator: "Mysbah Ahmad",
  publisher: "UGC by Mysbah",
  category: "Marketing",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "UGC Creator in Pakistan | UGC by Mysbah",
    description:
      "Beauty, skincare, lifestyle, and travel UGC that feels natural and performs with paid-media clarity.",
    url: siteUrl,
    siteName: "UGC by Mysbah",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mysbah Ahmad, UGC creator in Pakistan",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC Creator in Pakistan | UGC by Mysbah",
    description:
      "Beauty, skincare, lifestyle, and travel UGC by Mysbah Ahmad.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "PK",
    "geo.placename": "Pakistan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
