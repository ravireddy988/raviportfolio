import { skillGroups } from '../data/resume'
import { StaggerContainer, StaggerItem } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-semibold text-text">{group.title}</h3>
            <StaggerContainer className="flex flex-wrap gap-2" stagger={0.04}>
              {group.skills.map((skill) => (
                <StaggerItem key={skill}>
                  <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-text">
                    {skill}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        ))}
      </div>
    </section>
  )
}
