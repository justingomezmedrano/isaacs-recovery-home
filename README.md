# Isaac's Recovery Home

A modern, mobile-first website for Isaac's Recovery Home - a faith-based structured sober living facility for men recovering from alcohol and drug addiction.

## Features

- [x] **Responsive Marketing Site** - Mobile-first design with warm, hopeful aesthetic
- [x] **Online Intake Application** - Multi-step form replacing paper PDF intake packets
- [x] **Contact Form** - Email notifications with auto-reply to inquiries
- [x] **Program Information** - House rules, daily schedule, FAQ, director info
- [x] **Recovery Resources** - Crisis hotlines, AA/NA meetings, employment help, family support
- [x] **Downloadable Documents** - PDF handbook and intake form available for download
- [x] **Privacy Policy & Terms** - Hosted internally with proper legal coverage
- [x] **SEO Optimized** - Metadata, Open Graph, and keyword targeting for local search
- [x] **Security Headers** - CSP, HSTS, X-Frame-Options, and more
- [x] **Email System** - Resend API for contact and intake form submissions
- [x] **Vercel Analytics** - Anonymous usage tracking
- [x] **Pre-Launch Banner** - Dismissable announcement for pre-application screening phase

## Tech Stack

- **Framework**: Next.js 15.5.x with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend
- **Hosting**: Vercel (serverless, free tier)
- **Analytics**: Vercel Analytics
- **Fonts**: Geist Sans, Lora (serif for scripture)

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/justinmedranogomez/isaacs-recovery-home.git
cd isaacs-recovery-home
npm install
cp .env.example .env.local
# Fill in your environment variables in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_COMPANY_NAME` - Display name
- `NEXT_PUBLIC_CONTACT_PHONE` - Program Director phone
- `RESEND_API_KEY` - Resend API key for email delivery
- `FROM_EMAIL` / `CONTACT_EMAIL` / `INTAKE_EMAIL` - Email routing

For the live site, set these in the **Vercel dashboard** under Settings > Environment Variables.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/                  # Pages and API routes
    about/              # Program details, rules, FAQ
    admissions/         # Online intake application
    resources/          # Recovery resources
    contact/            # Contact form
    privacy/            # Privacy Policy
    terms/              # Terms of Service
    api/contact/        # Contact form API
    api/intake/         # Intake form API
  components/           # Reusable React components
  lib/                  # Utilities (email, validation, config)
  data/                 # Static data (program info, FAQ, resources)
public/
  images/               # Logo and static images
  documents/            # Downloadable PDFs
```

## Quick Reference - Where to Change Things

For a complete guide (including step-by-step instructions for non-technical users), see [docs/QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md).

### Environment Variables (set in Vercel dashboard for live site)

| Setting                          | Variable name                    |
|----------------------------------|----------------------------------|
| Company name                     | `NEXT_PUBLIC_COMPANY_NAME`       |
| Phone number                     | `NEXT_PUBLIC_CONTACT_PHONE`      |
| Program Director name            | `NEXT_PUBLIC_DIRECTOR_NAME`      |
| Contact email (shown on site)    | `NEXT_PUBLIC_CONTACT_EMAIL`      |
| Where contact form emails go     | `CONTACT_EMAIL`                  |
| Where intake applications go     | `INTAKE_EMAIL`                   |
| Email API key                    | `RESEND_API_KEY`                 |
| Email "from" address             | `FROM_EMAIL`                     |

### Content (code files)

| Content                    | File                              |
|----------------------------|-----------------------------------|
| FAQ questions & answers    | `src/data/faq.ts`                 |
| House rules                | `src/data/program-info.ts`        |
| Home page feature cards    | `src/data/program-info.ts`        |
| Recovery resources         | `src/data/resources.ts`           |
| Colors                     | `src/app/globals.css`             |
| Scripture verses           | `src/lib/site-config.ts`          |
| Curfew, rent, deposit      | `src/lib/site-config.ts`          |
| Navigation links           | `src/components/Navigation.tsx`   |
| Pre-launch banner          | `src/components/PreLaunchBanner.tsx` |
| Downloadable PDFs          | `public/documents/`               |

### Pricing appears in multiple files!

If the weekly rent or deposit changes, update ALL of these:
1. `src/lib/site-config.ts` - weeklyRent and moveInDeposit values
2. `src/data/program-info.ts` - program highlights and house rules text
3. `src/data/faq.ts` - FAQ answer about cost
4. `src/components/IntakeForm.tsx` - intake form agreement step
5. `public/documents/` - PDF handbook and orientation (need regeneration)

## Deployment

Deployed on [Vercel](https://vercel.com) with automatic builds on push.

1. Connect repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

## Development Roadmap

### Phase 1: Foundation and Core Features (Complete)
- [x] Marketing website with all core pages
- [x] Online intake application form
- [x] Contact form with email notifications
- [x] Recovery resources directory
- [x] Privacy Policy and Terms of Service
- [x] Mobile-first responsive design
- [x] SEO optimization

### Future Enhancements

*You gotta' pay for this kind of work, cousin ;)*

- Google Maps integration for facility location
- Testimonials section (with resident consent)
- Photo gallery of the facility
- Blog/devotional section for recovery content
- Multi-language support (Spanish)
- Resident portal for tracking meetings and employment
- Digital drug test logging and chore tracking
- Rent payment tracking
- Donation/support page

---

Made with &#10084;&#65039;

[Designed, created, and property of No iLLusion Software](https://no-illusion.com)
