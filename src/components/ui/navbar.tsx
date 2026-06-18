'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Platform', href: '/platform' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Expert GeM
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-secondary/10"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book-consultation"
              className="px-4 py-2 text-sm font-medium text-primary bg-secondary hover:bg-secondary/90 rounded-lg transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-foreground border border-secondary rounded-lg hover:bg-secondary/10 transition-colors"
            >
              Get Free Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary/10 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                href="/book-consultation"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-sm font-medium text-primary bg-secondary hover:bg-secondary/90 rounded-lg transition-colors text-center"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-sm font-medium text-foreground border border-secondary rounded-lg hover:bg-secondary/10 transition-colors text-center"
              >
                Get Free Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
