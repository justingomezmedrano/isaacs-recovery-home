import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Isaac\'s Recovery Home website.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-header-bg to-primary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/70 mt-2">Effective Date: March 30, 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl prose prose-lg">
          <div className="space-y-8 text-muted">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Our Commitment to Your Privacy</h2>
              <p>
                {siteConfig.companyName} is committed to protecting the privacy and confidentiality of all
                individuals who visit our website and submit information through our forms. We understand that
                the information you share with us is deeply personal and sensitive, and we treat it with the
                utmost care and respect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
              <p>We collect information that you voluntarily provide through our website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Form:</strong> Name, email address, phone number (optional), and your message.</li>
                <li><strong>Intake Application:</strong> Personal information, emergency contact, substance use history,
                  medical history, legal background, and personal statements. This information is collected solely
                  for the purpose of evaluating your application for our sober living program.</li>
                <li><strong>Website Analytics:</strong> We use Vercel Analytics to collect anonymous usage data
                  (page views, browser type, device type). This data does not identify individual users.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries submitted through our contact form</li>
                <li>To process and evaluate intake applications for our sober living program</li>
                <li>To communicate with you about your application status</li>
                <li>To improve our website and services through anonymous analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">How We Handle Your Information</h2>
              <p>
                All information submitted through our contact and intake forms is transmitted via email to our
                Program Director. We do not store your form submissions in a database. Your information is handled
                as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Form submissions are sent directly to our staff via secure email</li>
                <li>Intake application information is treated as confidential</li>
                <li>We do not sell, trade, or share your personal information with third parties</li>
                <li>Access to submitted information is limited to authorized program staff only</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information during transmission and handling.
                Our website uses HTTPS encryption for all data transmission. However, no method of electronic
                transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Third-Party Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Vercel:</strong> Our website is hosted on Vercel. Vercel Analytics collects anonymous
                  usage statistics. See <a href="https://vercel.com/legal/privacy-policy" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a>.</li>
                <li><strong>Email Service:</strong> Form submissions are transmitted via SMTP email service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request information about what personal data we hold about you</li>
                <li>Request correction of any inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw your application at any time</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <a href={`tel:${siteConfig.contactPhone}`} className="text-primary hover:text-primary/80">
                  {siteConfig.contactPhone}
                </a>{' '}
                or email{' '}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:text-primary/80">
                  {siteConfig.contactEmail}
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
              <p>
                Our website uses only essential cookies required for website functionality and anonymous analytics.
                We do not use advertising cookies or tracking cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Children&apos;s Privacy</h2>
              <p>
                Our website and services are intended for adults aged 18 and older. We do not knowingly collect
                personal information from children under 18.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with
                an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <p>
                <strong>{siteConfig.companyName}</strong><br />
                Phone: <a href={`tel:${siteConfig.contactPhone}`} className="text-primary">{siteConfig.contactPhone}</a><br />
                Email: <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary">{siteConfig.contactEmail}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
