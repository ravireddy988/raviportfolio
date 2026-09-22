import { motion } from 'framer-motion'
import { Code2, Gauge, LayoutTemplate, MessageSquare, Plug, RefreshCw } from 'lucide-react'
import { freelanceServices } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

const icons: Record<string, typeof Code2> = {
  'Frontend Development': Code2,
  'UI Development': LayoutTemplate,
  'Frontend Modernization': RefreshCw,
  'API Integration': Plug,
  'Performance Optimization': Gauge,
  'Technical Consulting': MessageSquare,
}

const EASE = [0.16, 1, 0.3, 1] as const

export function Freelance() {
  return (
    <section id="freelance" className="mx-auto max-w-7xl px-10 py-14">
      <SectionHeading eyebrow="Freelance & Consulting" title="Need help building or improving your web product?" />

      <FadeIn>
        <p className="-mt-6 mb-8 max-w-2xl text-sm text-muted">
          I help startups and businesses build scalable, responsive web applications and modernize existing
          frontend systems.
        </p>
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {freelanceServices.map((service, i) => {
          const Icon = icons[service.title] ?? Code2
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className="group h-full rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <Icon size={18} />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-text">{service.title}</h3>
              <p className="mt-1 text-sm text-muted">{service.description}</p>
            </motion.div>
          )
        })}
      </div>

      <a
        href="#contact"
        className="mt-8 inline-block rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
      >
        Have a project in mind? Let's discuss →
      </a>
    </section>
  )
}
