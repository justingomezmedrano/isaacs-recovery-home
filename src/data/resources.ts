export interface Resource {
  title: string
  description: string
  url?: string
  phone?: string
  textLine?: string
}

export interface ResourceCategory {
  category: string
  icon: string
  resources: Resource[]
}

export const recoveryResources: ResourceCategory[] = [
  {
    category: "Crisis Support",
    icon: "Phone",
    resources: [
      {
        title: "988 Suicide & Crisis Lifeline",
        description: "Free, confidential support for people in distress. Available 24/7.",
        phone: "988",
        url: "https://988lifeline.org",
      },
      {
        title: "SAMHSA National Helpline",
        description: "Free, confidential, 24/7 treatment referral and information service for substance use and mental health.",
        phone: "1-800-662-4357",
        url: "https://www.samhsa.gov/find-help/national-helpline",
      },
      {
        title: "Crisis Text Line",
        description: "Text HOME to 741741 for free, 24/7 crisis support via text message.",
        textLine: "Text HOME to 741741",
        url: "https://www.crisistextline.org",
      },
    ],
  },
  {
    category: "Recovery Meetings",
    icon: "Users",
    resources: [
      {
        title: "Alcoholics Anonymous (AA)",
        description: "Find local AA meetings near you. Search by location, day, and time.",
        url: "https://www.aa.org/find-aa",
      },
      {
        title: "Narcotics Anonymous (NA)",
        description: "Find NA meetings in your area for support with drug addiction recovery.",
        url: "https://www.na.org/meetingsearch",
      },
      {
        title: "Celebrate Recovery",
        description: "Christ-centered 12-step recovery program for anyone with hurts, habits, and hang-ups.",
        url: "https://www.celebraterecovery.com",
      },
    ],
  },
  {
    category: "Employment Resources",
    icon: "Briefcase",
    resources: [
      {
        title: "Texas Workforce Commission",
        description: "Job search assistance, training programs, and workforce development services in Texas.",
        url: "https://www.twc.texas.gov",
      },
      {
        title: "Indeed",
        description: "Search millions of jobs from thousands of job boards and company career pages.",
        url: "https://www.indeed.com",
      },
      {
        title: "WorkInTexas",
        description: "Free online job matching system operated by the Texas Workforce Commission.",
        url: "https://www.workintexas.com",
      },
    ],
  },
  {
    category: "Family Support",
    icon: "Heart",
    resources: [
      {
        title: "Al-Anon Family Groups",
        description: "Support for families and friends of people with alcohol problems.",
        url: "https://al-anon.org",
      },
      {
        title: "Nar-Anon Family Groups",
        description: "Support for relatives and friends of people with drug addiction.",
        url: "https://www.nar-anon.org",
      },
      {
        title: "SAMHSA Family Resources",
        description: "Information and resources for families affected by substance use disorders.",
        url: "https://www.samhsa.gov/families",
      },
    ],
  },
  {
    category: "Faith Resources",
    icon: "BookOpen",
    resources: [
      {
        title: "Bible Gateway",
        description: "Search and read the Bible in multiple translations. Find scriptures for recovery and hope.",
        url: "https://www.biblegateway.com",
      },
      {
        title: "Celebrate Recovery Bible Studies",
        description: "Faith-based recovery study materials and devotionals.",
        url: "https://www.celebraterecovery.com/resources",
      },
    ],
  },
]
