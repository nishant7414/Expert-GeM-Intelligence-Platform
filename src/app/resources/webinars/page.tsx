import { Metadata } from 'next'

import { Video, Calendar, Clock, Users, PlayCircle, Mic } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Webinars & Masterclasses | Expert GeM Intelligence Platform',
  description: 'Join live training sessions, procurement masterclasses, and view our library of recorded webinars.',
}

const UPCOMING_WEBINARS = [
  { id: 1, title: 'Mastering the AI Tender Analyzer for Maximum Win Rates', date: 'Oct 25, 2026', time: '11:00 AM IST', duration: '60 min', speaker: 'Dr. Rakesh Sharma', role: 'Head of Data Science', skill: 'Intermediate', spots: 'Limited' },
  { id: 2, title: 'GeM Vendor Assessment: QCI Audit Prep Live', date: 'Oct 28, 2026', time: '02:00 PM IST', duration: '90 min', speaker: 'Anita Desai', role: 'Compliance Director', skill: 'All Levels', spots: 'Open' },
  { id: 3, title: 'Defense Procurement: Navigating Specialized Categories', date: 'Nov 05, 2026', time: '03:00 PM IST', duration: '60 min', speaker: 'Major Ananya Rao', role: 'Defense Consultant', skill: 'Advanced', spots: 'Open' },
  { id: 4, title: 'Reverse Auction Strategies for MSMEs', date: 'Nov 12, 2026', time: '11:30 AM IST', duration: '45 min', speaker: 'Vikram Singh', role: 'Procurement Strategist', skill: 'Intermediate', spots: 'Filling Fast' },
]

const RECORDED_SESSIONS = [
  { id: 101, title: 'Getting Started on GeM in 2026', duration: '45 min', views: '12K', category: 'Basics' },
  { id: 102, title: 'OEM Authorization Negotiation Tactics', duration: '55 min', views: '8K', category: 'Strategy' },
  { id: 103, title: 'Handling Incident Rejections and Suspensions', duration: '60 min', views: '15K', category: 'Compliance' },
  { id: 104, title: 'Decoding L1 Pricing Algorithms', duration: '75 min', views: '22K', category: 'Intelligence' },
  { id: 105, title: 'Joint Venture Bidding Masterclass', duration: '90 min', views: '5K', category: 'Advanced' },
  { id: 106, title: 'Automating Catalog Uploads with API', duration: '40 min', views: '9K', category: 'Tech' },
  { id: 107, title: 'Healthcare Category Deep Dive', duration: '50 min', views: '6K', category: 'Sector' },
  { id: 108, title: 'IT Hardware Procurement Trends', duration: '45 min', views: '11K', category: 'Sector' },
  { id: 109, title: 'Understanding Margin Calculation', duration: '35 min', views: '18K', category: 'Basics' },
  { id: 110, title: 'Winning Forward Auctions', duration: '60 min', views: '14K', category: 'Strategy' },
  { id: 111, title: 'MSME Benefits and Quotas on GeM', duration: '50 min', views: '20K', category: 'Compliance' },
  { id: 112, title: 'Drafting Foolproof Technical Bids', duration: '65 min', views: '13K', category: 'Strategy' },
]

export default function WebinarsPage() {
  const featured = UPCOMING_WEBINARS[0]

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Dark Hero */}
      <div className="bg-slate-900 pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-sm font-medium text-blue-400 mb-6">
                <Video className="w-4 h-4" /> Professional Training Portal
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Master Government Procurement
              </h1>
              <p className="text-lg text-slate-700 mb-8 max-w-lg">
                Join live masterclasses, interactive Q&A sessions, and access our extensive library of recorded training modules.
              </p>
            </div>
            
            {/* Featured Upcoming Webinar Card inside Hero */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 bg-red-500 text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-bl-lg uppercase tracking-wider animate-pulse flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div> Live Soon
                </div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{featured.skill} Level</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">{featured.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6 font-medium">
                  <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-slate-600"/> {featured.date}</div>
                  <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-600"/> {featured.time}</div>
                </div>
                <div className="flex items-center gap-3 mb-8 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-slate-600">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{featured.speaker}</div>
                    <div className="text-xs text-slate-500">{featured.role}</div>
                  </div>
                </div>
                <button className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all text-lg">
                  Register for Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Upcoming Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" /> Upcoming Live Sessions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {UPCOMING_WEBINARS.slice(1).map(webinar => (
              <div key={webinar.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col h-full group">
                <div className="flex justify-between items-start mb-4">
                   <div className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded uppercase tracking-wider">{webinar.skill}</div>
                   {webinar.spots === 'Filling Fast' && <div className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Filling Fast</div>}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{webinar.title}</h3>
                
                <div className="space-y-2 mb-6 text-sm text-slate-600 font-medium border-l-2 border-slate-100 pl-3 flex-1">
                  <div>{webinar.date}</div>
                  <div>{webinar.time} ({webinar.duration})</div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                   <div className="text-sm font-bold text-slate-900">{webinar.speaker}</div>
                   <button className="text-primary font-bold text-sm hover:underline">Reserve Spot</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recorded Sessions Library */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-2">
                <PlayCircle className="w-6 h-6 text-primary" /> Masterclass Library
              </h2>
              <p className="text-slate-500 text-sm">Watch past sessions on-demand.</p>
            </div>
            <div className="flex gap-2">
              <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-2 outline-none focus:border-primary cursor-pointer">
                <option>All Categories</option>
                <option>Strategy</option>
                <option>Compliance</option>
                <option>Intelligence</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RECORDED_SESSIONS.map(session => (
              <div key={session.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="w-full aspect-video bg-slate-100 relative overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors z-10">
                     <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                       <PlayCircle className="w-6 h-6 text-primary ml-1" />
                     </div>
                   </div>
                   {/* Fake video thumbnail pattern */}
                   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-400 via-slate-200 to-slate-100"></div>
                   <div className="absolute bottom-2 right-2 bg-slate-900/80 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm z-20">
                     {session.duration}
                   </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">{session.category}</div>
                  <h3 className="font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-snug line-clamp-2 flex-1">
                    {session.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mt-auto">
                    <Users className="w-3.5 h-3.5" /> {session.views} views
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors shadow-sm inline-flex items-center gap-2">
               Load More Sessions <PlayCircle className="w-4 h-4" />
             </button>
          </div>
        </div>

      </div>
    </div>
  )
}
