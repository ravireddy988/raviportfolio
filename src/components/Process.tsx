import { motion } from 'framer-motion'
import { ClipboardList, Code2, Rocket, Search, TestTube } from 'lucide-react'
import { process } from '../data/resume'
import { SectionHeading } from './SectionHeading'

const icons = [Search, ClipboardList, Code2, TestTube, Rocket]

const EASE = [0.16, 1, 0.3, 1] as const

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading eyebrow="Freelance" title="How I Work" />
      <div className="space-y-4">
        {process.map((item, i) => {
          const Icon = icons[i] ?? Code2
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon size={18} />
              </span>
              <span className="text-lg font-semibold text-accent">{item.step}</span>
              <div>
                <h3 className="text-sm font-semibold text-text">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
