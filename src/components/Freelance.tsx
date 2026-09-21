import { freelanceServices } from '../data/resume'
import { StaggerContainer, StaggerItem } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Freelance() {
  return (
    <section id="freelance" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Freelance & Contract Services" title="Available for selected freelance and contract projects" />

      <StaggerContainer className="grid gap-2 sm:grid-cols-2" stagger={0.04}>
        {freelanceServices.map((service) => (
          <StaggerItem key={service}>
            <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {service}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <p className="mt-6 text-sm text-muted">Project-based pricing — scope dependent.</p>

      <a
        href="#contact"
        className="mt-6 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
      >
        Have a project in mind? Let's discuss →
      </a>
    </section>
  )
}
