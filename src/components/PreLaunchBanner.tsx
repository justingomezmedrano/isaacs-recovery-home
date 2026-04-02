/*
 * PRE-LAUNCH BANNER - Temporary announcement banner at the top of every page
 *
 * Shows above the navigation on all pages. Users can dismiss it with the X button.
 * To remove this banner entirely, delete the <PreLaunchBanner /> line from src/app/layout.tsx
 * To change the banner text, edit the content below.
 */
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Clock } from 'lucide-react'

export default function PreLaunchBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="relative bg-gradient-to-r from-[#7c3a10] via-[#b45309] to-[#7c3a10] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,191,36,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(251,191,36,0.15),transparent_60%)]" />
      </div>
      <div className="container mx-auto px-4 py-4 sm:py-5 relative">
        <div className="flex items-center justify-center gap-3 text-center pr-10">
          <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/15 rounded-full shrink-0">
            <Clock size={20} className="text-amber-200" />
          </div>
          <div>
            <p className="text-base sm:text-lg font-bold tracking-wide">
              <span className="text-amber-200">Now Accepting Pre-Applications</span>
            </p>
            <p className="text-sm sm:text-base text-white/90 mt-0.5">
              Early applicants receive priority placement when we open our doors.{' '}
              <Link
                href="/admissions"
                className="inline-flex items-center gap-1 text-white font-bold underline underline-offset-2 decoration-amber-300 hover:text-amber-200 transition-colors duration-200"
              >
                Apply today &rarr;
              </Link>
            </p>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 p-1"
          aria-label="Dismiss banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
