# Portfolio Webpage with responsive layout
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A responsive portfolio website built with Next.js and Tailwind CSS.

#### Live Demo: https://personal-portfolio-mu-topaz.vercel.app/

## Features

- **Responsive design** — Works on mobile, tablet, and desktop
- **Sections** — About, Skills, Experience, Education, Certifications
- **Contact form** — For job and freelance inquiries (powered by Formspree)

## Requirements

- Node.js 18 or newer (required for Next.js 16)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure the contact form

The contact form uses [Formspree](https://formspree.io) (free tier):

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form endpoint (e.g. `https://formspree.io/f/xyzabcde`)
3. Update `lib/config.ts` and replace `YOUR_FORM_ID` with your form ID:

```ts
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-actual-form-id";
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment on Vercel

1. Push your code to [GitHub](https://github.com)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** and import your repository
4. Click **Deploy** — you'll get a free URL like `your-portfolio.vercel.app`
5. Optional: Add a custom domain in Project Settings → Domains

## Build

```bash
npm run build
npm start
```
