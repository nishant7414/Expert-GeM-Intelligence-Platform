'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Target, Trophy } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechInnovate Solutions',
      industry: 'Information Technology',
      challenge: 'Could not identify relevant government tenders in a crowded market',
      result: 'Won 8 contracts worth ₹2.5 Cr in the first year alone.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Premium Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'OEM authorization and documentation was a major barrier',
      result: 'Secured 5 OEM authorizations and ₹1.8 Cr in new contracts.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      company: 'BuildRight Infrastructure',
      industry: 'Construction',
      challenge: 'Compliance requirements and strict deadlines were overwhelming',
      result: 'Achieved 100% compliance and increased bid success to 82%.',
      rating: 5,
    },
    {
      name: 'Neha Singh',
      company: 'HealthCare Innovations',
      industry: 'Healthcare',
      challenge: 'Limited knowledge of the GeM procurement process',
      result: 'Successfully bid on 12 tenders, winning 9 of them.',
      rating: 5,
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <section className="py-24 sm:py-32 bg-[#F6F8FC] border-y border-slate-200 relative overflow-hidden">
      {/* Decorative quotes background */}
      <div className="absolute top-10 left-10 text-[200px] text-slate-900/[0.03] font-serif leading-none pointer-events-none rotate-12">&quot;</div>
      <div className="absolute bottom-10 right-10 text-[200px] text-slate-900/[0.03] font-serif leading-none pointer-events-none rotate-12">&quot;</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="text-sm font-bold tracking-wider text-slate-600 uppercase">Customer Stories</span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Proven Results
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            See how businesses across India are accelerating their government revenue.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="enterprise-card relative p-8 sm:p-10 group overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Rating & Quote Icon */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-slate-100 group-hover:text-blue-500/10 transition-colors" />
                </div>

                {/* Challenge & Result */}
                <div className="space-y-4 mb-10">
                  <div className="relative pl-6 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-slate-100 group-hover:border-slate-200 transition-colors">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 rounded-l-xl"></div>
                    <p className="text-[11px] text-slate-500 font-black uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5" /> The Challenge
                    </p>
                    <p className="text-slate-700 font-medium leading-relaxed">&quot;{testimonial.challenge}&quot;</p>
                  </div>

                  <div className="relative pl-6 pr-4 py-4 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100/50 group-hover:border-blue-200 transition-colors">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-xl"></div>
                    <p className="text-[11px] text-primary font-black uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5" /> The Result
                    </p>
                    <p className="text-slate-800 font-bold leading-relaxed">&quot;{testimonial.result}&quot;</p>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 font-black text-xl border border-slate-200">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg leading-tight">{testimonial.name}</p>
                  <p className="text-sm font-semibold text-slate-600 mt-0.5">{testimonial.company}</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5 uppercase tracking-wide">{testimonial.industry}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
