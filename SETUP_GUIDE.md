# Setup & Deployment Guide

Expert GeM Intelligence Platform - Complete Setup Instructions

## Quick Start

### 1. Environment Setup

```bash
# Install Node.js 18+
# Verify installation
node --version
npm --version

# Navigate to project directory
cd "c:\Users\NISHANT KUMAR\Desktop\Dev Projects\Expert GeM Intelligence Platform"

# Install dependencies
npm install

# Create environment files
cp .env.example .env.local
```

### 2. Local Development

```bash
# Start development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

## Project Structure Overview

```
expert-gem-intelligence-platform/
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── layout.tsx               # Root layout with metadata
│   │   ├── page.tsx                 # Home page
│   │   ├── globals.css              # Global styles
│   │   ├── sitemap.ts               # Dynamic sitemap
│   │   ├── robots.ts                # Robots.txt configuration
│   │   ├── platform/page.tsx        # Platform page
│   │   ├── services/page.tsx        # Services page
│   │   ├── industries/page.tsx      # Industries page
│   │   ├── pricing/page.tsx         # Pricing page
│   │   ├── resources/page.tsx       # Resources page
│   │   ├── about/page.tsx           # About page
│   │   ├── contact/page.tsx         # Contact page
│   │   └── book-consultation/page.tsx
│   ├── components/
│   │   ├── ui/                      # Base UI components
│   │   │   ├── navbar.tsx           # Navigation bar
│   │   │   ├── footer.tsx           # Footer
│   │   │   └── accordion.tsx        # Accordion component
│   │   └── sections/                # Page sections
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
│   │       ├── final-cta.tsx
│   │       ├── page-hero.tsx
│   │       ├── platform-details.tsx
│   │       ├── services-detail.tsx
│   │       ├── industries-detail.tsx
│   │       ├── pricing-detail.tsx
│   │       ├── resources-detail.tsx
│   │       ├── about-detail.tsx
│   │       ├── contact-detail.tsx
│   │       └── consultation-form.tsx
│   ├── lib/
│   │   └── utils.ts                 # Utility functions
│   └── config/
│       └── site.ts                  # Site configuration
├── public/
│   ├── robots.txt                   # SEO robots file
│   └── manifest.json                # PWA manifest
├── Configuration Files
│   ├── package.json                 # Dependencies
│   ├── tsconfig.json                # TypeScript config
│   ├── next.config.js               # Next.js config
│   ├── tailwind.config.ts           # Tailwind config
│   ├── postcss.config.js            # PostCSS config
│   ├── .eslintrc.json               # ESLint config
│   ├── .prettierrc                  # Prettier config
│   └── .gitignore                   # Git ignore rules
└── Documentation
    └── README.md                    # Project documentation
```

## Available Commands

```bash
# Development
npm run dev              # Start development server (http://localhost:3000)

# Build & Production
npm run build            # Create production build
npm start               # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # Check TypeScript types

# Formatting
npx prettier --write .  # Format all files
```

## Pages & Routes

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page with hero, features, testimonials |
| Platform | `/platform` | Detailed platform capabilities |
| Services | `/services` | Service offerings |
| Industries | `/industries` | Industry-specific solutions |
| Pricing | `/pricing` | Pricing plans |
| Resources | `/resources` | Blog and articles |
| About | `/about` | Company information |
| Contact | `/contact` | Contact form |
| Book Consultation | `/book-consultation` | Lead generation form |

## Customization Guide

### Update Company Information

Edit `src/config/site.ts`:
```typescript
export const siteConfig = {
  name: 'Expert GeM Intelligence Platform',
  description: 'Win more government contracts with confidence',
  url: 'https://expertgem.com',
  // ... update as needed
}
```

### Update Contact Information

Edit `src/components/ui/footer.tsx` and `src/components/sections/contact-detail.tsx`:
- Replace phone numbers
- Update email addresses
- Add office address
- Update social media links

### Update Pricing

Edit `src/components/sections/pricing-detail.tsx`:
- Update pricing amounts
- Modify feature lists
- Change plan names

### Update Content

Each section component is modular and can be updated independently:
- Edit component files in `src/components/sections/`
- Update text, features, and images
- Component structure remains consistent

## SEO Configuration

### Sitemap
- Automatically generated at `/sitemap.xml`
- Includes all public routes
- Updated on each deployment

### Meta Tags
- All pages have descriptive meta tags
- Open Graph tags for social sharing
- Twitter cards configured
- Structured data (Schema.org) implemented

### Keywords Target
- GeM Consultant
- GeM Registration
- Tender Consultant
- Government Procurement
- Vendor Assessment
- OEM Authorization
- Tender Participation
- Procurement Consulting

## Performance Optimization

The website includes:
- Image optimization
- Code splitting
- CSS minification
- Font optimization
- Lazy loading
- Server-side rendering

## Deployment Options

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.next
```

### Option 3: Docker

```bash
# Create Dockerfile
cat > Dockerfile << EOF
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
EOF

# Build image
docker build -t expert-gem .

# Run container
docker run -p 3000:3000 expert-gem
```

### Option 4: Traditional Hosting (AWS, GCP, Azure)

```bash
# Build for production
npm run build

# Upload to hosting
# Update environment variables
# Configure domain and SSL

# Start server
npm start
```

## Environment Variables

### Development (.env.local)
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Production (.env.production)
```
NEXT_PUBLIC_SITE_URL=https://expertgem.com
NEXT_PUBLIC_API_URL=https://api.expertgem.com
```

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` or API keys
2. **HTTPS**: Always use HTTPS in production
3. **Rate Limiting**: Implement rate limiting for forms
4. **CORS**: Configure CORS properly
5. **Content Security Policy**: Enable CSP headers
6. **Dependencies**: Regularly update npm packages

## Performance Monitoring

- Set up Google Analytics
- Monitor Core Web Vitals
- Track conversion rates
- Monitor page load times
- Set up error tracking (Sentry)

## Maintenance

### Regular Tasks

```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### Database Setup (If needed)

For contact forms and data collection:
1. Set up database (PostgreSQL, MongoDB)
2. Create tables/collections
3. Add API endpoints
4. Configure environment variables

### Analytics

Add Google Analytics:
```typescript
// In app/layout.tsx or via package
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti :3000 | xargs kill -9
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Performance Issues
- Check bundle size: `npm run build`
- Analyze: `npm install -g webpack-bundle-analyzer`
- Profile: Chrome DevTools

## Support & Resources

- **Documentation**: README.md
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Shadcn UI**: https://ui.shadcn.com
- **Framer Motion**: https://www.framer.com/motion

## Next Steps

1. **Install dependencies**: `npm install`
2. **Run development server**: `npm run dev`
3. **Customize content**: Update copy and images
4. **Test locally**: Visit http://localhost:3000
5. **Deploy**: Choose deployment platform
6. **Monitor**: Set up analytics and monitoring

## Additional Features to Consider

- Contact form backend integration
- Newsletter signup
- Live chat support
- Blog CMS integration
- User authentication
- Payment processing
- Advanced analytics

---

**Last Updated**: June 2024
**Version**: 1.0.0
**Status**: Production Ready
