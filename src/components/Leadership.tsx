import { leadership } from '../data/resume'
import { StaggerContainer, StaggerItem } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading eyebrow="Leadership" title="Beyond writing code" />
      <StaggerContainer className="flex flex-wrap gap-2" stagger={0.04}>
        {leadership.map((item) => (
          <StaggerItem key={item}>
            <span className="inline-block rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
              {item}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
