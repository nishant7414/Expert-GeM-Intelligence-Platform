import { Metadata } from 'next'

import { ArrowRight, BarChart3, Star, Activity, Building2 } from 'lucide-react'


export const metadata: Metadata = {
  title: 'Case Studies | Expert GeM Intelligence Platform',
  description: 'See how top enterprises and MSMEs use our platform to win government contracts and streamline procurement.',
}

const CASE_STUDIES = [
  { id: 1, client: "TechCorp Solutions", industry: "IT Hardware", challenge: "Low win rate in technical evaluation due to complex OEM authorizations.", solution: "Implemented End-to-End Tender Management and automated compliance checks.", outcome: "Increased win rate by 45%.", roi: "₹45 Cr Won", timeline: "6 Months", featured: true },
  { id: 2, client: "MedLife Devices", industry: "Healthcare", challenge: "Frequent catalog rejections by QCI.", solution: "Pre-assessment audits and documentation overhaul via our Compliance Center.", outcome: "100% catalog approval rate.", roi: "₹12 Cr Revenue", timeline: "3 Months", featured: false },
  { id: 3, client: "BuildPro Infra", industry: "Construction", challenge: "Missing out on high-value regional tenders.", solution: "Deployed AI Tender Analyzer with custom geographic alerting.", outcome: "Participated in 3x more relevant tenders.", roi: "200% Growth", timeline: "8 Months", featured: false },
  { id: 4, client: "SecureNet Systems", industry: "Cybersecurity", challenge: "Losing on L1 pricing despite strong technical bids.", solution: "Utilized Procurement Intelligence to reverse-engineer competitor pricing.", outcome: "Won 4 major state contracts.", roi: "₹85 Cr Won", timeline: "12 Months", featured: false },
  { id: 5, client: "EcoPower Energy", industry: "Renewable Energy", challenge: "Delayed incident management leading to account suspension.", solution: "Dedicated Account Management team handled all incident resolutions.", outcome: "Zero suspensions, 5.0 vendor rating.", roi: "Risk Mitigated", timeline: "Ongoing", featured: false },
  { id: 6, client: "GlobalEd Supplies", industry: "Education", challenge: "Difficulty managing massive catalog of 50,000+ SKUs.", solution: "Bulk catalog management and automated stock syncing.", outcome: "Saved 40 hours/week in manual entry.", roi: "60% Time Saved", timeline: "2 Months", featured: false },
  { id: 7, client: "AeroParts Mfg", industry: "Defense & Aerospace", challenge: "Complex technical compliance for defense sector tenders.", solution: "Expert consulting for defense-specific OEM authorizations.", outcome: "Secured Ministry of Defense empanelment.", roi: "₹120 Cr Pipeline", timeline: "9 Months", featured: false },
  { id: 8, client: "CleanWater Tech", industry: "Sanitation", challenge: "New to GeM, zero visibility.", solution: "Complete profile setup, Vendor Assessment, and initial bid strategy.", outcome: "First tender won within 45 days.", roi: "₹2.5 Cr Won", timeline: "45 Days", featured: false },
]

export default function CaseStudiesPage() {
  const featured = CASE_STUDIES.find(c => c.featured) || CASE_STUDIES[0]
  const regular = CASE_STUDIES.filter(c => !c.featured)

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Dynamic Dashboard Hero */}
      <div className="bg-slate-50 text-slate-900 pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-sm font-medium mb-6">
            <Activity className="w-4 h-4 text-primary" /> Platform Impact Metrics
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">Success by the Numbers</h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-16">
            See how our intelligence platform and expert consulting combine to deliver unmatched ROI in government procurement.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">₹850Cr+</div>
              <div className="text-slate-600 text-sm font-medium">Tender Value Won</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl sm:text-5xl font-black text-primary mb-2">45%</div>
              <div className="text-slate-600 text-sm font-medium">Avg. Win Rate Increase</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">1,200+</div>
              <div className="text-slate-600 text-sm font-medium">Successful Assessments</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl sm:text-5xl font-black text-blue-400 mb-2">0</div>
              <div className="text-slate-600 text-sm font-medium">Account Suspensions</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        
        {/* Featured Case Study */}
        <div className="bg-background/80 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-16 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-primary font-bold tracking-wider text-sm uppercase mb-6">
              <Star className="w-5 h-5 fill-primary" /> Featured Success Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{featured.client}</h2>
            <div className="inline-flex px-3 py-1 bg-slate-100 text-slate-900 rounded-lg text-sm font-medium mb-6 w-fit">
              {featured.industry}
            </div>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">The Challenge</h4>
                <p className="text-slate-700 font-medium">{featured.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">The Solution</h4>
                <p className="text-slate-700">{featured.solution}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-8">
              <div>
                <div className="text-3xl font-black text-primary">{featured.roi}</div>
                <div className="text-sm text-slate-600 font-medium">Measurable ROI</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600">{featured.timeline}</div>
                <div className="text-sm text-slate-600 font-medium">Time to Value</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-slate-50/80 p-8 sm:p-12 border-l border-slate-100 flex flex-col justify-center relative overflow-hidden">
             {/* Abstract Dashboard Mockup */}
             <div className="bg-background rounded-2xl shadow-lg border border-slate-200 p-6 relative z-10 w-full max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                 <div className="flex items-center gap-2">
                   <BarChart3 className="w-5 h-5 text-primary" />
                   <div className="font-bold text-slate-900">Win Rate Analytics</div>
                 </div>
                 <div className="text-xs font-bold text-primary bg-blue-50 border border-primary/20 px-2 py-1 rounded">+45% MoM</div>
               </div>
               <div className="space-y-4">
                 <div className="flex items-end gap-2 h-24">
                   <div className="w-1/6 bg-slate-50 rounded-t-md h-1/4 relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-50 border border-slate-200 text-slate-900 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">12%</div></div>
                   <div className="w-1/6 bg-slate-100 rounded-t-md h-2/4 relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-50 border border-slate-200 text-slate-900 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">24%</div></div>
                   <div className="w-1/6 bg-slate-200 rounded-t-md h-1/3 relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-50 border border-slate-200 text-slate-900 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">18%</div></div>
                   <div className="w-1/6 bg-primary/40 rounded-t-md h-3/4 relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-50 border border-slate-200 text-slate-900 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">45%</div></div>
                   <div className="w-1/6 bg-primary/70 rounded-t-md h-[90%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-50 border border-slate-200 text-slate-900 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">55%</div></div>
                   <div className="w-1/6 bg-primary rounded-t-md h-full relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-50 border border-slate-200 text-slate-900 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">67%</div></div>
                 </div>
                 <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                   <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                 </div>
               </div>
             </div>
             
             <div className="bg-background rounded-2xl shadow-lg border border-slate-200 p-6 relative z-10 w-full max-w-md mx-auto mt-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                   <Building2 className="w-6 h-6" />
                 </div>
                 <div>
                   <div className="text-sm font-bold text-slate-900">Total Tender Value</div>
                   <div className="text-2xl font-black text-slate-900">₹45,20,00,000</div>
                 </div>
               </div>
               <div className="w-full bg-slate-50 rounded-full h-2 overflow-hidden">
                 <div className="bg-primary h-full w-[85%] rounded-full"></div>
               </div>
               <div className="text-xs text-slate-500 mt-2 text-right">85% of annual target reached</div>
             </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <button className="whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-bold bg-slate-100 text-slate-900 border border-slate-300 shadow-sm">All Industries</button>
          <button className="whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-medium bg-background border border-slate-100 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Healthcare</button>
          <button className="whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-medium bg-background border border-slate-100 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">IT Hardware</button>
          <button className="whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-medium bg-background border border-slate-100 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Construction</button>
          <button className="whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-medium bg-background border border-slate-100 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">Defense</button>
        </div>

        {/* Regular Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regular.map(study => (
            <div key={study.id} className="bg-background/80 backdrop-blur-md border border-slate-100 rounded-2xl p-8 hover:border-slate-300 transition-all group flex flex-col h-full cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex px-3 py-1 bg-slate-50 text-slate-900 border border-slate-100 rounded-lg text-xs font-bold uppercase tracking-wider">
                  {study.industry}
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white transition-colors group-hover:border-primary">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{study.client}</h3>
              <p className="text-slate-600 text-sm mb-8 line-clamp-3 flex-1">
                <span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 mt-auto">
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-1">Outcome</div>
                  <div className="font-bold text-slate-900">{study.roi}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-1">Timeline</div>
                  <div className="font-bold text-slate-900">{study.timeline}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
