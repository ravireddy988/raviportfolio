import { BarChart3, Cloud, ShieldCheck, Target, Users, Wrench, Zap } from 'lucide-react'
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

function LaptopMockup() {
  return (
    <div className="relative hidden shrink-0 lg:block" aria-hidden="true">
      <div className="w-64 overflow-hidden rounded-t-lg border-4 border-border bg-surface shadow-xl">
        <div className="flex items-center gap-1.5 bg-bg px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
        <div className="aspect-video bg-gradient-to-br from-accent/20 via-bg to-accent-2/20 p-2">
          <div className="h-1/2 rounded bg-black/30" />
          <div className="mt-1.5 flex gap-1">
            <div className="h-6 flex-1 rounded bg-accent/40" />
            <div className="h-6 flex-1 rounded bg-accent-2/40" />
            <div className="h-6 flex-1 rounded bg-teal-500/40" />
          </div>
        </div>
      </div>
      <div className="h-2 w-72 -translate-x-4 rounded-b-xl bg-border" />
    </div>
  )
}

const bannerBadges = [
  { icon: Zap, label: 'High Performance', sub: 'Smooth Editing' },
  { icon: Users, label: 'Browser Based', sub: 'No Installation' },
  { icon: Cloud, label: 'Scalable', sub: 'Cloud Ready' },
  { icon: ShieldCheck, label: 'Production Ready', sub: 'Real World Usage' },
]

function DeepDiveBanner() {
  return (
    <FadeIn className="mb-8 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Project Deep Dive
          </p>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="gradient-text">{featuredProject.title}</span>
            <span className="text-text"> — {featuredProject.tagline}</span>
          </h3>
          <p className="mt-2 text-sm text-muted">Create • Edit • Collaborate • Publish</p>
          <p className="mt-1 text-sm text-muted">{featuredProject.highlight}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            {bannerBadges.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border border-border bg-bg px-3 py-2"
              >
                <Icon size={16} className="text-accent" />
                <div className="leading-tight">
                  <p className="text-xs font-medium text-text">{label}</p>
                  <p className="text-[11px] text-muted">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LaptopMockup />
      </div>
    </FadeIn>
  )
}

function DeepDiveFooter() {
  return (
    <FadeIn delay={0.1} className="mt-6 rounded-2xl border border-border bg-surface px-6 py-5">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm font-medium text-text">
          Empowering Creators <span className="text-muted">with Better Tools</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <Zap size={13} className="text-accent" /> Faster Editing
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={13} className="text-accent" /> Seamless Collaboration
          </span>
          <span className="flex items-center gap-1.5">
            <Cloud size={13} className="text-accent" /> Built for Scale
          </span>
        </div>
        <p style={{ fontFamily: 'var(--font-hand)' }} className="text-xl text-accent-2">
          Create · Edit · Share a Better Tomorrow
        </p>
      </div>
    </FadeIn>
  )
}

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

const detailIcons = { challenge: Target, solution: Wrench, result: BarChart3 } as const
const detailLabels = { challenge: 'Challenge', solution: 'Solution', result: 'Result' } as const

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-7xl px-4 py-14">
      <SectionHeading eyebrow="Case Studies" title="Deeper engineering write-ups" />
      <DeepDiveBanner />
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

                {cs.detail ? (
                  <div className="flex-1 space-y-4 text-sm">
                    {(['challenge', 'solution', 'result'] as const).map((key) => {
                      const Icon = detailIcons[key]
                      return (
                        <div key={key}>
                          <p className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text">
                            <span
                              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${c.iconBg} ${c.eyebrow}`}
                            >
                              <Icon size={13} />
                            </span>
                            {detailLabels[key]}
                          </p>
                          <ul className={`space-y-1 pl-1 text-muted`}>
                            {cs.detail![key].map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${c.eyebrow.replace('text-', 'bg-')}`} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <ol className="flex-1 space-y-1.5 text-sm text-muted">
                    {cs.steps.map((step) => (
                      <li key={step} className="flex gap-2">
                        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${c.eyebrow.replace('text-', 'bg-')}`} />
                        {step}
                      </li>
                    ))}
                  </ol>
                )}

                {cs.stats && (
                  <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-4">
                    {cs.stats.map((stat) => (
                      <div key={stat.label} className={`rounded-xl ${c.iconBg} px-3 py-2 text-center`}>
                        <p className={`text-lg font-bold ${c.eyebrow}`}>{stat.value}</p>
                        <p className="text-[11px] text-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

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
      <DeepDiveFooter />
    </section>
  )
}
