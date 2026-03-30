# Architecture

## Overview

Isaac's Recovery Home website is a serverless Next.js application deployed on Vercel. It has no database - all form submissions are delivered via email. This keeps the architecture simple and avoids storing sensitive medical/legal data from intake applications.

## System Design

```
[User Browser] --> [Vercel CDN] --> [Next.js App]
                                       |
                                       |--> Static Pages (SSG at build time)
                                       |--> API Routes (Serverless Functions)
                                              |
                                              |--> /api/contact --> [Nodemailer] --> [MXRoute SMTP] --> Email
                                              |--> /api/intake  --> [Nodemailer] --> [MXRoute SMTP] --> Email
```

## Key Decisions

### No Database
Intake forms collect medical history, substance use, legal background, and mental health information. Storing this in a database would require significant compliance considerations. Email delivery to the Program Director is simpler, more secure for this use case, and aligns with their existing paper-based workflow.

### Serverless on Vercel
The free tier provides more than enough capacity for a local sober living facility. API routes deploy as serverless functions with zero infrastructure management. Automatic HTTPS, CDN, and preview deployments are included.

### Multi-Step Intake Form
The 6-step form design reduces cognitive load. People visiting this site may be in crisis or using mobile phones with limited attention span. Short, focused steps with clear validation messaging are better than one long form.

## Component Architecture

- **Server Components**: Footer, ProgramCard, ScriptureQuote, CTABanner, HouseRules, About page, Resources page, Privacy, Terms
- **Client Components**: Navigation (mobile menu state), FAQ (accordion toggle), ContactForm (form state), IntakeForm (multi-step state), StepIndicator (visual progress), Home page (Framer Motion)

## Email Flow

Both forms follow the same pattern:
1. Client submits FormData to API route
2. Server validates/sanitizes inputs
3. Server sends formatted HTML notification to admin
4. Server sends auto-reply confirmation to user
5. Server returns JSON success/error

## Environment Variables

All configuration is externalized via environment variables. The `site-config.ts` module provides centralized access with sensible defaults. This enables rebranding without code changes.
