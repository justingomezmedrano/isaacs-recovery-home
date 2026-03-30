/*
 * HOME PAGE - Main landing page
 *
 * Sections (top to bottom):
 *   1. Hero - Logo, company name, tagline, scripture, CTA buttons
 *   2. Mission Statement - Brief description of the program
 *   3. Program Highlights - 3 feature cards (from src/data/program-info.ts)
 *   4. Scripture Quote - Philippians 4:6-7 (from site-config.ts)
 *   5. How It Works - 3-step process (from src/data/program-info.ts)
 *   6. Scripture Quote - Mark 12:31
 *   7. CTA Banner - Phone number and Apply button
 *
 * To change hero content, edit the JSX below or update site-config.ts
 * To change program highlights, edit src/data/program-info.ts
 * To add/remove sections, add/remove JSX blocks in this file
 */
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, ClipboardList } from 'lucide-react'
import { motion } from 'framer-motion'
import ProgramCard from '@/components/ProgramCard'
import ScriptureQuote from '@/components/ScriptureQuote'
import CTABanner from '@/components/CTABanner'
import PlaceholderBadge from '@/components/PlaceholderBadge'
import { programHighlights, howItWorks } from '@/data/program-info'
import { siteConfig } from '@/lib/site-config'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-header-bg via-primary to-header-bg py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.15),transparent_60%)]" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <Image
                src="/images/logo.png"
                alt="Isaac's Recovery Home Logo"
                width={160}
                height={160}
                className="mx-auto mb-2 rounded-lg shadow-lg"
                priority
              />
              <div className="text-center"><PlaceholderBadge label="PLACEHOLDER - Need higher-res logo" /></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {siteConfig.companyName}
            </h1>
            <p className="font-serif italic text-secondary text-xl md:text-2xl mb-3">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="text-white/70 text-sm mb-8">
              {siteConfig.scripture.philippians.reference}
            </p>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              A structured, faith-based sober living facility for men recovering from alcohol and drug addiction.
              Built on brotherhood, accountability, and the power of prayer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors duration-200 flex items-center justify-center gap-3 min-h-[52px]"
              >
                <ClipboardList size={20} />
                Apply Now
              </Link>
              <a
                href={`tel:${siteConfig.contactPhone}`}
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors duration-200 flex items-center justify-center gap-3 min-h-[52px]"
              >
                <Phone size={20} />
                Call {siteConfig.contactPhone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted text-lg leading-relaxed">
              Isaac&apos;s Recovery Home provides a safe, structured environment where men can rebuild their lives
              through sobriety, faith, and mutual accountability. We believe that recovery is possible
              when men support each other as brothers, grounded in discipline and guided by God&apos;s love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 px-4 bg-section-alt">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {programHighlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ProgramCard {...highlight} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Quote */}
      <ScriptureQuote
        verse={siteConfig.scripture.philippians.verse}
        reference={siteConfig.scripture.philippians.reference}
      />

      {/* How It Works */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.step * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
                {step.step < 3 && (
                  <ArrowRight className="text-primary mx-auto mt-4 hidden md:block" size={24} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Scripture */}
      <ScriptureQuote
        verse={siteConfig.scripture.mark.verse}
        reference={siteConfig.scripture.mark.reference}
      />

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
