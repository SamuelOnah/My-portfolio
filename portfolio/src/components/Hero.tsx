import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, MapPin } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import MagneticButton from './MagneticButton'

function RotatingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % portfolioData.roles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-block h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={portfolioData.roles[index]}
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -22, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="inline-block text-coral"
        >
          {portfolioData.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function CodeCard() {
  const firstName = portfolioData.name.split(' ')[0]
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: -3 }}
      transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-sm rounded-xl border-[3px] border-ink bg-ink shadow-[6px_6px_0_0_#FF5A5F]"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5A5F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F5C94B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#1EA672]" />
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-paper/90">
        <code>
          <span className="text-[#C792EA]">const</span>{' greet = () => '}
          <span className="text-paper">{'{'}</span>
          {'\n  '}
          <span className="text-[#C792EA]">return</span>{' '}
          <span className="text-[#1EA672]">{`"hey, I'm ${firstName} 👋"`}</span>
          {'\n'}
          <span className="text-paper">{'}'}</span>
          <span className="ml-0.5 animate-blink text-coral">▍</span>
        </code>
      </pre>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-32 sm:pt-40">
      <span className="pointer-events-none absolute right-[18%] top-24 hidden h-4 w-4 animate-driftA rounded-sm bg-spring/70 sm:block" />
      <span className="pointer-events-none absolute right-[9%] top-64 hidden h-3 w-3 animate-driftB rounded-full bg-coral/70 sm:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-spring"
          >
            hey, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            {portfolioData.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-display text-2xl font-medium text-ink/70 sm:text-3xl"
          >
            <RotatingRole />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="mt-6 max-w-[40ch] text-lg text-muted">{portfolioData.tagline}</p>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={14} /> {portfolioData.location}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="rounded-full bg-ink px-7 py-3 font-medium text-paper transition-colors hover:bg-coral"
            >
              See my work
            </MagneticButton>
            <MagneticButton
              href={portfolioData.resumeUrl}
              className="flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              <Download size={16} /> Resume
            </MagneticButton>
          </motion.div>
        </div>

        <CodeCard />
      </div>
    </section>
  )
}
