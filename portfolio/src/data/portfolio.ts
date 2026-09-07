import type { PortfolioData } from '../types'

/**
 * PLACEHOLDER CONTENT
 * Everything below is a stand-in so the site works with zero setup.
 * Replace it with your friend's real name, bio, projects, and links —
 * every component reads from this one file, so it's the only place
 * you need to edit to make the site "theirs."
 */
export const portfolioData: PortfolioData = {
  name: 'Alex Rivera',
  initials: 'AR',
  roles: [
    'Full-Stack Developer',
    'Open-Source Tinkerer',
    'Coffee-to-Code Converter',
    'Bug Whisperer',
  ],
  tagline: "I build fast, friendly products, and I sweat the details you won't see.",
  bio: "I'm a full-stack developer who likes turning fuzzy ideas into products people actually enjoy using. Most days you'll find me deep in a React codebase, arguing with TypeScript, or breaking something in production just to learn how it works. When I'm not coding, I'm probably hiking, losing at chess, or over-explaining why my side project needed a full rewrite.",
  location: 'Remote-friendly, based in Pacific time',
  email: 'hello@example.com',
  resumeUrl: '#',
  stats: [
    { label: 'Years shipping code', value: '5+' },
    { label: 'Projects launched', value: '30+' },
    { label: 'Cups of coffee', value: '∞' },
    { label: 'Bugs fixed this week', value: '12' },
  ],
  skills: [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Backend' },
    { name: 'GraphQL', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'Docker', category: 'Tools & Platforms' },
    { name: 'AWS', category: 'Tools & Platforms' },
    { name: 'Git', category: 'Tools & Platforms' },
    { name: 'Figma', category: 'Tools & Platforms' },
    { name: 'Vercel', category: 'Tools & Platforms' },
  ],
  projects: [
    {
      id: 'taskflow',
      title: 'TaskFlow',
      description: 'A collaborative task manager with real-time sync, keyboard-first navigation, and a command palette power users love.',
      tags: ['React', 'TypeScript', 'WebSockets'],
      icon: 'checks',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'devmetrics',
      title: 'DevMetrics',
      description: 'An analytics dashboard that turns messy CI/CD logs into a clear picture of build health and deploy frequency.',
      tags: ['Next.js', 'Node.js', 'D3.js'],
      icon: 'chart',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'pixelpantry',
      title: 'PixelPantry',
      description: 'A recipe app that turns any recipe URL into a shoppable grocery list, and remembers what you actually cook.',
      tags: ['React Native', 'Python', 'PostgreSQL'],
      icon: 'chef',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'terminal-tunes',
      title: 'Terminal Tunes',
      description: 'A tiny CLI that plays lo-fi beats while you code, with a now-playing widget that lives in your terminal prompt.',
      tags: ['Rust', 'CLI', 'Audio'],
      icon: 'terminal',
      githubUrl: '#',
    },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
    { label: 'Twitter', href: 'https://twitter.com/yourusername', icon: 'twitter' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: 'mail' },
  ],
}
