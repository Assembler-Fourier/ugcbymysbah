import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://ugcbymysbah.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "UGC by Mysbah",
  title: {
    default: "Mysbah Ahmad | UGC Creator & Marketing Strategist",
    template: "%s | UGC by Mysbah",
  },
  description:
    "Mysbah Ahmad creates authentic beauty, skincare, lifestyle, and travel UGC for organic social, paid campaigns, and product pages.",
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
    title: "Mysbah Ahmad | UGC Creator & Marketing Strategist",
    description:
      "Beauty, skincare, lifestyle, and travel UGC that feels natural and performs with paid-media clarity.",
    url: siteUrl,
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
    title: "Mysbah Ahmad | UGC Creator & Marketing Strategist",
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
        <Analytics />
      </body>
    </html>
  );
}
