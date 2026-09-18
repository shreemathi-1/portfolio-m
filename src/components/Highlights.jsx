import { useState } from 'react'
import SectionReveal from './SectionReveal'
import Seal from './Seal'
import CredentialCard from './CredentialCard'
import { achievements, workshops } from '../data/portfolioData'
import { FiX } from 'react-icons/fi'

export default function Highlights() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="highlights">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow"><span className="num">06</span> Highlights</p>
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

        <SectionReveal className="subsection-label">Events &amp; Workshops Attended</SectionReveal>

        <div className="cert-grid">
          {workshops.map((w) => (
            <CredentialCard
              key={w.id}
              image={w.image}
              eyebrow={w.organiser}
              title={w.title}
              meta={`${w.format} · ${w.date}`}
              alt={`${w.title} participation certificate`}
              onOpen={() => setOpen(w)}
            />
          ))}
        </div>
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-head">
              <Seal>{open.title}</Seal>
              <button className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close">
                <FiX />
              </button>
            </div>
            <img src={open.image} alt={`${open.title} participation certificate`} />
          </div>
        </div>
      )}
    </section>
  )
}
