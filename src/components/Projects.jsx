import SectionReveal from './SectionReveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow"><span className="num">03</span> Projects</p>
          <h2>Things I've built</h2>
          <p>Each project links to its live deployment and source — click through rather than take my word for it.</p>
        </SectionReveal>

        <div className="projects-list">
          {projects.map((p) => (
            <SectionReveal key={p.id}>
              <ProjectCard project={p} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
