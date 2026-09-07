import { useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Github, type LucideIcon } from 'lucide-react'
import type { Project } from '../types'

export default function ProjectCard({
  project,
  index,
  Icon,
}: {
  project: Project
  index: number
  Icon: LucideIcon
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const reset = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const panelColor = index % 2 === 0 ? 'bg-coral' : 'bg-spring'

  return (
    <div className="group relative" style={{ perspective: 1000 }}>
      <div
        aria-hidden
        className={`absolute inset-0 rounded-xl ${panelColor} transition-transform duration-200 group-hover:translate-x-2 group-hover:translate-y-2`}
      />
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY }}
        data-cursor-hover
        className="relative rounded-xl border-[3px] border-ink bg-paper"
      >
        <div className="relative flex h-36 items-center justify-center rounded-t-lg border-b-[3px] border-ink bg-surface">
          <Icon size={44} strokeWidth={1.5} className="text-ink/70" />
          <span className="absolute right-4 top-3 font-mono text-xs text-ink/40">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded bg-surface px-2 py-1 font-mono text-xs text-ink/70">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-coral"
              >
                <ExternalLink size={15} /> Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-coral"
              >
                <Github size={15} /> Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
