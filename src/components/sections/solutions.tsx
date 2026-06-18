'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Brain,
  CheckCircle,
  BarChart3,
  FileText,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Briefcase,
} from 'lucide-react'

export function Solutions() {
  const features = [
    {
      icon: Search,
      title: 'GeM Registration Support',
      description: 'Expert guidance through complete registration process',
    },
    {
      icon: Zap,
      title: 'Tender Discovery',
      description: 'Real-time matching with relevant opportunities',
    },
    {
      icon: Brain,
      title: 'AI Tender Analysis',
      description: 'Automated analysis and eligibility assessment',
    },
    {
      icon: CheckCircle,
      title: 'Eligibility Assessment',
      description: 'Comprehensive suitability evaluation',
    },
    {
      icon: Shield,
      title: 'Vendor Assessment Assistance',
      description: 'Complete vendor readiness evaluation',
    },
    {
      icon: Briefcase,
      title: 'OEM Authorization Support',
      description: 'Guidance for OEM authorization requirements',
    },
    {
      icon: FileText,
      title: 'Compliance Tracking',
      description: 'Automated compliance documentation management',
    },
    {
      icon: BarChart3,
      title: 'Procurement Analytics',
      description: 'Data-driven insights for bid strategy',
    },
    {
      icon: TrendingUp,
      title: 'Bid Strategy Support',
      description: 'Expert guidance for winning bids',
    },
    {
      icon: Users,
      title: 'Account Management',
      description: 'Dedicated expert support and consultation',
    },
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
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            One Platform. Complete Procurement Success.
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to discover, analyze, and win government contracts
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-card border border-border/50 rounded-lg hover:border-secondary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
