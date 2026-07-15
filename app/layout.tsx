import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://ugcbymysbah.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "UGC by Mysbah",
  title: {
    default: "Mysbah Ahmad | UGC Creator in Pakistan",
    template: "%s | UGC by Mysbah",
  },
  description:
    "Mysbah Ahmad is a Pakistan-based UGC creator making TikTok, Reels, product demo, beauty, skincare, lifestyle, and travel content for brands worldwide.",
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
    title: "Mysbah Ahmad | UGC Creator in Pakistan",
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
    title: "Mysbah Ahmad | UGC Creator in Pakistan",
    description:
      "Beauty, skincare, lifestyle, and travel UGC by Mysbah Ahmad.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.svg",
  },
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
