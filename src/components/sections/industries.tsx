'use client'

import { motion } from 'framer-motion'
import { Factory, Code2, Hammer, Stethoscope, BookOpen, Truck, Building2, Briefcase } from 'lucide-react'

export function Industries() {
  const industries = [
    { icon: Factory, label: 'Manufacturing' },
    { icon: Code2, label: 'Information Technology' },
    { icon: Hammer, label: 'Construction' },
    { icon: Stethoscope, label: 'Healthcare' },
    { icon: BookOpen, label: 'Education' },
    { icon: Truck, label: 'Logistics' },
    { icon: Building2, label: 'Infrastructure' },
    { icon: Briefcase, label: 'Consulting Services' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <section className="py-24 sm:py-32 bg-[#F6F8FC] border-y border-slate-200 overflow-hidden relative">
      {/* Premium Background Mesh */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="text-sm font-bold tracking-wider text-slate-600 uppercase">Sectors</span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Industries We Serve
          </h3>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Specialized solutions and intelligence for every sector of the Indian economy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`enterprise-card relative h-48 transition-all duration-300 group cursor-pointer overflow-hidden hover:-translate-y-1`}
              >
                {/* Floating Content */}
                <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-white transition-all duration-300">
                  <div className="w-16 h-16 bg-slate-50 border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center mb-5 group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-300">
                    <Icon className="w-8 h-8 text-slate-600 group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-center group-hover:text-primary transition-colors">
                    {industry.label}
                  </h4>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
