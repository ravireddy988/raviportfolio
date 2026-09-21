import { about } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-14">
      <SectionHeading eyebrow="About" title="Who I am" />
      <FadeIn delay={0.1}>
        <div className="space-y-4 text-muted">
          {about.split('\n\n').map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
