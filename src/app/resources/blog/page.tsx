import { Metadata } from 'next'

import { Search, ArrowRight, Clock, User, TrendingUp, BookOpen, Star, Newspaper } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Expert GeM Intelligence Platform',
  description: 'Procurement intelligence, insights, and GeM strategies from our experts.',
}

const CATEGORIES = ["All", "Procurement Intelligence", "GeM", "Tender Strategy", "Compliance", "Vendor Assessment", "AI Procurement"]

const LATEST_ARTICLES = [
  { id: 1, title: 'How AI is Reshaping Government Procurement in 2026', category: 'AI Procurement', readTime: '5 min', author: 'Dr. Rakesh Sharma', date: 'Oct 15, 2026', featured: true },
  { id: 2, title: 'Mastering the Vendor Assessment Process on GeM', category: 'Vendor Assessment', readTime: '8 min', author: 'Anita Desai', date: 'Oct 12, 2026', featured: false },
  { id: 3, title: 'Top 5 Compliance Pitfalls for GeM Sellers', category: 'Compliance', readTime: '4 min', author: 'Vikram Singh', date: 'Oct 10, 2026', featured: false },
  { id: 4, title: 'Winning High-Value Tenders: A Data-Driven Approach', category: 'Tender Strategy', readTime: '10 min', author: 'Dr. Rakesh Sharma', date: 'Oct 08, 2026', featured: false },
  { id: 5, title: 'Understanding OEM Authorizations and Reseller Rights', category: 'GeM', readTime: '6 min', author: 'Priya Patel', date: 'Oct 05, 2026', featured: false },
  { id: 6, title: 'How to Analyze L1 Pricing Before Bidding', category: 'Procurement Intelligence', readTime: '7 min', author: 'Arjun Reddy', date: 'Oct 02, 2026', featured: false },
  { id: 7, title: 'The Future of Forward Auctions on GeM', category: 'GeM', readTime: '5 min', author: 'Anita Desai', date: 'Sep 28, 2026', featured: false },
  { id: 8, title: 'Using Predictive Analytics for Tender Success', category: 'AI Procurement', readTime: '9 min', author: 'Dr. Rakesh Sharma', date: 'Sep 25, 2026', featured: false },
  { id: 9, title: 'Common Reasons for Technical Bid Rejection', category: 'Tender Strategy', readTime: '6 min', author: 'Vikram Singh', date: 'Sep 20, 2026', featured: false },
  { id: 10, title: 'Navigating Incident Management on GeM', category: 'Compliance', readTime: '5 min', author: 'Priya Patel', date: 'Sep 18, 2026', featured: false },
  { id: 11, title: 'A Complete Guide to Defense Procurement on GeM', category: 'Procurement Intelligence', readTime: '12 min', author: 'Major Ananya Rao', date: 'Sep 15, 2026', featured: false },
  { id: 12, title: 'How to Improve Your GeM Vendor Rating', category: 'Vendor Assessment', readTime: '4 min', author: 'Arjun Reddy', date: 'Sep 10, 2026', featured: false },
]

const NEWS_FEED = [
  { id: 1, title: "GeM introduces new AI-based reverse auction mechanisms.", date: "2 hours ago" },
  { id: 2, title: "Ministry of Defense expands startup procurement quota by 15%.", date: "5 hours ago" },
  { id: 3, title: "New mandatory compliance checks for MSME certificates.", date: "1 day ago" },
  { id: 4, title: "QCI updates Vendor Assessment parameters for electronics sector.", date: "2 days ago" },
  { id: 5, title: "GeM GMV crosses ₹5 Lakh Crore milestone.", date: "3 days ago" },
]

export default function BlogPage() {
  const featuredArticle = LATEST_ARTICLES.find(a => a.featured) || LATEST_ARTICLES[0]
  const regularArticles = LATEST_ARTICLES.filter(a => !a.featured)

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Search & Navigation Bar */}
      <div className="bg-slate-50/80 backdrop-blur-md border-b border-slate-100 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {CATEGORIES.map(cat => (
                <button key={cat} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === 'All' ? 'bg-primary text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input type="text" placeholder="Search insights..." className="w-full bg-background border border-slate-200 rounded-full pl-10 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Featured Article */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-blue-600 fill-blue-500" />
                <h2 className="text-xl font-bold text-slate-900">Featured Insight</h2>
              </div>
              <div className="group cursor-pointer">
                <div className="w-full aspect-[21/9] bg-background rounded-3xl mb-6 overflow-hidden relative border border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent mix-blend-screen transition-opacity group-hover:opacity-75"></div>
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-slate-200">
                    {featuredArticle.category}
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {featuredArticle.title}
                </h1>
                <p className="text-slate-600 text-lg mb-6 line-clamp-2">
                  Discover how predictive algorithms and machine learning are revolutionizing the way vendors approach complex government tenders, providing an unfair advantage in pricing and compliance.
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><User className="w-4 h-4"/></div>
                    <span className="font-medium text-slate-700">{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5"><Clock className="w-4 h-4"/> {featuredArticle.readTime}</div>
                  <div>{featuredArticle.date}</div>
                </div>
              </div>
            </section>

            {/* Latest Articles Grid */}
            <section>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" /> Latest Articles
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {regularArticles.map(article => (
                  <div key={article.id} className="group cursor-pointer flex flex-col h-full bg-background/50 border border-slate-100 p-4 rounded-3xl hover:bg-background transition-colors">
                    <div className="w-full aspect-video bg-slate-50 rounded-2xl mb-4 overflow-hidden relative border border-slate-100">
                      <div className="absolute inset-0 bg-blue-50 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{article.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1.5"><Clock className="w-4 h-4"/> {article.readTime}</div>
                      <div>{article.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-background border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm inline-flex items-center gap-2">
                  Load More Articles <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Newsletter */}
            <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden shadow-lg shadow-blue-500/10">
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-xl font-bold mb-3 relative z-10">Procurement Intelligence Weekly</h3>
               <p className="text-white/80 font-medium mb-6 text-sm relative z-10">Join 15,000+ professionals receiving top GeM insights directly in their inbox.</p>
               <div className="space-y-3 relative z-10">
                 <input type="email" placeholder="Your work email" className="w-full bg-slate-50/10 border border-slate-200 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:bg-slate-50/20 transition-colors" />
                 <button className="w-full bg-slate-50 text-primary font-bold py-3 rounded-xl hover:bg-slate-50/90 transition-colors shadow-lg">Subscribe</button>
               </div>
            </div>

            {/* News Feed */}
            <div className="bg-background border border-slate-100 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-blue-500" /> Live News Feed
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {NEWS_FEED.map((news) => (
                  <div key={news.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-[#0B1220] bg-slate-100 group-hover:bg-primary group-hover:border-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
                      <p className="text-sm font-medium text-slate-900 mb-1">{news.title}</p>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{news.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-background border border-slate-100 rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" /> Trending Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.slice(1).map(cat => (
                  <span key={cat} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-100 hover:text-slate-900 cursor-pointer transition-colors">
                    #{cat.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
