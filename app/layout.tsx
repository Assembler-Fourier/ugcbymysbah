import type { Metadata } from "next";
import { Dancing_Script, DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { regionKeywords } from "@/data/seo";
import { serviceKeywords } from "@/data/services";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

const siteUrl = "https://ugcbymysbah.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "UGC by Mysbah",
  title: {
    default: "Skincare & Beauty UGC Creator | US, UK & Europe | Mysbah Ahmad",
    template: "%s | UGC by Mysbah",
  },
  description:
    "Hire a skincare & beauty UGC creator with 4 years' experience. Affordable video ads for brands in the US, UK, Ireland, Europe, Canada, Malaysia & Indonesia.",
  keywords: [
    "UGC creator",
    "UGC content creator",
    "skincare UGC creator",
    "beauty UGC creator",
    "female UGC creator",
    "South Asian UGC creator",
    "hire UGC creator",
    ...regionKeywords,
    ...serviceKeywords,
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
    title: "Skincare & Beauty UGC Creator for US, UK & European Brands",
    description:
      "4 years of skincare and beauty UGC that feels like a friend's recommendation. Affordable rates, working worldwide.",
    url: siteUrl,
    siteName: "UGC by Mysbah",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IE", "en_CA"],
    images: [
      {
        url: "/opengraph-image?v=20261021b",
        width: 1200,
        height: 630,
        alt: "UGC by Mysbah portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skincare & Beauty UGC Creator for US, UK & European Brands",
    description:
      "Affordable skincare, beauty, ASMR and product UGC by Mysbah Ahmad.",
    images: ["/opengraph-image?v=20261021b"],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable} ${scriptFont.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
