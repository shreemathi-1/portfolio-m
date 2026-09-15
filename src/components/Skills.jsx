import { useState } from 'react'
import SectionReveal from './SectionReveal'
import Seal from './Seal'
import { skillGroups } from '../data/portfolioData'
import { FiX } from 'react-icons/fi'

export default function Skills() {
  const [proof, setProof] = useState(null)

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow"><span className="num">02</span> Skills</p>
          <h2>What I work with</h2>
          <p>Proficiency is self-rated. Where I have a certificate or project to back a skill, you can open it directly.</p>
        </SectionReveal>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SectionReveal key={group.category} className="card skill-group">
              <h3>{group.category}</h3>
              {group.skills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <div className="skill-row-top">
                    <span className="name">
                      {s.name}
                      {s.proof && (
                        <button className="proof-link" onClick={() => setProof({ name: s.name, src: s.proof })}>
                          view proof
                        </button>
                      )}
                    </span>
                    <span className="pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </SectionReveal>
          ))}
        </div>
      </div>

      {proof && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setProof(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-head">
              <Seal>Proof — {proof.name}</Seal>
              <button className="lightbox-close" onClick={() => setProof(null)} aria-label="Close">
                <FiX />
              </button>
            </div>
            <img src={proof.src} alt={`Proof for ${proof.name}`} />
          </div>
        </div>
      )}
    </section>
  )
}
