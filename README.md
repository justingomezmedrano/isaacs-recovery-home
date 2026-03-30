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
- [x] **Email System** - SMTP-based contact and intake form submissions
- [x] **Vercel Analytics** - Anonymous usage tracking

## Tech Stack

- **Framework**: Next.js 15.5.x with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Nodemailer (SMTP)
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
- `SMTP_*` - Email server credentials
- `FROM_EMAIL` / `CONTACT_EMAIL` / `INTAKE_EMAIL` - Email routing

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

### Phase 2: Enhanced User Experience (1-3 Months)
- [ ] Google Maps integration for facility location
- [ ] Testimonials section (with resident consent)
- [ ] Photo gallery of the facility
- [ ] Blog/devotional section for recovery content
- [ ] Multi-language support (Spanish)

### Phase 3: Operational Tools (3-6 Months)
- [ ] Resident portal for tracking meetings and employment
- [ ] Digital drug test logging
- [ ] Chore assignment and tracking system
- [ ] Rent payment tracking
- [ ] Communication system for house announcements

### Phase 4: Growth and Outreach (6-12 Months)
- [ ] Integration with local AA meeting directories
- [ ] Referral tracking for partner organizations
- [ ] Donation/support page
- [ ] Volunteer sign-up system
- [ ] Success stories and outcome tracking

---

Made with &#10084;&#65039;

[Designed, created, and property of No iLLusion Software](https://no-illusion.com)
