'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="relative min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-background">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF4FF] via-[#F5F3FF] to-[#F8FAFC] -z-10"></div>
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-50 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl lg:max-w-none mx-auto text-center lg:text-left pt-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-sm font-semibold text-slate-600">Government Procurement Intelligence</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Win More <br />
                <span className="text-primary">Government</span> <br />
                <span className="text-primary">Contracts</span> <br />
                with Confidence
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                Expert GeM Intelligence Platform helps businesses discover opportunities, analyze tenders, manage compliance, participate strategically, and improve procurement success through expert guidance and intelligent technology.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-slate-700 font-medium">1000+ businesses assisted in winning contracts</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-slate-700 font-medium">95% client satisfaction rate</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-slate-700 font-medium">AI-powered tender analysis & insights</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/book-consultation"
                className="btn-primary"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/contact"
                className="btn-secondary"
              >
                Get Free Assessment
              </Link>
            </motion.div>
          </div>

          {/* Right - Premium White Cards Layout */}
          <motion.div
            variants={itemVariants}
            className="relative h-[500px] sm:h-[600px] hidden lg:block"
          >
            {/* Active Opportunities Card */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-72 enterprise-card p-6 z-10"
            >
              <div className="text-sm font-semibold text-slate-500 mb-1">Active Opportunities</div>
              <div className="text-4xl font-extrabold text-primary mb-2">2,847</div>
              <div className="text-xs font-semibold text-primary mb-4">+14% this month</div>
              {/* Progress Bar */}
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[65%] rounded-full"></div>
              </div>
            </motion.div>

            {/* Tender Match Score Card */}
            <motion.div 
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[80px] right-0 w-72 enterprise-card p-6 z-20"
            >
              <div className="text-sm font-semibold text-slate-500 mb-1">Tender Match Score</div>
              <div className="text-4xl font-extrabold text-slate-900 mb-2">94%</div>
              <div className="text-xs font-semibold text-slate-500 mb-4">Excellent Match</div>
              {/* Score Indicator (Segmented Bar) */}
              <div className="flex gap-1.5 h-2 w-full">
                <div className="h-full bg-amber-500 rounded-full flex-1"></div>
                <div className="h-full bg-amber-500 rounded-full flex-1"></div>
                <div className="h-full bg-amber-500 rounded-full flex-1"></div>
                <div className="h-full bg-amber-500 rounded-full flex-1"></div>
                <div className="h-full bg-slate-100 rounded-full flex-1"></div>
              </div>
            </motion.div>

            {/* Bid Success Rate Card */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[240px] left-[80px] w-72 enterprise-card p-6 z-30"
            >
              <div className="text-sm font-semibold text-slate-500 mb-1">Bid Success Rate</div>
              <div className="text-4xl font-extrabold text-slate-900 mb-2">78%</div>
              <div className="text-xs font-semibold text-slate-500 mb-4">Above Average</div>
              {/* Performance Indicator */}
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[78%] rounded-full"></div>
              </div>
            </motion.div>

            {/* Compliance Ready Card */}
            <motion.div 
              animate={{ y: [-14, 14, -14] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[380px] right-[120px] w-72 enterprise-card p-6 z-40 flex items-center justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-slate-500 mb-1">Compliance Ready</div>
                <div className="text-4xl font-extrabold text-primary mb-1">100%</div>
                <div className="text-xs font-medium text-slate-500">All Documents Ready</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
