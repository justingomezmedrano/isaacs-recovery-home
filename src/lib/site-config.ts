/*
 * SITE CONFIGURATION - Central place for all site-wide settings
 *
 * Values are loaded from environment variables (.env.local) with fallback defaults.
 * To change company name, phone, director name, etc.:
 *   Option 1: Update values in .env.local (preferred for deployment)
 *   Option 2: Change the fallback defaults after the || below
 *
 * Scripture verses and program details (rent, curfew) are hardcoded here.
 * To add a new scripture, add it to the scripture object below.
 * To change rent or curfew times, update the values directly.
 */
export const siteConfig = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || "Isaac's Recovery Home",
  tagline: process.env.NEXT_PUBLIC_BRAND_TAGLINE || "To Pray is to let go and let God take over",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || "Isaac's Recovery Home",
  companyUrl: process.env.NEXT_PUBLIC_COMPANY_URL || "https://isaacs-recovery-home.vercel.app", /* [CHANGE ME FOR PRODUCTION] Update when custom domain is set */
  domainName: process.env.NEXT_PUBLIC_DOMAIN_NAME || "isaacs-recovery-home.vercel.app", /* [CHANGE ME FOR PRODUCTION] Update when custom domain is set */
  copyrightYear: process.env.NEXT_PUBLIC_COPYRIGHT_YEAR || "2026",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "940-232-8252",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "justingomezmedrano7@gmail.com",
  directorName: process.env.NEXT_PUBLIC_DIRECTOR_NAME || "Justin Gomez Medrano",
  weeklyRent: "$160",
  moveInDeposit: "$100",
  curfewWeekday: "10:00 PM",
  curfewWeekend: "11:00 PM",
  scripture: {
    philippians: {
      verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
      reference: "Philippians 4:6-7",
    },
    mark: {
      verse: "Love your neighbor as yourself. There is no commandment greater than these.",
      reference: "Mark 12:31",
    },
  },
} as const;
