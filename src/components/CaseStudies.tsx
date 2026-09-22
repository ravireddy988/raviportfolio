import { AlertCircle, BarChart3, Compass, Target, User, Wrench } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  SiAngular,
  SiGit,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { caseStudies, featuredProject } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

const techStack = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
]

const colorClasses = {
  accent: {
    badge: 'bg-accent text-white',
    eyebrow: 'text-accent',
    border: 'border-accent/30 hover:border-accent/60',
    bg: 'bg-accent/[0.06]',
    iconBg: 'bg-accent/15',
  },
  teal: {
    badge: 'bg-teal-500 text-white',
    eyebrow: 'text-teal-500',
    border: 'border-teal-500/30 hover:border-teal-500/60',
    bg: 'bg-teal-500/[0.06]',
    iconBg: 'bg-teal-500/15',
  },
  'accent-2': {
    badge: 'bg-accent-2 text-white',
    eyebrow: 'text-accent-2',
    border: 'border-accent-2/30 hover:border-accent-2/60',
    bg: 'bg-accent-2/[0.06]',
    iconBg: 'bg-accent-2/15',
  },
} as const

type Colors = (typeof colorClasses)[keyof typeof colorClasses]

function Block({ icon: Icon, label, c, children }: { icon: typeof Target; label: string; c: Colors; children: ReactNode }) {
  return (
    <div className="text-sm">
      <p className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text">
        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${c.iconBg} ${c.eyebrow}`}>
          <Icon size={13} />
        </span>
        {label}
      </p>
      {children}
    </div>
  )
}

function Bullets({ items, c }: { items: string[]; c: Colors }) {
  return (
    <ul className="space-y-1 pl-1 text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${c.eyebrow.replace('text-', 'bg-')}`} />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-7xl px-10 py-14">
      <SectionHeading eyebrow="Case Studies" title="Deeper engineering write-ups" />
      <FadeIn>
        <p className="-mt-6 mb-8 text-sm text-muted">
          All three case studies below come from my work on{' '}
          <Link to={`/projects/${featuredProject.slug}`} className="font-medium text-accent hover:underline">
            {featuredProject.title}
          </Link>
          .
        </p>
      </FadeIn>
      <div className="grid gap-6 sm:grid-cols-3">
        {caseStudies.map((cs, i) => {
          const c = colorClasses[cs.color]
          return (
            <FadeIn key={cs.title} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl border ${c.border} ${c.bg} p-6 transition-all hover:-translate-y-1`}
              >
                <span
                  className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${c.badge}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className={`mb-1 text-xs font-semibold uppercase tracking-wide ${c.eyebrow}`}>
                  {cs.eyebrow}
                </p>
                <h3 className="mb-2 text-base font-semibold text-text">{cs.title}</h3>
                <p className="mb-4 text-sm text-muted">{cs.description}</p>

                <div className="flex-1 space-y-4">
                  <Block icon={AlertCircle} label="Problem" c={c}>
                    <p className="pl-1 text-muted">{cs.problem}</p>
                  </Block>
                  <Block icon={User} label="Your Role" c={c}>
                    <p className="pl-1 text-muted">{cs.role}</p>
                  </Block>
                  <Block icon={Compass} label="Technical Decision" c={c}>
                    <Bullets items={cs.decisions} c={c} />
                  </Block>
                  <Block icon={Target} label="Challenge" c={c}>
                    <Bullets items={cs.detail.challenge} c={c} />
                  </Block>
                  <Block icon={Wrench} label="Solution" c={c}>
                    <Bullets items={cs.detail.solution} c={c} />
                  </Block>
                  <Block icon={BarChart3} label="Outcome" c={c}>
                    <Bullets items={cs.detail.outcome} c={c} />
                  </Block>
                </div>

                {cs.color === 'accent-2' && (
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                    {techStack.map(({ name, Icon, color }) => (
                      <span
                        key={name}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg"
                        title={name}
                      >
                        <Icon size={16} color={color} />
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
