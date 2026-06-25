'use client'

import Image from "next/image"
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
              <Image
                src="/LOGO.png"
                alt="Logo"
                width={120}
                height={40}
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900">Gift Real Estate</div>
              <div className="text-xs text-primary-600">Find Your Home</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition font-medium">
              Home
            </Link>
            <Link href="/properties" className="text-gray-700 hover:text-primary-600 transition font-medium">
              Properties
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-primary-600 transition font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+251983468888"
              className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+251983468888</span>
            </a>
            <Link
              href="/properties"
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:shadow-lg transition font-medium"
            >
              Browse Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Properties
            </Link>
            <Link
              href="/#about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Contact
            </Link>
            <a
              href="tel:+251983468888"
              className="block px-4 py-2 text-primary-600 font-medium hover:bg-primary-50 rounded-lg"
            >
              Call: +251983468888
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
