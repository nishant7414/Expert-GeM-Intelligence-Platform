'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-primary to-primary/80 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Ready to Grow Through Government Procurement?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Join 1000+ businesses that are winning more government contracts with Expert GeM Intelligence Platform.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/book-consultation"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Get Free Assessment
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-sm"
          >
            ✓ Free consultation • ✓ No credit card required • ✓ 24-hour response time
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
