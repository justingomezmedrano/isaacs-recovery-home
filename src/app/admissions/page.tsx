import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import IntakeForm from '@/components/IntakeForm'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Apply for Admission',
  description: 'Apply online to Isaac\'s Recovery Home. Complete our intake form to start your recovery journey. Call 940-232-8252 for immediate assistance.',
}

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-header-bg to-primary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Apply for Admission
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4">
            Complete the intake form below to begin your application. All information is confidential.
          </p>
          <p className="text-white/60 text-sm">
            Prefer to apply by phone? Call{' '}
            <a href={`tel:${siteConfig.contactPhone}`} className="text-secondary font-semibold underline">
              {siteConfig.contactPhone}
            </a>
          </p>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-6 px-4 bg-secondary-light border-b border-secondary/20">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-foreground text-sm">
            <strong>Note:</strong> Submitting this form does not guarantee admission.
            All applications are reviewed by our Program Director who will contact you to discuss next steps.
          </p>
        </div>
      </section>

      {/* Intake Form */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <IntakeForm />
        </div>
      </section>

      {/* Help Banner */}
      <section className="py-8 px-4 bg-section-alt border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-muted mb-3">
            Need help with your application? Have questions about the program?
          </p>
          <a
            href={`tel:${siteConfig.contactPhone}`}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors min-h-[48px]"
          >
            <Phone size={18} />
            Call {siteConfig.directorName}: {siteConfig.contactPhone}
          </a>
        </div>
      </section>
    </>
  )
}
