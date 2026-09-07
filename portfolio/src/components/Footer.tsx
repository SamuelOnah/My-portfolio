import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {portfolioData.name}. Built with React, TypeScript and a little too much coffee.
        </p>
        <motion.a
          href="#top"
          whileHover={{ y: -3 }}
          className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-coral"
        >
          Back to top <ArrowUp size={14} />
        </motion.a>
      </div>
    </footer>
  )
}
