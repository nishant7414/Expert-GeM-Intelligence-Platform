'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative rounded-[2.5rem] p-8 sm:p-16 text-center shadow-xl overflow-hidden bg-white border border-slate-200"
        >
          {/* Extremely Premium Abstract Mesh Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-[120px] mix-blend-overlay"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-[120px] mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
            
            {/* Subtle internal ring borders */}
            <div className="absolute inset-4 border border-slate-100 rounded-[2rem] pointer-events-none"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8 flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold tracking-wider text-primary uppercase">Start Winning Today</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Ready to grow your <br className="hidden sm:block" />government revenue?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
              Join 1,000+ businesses that are winning more contracts, streamlining compliance, and scaling their GeM operations with our platform.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6 w-full sm:w-auto"
            >
              <Link
                href="/book-consultation"
                className="btn-primary group"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary group"
              >
                Get Free Assessment
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-4 text-slate-600 text-sm font-medium pt-8"
            >
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                </div>
                Free 30-min consultation
              </span>
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                </div>
                No commitment required
              </span>
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                </div>
                Enterprise-grade security
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
