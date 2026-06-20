'use client'

import { motion } from 'framer-motion'
import { BookOpen, BarChart3, FileText, Video, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ResourcesDetail() {
  const hubs = [
    { 
      title: 'Expert Blog & Insights', 
      description: 'Deep-dive articles on procurement strategy, AI, vendor assessments, and GeM updates.',
      icon: BookOpen, 
      count: '150+ Articles',
      link: '/resources/blog',
      color: 'blue'
    },
    { 
      title: 'Success Case Studies', 
      description: 'Discover how top enterprises and MSMEs use our platform to win massive government contracts.',
      icon: BarChart3, 
      count: '45+ Stories',
      link: '/resources/case-studies',
      color: 'emerald'
    },
    { 
      title: 'Guides & Playbooks', 
      description: 'Downloadable templates, checklists, and step-by-step roadmaps for procurement success.',
      icon: FileText, 
      count: '80+ Resources',
      link: '/resources/guides',
      color: 'purple'
    },
    { 
      title: 'Webinars & Masterclasses', 
      description: 'Join live training sessions or watch past masterclasses from our top procurement strategists.',
      icon: Video, 
      count: '50+ Sessions',
      link: '/resources/webinars',
      color: 'amber'
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">Explore the Knowledge Ecosystem</h2>
          <p className="text-lg text-slate-600">Choose a hub below to access enterprise-grade procurement intelligence, tools, and training materials.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {hubs.map((hub, index) => {
            const Icon = hub.icon
            const colorStyles = 
              hub.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-slate-900 border-blue-100' :
              hub.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-slate-900 border-emerald-100' :
              hub.color === 'purple' ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-slate-900 border-purple-100' :
              'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-slate-900 border-amber-100'

            return (
              <Link href={hub.link} key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-2xl hover:shadow-slate-200/50 transition-all cursor-pointer group flex flex-col h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors border ${colorStyles}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{hub.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-1">{hub.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="font-bold text-slate-900">{hub.count}</span>
                    <span className="flex items-center gap-2 text-primary font-bold">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-24 max-w-5xl mx-auto bg-slate-900 text-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/30 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">Stay Ahead in Government Procurement</h2>
          <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto relative z-10">Subscribe to our weekly intelligence report and get the latest GeM updates, tender strategies, and compliance alerts directly in your inbox.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto relative z-10">
            <input type="email" placeholder="Enter your work email" className="px-6 py-4 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 placeholder:text-slate-900/50 flex-1 outline-none focus:bg-slate-200 transition-colors" />
            <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
              Subscribe Free
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
