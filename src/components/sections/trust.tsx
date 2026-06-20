'use client'

import { motion } from 'framer-motion'
import { Users, Factory, Lightbulb, Building, Briefcase, Landmark } from 'lucide-react'

export function Trust() {
  const categories = [
    { label: 'MSMEs', count: '250+', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Manufacturers', count: '180+', icon: Factory, color: 'text-primary', bg: 'bg-blue-50' },
    { label: 'Startups', count: '320+', icon: Lightbulb, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Service Providers', count: '410+', icon: Briefcase, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Enterprises', count: '95+', icon: Building, color: 'text-rose-400', bg: 'bg-rose-500/10' },
    { label: 'Government Vendors', count: '145+', icon: Landmark, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  ]

  return (
    <section className="py-24 sm:py-32 bg-[#F6F8FC] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Trusted by Growing Businesses Across India
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Serving businesses of all sizes and sectors with expert government procurement solutions
          </p>
        </motion.div>

        {/* Infinite Marquee Animation Container */}
        <div className="relative flex overflow-hidden group">
          <div className="flex space-x-6 animate-marquee group-hover:[animation-play-state:paused]">
            {/* First Set */}
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={`set1-${idx}`}
                  className="enterprise-card p-6 flex-shrink-0 w-64"
                >
                  <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">
                    {category.count}
                  </div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{category.label}</div>
                </div>
              );
            })}
            {/* Duplicate Set for seamless scroll */}
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={`set2-${idx}`}
                  className="enterprise-card p-6 flex-shrink-0 w-64"
                >
                  <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">
                    {category.count}
                  </div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{category.label}</div>
                </div>
              );
            })}
          </div>
          
          {/* Gradient Overlays for Marquee */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F6F8FC] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F6F8FC] to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Marquee Keyframes directly injected for self-contained component */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2 - 12px)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  )
}
