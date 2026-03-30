/*
 * NAVIGATION - Sticky top navigation bar
 *
 * To add a new page to the navigation:
 *   1. Add an entry to the navItems array below (name, href, icon)
 *   2. Icons come from lucide-react: https://lucide.dev/icons
 *
 * To change the logo:
 *   Replace public/images/logo.png with your new logo image
 *
 * To change the "Call Now" phone number:
 *   Update NEXT_PUBLIC_CONTACT_PHONE in .env.local
 *
 * Navigation background color is "header-bg" from globals.css
 */
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Home, Users, ClipboardList, BookOpen, Phone } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  /* Add, remove, or reorder navigation links here */
  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Admissions', href: '/admissions', icon: ClipboardList },
    { name: 'Resources', href: '/resources', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Phone },
  ]

  return (
    <nav className="bg-header-bg shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Isaac's Recovery Home"
              width={44}
              height={44}
              className="rounded"
            />
            <span className="text-xl font-bold text-white">
              {process.env.NEXT_PUBLIC_COMPANY_NAME || "Isaac's Recovery Home"}
            </span>
          </Link>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-secondary transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              )
            })}
            <a
              href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || '940-232-8252'}`}
              className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/20 pt-4">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-white/90 hover:text-secondary transition-colors duration-200 flex items-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              )
            })}
            <a
              href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || '940-232-8252'}`}
              className="mt-3 bg-secondary text-white px-4 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 flex items-center gap-2 font-medium text-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={16} />
              Call {process.env.NEXT_PUBLIC_CONTACT_PHONE || '940-232-8252'}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
