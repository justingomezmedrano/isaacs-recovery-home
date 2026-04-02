/*
 * PROGRAM INFORMATION - All program details in one place
 *
 * THIS FILE CONTAINS PRICING, HOUSE RULES, AND PROGRAM CARD TEXT.
 * If you need to change the weekly rent, deposit, curfew rules, or
 * any program details, this is one of the main files to edit.
 *
 * WHAT'S IN THIS FILE AND WHERE IT APPEARS ON THE SITE:
 *
 * programHighlights (line ~16): The 3 feature cards on the HOME page
 *   - "Structure & Accountability" card
 *   - "Faith & Fellowship" card
 *   - "Affordable Recovery" card  << CONTAINS PRICING ($160/week, $100 deposit)
 *   - Icons: "Shield", "Heart", "Home" (from ProgramCard.tsx icon map)
 *   - To add more icons, update the iconMap in src/components/ProgramCard.tsx
 *
 * houseRules (line ~33): The house rules grid on the ABOUT page (/about)
 *   - Employment rules, Recovery Program rules, House Rules, Conduct
 *   - House Rules category contains weekly rent amount and deposit
 *   - Add/remove rules within each category
 *   - Add new categories by adding a new object to the array
 *
 * howItWorks (line ~75): The 3-step "How It Works" section on the HOME page
 *
 * ALSO CHECK THESE FILES WHEN CHANGING PRICING:
 *   - src/data/faq.ts (FAQ answer about cost)
 *   - src/lib/site-config.ts (weeklyRent and moveInDeposit values)
 *   - src/components/IntakeForm.tsx (agreement step, lines ~350-352)
 *   - public/documents/ (PDF handbook and orientation - must be regenerated)
 */
export const programHighlights = [
  {
    title: "Structure & Accountability",
    description: "Daily employment search from 9 AM to 4 PM, structured curfew, weekly drug testing, and accountability partners to keep you on track.",
    icon: "Shield" as const,
  },
  {
    title: "Faith & Fellowship",
    description: "Weekly AA meetings, Sunday church attendance, and a brotherhood of men supporting each other through prayer and shared experience.",
    icon: "Heart" as const,
  },
  {
    title: "Affordable Recovery",
    description: "$160 per week with a $100 nonrefundable move-in deposit. A safe, sober living environment with employment assistance, resume building, and community support.",
    icon: "Home" as const,
  },
]

export const houseRules = [
  {
    category: "Employment",
    rules: [
      "Residents must search for employment daily from 9:00 AM to 4:00 PM",
      "Complete 3 to 4 job applications per day with proof of submission",
      "Contact Program Director for help with resume building and job searches",
    ],
  },
  {
    category: "Recovery Program",
    rules: [
      "Attend at least 2 AA meetings per week",
      "Attend church on Sundays",
      "Have an accountability partner during your first week",
      "Active participation in all recovery activities",
    ],
  },
  {
    category: "House Rules",
    rules: [
      "Curfew: 10:00 PM on weekdays, 11:00 PM on weekends",
      "No drugs, alcohol, or weapons on the premises",
      "Random drug testing with zero-tolerance policy",
      "Overnight absences require advance approval",
      "No unauthorized guests or visitors without approval",
      "Keep rooms and shared spaces clean",
      "Weekly rent of $160 due on time",
      "$100 nonrefundable move-in deposit required",
    ],
  },
  {
    category: "Conduct",
    rules: [
      "Treat all residents and staff with respect and dignity",
      "No fighting, threats, or verbal abuse",
      "Follow the brother-to-brother accountability system",
      "Serious violations result in immediate program termination",
    ],
  },
]

export const howItWorks = [
  {
    step: 1,
    title: "Apply Online or Call",
    description: "Fill out our online intake form or call us directly at 940-232-8252 to start the conversation.",
  },
  {
    step: 2,
    title: "Complete Intake",
    description: "Meet with our Program Director to review your situation, discuss expectations, and complete the intake process.",
  },
  {
    step: 3,
    title: "Begin Your Journey",
    description: "Move in, connect with your accountability partner, and start building the structured life that supports lasting recovery.",
  },
]
