import SectionReveal from './SectionReveal'
import { profile } from '../data/portfolioData'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow"><span className="num">01</span> About</p>
          <h2>A little about me</h2>
        </SectionReveal>
        <SectionReveal className="about-text" style={{ maxWidth: 720 }}>
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </SectionReveal>
      </div>
    </section>
  )
}
