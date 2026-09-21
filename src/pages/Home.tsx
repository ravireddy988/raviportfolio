import { About } from '../components/About'
import { CaseStudies } from '../components/CaseStudies'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
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
      <Leadership />
      <Contact />
    </main>
  )
}
