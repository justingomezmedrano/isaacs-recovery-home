/*
 * PROGRAM INFORMATION - All program details in one place
 *
 * programHighlights: The 3 feature cards shown on the home page
 *   - To change card content, edit the title/description below
 *   - Icons: "Shield", "Heart", "Home" (from ProgramCard.tsx icon map)
 *   - To add more icons, update the iconMap in src/components/ProgramCard.tsx
 *
 * houseRules: Displayed on the About page in a categorized grid
 *   - Add/remove rules within each category
 *   - Add new categories by adding a new object to the array
 *
 * howItWorks: The 3-step process shown on the home page
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
