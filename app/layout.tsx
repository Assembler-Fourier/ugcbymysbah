import type { Metadata } from "next";
import { Dancing_Script, DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    default: "Mysbah Ahmad | UGC Creator for Skincare & Beauty Brands",
    template: "%s | UGC by Mysbah",
  },
  description:
    "Mysbah Ahmad is a UGC creator with 3 years of experience making skincare, beauty, ASMR, and product videos for brands in the US, UK, and worldwide.",
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
    title: "Mysbah Ahmad | UGC Creator for Skincare & Beauty Brands",
    description:
      "3 years of skincare, beauty, ASMR, and product UGC that feels like a real recommendation.",
    url: siteUrl,
    siteName: "UGC by Mysbah",
    images: [
      {
        url: "/opengraph-image?v=20261021",
        width: 1200,
        height: 630,
        alt: "UGC by Mysbah portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mysbah Ahmad | UGC Creator for Skincare & Beauty Brands",
    description:
      "Skincare, beauty, ASMR, and product UGC by Mysbah Ahmad.",
    images: ["/opengraph-image?v=20261021"],
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
