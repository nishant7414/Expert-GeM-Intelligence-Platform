'use client'

import { motion } from 'framer-motion'
import { 
  LayoutDashboard, FileSearch, ShieldCheck, TrendingUp, 
  CheckCircle2, AlertTriangle, Clock, BarChart3, 
  Activity, Building2,
  ArrowUpRight, Bell, FileText, Check, FileWarning, HelpCircle
} from 'lucide-react'

// Reusable micro-components for mockups
const MockupContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden ring-1 ring-slate-900/5 ${className}`}>
    {/* Mockup Header/Browser Bar */}
    <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
      </div>
      <div className="mx-auto bg-white border border-slate-200 rounded-md px-3 py-1 text-[10px] text-slate-600 font-medium font-mono flex items-center gap-2">
        <ShieldCheck className="w-3 h-3" />
        app.expertgem.com
      </div>
    </div>
    <div className="p-4 sm:p-6 bg-slate-50/50">
      {children}
    </div>
  </div>
)

const Badge = ({ children, color = "blue" }: { children: React.ReactNode, color?: "blue" | "emerald" | "amber" | "slate" }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20",
    emerald: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20",
    amber: "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20",
    slate: "bg-slate-100 text-slate-700 ring-1 ring-slate-600/20"
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colors[color]}`}>
      {children}
    </span>
  )
}

export function PlatformDetails() {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-32">
          {/* Feature 1: Tender Intelligence (Left Text, Right Mockup) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                <FileSearch className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Tender Intelligence</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Stop manually searching for opportunities. Our intelligence center curates, scores, and delivers highly-matched tenders directly to your dashboard in real-time.
              </p>
              <ul className="space-y-4">
                {['Real-time Recommended Opportunities', 'Predictive Category Trends', 'Automated Match Scoring'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <MockupContainer>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                      <LayoutDashboard className="w-5 h-5 text-primary" /> Tender Intelligence Center
                    </h4>
                  </div>
                  <Badge color="emerald"><span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div> Active Sync</span></Badge>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <div className="text-xs text-slate-500 font-medium mb-1">Active Opps</div>
                    <div className="text-xl font-bold text-slate-900">1,284</div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <div className="text-xs text-slate-500 font-medium mb-1">Matched</div>
                    <div className="text-xl font-bold text-blue-600">247</div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <div className="text-xs text-slate-500 font-medium mb-1">Total Value</div>
                    <div className="text-xl font-bold text-slate-900">₹184 Cr</div>
                  </div>
                </div>

                {/* Table */}
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Recommended Opportunities</span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { name: 'CCTV Surveillance', dept: 'Delhi Police', val: '₹2.8 Cr', score: '92%', status: 'High Match', color: 'emerald' },
                      { name: 'Solar Equipment', dept: 'Railways', val: '₹4.1 Cr', score: '88%', status: 'Recommended', color: 'blue' },
                      { name: 'Furniture Proc.', dept: 'Education Dept', val: '₹1.2 Cr', score: '84%', status: 'Good Fit', color: 'slate' }
                    ].map((row, i) => (
                      <div key={i} className="p-3 px-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 text-sm">{row.name}</div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                            <Building2 className="w-3 h-3" /> {row.dept} • {row.val}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm font-bold text-slate-900">{row.score}</div>
                            <div className="text-[10px] text-slate-600">Score</div>
                          </div>
                          <Badge color={row.color as any}>{row.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini Chart Area */}
                <div className="mt-4 bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500 font-medium mb-2">Category Trend (IT Hardware)</div>
                    <div className="flex items-end gap-1.5 h-12">
                      {[40, 60, 45, 80, 65, 90, 100, 85].map((h, i) => (
                        <div key={i} className={`w-3 rounded-t-sm ${i >= 5 ? 'bg-blue-500' : 'bg-slate-200'}`} style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-emerald-600 text-sm font-bold justify-end">
                      <TrendingUp className="w-4 h-4" /> +24%
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Growth this quarter</div>
                  </div>
                </div>
              </MockupContainer>
            </motion.div>
          </div>

          {/* Feature 2: Tender Analyzer (Right Text, Left Mockup) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2">
              <MockupContainer>
                {/* Header */}
                <div className="mb-5">
                  <Badge color="blue">AI Analyzer</Badge>
                  <h4 className="font-bold text-slate-900 text-lg mt-2 leading-tight">Supply of Security Equipment</h4>
                  <p className="text-xs text-slate-500 mt-1">Tender ID: GEM/2026/B/458291</p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-white border border-emerald-200 rounded-lg p-3 shadow-sm ring-1 ring-emerald-500/10">
                    <div className="text-xs text-emerald-600 font-bold mb-1">Eligibility</div>
                    <div className="text-2xl font-black text-emerald-700">91%</div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <div className="text-xs text-slate-500 font-bold mb-1">Risk Level</div>
                    <div className="text-lg font-bold text-slate-900 mt-1">Low</div>
                  </div>
                  <div className="bg-white border border-blue-200 rounded-lg p-3 shadow-sm ring-1 ring-blue-500/10">
                    <div className="text-xs text-blue-600 font-bold mb-1">Win Prob.</div>
                    <div className="text-2xl font-black text-blue-700">78%</div>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-4">
                  {/* Checklist */}
                  <div className="col-span-3 bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Requirements Checklist</div>
                    <div className="space-y-2.5">
                      {[
                        { label: 'GST Registration', ok: true },
                        { label: 'UDYAM Certificate', ok: true },
                        { label: 'Past Experience (3 Yrs)', ok: true },
                        { label: 'Turnover Criteria (>₹1Cr)', ok: true },
                        { label: 'OEM Authorization', ok: false }
                      ].map((req, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-[13px] font-medium text-slate-700">{req.label}</span>
                          {req.ok ? (
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Insights Panel */}
                  <div className="col-span-2 bg-slate-900 rounded-lg p-4 shadow-sm text-slate-900 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <Activity className="w-24 h-24" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider mb-3">Key Insights</div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-[10px] text-slate-600">Est. Competition</div>
                          <div className="text-sm font-bold text-amber-400">Medium (4-6 Bids)</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-600">Avg Bid Value</div>
                          <div className="text-sm font-bold">₹2.4 Cr</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <div className="text-[10px] text-slate-600">Expected Timeline</div>
                      <div className="text-sm font-bold flex items-center gap-1"><Clock className="w-3 h-3" /> 45 Days</div>
                    </div>
                  </div>
                </div>
              </MockupContainer>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">AI Tender Analyzer</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Instantly process complex 100-page tender documents. Our AI extracts crucial requirements, calculates your eligibility, and identifies hidden risks before you bid.
              </p>
              <ul className="space-y-4">
                {['Automated Eligibility Scoring', 'Risk & Compliance Detection', 'Competitive Intelligence Insights'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Feature 3: Compliance Center (Left Text, Right Mockup) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Compliance Center</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Maintain a flawless vendor profile. Proactively manage document expiries, OEM authorizations, and policy adherence to prevent account suspension.
              </p>
              <ul className="space-y-4">
                {['Vendor Readiness Scoring', 'Automated Renewal Alerts', 'Document Health Tracking'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <MockupContainer>
                {/* Header & Score */}
                <div className="flex gap-4 mb-6">
                  {/* Circular Score */}
                  <div className="w-24 h-24 rounded-full border-4 border-slate-100 relative flex items-center justify-center bg-white shadow-sm flex-shrink-0">
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="46" fill="transparent" stroke="#10b981" strokeWidth="8" strokeDasharray="289" strokeDashoffset="52" strokeLinecap="round" />
                    </svg>
                    <div className="text-center">
                      <div className="text-2xl font-black text-slate-900">82<span className="text-sm">%</span></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 text-lg">Vendor Readiness Score</h4>
                    <p className="text-sm text-slate-500 mb-2">Your profile is in good shape, but requires attention to reach 100%.</p>
                    <div className="flex gap-2">
                      <Badge color="amber">2 Action Items</Badge>
                      <Badge color="blue">Updated Today</Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {/* Documents Table */}
                  <div className="col-span-2 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="px-3 py-2 bg-slate-50 border-b border-slate-100">
                      <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Document Health</span>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        { doc: 'GST Certificate', status: 'Verified', color: 'emerald', icon: Check },
                        { doc: 'PAN Details', status: 'Verified', color: 'emerald', icon: Check },
                        { doc: 'UDYAM Registration', status: 'Verified', color: 'emerald', icon: Check },
                        { doc: 'ISO 9001:2015', status: 'Expiring Soon', color: 'amber', icon: Clock },
                        { doc: 'OEM Authorization', status: 'Pending', color: 'slate', icon: HelpCircle }
                      ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center p-2.5 px-3">
                          <div className="flex items-center gap-2">
                            <FileText className="w-3.5 h-3.5 text-slate-600" />
                            <span className="text-xs font-semibold text-slate-700">{row.doc}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            {row.color === 'emerald' && <CheckCircle2 className="w-3.5 h-3.5 text-primary" />}
                            {row.color === 'amber' && <AlertTriangle className="w-3.5 h-3.5 text-blue-600" />}
                            {row.color === 'slate' && <Clock className="w-3.5 h-3.5 text-slate-600" />}
                            <span className={`text-[10px] font-bold uppercase ${row.color === 'emerald' ? 'text-emerald-600' : row.color === 'amber' ? 'text-amber-600' : 'text-slate-500'}`}>
                              {row.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Alerts Sidebar */}
                  <div className="col-span-1 flex flex-col gap-3">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                      <Bell className="w-4 h-4 text-amber-600 mb-1.5" />
                      <div className="text-[11px] font-bold text-amber-900 leading-tight">ISO Certification Renewal Due in 14 Days</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                      <FileWarning className="w-4 h-4 text-blue-600 mb-1.5" />
                      <div className="text-[11px] font-bold text-blue-900 leading-tight">Vendor Assessment Report Pending (QCI)</div>
                    </div>
                  </div>
                </div>
              </MockupContainer>
            </motion.div>
          </div>

          {/* Feature 4: Procurement Analytics (Right Text, Left Mockup) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2">
              <MockupContainer>
                {/* Header */}
                <div className="mb-4 flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-purple-600" /> Executive Analytics
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">Q2 Performance Dashboard</p>
                  </div>
                  <Badge color="slate">Last 90 Days</Badge>
                </div>

                {/* Top KPIs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {[
                    { label: 'Total Value Won', val: '₹284 Cr', trend: '+12%', up: true },
                    { label: 'Participation', val: '124', trend: '+5%', up: true },
                    { label: 'Contracts Won', val: '38', trend: '-2%', up: false },
                    { label: 'Win Rate', val: '30.6%', trend: '+4.2%', up: true },
                  ].map((kpi, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm flex flex-col">
                      <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">{kpi.label}</div>
                      <div className="text-lg font-black text-slate-900">{kpi.val}</div>
                      <div className={`text-[10px] font-bold mt-auto pt-1 ${kpi.up ? 'text-emerald-600' : 'text-rose-500'} flex items-center gap-0.5`}>
                        {kpi.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3 rotate-90" />} {kpi.trend}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-4">
                  {/* Charts Area */}
                  <div className="col-span-3 bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Monthly Tender Trend</div>
                    <div className="flex-grow flex items-end justify-between gap-2 h-24 pb-2 border-b border-slate-100">
                      {[30, 45, 25, 60, 50, 80, 65, 95, 85].map((h, i) => (
                        <div key={i} className="w-full bg-purple-100 hover:bg-purple-600 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-900 text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {h}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-600 font-bold uppercase mt-2">
                      <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
                    </div>
                  </div>

                  {/* Top Departments Table */}
                  <div className="col-span-2 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
                    <div className="px-3 py-2 bg-slate-50 border-b border-slate-100">
                      <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Top Departments</span>
                    </div>
                    <div className="divide-y divide-slate-100 flex-grow">
                      {[
                        { dept: 'Railways', val: '₹142Cr' },
                        { dept: 'Defence', val: '₹84Cr' },
                        { dept: 'Education', val: '₹32Cr' },
                        { dept: 'Healthcare', val: '₹18Cr' },
                        { dept: 'Public Works', val: '₹8Cr' }
                      ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center p-2 px-3 text-[11px]">
                          <span className="font-semibold text-slate-700">{row.dept}</span>
                          <span className="font-bold text-slate-900">{row.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MockupContainer>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Procurement Analytics</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Make data-driven decisions at the executive level. Track your win rates, analyze competitor behavior, and identify your most profitable government sectors.
              </p>
              <ul className="space-y-4">
                {['Executive Performance Dashboards', 'Win-Loss Ratio Analysis', 'Sector Opportunity Benchmarking'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
