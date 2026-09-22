import { motion } from 'framer-motion'
import { Hammer, MessageSquare, Plug, RefreshCw, TrendingUp, Wrench } from 'lucide-react'
import { helpWith } from '../data/resume'
import { SectionHeading } from './SectionHeading'

const icons: Record<string, typeof Hammer> = {
  Build: Hammer,
  Improve: TrendingUp,
  Fix: Wrench,
  Modernize: RefreshCw,
  Integrate: Plug,
  Consult: MessageSquare,
}

const EASE = [0.16, 1, 0.3, 1] as const

export function HelpWith() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <SectionHeading eyebrow="Freelance" title="What I Can Help With" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {helpWith.map((item, i) => {
          const Icon = icons[item.title] ?? Hammer
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className="group h-full rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <Icon size={18} />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-text">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
