import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import MagneticButton from './MagneticButton'

const icons = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail }

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable; the email is still visible on the button.
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
      <SectionHeading title="Let's build something" />

      <p className="mx-auto mt-8 max-w-[46ch] text-lg text-muted">
        Got a project, an idea, or just want to say hi? My inbox is always open, and I'll get back to you faster than my CI pipeline builds.
      </p>

      <div className="mt-8 flex justify-center">
        <MagneticButton
          onClick={copyEmail}
          className="flex items-center gap-2 rounded-full bg-ink px-7 py-3 font-medium text-paper transition-colors hover:bg-coral"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? 'Copied!' : portfolioData.email}
        </MagneticButton>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        {portfolioData.socials.map((social) => {
          const Icon = icons[social.icon]
          return (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              whileHover={{ y: -4, rotate: -6 }}
              className="rounded-full border-2 border-ink p-3 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              <Icon size={20} />
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
