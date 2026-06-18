# Expert GeM Intelligence Platform

Modern Government Procurement Intelligence Platform built with Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Framer Motion.

## Overview

Expert GeM Intelligence Platform is a comprehensive SaaS solution that helps businesses discover, analyze, and win government contracts on GeM (Government e-Marketplace). The platform combines AI-powered procurement intelligence with expert consulting services.

## Features

- **Tender Discovery**: AI-powered recommendations matching your business profile
- **Tender Analysis**: Automated eligibility assessment and risk evaluation
- **Compliance Center**: Document tracking and vendor readiness management
- **Procurement Analytics**: Data-driven insights and performance tracking
- **Expert Consulting**: Dedicated support for GeM registration and tender participation
- **Multi-industry Support**: Tailored solutions for 8+ industries
- **Mobile Responsive**: Fully optimized for desktop, tablet, and mobile

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/expert-gem-intelligence-platform.git

# Navigate to project directory
cd expert-gem-intelligence-platform

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
expert-gem-intelligence-platform/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   ├── platform/
│   │   ├── services/
│   │   ├── industries/
│   │   ├── pricing/
│   │   ├── resources/
│   │   ├── about/
│   │   ├── contact/
│   │   └── book-consultation/
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── accordion.tsx
│   │   └── sections/            # Page sections
│   │       ├── hero.tsx
│   │       ├── trust.tsx
│   │       ├── problems.tsx
│   │       ├── solutions.tsx
│   │       ├── platform-showcase.tsx
│   │       ├── how-it-works.tsx
│   │       ├── industries.tsx
│   │       ├── success-metrics.tsx
│   │       ├── testimonials.tsx
│   │       ├── pricing-preview.tsx
│   │       ├── faq.tsx
│   │       └── [other sections]
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   └── config/
├── public/
│   ├── robots.txt
│   └── manifest.json
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
├── .eslintrc.json
├── .prettierrc
└── README.md
```

## Pages

- **Home** (`/`) - Main landing page with hero, features, testimonials, and CTA
- **Platform** (`/platform`) - Detailed platform features and capabilities
- **Services** (`/services`) - Comprehensive service offerings
- **Industries** (`/industries`) - Industry-specific solutions
- **Pricing** (`/pricing`) - Pricing plans and comparison
- **Resources** (`/resources`) - Blog articles and guides
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and information
- **Book Consultation** (`/book-consultation`) - Lead generation form

## Design System

### Colors

- **Primary**: `#0F172A` (Deep Navy)
- **Secondary**: `#10B981` (Emerald Green)
- **Accent**: `#F59E0B` (Amber)
- **Background**: `#F8FAFC` (Light Slate)

### Typography

- **Font Family**: Inter
- **Base Size**: 16px
- **Line Height**: 1.5

### Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Type check
npm run type-check
```

## Performance Optimizations

- Server-side rendering with Next.js
- Image optimization
- Code splitting
- CSS minification
- Font optimization
- Lazy loading

## SEO

The website includes:

- Meta tags for all pages
- Open Graph tags for social sharing
- Schema structured data
- XML sitemap
- Robots.txt
- Semantic HTML structure
- Mobile-friendly design

## Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Focus management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Docker

```bash
docker build -t expert-gem .
docker run -p 3000:3000 expert-gem
```

### Traditional Hosting

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions or support:

- Email: hello@expertgem.com
- Phone: +91 XXXX-XXXX-XX
- Website: https://expertgem.com

## Credits

Built with love by Expert GeM Consultancy Team

---

**Note**: This is a modern SaaS website designed to compete with leading B2B technology companies while serving the government procurement industry in India.
