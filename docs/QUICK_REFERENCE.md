# Quick Reference - Common Changes

This guide is for anyone who needs to update the Isaac's Recovery Home website, even without coding experience. Each row tells you exactly what file to open and what to look for.

## Before You Start

- The website code lives in the `src/` folder
- Site settings live in `.env.local` (a plain text file in the project root)
- Content like FAQ questions and house rules lives in `src/data/` as simple text lists
- After making changes locally, run `npm run build` to check for errors before deploying
- On Vercel (the hosting platform), environment variables are set in the project dashboard under Settings > Environment Variables

## Quick Lookup Table

| I want to change...              | Open this file                  | What to look for                                                                 |
|----------------------------------|---------------------------------|----------------------------------------------------------------------------------|
| Company name                     | `.env.local`                    | `NEXT_PUBLIC_COMPANY_NAME=`                                                      |
| Phone number                     | `.env.local`                    | `NEXT_PUBLIC_CONTACT_PHONE=`                                                     |
| Program Director name            | `.env.local`                    | `NEXT_PUBLIC_DIRECTOR_NAME=`                                                     |
| Contact email (shown on site)    | `.env.local`                    | `NEXT_PUBLIC_CONTACT_EMAIL=`                                                     |
| Tagline / motto                  | `.env.local`                    | `NEXT_PUBLIC_BRAND_TAGLINE=`                                                     |
| Copyright year                   | `.env.local`                    | `NEXT_PUBLIC_COPYRIGHT_YEAR=`                                                    |
| Where contact form emails go     | `.env.local`                    | `CONTACT_EMAIL=`                                                                 |
| Where intake applications go     | `.env.local`                    | `INTAKE_EMAIL=`                                                                  |
| Weekly rent amount               | **See "How to Change Pricing" below** (multiple files)                                        |
| Curfew times                     | `src/lib/site-config.ts`        | Lines with `curfewWeekday:` and `curfewWeekend:` - change the times in quotes    |
| Scripture verses                 | `src/lib/site-config.ts`        | The `scripture:` section - edit the `verse:` and `reference:` text               |
| Site colors                      | `src/app/globals.css`           | Lines 20-34 - hex color codes (see "How to Change Colors" below)                 |
| Logo image                       | `public/images/logo.png`        | Replace the file with a new image (keep the same filename)                       |
| FAQ questions                    | `src/data/faq.ts`               | Edit, add, or remove `{ question, answer }` entries (see example below)          |
| House rules                      | `src/data/program-info.ts`      | The `houseRules` section - edit text inside the `rules:` lists                   |
| Home page feature cards          | `src/data/program-info.ts`      | The `programHighlights` section - edit `title` and `description` text            |
| "How It Works" steps             | `src/data/program-info.ts`      | The `howItWorks` section - edit `title` and `description` for each step          |
| Recovery resources / hotlines    | `src/data/resources.ts`         | Add, edit, or remove resources in each category (see example below)              |
| Navigation menu links            | `src/components/Navigation.tsx` | The `navItems` array near the top - add `{ name, href, icon }` entries           |
| Downloadable PDFs                | `public/documents/`             | Add or replace PDF files in this folder, then link to them from the About page   |
| Pre-launch banner                | `src/components/PreLaunchBanner.tsx` | Edit the text, or delete the import from `src/app/layout.tsx` to remove it  |

## How to Change Pricing (IMPORTANT - Multiple Files!)

Pricing (weekly rent and deposit) appears in FIVE places on the site. If the price changes, ALL of these must be updated:

| What to update                  | File                            | What to look for                                   |
|---------------------------------|---------------------------------|----------------------------------------------------|
| 1. Central config values        | `src/lib/site-config.ts`        | `weeklyRent:` and `moveInDeposit:` (change amounts)|
| 2. "Affordable Recovery" card   | `src/data/program-info.ts`      | Search for the dollar amount in `programHighlights`|
| 3. House rules list             | `src/data/program-info.ts`      | Search for the dollar amount in `houseRules`       |
| 4. FAQ answer about cost        | `src/data/faq.ts`               | The answer to "How much does it cost to live here?" |
| 5. Intake form agreement        | `src/components/IntakeForm.tsx`  | Search for the dollar amount (around line 351)     |
| 6. PDF documents                | `public/documents/`             | Handbook and Orientation PDFs (need regeneration)  |

Why is pricing in so many places? The site text is written naturally (not templated), so each mention is slightly different wording. This makes the site read better, but means you need to update all mentions when pricing changes.

## How to Change Colors

The site colors are controlled by simple codes called "hex colors" in `src/app/globals.css`. Each code starts with `#` followed by 6 characters.

Current colors:
- `#2563EB` - Blue (buttons, links, navigation)
- `#D4A843` - Gold (scripture sections, faith accents)
- `#059669` - Green (success messages, checkmarks)
- `#FAFAF8` - Off-white (page background)
- `#1e3a5f` - Dark blue (header, footer)

To pick a new color, visit a free color picker like https://htmlcolorcodes.com, choose your color, and copy the hex code. Then replace the old code in the file.

Example: To change the button color from blue to teal, find this line:

```
--primary: #2563EB;
```

And change it to:

```
--primary: #14B8A6;
```

## How to Add a New FAQ Question

Open `src/data/faq.ts` and add a new entry anywhere in the list. Copy this format exactly:

```
  {
    question: "Your new question here?",
    answer: "Your answer text here.",
  },
```

Place it between existing entries. The comma after the closing `}` is required.

## How to Add a New Recovery Resource

Open `src/data/resources.ts` and find the category you want (Crisis Support, Recovery Meetings, Employment Resources, Family Support, or Faith Resources). Add a new entry inside that category's `resources` list:

```
      {
        title: "Name of the Resource",
        description: "Brief description of what it offers.",
        phone: "1-800-555-1234",
        url: "https://www.example.com",
      },
```

The `phone` and `url` fields are optional - include whichever ones apply.

## How to Update House Rules

Open `src/data/program-info.ts` and find the `houseRules` section. Rules are organized by category (Employment, Recovery Program, House Rules, Conduct). To add a rule, add a new line of text inside the `rules:` list for that category:

```
      "Your new rule text here",
```

To remove a rule, delete the entire line including the comma.

## Where Things Appear on the Site

| File                         | Shows up on                                        |
|------------------------------|----------------------------------------------------|
| `src/data/program-info.ts`   | Home page (cards, steps) and About page (rules)    |
| `src/data/faq.ts`            | About page (expandable FAQ section)                |
| `src/data/resources.ts`      | Resources page (organized by category)             |
| `src/lib/site-config.ts`     | Every page (name, phone, email, scripture, etc.)   |
| `src/app/globals.css`        | Every page (colors, fonts, spacing)                |
| `public/images/logo.png`     | Navigation bar and Home page hero                  |
| `public/documents/`          | About page (download links)                        |

## Email Setup

The site sends emails when someone submits the contact form or intake application. Email is sent via Resend (https://resend.com).

Configuration in `.env.local`:
- `RESEND_API_KEY` - Your Resend API key (starts with `re_`)
- `FROM_EMAIL` - The "from" address (must be verified in Resend dashboard)
- `CONTACT_EMAIL` - Where contact form submissions are sent
- `INTAKE_EMAIL` - Where intake applications are sent

To manage your Resend account, domains, and API keys: https://resend.com/overview

## Need a Developer?

For anything beyond text, color, and content changes (adding new pages, changing form fields, modifying layouts), hand a developer this project along with:

1. This file (`docs/QUICK_REFERENCE.md`) for orientation
2. `docs/ARCHITECTURE.md` for system design
3. `docs/COMPONENTS.md` for the component inventory
4. `docs/API_ROUTES.md` for API endpoint details
5. `docs/SETUP.md` for environment setup

The codebase has detailed comments at the top of every major file explaining what it does and how to modify it.
