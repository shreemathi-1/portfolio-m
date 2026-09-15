import { useState } from 'react'
import SectionReveal from './SectionReveal'
import Seal from './Seal'
import { internships } from '../data/portfolioData'
import { FiX } from 'react-icons/fi'

export default function Internships() {
  const [cert, setCert] = useState(null)

  return (
    <section className="section" id="internships">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow"><span className="num">04</span> Internships</p>
          <h2>Where I've worked</h2>
        </SectionReveal>

        <div className="projects-list">
          {internships.map((it) => (
            <SectionReveal key={it.id} className="card internship-card">
              <div className="internship-photo">
                <img src={it.photo} alt={`${it.company} team photo`} />
              </div>
              <div className="internship-body">
                <div className="internship-head">
                  <div>
                    <h3>{it.company}</h3>
                    <p className="internship-role">{it.role}</p>
                  </div>
                  <span className="internship-duration mono">{it.duration}</span>
                </div>
                <p className="internship-desc">{it.description}</p>
                <div className="project-tech" style={{ marginBottom: 16 }}>
                  {it.tech.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <button className="btn btn-outline btn-sm" onClick={() => setCert(it)}>
                    View certificate
                  </button>
                  <Seal>Certificate verified</Seal>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {cert && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setCert(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-head">
              <Seal>{cert.company} — Certificate</Seal>
              <button className="lightbox-close" onClick={() => setCert(null)} aria-label="Close">
                <FiX />
              </button>
            </div>
            <img src={cert.certificate} alt={`${cert.company} internship certificate`} />
          </div>
        </div>
      )}
    </section>
  )
}
