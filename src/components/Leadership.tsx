import {
  Bug,
  Calculator,
  ClipboardList,
  GitPullRequest,
  Layers,
  MessageSquare,
  Repeat,
  Users2,
  Workflow,
  Wrench,
} from 'lucide-react'
import { leadership } from '../data/resume'
import { StaggerContainer, StaggerItem } from './FadeIn'
import { SectionHeading } from './SectionHeading'

const icons = [
  Users2,
  GitPullRequest,
  Workflow,
  Layers,
  ClipboardList,
  Calculator,
  Bug,
  Wrench,
  MessageSquare,
  Repeat,
]

export function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-7xl px-10 py-14">
      <SectionHeading eyebrow="Leadership" title="Beyond writing code" />
      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
        {leadership.map((item, i) => {
          const Icon = icons[i] ?? Users2
          return (
            <StaggerItem key={item.title}>
              <div className="flex h-full gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">{item.title}</p>
                  <p className="mt-0.5 text-xs text-muted">{item.description}</p>
                </div>
              </div>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </section>
  )
}
