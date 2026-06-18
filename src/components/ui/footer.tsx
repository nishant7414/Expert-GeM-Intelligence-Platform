'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">
              Expert GeM
            </h3>
            <p className="text-sm text-foreground/70 mb-4">
              India&apos;s most advanced government procurement partner.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <span>+91 XXXX-XXXX-XX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                <span>hello@expertgem.com</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/platform" className="hover:text-secondary transition-colors">
                  Platform Features
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-secondary transition-colors">
                  Tender Intelligence
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-secondary transition-colors">
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-secondary transition-colors">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  GeM Registration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Tender Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Vendor Assessment
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Compliance Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/resources" className="hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-secondary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-secondary transition-colors">
                  Guides & Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-secondary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/20 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Expert GeM Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/60 hover:text-secondary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-foreground/60 hover:text-secondary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
