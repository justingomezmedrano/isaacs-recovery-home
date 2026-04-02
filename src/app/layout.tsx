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
  ],
  openGraph: {
    title: "Isaac's Recovery Home - Sober Living for Men",
    description:
      "Faith-based structured sober living for men recovering from alcohol and drug addiction. $160/week. Call 940-232-8252.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
