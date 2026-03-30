import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

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
      "Faith-based structured sober living for men recovering from alcohol and drug addiction. $150/week. Call 940-232-8252.",
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
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
