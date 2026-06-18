'use client'

import { useEffect } from 'react'

export default function SchemaMarkup() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Expert GeM Intelligence Platform',
      description: 'Modern Government Procurement Intelligence Platform',
      url: 'https://expertgem.com',
      applicationCategory: 'BusinessApplication',
      offers: {
        '@type': 'Offer',
        price: '5999',
        priceCurrency: 'INR',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1000',
      },
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(schema)
    document.head.appendChild(script)
  }, [])

  return null
}
