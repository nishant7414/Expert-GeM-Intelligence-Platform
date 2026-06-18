# Development & Customization Guide

## Project Overview

Expert GeM Intelligence Platform is a modern, production-ready SaaS website built with:
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Architecture

### Component Structure

```
Components are organized into two categories:

1. UI Components (src/components/ui/)
   - Low-level, reusable components
   - Examples: Navbar, Footer, Accordion
   - No business logic

2. Section Components (src/components/sections/)
   - Page sections and page-level components
   - Examples: Hero, Trust, Solutions, FAQ
   - Can contain business logic
```

### Page Structure

Each page follows this pattern:
1. Page metadata (SEO)
2. Layout with max-width container
3. Multiple section components
4. Responsive grid layouts

## Customization Guide

### 1. Update Branding

#### Logo & Name
```typescript
// src/components/ui/navbar.tsx
<div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
  Expert GeM  // Change this
</div>
```

#### Colors
```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: "#0F172A",  // Update hex codes
  },
  secondary: {
    DEFAULT: "#10B981",
  },
  accent: {
    DEFAULT: "#F59E0B",
  },
}
```

#### Typography
```typescript
// tailwind.config.ts
fontFamily: {
  sans: ["var(--font-inter)", "system-ui", "sans-serif"],  // Change font
}
```

### 2. Update Content

#### Home Page
```typescript
// src/components/sections/hero.tsx
- Update headline and subheadline
- Modify features list
- Update CTA buttons
- Customize dashboard mockup cards
```

#### Services
```typescript
// src/components/sections/solutions.tsx
// src/components/sections/services-detail.tsx
- Update service titles
- Modify descriptions
- Update process steps
- Change benefits
```

#### Industries
```typescript
// src/components/sections/industries.tsx
- Add/remove industries
- Update challenges
- Modify solutions
```

#### Pricing
```typescript
// src/components/sections/pricing-detail.tsx
- Update plan names
- Change pricing amounts
- Modify features
- Update comparison table
```

#### Resources
```typescript
// src/components/sections/resources-detail.tsx
- Add blog categories
- Update article list
- Change featured articles
```

#### About
```typescript
// src/components/sections/about-detail.tsx
- Update company story
- Modify mission/vision
- Update team members
- Change values
```

#### Contact
```typescript
// src/components/sections/contact-detail.tsx
- Update phone numbers
- Change email addresses
- Modify office address
- Update contact form fields
```

### 3. Add New Pages

```typescript
// Step 1: Create new page file
// src/app/new-page/page.tsx

import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { SomeSection } from '@/components/sections/some-section'

export const metadata: Metadata = {
  title: 'New Page | Expert GeM',
  description: 'Page description',
}

export default function NewPage() {
  return (
    <>
      <PageHero title="Page Title" description="Page description" />
      <SomeSection />
    </>
  )
}

// Step 2: Update navigation
// src/components/ui/navbar.tsx
const navItems = [
  // ... existing items
  { label: 'New Page', href: '/new-page' },
]
```

### 4. Add New Components

#### Create UI Component
```typescript
// src/components/ui/my-component.tsx
'use client'

import { motion } from 'framer-motion'

export function MyComponent() {
  return (
    <div className="flex items-center gap-4">
      {/* Your component */}
    </div>
  )
}
```

#### Create Section Component
```typescript
// src/components/sections/my-section.tsx
'use client'

import { motion } from 'framer-motion'

export function MySection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Your section */}
      </div>
    </section>
  )
}
```

### 5. Add Animations

#### Scroll Reveal
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

#### Hover Effects
```typescript
<motion.div
  whileHover={{ y: -5, shadow: 'lg' }}
  className="transition-all"
>
  Content
</motion.div>
```

#### Click Interactions
```typescript
<motion.button
  whileTap={{ scale: 0.95 }}
  onClick={() => handleClick()}
>
  Click Me
</motion.button>
```

### 6. Form Integration

#### Connect to Backend
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      // Handle success
      console.log('Form submitted successfully')
    }
  } catch (error) {
    // Handle error
    console.error('Error:', error)
  }
}
```

#### Email Integration
You can use services like:
- Mailgun
- SendGrid
- EmailJS
- Resend

Example with EmailJS:
```typescript
import emailjs from '@emailjs/browser'

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_KEY!)

const handleSubmit = async (formData: any) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      formData
    )
  } catch (error) {
    console.error('Email send error:', error)
  }
}
```

### 7. Database Integration

For storing form submissions, you can use:

#### MongoDB Example
```typescript
// pages/api/contact.ts
import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
  const client = new MongoClient(process.env.MONGODB_URI)
  
  try {
    const db = client.db('expert-gem')
    const result = await db.collection('contacts').insertOne(req.body)
    res.status(201).json(result)
  } finally {
    await client.close()
  }
}
```

#### PostgreSQL Example
```typescript
// pages/api/contact.ts
import { pool } from '@/lib/db'

export default async function handler(req, res) {
  try {
    const result = await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
      [req.body.name, req.body.email, req.body.message]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
```

## Performance Optimization Tips

### Image Optimization
```typescript
import Image from 'next/image'

<Image
  src="/image.png"
  alt="Description"
  width={400}
  height={300}
  priority // Load immediately
/>
```

### Code Splitting
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <p>Loading...</p>,
})
```

### SEO Optimization
```typescript
// Update metadata for each page
export const metadata: Metadata = {
  title: 'Page Title | Site Name',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: [{ url: 'https://...' }],
  },
}
```

## Common Customizations

### Change Logo
1. Replace image in `public/` folder
2. Update import in navbar component
3. Adjust sizing as needed

### Update Footer Links
1. Edit `src/components/ui/footer.tsx`
2. Update links array
3. Customize link structure

### Modify CTA Buttons
1. Find button in component
2. Update text, href, and styling
3. Test responsiveness

### Add Social Media Links
1. Update footer component
2. Add icon and link
3. Update social array

### Change Testimonials
1. Edit `src/components/sections/testimonials.tsx`
2. Update testimonial objects
3. Add/remove testimonials

### Update Success Metrics
1. Edit `src/components/sections/success-metrics.tsx`
2. Change numbers and labels
3. Update icons if needed

## Deployment Customizations

### Domain Configuration
```typescript
// tailwind.config.ts
// next.config.js
// .env.production

Update all domain references
Configure SSL certificates
Set up DNS records
```

### Analytics
```typescript
// Add Google Analytics ID
NEXT_PUBLIC_GA_ID=GA-XXXXXXX

// Install in layout
import Script from 'next/script'

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### Error Tracking
```typescript
// Add Sentry or similar
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

## Testing

### Unit Tests
```bash
npm install --save-dev jest @testing-library/react
npm test
```

### E2E Tests
```bash
npm install --save-dev playwright
npx playwright install
npx playwright test
```

## Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Type Errors
```bash
# Check types
npm run type-check

# Fix TypeScript
npx tsc --noEmit
```

### Component Not Rendering
```typescript
// Check:
// 1. Component imported correctly
// 2. 'use client' directive if using hooks
// 3. Props passed correctly
// 4. Styling applied
```

## Best Practices

1. **Keep Components Small**: Each component should do one thing
2. **Use TypeScript**: Take full advantage of type safety
3. **Optimize Images**: Always optimize before deploying
4. **Test Responsiveness**: Test on multiple devices
5. **Accessibility**: Include ARIA labels and semantic HTML
6. **Performance**: Monitor bundle size and lighthouse score
7. **Security**: Never hardcode secrets in code
8. **Version Control**: Commit frequently with clear messages
9. **Documentation**: Comment complex logic
10. **DRY Principle**: Don't repeat yourself

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/guide/)
- [React Hooks](https://react.dev/reference/react/hooks)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Last Updated**: June 2024
**Version**: 1.0.0
