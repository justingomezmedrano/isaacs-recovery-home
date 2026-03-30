# Next Steps - Post Deployment

## Completed

- [x] Set up Justin's Vercel account
- [x] Authenticate Vercel CLI with Justin's account
- [x] Link GitHub repo to Vercel project
- [x] Add all environment variables to Vercel production
- [x] Deploy to production: https://isaacs-recovery-home.vercel.app
- [x] Fix Next.js and Nodemailer vulnerabilities (0 CVEs)
- [x] Update CONTACT_EMAIL and INTAKE_EMAIL to justingomezmedrano7@gmail.com

## Placeholders Still Needing Real Values [CHANGE ME FOR PRODUCTION]

These are currently set to placeholder or temporary values:

- [ ] **FROM_EMAIL** - Currently `noreply@no-illusion.com` (using Gary's MXRoute). Needs its own sender address once Resend or custom domain email is set up
- [ ] **SMTP credentials** - Currently using No iLLusion's MXRoute. Switch to Resend or Justin's own SMTP when ready
- [ ] **NEXT_PUBLIC_COMPANY_URL** - Currently `isaacs-recovery-home.vercel.app`. Update when custom domain is purchased
- [ ] **NEXT_PUBLIC_DOMAIN_NAME** - Same as above
- [ ] **Custom domain** - Purchase and point to Vercel
- [ ] **Resident Handbook PDF** - Need the actual handbook PDF in `public/documents/`
- [ ] **Logo** - Using the collage.png from templateDocs. May want a cleaner/higher-res version
- [ ] **Facility photos** - No real photos on the site yet
- [ ] **Facility address/location** - Not displayed on the site yet

## Email Setup (Pick One)

- [ ] **Option A: Resend** (recommended for now)
  - Sign up at resend.com with Justin's Gmail
  - Get API key, add as RESEND_API_KEY in Vercel
  - Change EMAIL_PROVIDER to "resend" in Vercel
  - Use `onboarding@resend.dev` as FROM_EMAIL until custom domain
- [ ] **Option B: Keep SMTP** (current)
  - Works now via No iLLusion MXRoute
  - Not ideal long-term (using Gary's email infra)

## Connect GitHub for Auto-Deploy

- [ ] In Vercel dashboard: Settings > Git > Connect justingomezmedrano/isaacs-recovery-home
- [ ] This enables auto-deploy on every push to main (no manual `vercel --prod` needed)

## Design Review (Justin)

Once the site is live, Justin should review these pages and provide feedback:

- [ ] **Home Page** - Does the hero, mission statement, and overall feel match the brand?
- [ ] **Logo/Branding** - Is the cross/dove image correct? Need a different version?
- [ ] **Colors** - Are the blue, gold, and green working? Too bright? Too muted?
- [ ] **About Page** - Are the house rules accurate and complete?
- [ ] **Admissions Page** - Walk through all 6 intake form steps. Any fields missing or unnecessary?
- [ ] **Resources Page** - Are the right resources listed? Any local ones to add?
- [ ] **Contact Page** - Is the contact info correct?
- [ ] **Mobile View** - Check the site on a phone. Does navigation work? Forms usable?
- [ ] **Footer** - Is all the info correct?
- [ ] **Overall Tone** - Does the site feel welcoming and trustworthy?

## Feedback Categories

When giving feedback, it helps to be specific:

**Content changes** (easy, quick):
- Text corrections, wording changes
- Phone numbers, email addresses
- Adding/removing FAQ questions
- Updating house rules or schedule

**Design changes** (moderate):
- Color adjustments (change values in src/app/globals.css)
- Font changes
- Spacing or layout tweaks
- Adding/removing sections on a page

**Feature additions** (more involved):
- New pages
- Photo gallery
- Google Maps embed
- Testimonials section
- Blog/devotional content
- Spanish language support

## Post-Review Action Items

- [ ] Apply Justin's design feedback
- [ ] Set up custom domain (if purchased)
- [ ] Configure production email (Justin's own email or domain)
- [ ] Update CONTACT_EMAIL and INTAKE_EMAIL to Justin's real inbox
- [ ] Update FROM_EMAIL if using a custom domain
- [ ] Add Google Analytics or keep Vercel Analytics
- [ ] Submit site to Google Search Console for indexing
- [ ] Create social media links if accounts exist

## Future Phases (After Launch)

- [ ] Resident testimonials (with consent)
- [ ] Facility photo gallery
- [ ] Blog or devotional content section
- [ ] Spanish language support
- [ ] Google Maps integration for location
- [ ] Donation/support page
