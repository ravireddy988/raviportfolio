import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useState } from 'react'
import { heroBadges, profile } from '../data/resume'
import { GithubIcon, LinkedinIcon } from './icons'

const EASE = [0.16, 1, 0.3, 1] as const

const words = ['Senior', 'Frontend', 'Developer']

const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('')

function AvatarSlot() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
      className="relative mx-auto aspect-square w-56 shrink-0 sm:w-64 lg:w-72"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent to-accent-2 opacity-20 blur-2xl" />
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface">
        {!imgFailed ? (
          <img
            src="/avatar.jpg"
            alt={profile.name}
            className="h-full w-full object-cover"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className="gradient-text text-6xl font-bold">{initials}</span>
        )}
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-6 pb-24 pt-16 lg:flex-row lg:items-center lg:justify-between lg:pt-24 lg:text-left">
      <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-4 text-sm font-medium tracking-wide text-accent"
        >
          {profile.name}
        </motion.p>

        <h1 className="flex flex-wrap justify-center gap-x-4 text-4xl font-semibold tracking-tight sm:text-6xl lg:justify-start">
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
          transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
          className="mt-4 text-sm font-medium text-muted"
        >
          {profile.stack}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32, ease: EASE }}
          className="mt-4 max-w-2xl text-lg text-muted"
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

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.46, ease: EASE }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {profile.availability}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52, ease: EASE }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
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
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
          className="mt-9 flex flex-wrap justify-center gap-2 lg:justify-start"
        >
          {heroBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.68, ease: EASE }}
          className="mt-8 flex gap-5 text-muted"
        >
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
            <LinkedinIcon size={20} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
            <GithubIcon size={20} />
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-text">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <AvatarSlot />
    </section>
  )
}
