# Changelog

All notable changes to Isaac's Recovery Home website.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) with semantic versioning.

## [0.4.0] - 2026-04-02

### Changed
- Switched email provider from SMTP/Nodemailer to Resend API exclusively
- Email service simplified to single-provider architecture (removed dual SMTP/Resend toggle)
- FROM_EMAIL updated to noreply@isaacsrecoveryhome.com (Resend verified domain)
- Privacy policy updated to reference Resend instead of SMTP

### Removed
- Nodemailer dependency and @types/nodemailer
- SMTP configuration (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE)
- EMAIL_PROVIDER toggle (no longer needed with single provider)
- Dual-provider logic from email service, contact route, and intake route

## [0.3.1] - 2026-03-31

### Added
- Quick Reference guide (docs/QUICK_REFERENCE.md) for non-technical users to find and change common site content like phone numbers, FAQ, colors, house rules, and resources without needing developer experience

## [0.3.0] - 2026-03-30

### Changed
- Upgraded Next.js 15.5.3 -> 16.2.1 (critical vulnerability fixes: RCE, DoS, source exposure)
- Upgraded Nodemailer 7.0.5 -> 8.0.4 (SMTP command injection fix)
- All contact emails now route to justingomezmedrano7@gmail.com
- All code fallback defaults marked with [CHANGE ME FOR PRODUCTION] comments
- .env.local placeholders documented with change instructions
- Deployed to Vercel: https://isaacs-recovery-home.vercel.app

### Added
- Vercel project linked and 18 env vars configured for production
- TODO updated with completed items and remaining placeholder inventory

## [0.2.0] - 2026-03-30

### Added
- Resend API as dual email provider option alongside SMTP
- Comprehensive code comments on all components, data files, and utilities
- Logo image in navigation bar and home page hero
- docs/TODO.md with post-deployment checklist and design review guide
- Full documentation suite (ARCHITECTURE, COMPONENTS, API_ROUTES, SETUP, CHANGELOG)

### Changed
- Email service now supports both SMTP (Nodemailer) and Resend API
- Switch providers by changing EMAIL_PROVIDER in .env.local ("smtp" or "resend")
- API routes (contact + intake) validate config for whichever provider is active
- .env.example updated with Resend configuration and descriptive comments

## [0.1.0] - 2026-03-30

### Added
- Initial project setup with Next.js 15.5.3, React 19, TypeScript, Tailwind CSS v4
- Home page with hero section, mission statement, program highlights, scripture quotes, and CTA
- About page with program details, house rules, daily schedule, FAQ, director info, and document downloads
- Admissions page with 6-step online intake form (replaces paper PDF)
- Resources page with crisis hotlines, AA/NA meetings, employment help, family support, faith resources
- Contact page with contact form and direct contact information
- Privacy Policy page
- Terms of Service page
- Contact form API route with email notifications and auto-reply
- Intake form API route with formatted application email and confirmation
- 11 reusable React components (Navigation, Footer, IntakeForm, ContactForm, etc.)
- SMTP email integration via Nodemailer (MXRoute)
- Security headers (CSP, HSTS, X-Frame-Options, etc.)
- SEO metadata and Open Graph tags
- Mobile-first responsive design
- Framer Motion animations on home page
- Vercel deployment configuration
- GitHub repository at justingomezmedrano/isaacs-recovery-home
