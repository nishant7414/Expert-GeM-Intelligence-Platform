'use client'

import { motion } from 'framer-motion'

export function PlatformShowcase() {
  const sections = [
    {
      title: 'Tender Intelligence',
      features: ['Recommended Opportunities', 'Category Trends', 'Procurement Insights'],
      color: 'from-secondary to-emerald-500',
    },
    {
      title: 'Tender Analyzer',
      features: ['Eligibility Summary', 'Risk Indicators', 'Key Requirements'],
      color: 'from-accent to-orange-500',
    },
    {
      title: 'Compliance Center',
      features: ['Missing Documents', 'Certification Status', 'Vendor Readiness'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Procurement Analytics',
      features: ['Bid Success Rate', 'Opportunity Pipeline', 'Contract Value Tracking'],
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-primary/2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet the Expert GeM Intelligence Platform
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Powerful tools designed to help you win more government contracts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`p-8 bg-gradient-to-br ${section.color} rounded-lg shadow-lg border border-white/10`}
            >
              <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
              <div className="space-y-4">
                {section.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-32 bg-white/10 backdrop-blur rounded-lg border border-white/20 flex items-center justify-center">
                <p className="text-white/70 text-sm">Platform Interface Preview</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
