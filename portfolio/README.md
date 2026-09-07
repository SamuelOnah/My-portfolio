# Portfolio Website

A playful, animated portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

- One signature hero sequence: staggered reveal, rotating role text, and a tilted "code card" with a blinking cursor
- A hand-drawn marker underline that draws itself in under each section heading
- Magnetic buttons and a custom cursor (desktop only, disabled automatically on touch devices)
- Tilt-on-hover project cards with an offset color panel
- A filterable skills section and a scroll progress bar
- Fully responsive, with a proper mobile nav menu
- Reduced-motion and keyboard-focus support built in
- One file to edit for all the content

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL that's printed (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Making it yours

**Content.** Everything text-based (name, bio, projects, skills, social links) lives in one file:

```
src/data/portfolio.ts
```

Edit that file and the whole site updates. You shouldn't need to touch any component for a basic content swap.

**Page title.** Also update the `<title>` and meta description near the top of `index.html`, since that part isn't pulled from the data file.

**Colors and fonts.** Defined in `tailwind.config.js` under `theme.extend.colors` and `theme.extend.fontFamily`. Change the hex values or font names there to restyle the whole site.

**Project icons.** Each project picks an icon by a short key (`checks`, `chart`, `chef`, `terminal`) mapped in `src/components/Projects.tsx`. Swap in any icon name from lucide-react (lucide.dev/icons) for a different look.

**Images.** This starter uses icons and generated shapes instead of real photos or screenshots, so it works with zero image assets. To add a real headshot or project screenshots, drop images into `src/assets/` and reference them from the relevant component.

## Deploying

This is a static site, so it deploys anywhere that serves static files:

- **Vercel:** run `npx vercel`, or connect the repo at vercel.com
- **Netlify:** drag the `dist/` folder (after `npm run build`) into netlify.com/drop, or connect the repo
- **GitHub Pages:** build, then push the `dist/` folder to a `gh-pages` branch

## Project structure

```
src/
├── components/     UI components (Navbar, Hero, About, Skills, Projects, Contact, Footer, ...)
├── data/           Editable content (portfolio.ts)
├── types/          Shared TypeScript types
├── App.tsx         Assembles all the sections
└── index.css       Tailwind and global styles
```

Have fun customizing it.
