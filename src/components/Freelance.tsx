import { CheckCircle2 } from 'lucide-react'
import { freelanceServices } from '../data/resume'
import { StaggerContainer, StaggerItem } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Freelance() {
  return (
    <section id="freelance" className="mx-auto max-w-4xl px-4 py-14">
      <SectionHeading eyebrow="Freelance & Contract Services" title="Available for selected freelance and contract projects" />

      <StaggerContainer className="grid gap-2 sm:grid-cols-2" stagger={0.04}>
        {freelanceServices.map((service) => (
          <StaggerItem key={service}>
            <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted transition-colors hover:border-accent hover:bg-surface-hover">
              <CheckCircle2 size={16} className="shrink-0 text-accent" />
              {service}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <p className="mt-6 text-sm text-muted">Project-based pricing — scope dependent.</p>

      <a
        href="#contact"
        className="mt-6 inline-block rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
      >
        Have a project in mind? Let's discuss →
      </a>
    </section>
  )
}
