import { portfolioData } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading title="A little about me" />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <p className="max-w-[64ch] text-lg leading-relaxed text-muted">{portfolioData.bio}</p>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {portfolioData.stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-ink/10 pl-4">
              <p className="font-display text-3xl font-bold text-ink">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
