import type { Metadata } from 'next'
import { Download, User } from 'lucide-react'
import HouseRules from '@/components/HouseRules'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import { faqItems } from '@/data/faq'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About the Program',
  description: 'Learn about our structured sober living program, house rules, daily schedule, and what to expect at Isaac\'s Recovery Home.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-header-bg to-primary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About the Program
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A structured path to recovery built on faith, brotherhood, and personal responsibility.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Approach</h2>
          <div className="prose max-w-none text-muted space-y-4">
            <p className="text-lg leading-relaxed">
              Isaac&apos;s Recovery Home is a structured sober living facility for men recovering from alcohol
              and drug addiction. We operate on a brotherhood model where residents support one another
              through shared accountability, faith, and structured programming.
            </p>
            <p className="text-lg leading-relaxed">
              Our program combines daily structure with spiritual growth. Residents follow a clear set of
              expectations designed to build discipline, responsibility, and the habits that support
              long-term sobriety. From daily employment searches to weekly AA meetings and Sunday church
              attendance, every element of the program exists to help men rebuild their lives.
            </p>
            <p className="text-lg leading-relaxed">
              We believe that recovery happens in community. When men hold each other accountable,
              share their struggles honestly, and lean on faith together, lasting transformation is possible.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 bg-section-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card-bg border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Your First Week</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                  Complete intake process and drug test
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                  Receive your accountability partner
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                  Learn house rules and daily schedule
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                  Begin employment search process
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                  Attend your first AA meeting with the house
                </li>
              </ul>
            </div>
            <div className="bg-card-bg border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Daily Schedule</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold min-w-[80px]">9:00 AM</span>
                  Begin employment search
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold min-w-[80px]">4:00 PM</span>
                  Employment search ends
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold min-w-[80px]">Evening</span>
                  AA meetings (2+ per week)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold min-w-[80px]">Sunday</span>
                  Church attendance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold min-w-[80px]">10/11 PM</span>
                  Curfew (weekday/weekend)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">House Rules</h2>
          <p className="text-muted mb-8">
            These rules exist to maintain a safe, sober, and structured environment for all residents.
            Compliance is mandatory and supports your recovery journey.
          </p>
          <HouseRules />
        </div>
      </section>

      {/* Meet the Director */}
      <section className="py-16 px-4 bg-section-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card-bg border border-border rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
              <User className="text-primary" size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Meet the Program Director</h2>
              <h3 className="text-xl text-primary font-semibold mb-3">{siteConfig.directorName}</h3>
              <p className="text-muted leading-relaxed mb-4">
                Justin leads Isaac&apos;s Recovery Home with dedication to helping men find their path
                to lasting sobriety. He is available to answer your questions about the program,
                help with the intake process, and provide support with employment and recovery resources.
              </p>
              <a
                href={`tel:${siteConfig.contactPhone}`}
                className="text-primary font-semibold text-lg hover:text-primary/80 transition-colors"
              >
                Call: {siteConfig.contactPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Documents</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/documents/Isaac_Recovery_Home_Handbook.pdf"
              download
              className="bg-card-bg border border-border rounded-xl p-6 hover:shadow-md transition-shadow flex items-center gap-4"
            >
              <Download className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground">Resident Handbook</h3>
                <p className="text-muted text-sm">Complete program rules and guidelines (PDF)</p>
              </div>
            </a>
            <a
              href="/documents/Isaac_Recovery_Home_Intake_Form.pdf"
              download
              className="bg-card-bg border border-border rounded-xl p-6 hover:shadow-md transition-shadow flex items-center gap-4"
            >
              <Download className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground">Intake Form (PDF)</h3>
                <p className="text-muted text-sm">Printable intake application packet (PDF)</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-section-alt">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  )
}
