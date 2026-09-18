import SectionReveal from './SectionReveal'
import { profile, focusAreas, education } from '../data/portfolioData'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow"><span className="num">01</span> About me</p>
          <h2>Developer. Learner. Builder.</h2>
        </SectionReveal>

        <div className="about-grid">
          <SectionReveal className="about-text">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="focus-list">
              {focusAreas.map((f) => (
                <li className="focus-item" key={f.label}>
                  <span className="focus-icon" aria-hidden="true">{f.icon}</span>
                  {f.label}
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal>
            <p className="about-col-label">Education</p>
            <div className="edu-list">
              {education.map((e) => (
                <div className="edu-card" key={e.id}>
                  <h3>{e.degree}</h3>
                  <p className="edu-meta">{e.institution} &middot; {e.years}</p>
                  <p className="edu-score mono">{e.score}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
