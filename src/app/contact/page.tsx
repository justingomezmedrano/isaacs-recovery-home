import type { Metadata } from 'next'
import { Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Isaac\'s Recovery Home. Call 940-232-8252 or send us a message. We are here to help you start your recovery journey.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-header-bg to-primary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have questions about our program? Ready to take the first step? We are here to help.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <a
                      href={`tel:${siteConfig.contactPhone}`}
                      className="text-primary text-xl font-bold hover:text-primary/80 transition-colors"
                    >
                      {siteConfig.contactPhone}
                    </a>
                    <p className="text-muted text-sm mt-1">
                      Ask for {siteConfig.directorName}, Program Director
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {siteConfig.contactEmail}
                    </a>
                    <p className="text-muted text-sm mt-1">
                      We respond within 24 to 48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted">Available by phone during business hours</p>
                    <p className="text-muted text-sm mt-1">
                      For urgent needs, please call directly
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-secondary-light border border-secondary/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Need Immediate Help?</h3>
                <p className="text-muted text-sm mb-3">
                  If you are in crisis, please contact one of these resources:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>988 Suicide & Crisis Lifeline:</strong>{' '}
                    <a href="tel:988" className="text-primary font-semibold">988</a>
                  </li>
                  <li>
                    <strong>SAMHSA Helpline:</strong>{' '}
                    <a href="tel:1-800-662-4357" className="text-primary font-semibold">1-800-662-4357</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
