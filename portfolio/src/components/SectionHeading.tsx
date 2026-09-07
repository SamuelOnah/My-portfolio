import { motion } from 'framer-motion'

export default function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="relative inline-block font-display text-4xl font-semibold text-ink sm:text-5xl">
      {title}
      <motion.svg
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        className="absolute -bottom-2 left-0 h-3 w-full text-coral"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <path
          d="M2 14C60 6 140 4 150 10C160 16 240 6 298 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </motion.svg>
    </h2>
  )
}
