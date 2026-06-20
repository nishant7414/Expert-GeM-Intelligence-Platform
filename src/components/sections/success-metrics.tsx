'use client'

import { motion } from 'framer-motion'
import { Users, TrendingUp, IndianRupee, Smile } from 'lucide-react'

export function SuccessMetrics() {
  const metrics = [
    { icon: Users, value: '1,000+', label: 'Businesses Assisted', color: 'from-blue-400 to-blue-600' },
    { icon: TrendingUp, value: '5,000+', label: 'Tender Opportunities Evaluated', color: 'from-emerald-400 to-emerald-600' },
    { icon: IndianRupee, value: '₹100 Cr+', label: 'Procurement Value Supported', color: 'from-amber-400 to-amber-600' },
    { icon: Smile, value: '95%', label: 'Client Satisfaction', color: 'from-purple-400 to-purple-600' },
  ]

  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Impact</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            We don&apos;t just provide software. We deliver concrete, quantifiable results that transform your government procurement strategy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 24 }}
                className="relative group"
              >
                {/* Glassmorphic Card */}
                <div className="enterprise-card relative p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                  {/* Subtle Gradient Line on Top */}
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${metric.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    {/* Glowing dot */}
                    <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-primary transition-colors"></div>
                  </div>
                  
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
