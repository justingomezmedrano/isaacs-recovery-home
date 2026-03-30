import type { Metadata } from 'next'
import { Phone, Users, Briefcase, Heart, BookOpen, ExternalLink } from 'lucide-react'
import { recoveryResources } from '@/data/resources'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Recovery Resources',
  description: 'Recovery resources including crisis hotlines, AA/NA meetings, employment assistance, family support, and faith resources.',
}

const iconMap: Record<string, React.ElementType> = {
  Phone,
  Users,
  Briefcase,
  Heart,
  BookOpen,
}

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-header-bg to-primary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recovery Resources
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Help is available. Whether you are starting your recovery journey or supporting someone who is,
            these resources are here for you.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-50 border-b border-red-200 py-4 px-4">
        <div className="container mx-auto text-center">
          <p className="text-red-800 font-semibold">
            If you or someone you know is in immediate danger, call{' '}
            <a href="tel:911" className="underline">911</a>.
            For crisis support, call{' '}
            <a href="tel:988" className="text-red-600 font-bold underline">988</a>{' '}
            (Suicide & Crisis Lifeline) or{' '}
            <a href="tel:1-800-662-4357" className="text-red-600 font-bold underline">1-800-662-4357</a>{' '}
            (SAMHSA).
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl space-y-12">
          {recoveryResources.map((category) => {
            const Icon = iconMap[category.icon] || BookOpen
            return (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.resources.map((resource) => (
                    <div
                      key={resource.title}
                      className="bg-card-bg border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                      <p className="text-muted text-sm mb-3">{resource.description}</p>
                      <div className="space-y-1">
                        {resource.phone && (
                          <a
                            href={`tel:${resource.phone}`}
                            className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
                          >
                            <Phone size={14} />
                            {resource.phone}
                          </a>
                        )}
                        {resource.textLine && (
                          <p className="text-accent text-sm font-medium">{resource.textLine}</p>
                        )}
                        {resource.url && (
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary text-sm hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink size={12} />
                            Visit Website
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
