'use client'

import { motion } from 'framer-motion'

export function IndustriesDetail() {
  const industries = [
    {
      name: 'Manufacturing',
      challenges: ['Supply chain complexity', 'Compliance requirements', 'Quality certifications', 'Tender participation'],
      solutions: ['Industry-specific tender matching', 'Compliance tracking', 'Quality certification support', 'Bid strategy guidance'],
    },
    {
      name: 'Information Technology',
      challenges: ['Skill certification gaps', 'CapEx requirements', 'Innovation showcasing', 'Competition intensity'],
      solutions: ['Certification roadmap', 'Capability demonstration', 'Bid differentiation', 'Market intelligence'],
    },
    {
      name: 'Construction',
      challenges: ['Project references', 'Financial capacity', 'Equipment requirements', 'Experience proof'],
      solutions: ['Reference documentation', 'Financial planning', 'Equipment partnership', 'Past project documentation'],
    },
    {
      name: 'Healthcare',
      challenges: ['Regulatory compliance', 'Quality standards', 'Specialized equipment', 'Staff certifications'],
      solutions: ['Compliance management', 'Quality documentation', 'Equipment sourcing', 'Staff certification tracking'],
    },
    {
      name: 'Education',
      challenges: ['Accreditation status', 'Curriculum standards', 'Infrastructure requirements', 'Staff qualifications'],
      solutions: ['Accreditation monitoring', 'Standard compliance', 'Infrastructure assessment', 'Faculty development support'],
    },
    {
      name: 'Logistics',
      challenges: ['Fleet requirements', 'Compliance standards', 'Technology adoption', 'Safety certifications'],
      solutions: ['Fleet assessment', 'Compliance documentation', 'Tech infrastructure', 'Safety certification support'],
    },
    {
      name: 'Infrastructure',
      challenges: ['Track record requirements', 'Financial capacity', 'Technical expertise', 'Project documentation'],
      solutions: ['Project portfolio development', 'Financial planning', 'Expertise documentation', 'Past performance tracking'],
    },
    {
      name: 'Consulting Services',
      challenges: ['Team composition', 'Domain expertise', 'Past projects', 'Methodologies'],
      solutions: ['Team capability building', 'Expertise certification', 'Case study development', 'Process documentation'],
    },
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-card border border-border/50 rounded-lg hover:border-secondary/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">{industry.name}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Common Challenges</h4>
                  <ul className="space-y-1">
                    {industry.challenges.map((challenge, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-accent mt-0.5">▪</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border/50 pt-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Our Solutions</h4>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-secondary mt-0.5">✓</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
