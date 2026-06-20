import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { Chatbot } from '@/components/ui/chatbot'
import { FloatingWhatsApp } from '@/components/ui/whatsapp-button'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://expertgem.com'),
  title: {
    default: 'Expert GeM Intelligence Platform | Win More Government Contracts',
    template: '%s | Expert GeM Intelligence Platform',
  },
  description:
    'Expert GeM Intelligence Platform helps businesses discover opportunities, analyze tenders, manage compliance, and succeed in government procurement with expert guidance and intelligent technology.',
  keywords: [
    'GeM Consultant',
    'GeM Registration',
    'Tender Consultant',
    'Government Procurement',
    'Vendor Assessment',
    'OEM Authorization',
    'Tender Participation',
    'Procurement Consulting',
  ],
  authors: [{ name: 'Expert GeM Consultancy' }],
  creator: 'Expert GeM Consultancy',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://expertgem.com',
    siteName: 'Expert GeM Intelligence Platform',
    title: 'Win More Government Contracts with Confidence',
    description:
      'Modern Government Procurement Intelligence Platform combining expert consulting, AI-powered insights, and procurement intelligence.',
    images: [
      {
        url: 'https://expertgem.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Expert GeM Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert GeM Intelligence Platform',
    description: 'Win More Government Contracts with Confidence',
    creator: '@ExpertGeM',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://expertgem.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://expertgem.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`} suppressHydrationWarning>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Chatbot />
        <FloatingWhatsApp />
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
      </body>
    </html>
  )
}
