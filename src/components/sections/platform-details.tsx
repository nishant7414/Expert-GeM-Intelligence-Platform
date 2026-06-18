'use client'

import { motion } from 'framer-motion'
import { Eye, Brain, Shield, BarChart3 } from 'lucide-react'

export function PlatformDetails() {
  const features = [
    {
      icon: Eye,
      title: 'Tender Intelligence',
      description: 'AI-powered recommendations based on your business profile',
      details: ['Recommended Opportunities', 'Category Trends', 'Procurement Insights', 'Real-time Alerts'],
    },
    {
      icon: Brain,
      title: 'Tender Analyzer',
      description: 'Comprehensive analysis of every tender you view',
      details: ['Eligibility Summary', 'Risk Indicators', 'Key Requirements', 'Success Probability'],
    },
    {
      icon: Shield,
      title: 'Compliance Center',
      description: 'Manage all compliance and documentation requirements',
      details: ['Missing Documents Tracker', 'Certification Status', 'Vendor Readiness Score', 'Automated Reminders'],
    },
    {
      icon: BarChart3,
      title: 'Procurement Analytics',
      description: 'Data-driven insights for better decision making',
      details: ['Bid Success Rate', 'Opportunity Pipeline', 'Contract Value Tracking', 'Performance Benchmarks'],
    },
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {index % 2 === 0 ? (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg text-foreground/70 mb-6">{feature.description}</p>
                    <div className="space-y-3">
                      {feature.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-foreground/80">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg h-96 border border-secondary/20 flex items-center justify-center">
                    <span className="text-foreground/40">Feature Preview</span>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg h-96 border border-secondary/20 flex items-center justify-center order-2">
                    <span className="text-foreground/40">Feature Preview</span>
                  </div>
                  <div className="order-1">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg text-foreground/70 mb-6">{feature.description}</p>
                    <div className="space-y-3">
                      {feature.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-foreground/80">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
