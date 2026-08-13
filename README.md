Prajwol Gynawali — Personal Website

**Overview**

This repository contains the source code for the personal portfolio website of Prajwol Gynawali. The site showcases an about section, skills, projects, certificates, gallery, and contact form — all built with a modern Next.js + React stack and focused on student-oriented web tools and UX.

**Live Preview**

- **Personal site**: https://prajwol.gyawali (or run locally — see Development)

**Highlights**

- **Clean, responsive UI**: Sections include a Hero, About, Skills, Projects, Certificates, Gallery, and Contact.
- **Interactive 3D preview**: A Three.js-powered scene in the hero area for visual polish.
- **Student-focused projects**: Example project: Smart Expense Tracker — designed for fast budgeting and student workflows.

**Tech Stack**

- **Framework**: Next.js (App Router)
- **UI**: React, Tailwind CSS
- **Animation & 3D**: Framer Motion, Three.js
- **Languages**: TypeScript, JavaScript
- **Hosting**: Vercel-friendly configuration

**Quick Development**

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open your browser to `http://localhost:3000`.

Build for production and preview:

```bash
npm run build
npm run start
```

Edit the site content by updating the components in the `app` folder, for example:

- [app/page.tsx](app/page.tsx) — top-level page composition
- [app/components/Hero.tsx](app/components/Hero.tsx) — hero text, profile, socials
- [app/components/About.tsx](app/components/About.tsx) — education and background
- [app/components/Projects.tsx](app/components/Projects.tsx) — showcased projects

**Content & Customization**

- To update personal details (name, bio, email, socials) edit [app/components/Hero.tsx](app/components/Hero.tsx) and [app/components/Contact.tsx](app/components/Contact.tsx).
- Add or update projects inside [app/components/Projects.tsx](app/components/Projects.tsx) and replace images under `public/images`.
- Certificates and gallery images live under `public/images/certificate` and `public/images/gallary`.

**Contact**

- Email: gyawali.prajwol65@gmail.com
- Socials: LinkedIn, Facebook, Instagram (linked from the hero section)

**Deploy**

This site is ready to deploy to Vercel. Push the `main` branch to your remote and connect the repository in Vercel. Vercel will detect Next.js and run the necessary build steps.

**Notes & Next Steps**

- The contact form is currently simulated client-side; integrate a backend or serverless function to collect messages.
- Add more detailed case studies for projects to improve discoverability and SEO.

**License**

This repository does not include a license file. Add a `LICENSE` if you want to specify reuse terms.

---

If you want, I can:
- Run the dev server locally and verify the site builds.
- Add a short contributing section or a `LICENSE` file.

