import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ContactDetail } from '@/components/sections/contact-detail'

export const metadata: Metadata = {
  title: 'Contact | Expert GeM Intelligence Platform',
  description:
    'Get in touch with Expert GeM Consultancy. Contact us for procurement consulting, support, or to learn more about our platform.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        description="We're here to help you succeed in government procurement"
      />
      <ContactDetail />
    </>
  )
}
