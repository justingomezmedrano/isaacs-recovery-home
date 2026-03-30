/*
 * FOOTER - Site-wide footer displayed on every page
 *
 * Contains:
 * - Company description and tagline
 * - Quick navigation links (add/remove in the ul below)
 * - Legal page links (Privacy Policy, Terms of Service)
 * - Contact info (director name, phone, email from site-config.ts)
 * - No iLLusion Software attribution (required branding)
 *
 * All dynamic values (company name, phone, email, etc.) come from
 * src/lib/site-config.ts which reads from .env.local
 */
import Link from 'next/link'
import PlaceholderBadge from '@/components/PlaceholderBadge'
import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="bg-header-bg text-white py-10 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-secondary mb-4">
              {siteConfig.companyName}
            </h3>
            <p className="text-sm text-white/80">
              A faith-based structured sober living facility for men recovering from alcohol and drug addiction.
            </p>
            <p className="text-sm text-white/60 mt-3 font-serif italic">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/80 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-secondary transition-colors">About the Program</Link></li>
              <li><Link href="/admissions" className="text-white/80 hover:text-secondary transition-colors">Apply Now</Link></li>
              <li><Link href="/resources" className="text-white/80 hover:text-secondary transition-colors">Recovery Resources</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-white/80 hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-white/80 hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                <strong>Program Director:</strong><br />
                {siteConfig.directorName}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.contactPhone}`}
                  className="text-secondary hover:text-secondary/80 transition-colors font-semibold text-lg"
                >
                  {siteConfig.contactPhone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-secondary transition-colors"
                >
                  {siteConfig.contactEmail}
                </a>
                <br />
                <PlaceholderBadge label="Temp Gmail" type="placeholder" />
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p className="text-white/60">
            &copy; {siteConfig.copyrightYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="mt-2 text-white/50">
            Made with &#10084;&#65039;
          </p>
          <p className="mt-1">
            <a
              href="https://no-illusion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-secondary transition-colors"
            >
              Designed, created, and property of No iLLusion Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
