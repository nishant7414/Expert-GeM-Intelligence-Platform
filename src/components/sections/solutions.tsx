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
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Tender Discovery',
      description: 'Real-time matching with relevant opportunities',
      color: 'amber'
    },
    {
      icon: Brain,
      title: 'AI Tender Analysis',
      description: 'Automated analysis and eligibility assessment',
      color: 'purple'
    },
    {
      icon: CheckCircle,
      title: 'Eligibility Assessment',
      description: 'Comprehensive suitability evaluation',
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Vendor Assessment Assistance',
      description: 'Complete vendor readiness evaluation',
      color: 'rose'
    },
    {
      icon: Briefcase,
      title: 'OEM Authorization Support',
      description: 'Guidance for OEM authorization requirements',
      color: 'indigo'
    },
    {
      icon: FileText,
      title: 'Compliance Tracking',
      description: 'Automated compliance documentation management',
      color: 'teal'
    },
    {
      icon: BarChart3,
      title: 'Procurement Analytics',
      description: 'Data-driven insights for bid strategy',
      color: 'fuchsia'
    },
    {
      icon: TrendingUp,
      title: 'Bid Strategy Support',
      description: 'Expert guidance for winning bids',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Account Management',
      description: 'Dedicated expert support and consultation',
      color: 'cyan'
    },
  ]

  const colorStyles: Record<string, { bg: string, text: string, ring: string, hoverBg: string }> = {
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', ring: 'ring-blue-500/20', hoverBg: 'group-hover:bg-blue-600' },
    amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', ring: 'ring-amber-500/20', hoverBg: 'group-hover:bg-amber-600' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', ring: 'ring-purple-500/20', hoverBg: 'group-hover:bg-purple-600' },
    emerald: { bg: 'bg-blue-50', text: 'text-primary', ring: 'ring-emerald-500/20', hoverBg: 'group-hover:bg-emerald-600' },
    rose: { bg: 'bg-rose-500/10', text: 'text-rose-400', ring: 'ring-rose-500/20', hoverBg: 'group-hover:bg-rose-600' },
    indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', ring: 'ring-indigo-500/20', hoverBg: 'group-hover:bg-indigo-600' },
    teal: { bg: 'bg-teal-500/10', text: 'text-teal-400', ring: 'ring-teal-500/20', hoverBg: 'group-hover:bg-teal-600' },
    fuchsia: { bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-400', ring: 'ring-fuchsia-500/20', hoverBg: 'group-hover:bg-fuchsia-600' },
    orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', ring: 'ring-orange-500/20', hoverBg: 'group-hover:bg-orange-600' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', ring: 'ring-cyan-500/20', hoverBg: 'group-hover:bg-cyan-600' },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <section className="py-24 sm:py-32 bg-[#F6F8FC] relative">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider text-primary uppercase">Complete Suite</span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            One Platform. <br className="sm:hidden" />Complete Procurement Success.
          </h3>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Everything you need to discover, analyze, and win government contracts, all in one place.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            const style = colorStyles[feature.color]
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="enterprise-card p-6 z-10 hover:z-20 flex flex-col h-full"
              >
                <div className={`relative w-14 h-14 ${style.bg} ring-1 ${style.ring} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <Icon className={`w-6 h-6 ${style.text} transition-colors duration-300`} />
                </div>
                
                <h4 className="font-bold text-slate-900 mb-3 text-lg leading-snug">{feature.title}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed flex-grow">{feature.description}</p>
                
                {/* Decorative Bottom Line */}
                <div className={`mt-6 h-1 w-0 group-hover:w-full ${style.bg} rounded-full transition-all duration-500`}>
                  <div className={`h-full w-full bg-gradient-to-r from-transparent via-${feature.color}-500 to-transparent opacity-30`}></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
