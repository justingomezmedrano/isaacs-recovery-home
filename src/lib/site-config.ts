/*
 * SITE CONFIGURATION - Central place for all site-wide settings
 *
 * USED ON: Every page on the site. This is the single source of truth for
 * company name, phone number, director name, scripture verses, and pricing.
 *
 * To change company name, phone, director name, etc.:
 *   Option 1: Update values in .env.local (preferred for deployment)
 *   Option 2: Change the fallback defaults after the || below
 *
 * PRICING (weeklyRent, moveInDeposit): These values are used by
 * some components. But pricing also appears as text in other files:
 *   - src/data/program-info.ts (house rules text, program highlights)
 *   - src/data/faq.ts (FAQ answer about cost)
 *   - src/components/IntakeForm.tsx (agreement step)
 *   - public/documents/ PDFs (handbook and orientation)
 *
 * Scripture verses and curfew times are hardcoded here.
 * To add a new scripture, add it to the scripture object below.
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
