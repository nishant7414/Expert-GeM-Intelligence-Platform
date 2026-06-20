'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F8FAFC] pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">E</span>
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                Expert GeM
              </span>
            </Link>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-sm">
              India&apos;s most advanced government procurement intelligence platform. We help businesses discover, analyze, and win more contracts.
            </p>
            <div className="space-y-4 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+91 94737 27212</span>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'footer' })}
                className="flex items-center gap-3 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>expertgemconsulting@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><Link href="/platform" className="hover:text-primary transition-colors">Tender Intelligence</Link></li>
              <li><Link href="/platform" className="hover:text-primary transition-colors">Tender Analyzer</Link></li>
              <li><Link href="/platform" className="hover:text-primary transition-colors">Compliance Center</Link></li>
              <li><Link href="/platform" className="hover:text-primary transition-colors">Procurement Analytics</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><Link href="/services" className="hover:text-primary transition-colors">GeM Registration</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Vendor Assessment</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">OEM Authorization</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Tender Consulting</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><Link href="/resources/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/resources/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/resources/guides" className="hover:text-primary transition-colors">Guides & Webinars</Link></li>
              <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {currentYear} Expert GeM Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-primary transition-colors">
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
