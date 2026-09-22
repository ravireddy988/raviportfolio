import { About } from '../components/About'
import { CaseStudies } from '../components/CaseStudies'
import { Contact } from '../components/Contact'
import { EngineeringNotes } from '../components/EngineeringNotes'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Freelance } from '../components/Freelance'
import { Hero } from '../components/Hero'
import { Leadership } from '../components/Leadership'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CaseStudies />
      <Freelance />
      <Leadership />
      <EngineeringNotes />
      <Contact />
      <Footer />
    </main>
  )
}
