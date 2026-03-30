# Setup Guide

## Prerequisites

- Node.js 18+
- npm
- Git

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/justingomezmedrano/isaacs-recovery-home.git
cd isaacs-recovery-home
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Fill in `.env.local` with real values (see .env.example for field descriptions)

5. Start development server:
```bash
npm run dev
```

6. Open http://localhost:3000

## Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Connect the GitHub repository to Vercel
2. Set all environment variables in Vercel dashboard Settings > Environment Variables
3. Deploy - Vercel auto-builds on push to main

### Required Environment Variables for Production
- `NEXT_PUBLIC_COMPANY_NAME`
- `NEXT_PUBLIC_CONTACT_PHONE`
- `NEXT_PUBLIC_DIRECTOR_NAME`
- `EMAIL_PROVIDER` (set to "smtp")
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `FROM_EMAIL`, `CONTACT_EMAIL`, `INTAKE_EMAIL`
- `NEXT_PUBLIC_SITE_URL` (production URL)

## Testing Email

To test form email delivery locally:
1. Ensure SMTP credentials are correct in `.env.local`
2. Submit the contact form at /contact
3. Check the CONTACT_EMAIL inbox for the notification
4. Check the submitter's email for the auto-reply
5. Repeat for the intake form at /admissions
