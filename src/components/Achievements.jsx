import SectionReveal from './SectionReveal'
import { achievements } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow"><span className="num">05</span> Achievements</p>
          <h2>Milestones along the way</h2>
        </SectionReveal>

        <div className="achievements-grid">
          {achievements.map((a) => (
            <SectionReveal key={a.id} className="card achievement-card">
              <div className="achievement-photo">
                <img src={a.photo} alt={a.title} />
              </div>
              <div className="achievement-body">
                <span className="achievement-year">{a.year}</span>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
