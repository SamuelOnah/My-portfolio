export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  icon: 'checks' | 'chart' | 'chef' | 'terminal'
  liveUrl?: string
  githubUrl?: string
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Tools & Platforms'
}

export interface Stat {
  label: string
  value: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'twitter' | 'mail'
}

export interface PortfolioData {
  name: string
  initials: string
  roles: string[]
  tagline: string
  bio: string
  location: string
  email: string
  resumeUrl: string
  stats: Stat[]
  skills: Skill[]
  projects: Project[]
  socials: SocialLink[]
}
