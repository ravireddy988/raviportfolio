import { motion } from 'framer-motion'
import { coreStack } from '../data/coreStack'
import { profile, stats } from '../data/resume'

const EASE = [0.16, 1, 0.3, 1] as const

const words = ['Senior', 'Frontend', 'Developer']

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-y-0 right-0 hidden w-[60%] bg-cover bg-[position:right_center] lg:block"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div
        className="absolute inset-y-0 right-0 hidden w-[60%] lg:block"
        style={{
          background:
            'linear-gradient(90deg, var(--color-bg) 0%, var(--color-bg) 12%, transparent 55%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 lg:pt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent"
        >
          <span className="h-px w-8 bg-accent" />
          Engineering Modern Web Experiences
        </motion.p>

        <h1 className="max-w-3xl tracking-tight">
          <span className="block text-4xl font-semibold sm:text-6xl">
            Hi, I'm <span className="gradient-text">Ravi</span>
          </span>
          <span className="mt-2 block text-2xl font-medium text-text sm:text-3xl">
            {words[0]} {words[1]} {words[2]}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
          className="mt-5 max-w-xl text-lg text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32, ease: EASE }}
          className="mt-3 max-w-xl text-sm text-muted"
        >
          {profile.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            View My Work →
          </a>
          <a
            href="/resume.pdf"
            className="rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            Let's Connect
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48, ease: EASE }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {coreStack.slice(0, 6).map(({ name, Icon, color }) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text"
            >
              <Icon size={14} color={color} />
              {name}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.56, ease: EASE }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface px-4 py-3"
            >
              <p className="text-xl font-semibold text-text">
                {stat.display ?? `${stat.value}${stat.suffix}`}
              </p>
              <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
          <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <div>
              <p className="text-sm font-medium text-text">Open To</p>
              <p className="text-xs text-muted">Full-Time · Contract · Freelance</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.64, ease: EASE }}
          className="mt-10 max-w-md text-sm italic text-muted"
        >
          "I build scalable interfaces that balance performance, usability, and maintainability."
        </motion.p>
      </div>
    </section>
  )
}
