import { Metadata } from 'next'

import { BookOpen, Download, Clock, BarChart, FileText, CheckSquare, Layers, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guides & Templates | Expert GeM Intelligence Platform',
  description: 'Downloadable resources, templates, and comprehensive playbooks for GeM procurement success.',
}

const PLAYBOOKS = [
  { id: 1, title: 'The Ultimate GeM Vendor Assessment Playbook', description: 'Everything you need to know to pass the QCI Vendor Assessment on the first try.', icon: CheckSquare, color: 'emerald' },
  { id: 2, title: 'Tender Participation & Bidding Strategy Framework', description: 'A step-by-step framework to analyze, prepare, and win high-value government tenders.', icon: BarChart, color: 'blue' },
  { id: 3, title: 'OEM Authorization Roadmap for Resellers', description: 'How to negotiate and secure OEM authorizations to expand your catalog offerings.', icon: Layers, color: 'purple' },
]

const GUIDES = [
  { id: 1, title: 'Getting Started with GeM Registration', category: 'Beginner', time: '15 min read', type: 'Guide', premium: false },
  { id: 2, title: 'Technical Bid Submission Checklist', category: 'Intermediate', time: 'Download (PDF)', type: 'Checklist', premium: false },
  { id: 3, title: 'Predictive Pricing Model Template', category: 'Advanced', time: 'Download (Excel)', type: 'Template', premium: true },
  { id: 4, title: 'How to Respond to Show Cause Notices', category: 'Intermediate', time: '20 min read', type: 'Guide', premium: false },
  { id: 5, title: 'Understanding Reverse Auctions', category: 'Beginner', time: '10 min read', type: 'Guide', premium: false },
  { id: 6, title: 'GeM Incident Management Workflow', category: 'Intermediate', time: 'Download (PDF)', type: 'Chart', premium: false },
  { id: 7, title: 'Competitor Margin Calculator', category: 'Advanced', time: 'Download (Excel)', type: 'Template', premium: true },
  { id: 8, title: 'Joint Venture Bidding Guide', category: 'Advanced', time: '30 min read', type: 'Guide', premium: true },
  { id: 9, title: 'Catalog Upload Automation Scripts', category: 'Advanced', time: 'Download (Code)', type: 'Tool', premium: true },
  { id: 10, title: 'Pre-Bid Meeting Preparation Checklist', category: 'Beginner', time: 'Download (PDF)', type: 'Checklist', premium: false },
  { id: 11, title: 'GeM Buyer Persona Matrix', category: 'Intermediate', time: 'Download (PDF)', type: 'Template', premium: false },
  { id: 12, title: 'Contract Award Tracking Spreadsheet', category: 'Beginner', time: 'Download (Excel)', type: 'Template', premium: false },
]

const TYPE_ICONS: Record<string, React.ElementType> = {
  'Guide': BookOpen,
  'Checklist': CheckSquare,
  'Template': FileText,
  'Chart': BarChart,
  'Tool': Layers
}

export default function GuidesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Procurement Learning Platform</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Access our complete library of playbooks, templates, and guides designed to turn you into a government procurement expert.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all">Browse Playbooks</button>
            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-bold hover:bg-slate-50 transition-colors">Download Templates</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Core Playbooks */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Layers className="w-6 h-6 text-primary" /> Core Procurement Playbooks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PLAYBOOKS.map(playbook => {
              const Icon = playbook.icon
              const colorClasses = 
                playbook.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-slate-900' :
                playbook.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-slate-900' :
                'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-slate-900'

              return (
                <div key={playbook.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${colorClasses}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{playbook.title}</h3>
                  <p className="text-slate-600 text-sm mb-8 flex-1">{playbook.description}</p>
                  <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-slate-900 group-hover:text-slate-900 transition-colors">
                    Read Playbook
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Resources Grid */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-2">
                <FileText className="w-6 h-6 text-primary" /> Guides & Templates
              </h2>
              <p className="text-slate-500 text-sm">Downloadable assets and quick-read guides.</p>
            </div>
            <div className="flex gap-2">
              <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-2 outline-none focus:border-primary cursor-pointer">
                <option>All Types</option>
                <option>Guides</option>
                <option>Templates</option>
                <option>Checklists</option>
              </select>
              <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-2 outline-none focus:border-primary cursor-pointer">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUIDES.map(guide => {
              const Icon = TYPE_ICONS[guide.type] || FileText
              return (
                <div key={guide.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group cursor-pointer flex flex-col relative overflow-hidden">
                  {guide.premium && (
                    <div className="absolute top-0 right-0 bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                      <Lock className="w-3 h-3" /> PRO
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{guide.type}</div>
                      <div className="text-xs font-medium text-slate-500">{guide.category}</div>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                    {guide.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      {guide.time.includes('Download') ? <Download className="w-4 h-4"/> : <Clock className="w-4 h-4"/>}
                      {guide.time}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
             <button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors shadow-sm">
               Load More Resources
             </button>
          </div>
        </div>

      </div>
    </div>
  )
}
