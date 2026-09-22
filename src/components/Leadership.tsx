import { leadership } from '../data/resume'
import { StaggerContainer, StaggerItem } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-7xl px-4 py-14">
      <SectionHeading eyebrow="Leadership" title="Beyond writing code" />
      <StaggerContainer className="flex flex-wrap gap-2" stagger={0.04}>
        {leadership.map((item) => (
          <StaggerItem key={item}>
            <span className="inline-block rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-transform hover:scale-105 hover:border-accent hover:text-text">
              {item}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
