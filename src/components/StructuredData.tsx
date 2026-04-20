import { siteConfig } from '@/lib/site-config'
import { faqItems } from '@/data/faq'

function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ResidentialFacility',
    name: siteConfig.companyName,
    description:
      'Faith-based structured sober living for men recovering from alcohol and drug addiction. Safe, affordable housing with accountability and brotherhood.',
    url: siteConfig.companyUrl,
    telephone: siteConfig.contactPhone,
    email: siteConfig.contactEmail,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contactPhone,
      contactType: 'Program Director',
      name: siteConfig.directorName,
      availableLanguage: ['English', 'Spanish'],
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    priceRange: `${siteConfig.weeklyRent}/week`,
    currenciesAccepted: 'USD',
    slogan: siteConfig.tagline,
    logo: `${siteConfig.companyUrl}/images/logo.png`,
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.companyName,
    url: siteConfig.companyUrl,
    description:
      'Faith-based structured sober living for men recovering from alcohol and drug addiction.',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.companyName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.companyUrl}/images/logo.png`,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export { OrganizationSchema, FAQSchema, WebSiteSchema }
