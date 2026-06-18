# Deployment Checklist

## Pre-Deployment Verification

### ✓ Code Quality
- [ ] Run `npm run lint` - No errors
- [ ] Run `npm run type-check` - No TypeScript errors
- [ ] All pages tested locally
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

### ✓ Performance
- [ ] Lighthouse audit score > 90
- [ ] Core Web Vitals passing
- [ ] Images optimized
- [ ] Bundle size acceptable
- [ ] No console errors or warnings

### ✓ SEO
- [ ] All meta tags in place
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configured
- [ ] Open Graph tags verified
- [ ] Schema markup implemented
- [ ] Mobile-friendly design

### ✓ Accessibility
- [ ] WCAG 2.1 Level AA compliance
- [ ] Keyboard navigation working
- [ ] Color contrast adequate
- [ ] Alt text on images
- [ ] Form labels accessible

### ✓ Security
- [ ] No hardcoded secrets
- [ ] Environment variables configured
- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] Dependencies up to date
- [ ] No known vulnerabilities

### ✓ Content
- [ ] All copy reviewed and edited
- [ ] Contact information updated
- [ ] Pricing information current
- [ ] Images branded and professional
- [ ] No placeholder text remaining

### ✓ Forms & Integrations
- [ ] Contact form working
- [ ] Consultation form working
- [ ] Form validation functioning
- [ ] Error messages clear
- [ ] Backend integration ready (if applicable)

### ✓ Analytics & Monitoring
- [ ] Google Analytics configured
- [ ] Error tracking setup (if using)
- [ ] Performance monitoring enabled
- [ ] Conversion tracking configured

## Environment Setup

### Production Environment Variables
```
NEXT_PUBLIC_SITE_URL=https://expertgem.com
NEXT_PUBLIC_API_URL=https://api.expertgem.com
```

### Domain Configuration
- [ ] Domain registered
- [ ] DNS configured
- [ ] SSL certificate installed
- [ ] CDN configured (optional)
- [ ] Domain email setup

## Deployment Steps

### Step 1: Final Build
```bash
npm run build
npm run lint
npm run type-check
```

### Step 2: Choose Platform
- [ ] Vercel (Recommended)
- [ ] Netlify
- [ ] Docker
- [ ] Traditional hosting

### Step 3: Deploy
```bash
# Vercel example
vercel --prod

# Or your hosting platform's command
```

### Step 4: Post-Deployment Verification
- [ ] Visit production URL
- [ ] All pages loading
- [ ] Images displaying
- [ ] Forms submitting
- [ ] Analytics tracking
- [ ] Sitemap accessible

### Step 5: Monitor
- [ ] Check error logs
- [ ] Monitor performance
- [ ] Review analytics
- [ ] Check for broken links
- [ ] Test all forms

## Go-Live Checklist

### 1 Week Before Launch
- [ ] Final content review
- [ ] Performance audit
- [ ] Security audit
- [ ] Link checker
- [ ] Spell check all content

### Day Before Launch
- [ ] Backup current site (if replacing)
- [ ] Brief team
- [ ] Verify deployment process
- [ ] Test all critical paths

### Launch Day
- [ ] Deploy to production
- [ ] Verify all pages working
- [ ] Test forms and submissions
- [ ] Monitor error logs
- [ ] Check analytics
- [ ] Share launch announcement

### 1 Week After Launch
- [ ] Monitor performance
- [ ] Check user feedback
- [ ] Review analytics
- [ ] Monitor search rankings
- [ ] Handle any issues

## Post-Launch Maintenance

### Weekly
- [ ] Check error logs
- [ ] Review analytics
- [ ] Test critical paths
- [ ] Check form submissions

### Monthly
- [ ] Update dependencies
- [ ] Security audit
- [ ] Performance review
- [ ] Content updates
- [ ] Link health check

### Quarterly
- [ ] Major feature updates
- [ ] Security audit
- [ ] SEO optimization
- [ ] Design refresh planning

## Rollback Plan

If issues occur after deployment:

```bash
# Revert to previous deployment
vercel rollback

# Or redeploy from git
vercel --prod
```

## Support Contacts

- **Technical Issues**: [Your support email]
- **Emergency**: [Your emergency contact]
- **Hosting Support**: [Hosting provider contact]

---

**Before going live, ensure ALL items are checked.**

**Status**: [ ] Ready for Production
**Sign-off**: _______________
**Date**: _______________
