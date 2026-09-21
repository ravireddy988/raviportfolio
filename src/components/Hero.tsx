import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { profile } from '../data/resume'
import { GithubIcon, LinkedinIcon } from './icons'

const EASE = [0.16, 1, 0.3, 1] as const

const words = ['Senior', 'Frontend', 'Developer']

export function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-20 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mb-4 text-sm font-medium tracking-wide text-accent"
      >
        {profile.name}
      </motion.p>

      <h1 className="flex flex-wrap justify-center gap-x-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        {words.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            className={i === 1 ? 'gradient-text' : ''}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
        className="mt-6 max-w-2xl text-lg text-muted"
      >
        {profile.tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
        className="mt-3 max-w-2xl text-sm text-muted"
      >
        {profile.subline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
        className="mt-9 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
        className="mt-10 flex gap-5 text-muted"
      >
        <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
          <GithubIcon size={20} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
          <LinkedinIcon size={20} />
        </a>
        <a href={`mailto:${profile.email}`} className="transition-colors hover:text-text">
          <Mail size={20} />
        </a>
      </motion.div>
    </section>
  )
}
