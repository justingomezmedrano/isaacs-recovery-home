# Next Steps - Post Deployment

## Pre-Deployment (Gary)

- [ ] Set up Justin's Gmail account for Vercel login
- [ ] Authenticate Vercel CLI with Justin's account (`vercel login`)
- [ ] Import GitHub repo into Vercel dashboard
- [ ] Set up Resend account (resend.com) with Justin's email
- [ ] Get Resend API key and add to Vercel env vars
- [ ] Add all environment variables to Vercel (see .env.example for full list)
- [ ] Choose email provider: set EMAIL_PROVIDER to "smtp" or "resend"
- [ ] Deploy and verify site loads on the .vercel.app URL
- [ ] Test contact form email delivery in production
- [ ] Test intake form email delivery in production

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
