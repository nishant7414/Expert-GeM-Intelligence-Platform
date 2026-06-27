# Expert GeM Intelligence Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg?style=for-the-badge)](#license)

A modern, enterprise-grade SaaS platform designed to provide actionable intelligence, analytics, and consulting services for the Government e-Marketplace (GeM) in India. Built with Next.js 15 App Router, Tailwind CSS, and Framer Motion.

## 🚀 Key Features

- **Bidding Intelligence:** Analytics dashboard for tracking active tenders and opportunities.
- **Tender Match Scoring:** Automated matching of procurement requirements with vendor capabilities.
- **Compliance Tracking:** Document management and compliance readiness assessment.
- **Interactive Dashboards:** Real-time data visualization with fluid animations.
- **Generative AI Integration:** Powered by Google's Generative AI for smart insights.

## 🏗️ Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email Service:** [Resend](https://resend.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) 18.17 or later
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)
- A `.env.local` file configured with required API keys.

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/expert-gem-intelligence.git
   cd expert-gem-intelligence
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install / pnpm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file and populate it with your credentials:
   ```bash
   cp .env.example .env.local
   ```
   *Required variables typically include API keys for Google Generative AI and Resend.*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

## 📁 Project Structure

```text
expert-gem-intelligence-platform/
├── public/                 # Static assets (images, fonts, etc.)
├── src/
│   ├── app/                # Next.js App Router (pages, layouts, api routes)
│   ├── components/         # Reusable React components
│   │   ├── ui/             # Generic, reusable UI elements (Buttons, Inputs)
│   │   └── sections/       # Distinct page sections (Hero, Features, Pricing)
│   ├── lib/                # Utility functions and shared helpers
│   └── config/             # Application configuration files
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🧪 Code Quality & Scripts

This project maintains strict linting and type checking rules to ensure enterprise-grade code quality.

- **`npm run dev`**: Starts the development server with Hot Module Replacement.
- **`npm run build`**: Creates an optimized production build.
- **`npm run start`**: Starts the Node.js server using the production build.
- **`npm run lint`**: Runs ESLint to catch syntax and style issues.
- **`npm run type-check`**: Validates TypeScript typings across the project without emitting compiled files.

## 🤝 Contributing

We welcome internal contributions to improve the Expert GeM platform. Please follow these steps:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
3. Ensure type checks and linting pass (`npm run type-check && npm run lint`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

**Proprietary** – All rights reserved. 
This project and its source code are the proprietary intellectual property of the organization. Unauthorized copying, modification, or distribution is strictly prohibited.
