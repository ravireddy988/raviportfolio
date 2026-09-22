import { FileText } from 'lucide-react'
import { engineeringNotes } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function EngineeringNotes() {
  return (
    <section id="engineering-notes" className="mx-auto max-w-7xl px-10 py-14">
      <SectionHeading eyebrow="Engineering Notes" title="Thinking behind the work" />
      <div className="grid gap-4 sm:grid-cols-2">
        {engineeringNotes.map((note, i) => (
          <FadeIn key={note.title} delay={i * 0.06}>
            <div className="flex h-full gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <FileText size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-text">{note.title}</p>
                <p className="mt-1 text-xs text-muted">{note.summary}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
