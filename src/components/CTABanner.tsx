import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function CTABanner() {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Recovery?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Take the first step toward a new life. Call us today or apply online. We are here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${siteConfig.contactPhone}`}
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors duration-200 flex items-center justify-center gap-3 min-h-[52px]"
          >
            <Phone size={20} />
            Call {siteConfig.contactPhone}
          </a>
          <Link
            href="/admissions"
            className="bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors duration-200 flex items-center justify-center gap-3 min-h-[52px]"
          >
            Apply Online
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
