import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import type { Skill } from '../types'

const categories: Skill['category'][] = ['Frontend', 'Backend', 'Tools & Platforms']

export default function Skills() {
  const [active, setActive] = useState<Skill['category']>('Frontend')
  const filtered = portfolioData.skills.filter((s) => s.category === active)

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading title="What I work with" />

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === cat ? 'text-paper' : 'text-muted hover:text-ink'
            }`}
          >
            {active === cat && (
              <motion.span
                layoutId="skills-pill"
                className="absolute inset-0 -z-10 rounded-full bg-ink"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 flex flex-wrap gap-3">
        {filtered.map((skill) => (
          <motion.span
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="rounded-md border border-ink/15 bg-surface px-4 py-2 text-sm text-ink"
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
