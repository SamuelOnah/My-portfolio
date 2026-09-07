import { BarChart3, ChefHat, ListChecks, Terminal, type LucideIcon } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import type { Project } from '../types'

const iconMap: Record<Project['icon'], LucideIcon> = {
  checks: ListChecks,
  chart: BarChart3,
  chef: ChefHat,
  terminal: Terminal,
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading title="Some things I've built" />
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {portfolioData.projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} Icon={iconMap[project.icon]} />
        ))}
      </div>
    </section>
  )
}
