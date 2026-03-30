import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Isaac\'s Recovery Home website.',
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-header-bg to-primary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
          <p className="text-white/70 mt-2">Effective Date: March 30, 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl prose prose-lg">
          <div className="space-y-8 text-muted">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
              <p>
                By accessing and using the {siteConfig.companyName} website, you accept and agree to be bound
                by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Description of Services</h2>
              <p>
                This website provides information about {siteConfig.companyName}, a structured sober living
                facility for men recovering from alcohol and drug addiction. The website allows visitors to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Learn about our sober living program, rules, and expectations</li>
                <li>Submit an intake application for consideration</li>
                <li>Contact our Program Director with questions</li>
                <li>Access recovery resources and support information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Application and Admission</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Submitting an online intake application does not guarantee admission to the program</li>
                <li>All applications are reviewed by the Program Director</li>
                <li>Admission decisions are made at the sole discretion of {siteConfig.companyName}</li>
                <li>Applicants will be contacted regarding their application status</li>
                <li>Providing false or misleading information on the intake form may result in denial or termination</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Program Rules</h2>
              <p>
                The house rules and program expectations described on this website are separate from these
                Terms of Service. Admitted residents will sign a separate program agreement that governs their
                participation in the sober living program. Program rules may be updated at any time at the
                discretion of the Program Director.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">User Responsibilities</h2>
              <p>When using this website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and truthful information in all form submissions</li>
                <li>Use the website only for its intended purpose</li>
                <li>Not attempt to disrupt or interfere with website functionality</li>
                <li>Not submit spam, malicious content, or automated form submissions</li>
                <li>Respect the privacy and confidentiality of the program and its residents</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Disclaimer</h2>
              <p>
                The information provided on this website is for general informational purposes only and should
                not be considered medical advice, treatment recommendations, or professional counseling.
                {siteConfig.companyName} is a sober living facility, not a medical treatment center. We strongly
                encourage individuals to seek professional medical and mental health support as part of their
                recovery journey.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
              <p>
                {siteConfig.companyName} is not responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Loss, theft, injury, or damage to personal property on the premises</li>
                <li>Actions or decisions made based on information provided on this website</li>
                <li>Third-party websites linked from our resources page</li>
                <li>Temporary unavailability of the website or its features</li>
              </ul>
              <p>
                Each resident bears personal responsibility for their own belongings, health, and recovery decisions
                as outlined in our Liability and Personal Responsibility Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of
                {siteConfig.companyName} or its licensors and is protected by applicable intellectual property laws.
                You may not reproduce, distribute, or use any content without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be posted on
                this page with an updated effective date. Continued use of the website after changes constitutes
                acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the
                State of Texas. Any disputes arising from the use of this website shall be resolved in the
                appropriate courts within the State of Texas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, contact us at:
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
