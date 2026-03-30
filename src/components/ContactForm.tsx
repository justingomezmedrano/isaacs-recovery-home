'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot check
    if (formData.get('_gotcha')) return

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again or call us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-accent-light border border-accent/30 rounded-xl p-8 text-center">
        <CheckCircle className="text-accent mx-auto mb-4" size={48} />
        <h3 className="text-xl font-bold text-foreground mb-2">Message Sent</h3>
        <p className="text-muted">
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={100}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card-bg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={254}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card-bg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-lg border border-border bg-card-bg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="(555) 555-5555"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card-bg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
          placeholder="How can we help you?"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 text-red-600 bg-red-50 rounded-lg p-3">
          <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2 min-h-[48px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
