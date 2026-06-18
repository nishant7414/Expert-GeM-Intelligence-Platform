# Quick Reference Guide

## 🚀 Getting Started (Copy & Paste)

### Installation
```bash
cd "c:\Users\NISHANT KUMAR\Desktop\Dev Projects\Expert GeM Intelligence Platform"
npm install
npm run dev
```

Visit: **http://localhost:3000**

---

## 📝 Common Commands

### Development
```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Check for lint errors
npm run type-check  # Check TypeScript errors
```

---

## 🎨 Quick Customizations

### Change Primary Color
```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: "#YOUR_COLOR",  // Change here
  },
}
```

### Update Company Name
```typescript
// src/components/ui/navbar.tsx
Expert GeM  // Change to your name
```

### Update Contact Email
```typescript
// src/components/ui/footer.tsx
hello@expertgem.com  // Change this
```

### Update Phone Number
```typescript
// src/components/ui/footer.tsx
+91 XXXX-XXXX-XX  // Change this
```

---

## 📄 Key Files to Edit

| What to Change | File Location |
|---|---|
| Company name | `src/config/site.ts` |
| Colors | `tailwind.config.ts` |
| Navigation | `src/components/ui/navbar.tsx` |
| Footer | `src/components/ui/footer.tsx` |
| Home content | `src/components/sections/hero.tsx` |
| Services | `src/components/sections/services-detail.tsx` |
| Pricing | `src/components/sections/pricing-detail.tsx` |
| Contact info | `src/components/sections/contact-detail.tsx` |
| SEO tags | `src/app/layout.tsx` |

---

## 🌐 Deployment

### Vercel (Easiest)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Docker
```bash
docker build -t expert-gem .
docker run -p 3000:3000 expert-gem
```

---

## 🔍 SEO Checklist

- [ ] Update page titles
- [ ] Update meta descriptions
- [ ] Update keywords
- [ ] Update Open Graph tags
- [ ] Add your domain to sitemap
- [ ] Submit sitemap to Google

---

## 📱 Responsive Design Breakpoints

```
Mobile:   < 640px (sm)
Tablet:   640px - 1024px (md)
Desktop:  > 1024px (lg)
```

All components are mobile-first by default.

---

## 🎯 Component Usage

### Section with Animation
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Your content
</motion.div>
```

### Button
```typescript
<button className="px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/90">
  Click Me
</button>
```

### Card
```typescript
<div className="p-6 bg-card border border-border rounded-lg hover:border-secondary/50">
  Card content
</div>
```

---

## 🔗 Links to Update

- [ ] Site URL: `https://expertgem.com`
- [ ] API URL: `https://api.expertgem.com`
- [ ] Email: `hello@expertgem.com`
- [ ] Phone: `+91 XXXX-XXXX-XX`
- [ ] Office: `Your address`
- [ ] Social: LinkedIn, Twitter, etc.

---

## 🛠️ Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti :3000 | xargs kill -9
```

### Build Fails
```bash
rm -rf node_modules .next
npm install
npm run build
```

### TypeScript Errors
```bash
npm run type-check
# Fix errors shown
```

---

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| Pages | 9 |
| Components | 20+ |
| TypeScript | 100% |
| Responsive | Yes |
| Mobile | Yes |
| SEO Ready | Yes |
| Accessible | WCAG 2.1 AA |
| Performance | Optimized |

---

## 🎓 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Shadcn UI](https://ui.shadcn.com)

---

## 📚 Documentation

- `README.md` - Project overview
- `SETUP_GUIDE.md` - Detailed setup
- `DEVELOPMENT_GUIDE.md` - For developers
- `DEPLOYMENT_CHECKLIST.md` - Before launching
- `PROJECT_DELIVERY_SUMMARY.md` - What's included

---

## ✅ Pre-Launch Checklist

- [ ] Run `npm run build` (no errors)
- [ ] Run `npm run type-check` (no errors)
- [ ] Test all pages locally
- [ ] Test responsive design
- [ ] Test all forms
- [ ] Update all content
- [ ] Replace all placeholder text
- [ ] Check SEO tags
- [ ] Test on mobile
- [ ] Deploy!

---

## 🚀 Quick Deploy

### To Vercel
1. Push code to GitHub
2. Go to vercel.com
3. Import project
4. Set environment variables
5. Deploy!

### Time: ~5 minutes

---

## 💡 Tips

✅ Use Vercel for easiest hosting
✅ Keep dependencies updated
✅ Monitor analytics after launch
✅ Test on real devices
✅ Use version control
✅ Backup before major changes
✅ Set up error tracking
✅ Monitor performance

---

## 🎉 You're All Set!

Your premium SaaS website is ready to:
- ✅ Attract clients
- ✅ Generate leads
- ✅ Build authority
- ✅ Scale business
- ✅ Dominate market

**Deploy with confidence!** 🚀

---

**Last Updated**: June 2024
**Version**: Quick Reference v1.0
