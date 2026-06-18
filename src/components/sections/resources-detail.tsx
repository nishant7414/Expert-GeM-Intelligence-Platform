'use client'

import { motion } from 'framer-motion'
import { Calendar, TrendingUp, BookMarked, Lightbulb } from 'lucide-react'

export function ResourcesDetail() {
  const categories = [
    { title: 'GeM Tips & Tricks', icon: Lightbulb, count: 24 },
    { title: 'Tender Strategy', icon: TrendingUp, count: 18 },
    { title: 'Government Procurement', icon: BookMarked, count: 32 },
    { title: 'Compliance & Documentation', icon: Calendar, count: 15 },
  ]

  const articles = [
    {
      category: 'GeM Tips & Tricks',
      title: '10 Ways to Optimize Your GeM Seller Profile for Better Visibility',
      date: 'June 15, 2024',
      readTime: '8 min read',
      excerpt: 'Learn the proven strategies to improve your GeM profile ranking and get more tender opportunities.',
    },
    {
      category: 'Tender Strategy',
      title: 'Winning Bid Strategy: How to Price Your Government Tenders',
      date: 'June 12, 2024',
      readTime: '12 min read',
      excerpt: 'Master the art of pricing government tenders competitively while maintaining healthy margins.',
    },
    {
      category: 'Government Procurement',
      title: 'Complete Guide to OEM Authorization in Government Procurement',
      date: 'June 10, 2024',
      readTime: '15 min read',
      excerpt: 'Understand the OEM authorization process and get approved for restricted categories.',
    },
    {
      category: 'Compliance & Documentation',
      title: 'Essential Documents Checklist for Government Vendor Registration',
      date: 'June 8, 2024',
      readTime: '10 min read',
      excerpt: 'Complete checklist of all documents needed for smooth government vendor registration.',
    },
    {
      category: 'Tender Strategy',
      title: 'How to Identify Your Most Profitable Government Contract Opportunities',
      date: 'June 5, 2024',
      readTime: '9 min read',
      excerpt: 'Data-driven approach to selecting and prioritizing the best tender opportunities.',
    },
    {
      category: 'GeM Tips & Tricks',
      title: 'GeM Vendor Assessment: Everything You Need to Know',
      date: 'June 1, 2024',
      readTime: '11 min read',
      excerpt: 'Comprehensive guide to understanding and improving your vendor assessment score.',
    },
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-card border border-border/50 rounded-lg hover:border-secondary/50 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">{category.title}</h3>
                <p className="text-2xl font-bold text-secondary">{category.count}</p>
                <p className="text-sm text-foreground/60">Articles</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Featured Articles */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="p-6 bg-card border border-border/50 rounded-lg hover:border-secondary/50 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-foreground/60">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="text-foreground/70 mb-3">{article.excerpt}</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-foreground/60">{article.readTime}</span>
                  <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
