'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Clock } from 'lucide-react'

export default function PreLaunchBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="relative bg-gradient-to-r from-[#1e3a5f] via-[#2563EB] to-[#1e3a5f] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,67,0.3),transparent_70%)]" />
      </div>
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-center gap-3 text-center pr-8">
          <Clock size={18} className="text-secondary shrink-0 hidden sm:block" />
          <p className="text-sm sm:text-base font-medium">
            <span className="text-secondary font-semibold">Now accepting pre-applications.</span>
            {' '}Early applicants will receive priority placement when we open our doors.{' '}
            <Link
              href="/admissions"
              className="underline underline-offset-2 hover:text-secondary transition-colors duration-200 font-semibold"
            >
              Apply today
            </Link>
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200"
          aria-label="Dismiss banner"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}
