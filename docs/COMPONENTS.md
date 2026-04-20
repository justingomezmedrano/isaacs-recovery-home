# Components Inventory

## Component List

| Component | File Path | Type | Description |
|-----------|-----------|------|-------------|
| Navigation | src/components/Navigation.tsx | Client | Sticky navigation with mobile hamburger menu and "Call Now" button |
| Footer | src/components/Footer.tsx | Server | 4-column footer with links, contact info, and No iLLusion branding |
| ProgramCard | src/components/ProgramCard.tsx | Server | Feature highlight card with Lucide icon, title, and description |
| ScriptureQuote | src/components/ScriptureQuote.tsx | Server | Styled scripture blockquote with reference citation |
| CTABanner | src/components/CTABanner.tsx | Server | Full-width call-to-action with phone link and apply button |
| HouseRules | src/components/HouseRules.tsx | Server | Categorized house rules display with icons |
| FAQ | src/components/FAQ.tsx | Client | Expandable accordion for frequently asked questions |
| ContactForm | src/components/ContactForm.tsx | Client | Contact form with validation, submission, and status states |
| IntakeForm | src/components/IntakeForm.tsx | Client | Multi-step intake application form (6 steps) |
| StepIndicator | src/components/StepIndicator.tsx | Client | Visual progress indicator for multi-step forms |
| StructuredData | src/components/StructuredData.tsx | Server | JSON-LD schema markup (OrganizationSchema, WebSiteSchema, FAQSchema) |

## Data Files

| File | Path | Description |
|------|------|-------------|
| program-info.ts | src/data/program-info.ts | Program highlights, house rules, and "how it works" steps |
| faq.ts | src/data/faq.ts | FAQ question/answer pairs |
| resources.ts | src/data/resources.ts | Recovery resources organized by category |

## Library Files

| File | Path | Description |
|------|------|-------------|
| email-service.ts | src/lib/email-service.ts | Email service via Resend API |
| form-validation.ts | src/lib/form-validation.ts | Shared form validation and sanitization utilities |
| site-config.ts | src/lib/site-config.ts | Centralized site configuration from environment variables |
