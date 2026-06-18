import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ResourcesDetail } from '@/components/sections/resources-detail'

export const metadata: Metadata = {
  title: 'Resources | Expert GeM Intelligence Platform',
  description:
    'Blog articles, guides, and insights on GeM, tender strategy, government procurement, vendor assessment, and compliance.',
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources & Insights"
        description="Expert articles and guides on government procurement"
      />
      <ResourcesDetail />
    </>
  )
}
