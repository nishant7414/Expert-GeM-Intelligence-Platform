'use client'

import { motion } from 'framer-motion'
import { AlertCircle, X, NavigationOff, ShieldAlert, FileWarning, SearchX, Activity, FileDigit } from 'lucide-react'

export function Problems() {
  // Mapping specific icons and styles to each challenge for a highly premium look
  // PRESERVING EXACT TEXT FROM ORIGINAL
  const challenges = [
    { text: 'Finding relevant tenders', icon: SearchX, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
    { text: 'Understanding eligibility requirements', icon: ShieldAlert, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { text: 'Managing documentation', icon: FileWarning, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    { text: 'Vendor assessments', icon: Activity, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
    { text: 'OEM authorization challenges', icon: NavigationOff, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
    { text: 'Compliance management', icon: FileDigit, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/20' },
    { text: 'Low bid success rates', icon: X, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <section className="py-24 sm:py-32 bg-background border-b border-slate-200 overflow-hidden relative">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <AlertCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">The Problem</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Government Procurement <br/>Is <span className="text-primary">Complex</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Most businesses struggle with the intricacies of government tenders, shifting compliance requirements, and complex documentation portals.
            </p>
          </motion.div>

          {/* Right Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {challenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`enterprise-card p-5 group overflow-hidden ${idx === challenges.length - 1 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
                >
                  <div className="relative flex items-center gap-4 z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${challenge.bg} ${challenge.border} border group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${challenge.color}`} />
                    </div>
                    <span className="font-semibold text-slate-700 leading-snug">{challenge.text}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
