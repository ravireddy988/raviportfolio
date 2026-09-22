import { about, profile } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-10 py-14">
      <SectionHeading eyebrow="About" title="Who I am" />
      <div className="flex flex-col items-start gap-8 sm:flex-row">
        <FadeIn delay={0.05} className="shrink-0 self-center sm:self-start">
          <img
            src="/profile-photo.jpg"
            alt={profile.name}
            width={224}
            height={224}
            className="h-56 w-56 rounded-full border border-border object-cover"
          />
        </FadeIn>
        <FadeIn delay={0.1} className="flex-1">
          <div className="space-y-4 text-muted">
            {about.split('\n\n').map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
