'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Business Assessment',
      description: 'Evaluate your current procurement status and capabilities',
    },
    {
      number: '02',
      title: 'Procurement Readiness Analysis',
      description: 'Identify gaps and opportunities for improvement',
    },
    {
      number: '03',
      title: 'Opportunity Discovery',
      description: 'Find relevant government contracts and tenders',
    },
    {
      number: '04',
      title: 'Tender Participation Support',
      description: 'Expert guidance through the entire bidding process',
    },
    {
      number: '05',
      title: 'Compliance Management',
      description: 'Ensure all requirements are met and documented',
    },
    {
      number: '06',
      title: 'Contract Success',
      description: 'Win contracts and continue partnership support',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-96 h-96 bg-blue-50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider text-slate-600 uppercase">Process</span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            How It Works
          </h3>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Our proven process to help you succeed in government procurement
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-1 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-200 via-primary to-primary"
            ></motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Step Number Circle */}
                <div className="relative mb-8 inline-block lg:mx-0">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="w-14 h-14 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center relative z-10 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-lg font-black text-slate-700 group-hover:text-primary transition-colors">{step.number}</span>
                  </div>
                  
                  {/* Subtle Success Indicator */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm z-20">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="enterprise-card p-8 h-full flex flex-col group overflow-hidden transition-all duration-300">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">{step.description}</p>
                  
                  {/* Hidden Hover Arrow */}
                  <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Next Phase <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
