import { coreStack } from '../data/coreStack'
import { skillGroups } from '../data/resume'
import { StaggerContainer, StaggerItem } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-10 py-14">
      <SectionHeading eyebrow="Skills" title="What I work with" />

      <StaggerContainer
        className="mb-10 grid grid-cols-3 gap-3 sm:grid-cols-6"
        stagger={0.05}
      >
        {coreStack.map(({ name, Icon, color }) => (
          <StaggerItem key={name}>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface px-3 py-5 text-center transition-colors hover:border-accent">
              <Icon size={28} color={color} />
              <span className="text-xs font-medium text-text">{name}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

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
