# Mwandege Boys Secondary School - Website Redesign

A modern, responsive website for **Mwandege Boys Secondary School** built with Next.js, TypeScript, and Tailwind CSS.

## Project Overview

This is a complete redesign of the school's website featuring:

- **Responsive Design** - Mobile-first approach that works seamlessly on all devices
- **Admission System** - Online application forms with validation and Netlify Forms integration
- **Gallery** - Image gallery showcase of school facilities and events
- **Contact & Inquiry Forms** - Netlify Forms for automated email notifications
- **SEO Optimized** - Metadata configuration for better search engine visibility
- **Modern UI/UX** - Clean, professional design with smooth animations

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Features

### Forms Integration
- **Contact Form** - Direct messaging from visitors
- **Application Form** - Student admission applications with guardian information
- Both forms are integrated with Netlify Forms for email notifications

### Pages
- **Home** - Hero carousel with school highlights
- **About** - School information and mission
- **Admission** - Admission requirements, process, and FAQs with interactive details
- **Academic** - Academic programs and curriculum
- **Achievements** - Student and staff accomplishments
- **Gallery** - Photo gallery of school events
- **Contact** - Contact information and messaging form

## Tech Stack

- **Framework**: Next.js 15+
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Icons**: Lucide React
- **Forms**: Netlify Forms
- **Image Optimization**: Next.js Image component
- **SEO**: Next.js Metadata API

## Project Structure

```
/app
  /components       - Reusable React components
    /forms         - Contact and Application forms
  /admission        - Admission page
  /about            - About page
  /academic         - Academic programs page
  /achievements     - Achievements page
  /gallery          - Gallery page
  /contact          - Contact page
  /data             - Static data files
  /lib              - Utility functions
  /public           - Static assets
```

## Deployment

This project is designed for deployment on **Netlify** with full forms integration support.

### Prerequisites for Netlify
- Ensure `__forms.html` exists in the public folder for form detection
- Configure form notifications in Netlify dashboard

For general deployment information, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript

## License

This project is created for Mwandege Boys Secondary School.
