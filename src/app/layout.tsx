/*
 * ROOT LAYOUT - Wraps every page on the site
 *
 * This file controls:
 * - Fonts (Geist Sans for body, Lora for scripture quotes)
 * - SEO metadata (title, description, keywords, Open Graph)
 * - Global page structure (Navigation on top, Footer on bottom)
 * - Vercel Analytics tracking
 *
 * To change the site title or description, edit the metadata object below.
 * To add new fonts, import them from "next/font/google" and add to the body className.
 * To add a new page, create a folder in src/app/ with a page.tsx file.
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import PreLaunchBanner from "@/components/PreLaunchBanner";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";

/* Body font - clean sans-serif used for all text */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Serif font - used for scripture quotes and tagline */
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

/* SEO metadata - update these when changing site name, description, or keywords */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_COMPANY_URL ||
      "https://isaacsrecoveryhome.com"
  ),
  title: {
    default: "Isaac's Recovery Home - Sober Living for Men",
    template: "%s | Isaac's Recovery Home",
  },
  description:
    "Faith-based structured sober living for men recovering from alcohol and drug addiction. Safe, affordable housing with accountability and brotherhood. Call 940-232-8252.",
  keywords: [
    "sober living",
    "recovery home",
    "mens sober living",
    "addiction recovery",
    "faith-based recovery",
    "sober house",
    "Texas sober living",
    "structured sober living",
    "sober living Texas",
    "mens recovery home",
    "halfway house Texas",
    "sober living near me",
    "affordable sober living",
    "Christian recovery home",
    "faith-based sober house",
    "drug recovery housing",
    "alcohol recovery home",
    "structured living program",
  ],
  openGraph: {
    title: "Isaac's Recovery Home - Sober Living for Men",
    description:
      "Faith-based structured sober living for men recovering from alcohol and drug addiction. $160/week. Call 940-232-8252.",
    type: "website",
    siteName: "Isaac's Recovery Home",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Isaac's Recovery Home - Faith-based sober living for men",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Isaac's Recovery Home - Sober Living for Men",
    description:
      "Faith-based structured sober living for men. Safe, affordable housing with accountability and brotherhood. $160/week.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}
      >
        <PreLaunchBanner />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
