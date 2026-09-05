import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const canonicalUrl = "https://ugcbymysbah.com";
const presentationHost =
  process.env.VERCEL_ENV === "production"
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL
    : process.env.VERCEL_URL;
const presentationUrl = presentationHost
  ? `https://${presentationHost}`
  : canonicalUrl;

export const metadata: Metadata = {
  metadataBase: new URL(presentationUrl),
  applicationName: "UGC by Mysbah",
  title: {
    default: "UGC by Mysbah | Creator-Led Ads & Social Content",
    template: "%s | UGC by Mysbah",
  },
  description:
    "Creator-led beauty, skincare, lifestyle, and travel UGC with natural delivery, hook-first thinking, and campaign-ready scope.",
  authors: [{ name: "Mysbah Ahmad", url: canonicalUrl }],
  creator: "Mysbah Ahmad",
  publisher: "UGC by Mysbah",
  category: "Marketing",
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "UGC by Mysbah | Creator-Led Ads & Social Content",
    description:
      "Social-native UGC that feels human, looks sharp, and gives brands a clear creative system.",
    url: presentationUrl,
    siteName: "UGC by Mysbah",
    images: [
      {
        url: "/opengraph-image?v=20260905",
        width: 1200,
        height: 630,
        alt: "UGC by Mysbah portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC by Mysbah | Creator-Led Ads & Social Content",
    description:
      "Beauty, skincare, lifestyle, and travel UGC by Mysbah Ahmad.",
    images: ["/opengraph-image?v=20260905"],
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
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
