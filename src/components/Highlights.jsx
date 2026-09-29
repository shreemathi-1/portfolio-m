import { useState } from 'react'
import SectionReveal from './SectionReveal'
import Seal from './Seal'
import CredentialCard from './CredentialCard'
import { achievements, workshops, tracking } from '../data/portfolioData'
import { FiX } from 'react-icons/fi'

export default function Highlights() {
  const [open, setOpen] = useState(null)
  const { githubUsername: gh, leetcodeUsername: lc } = tracking

  return (
    <section className="section" id="highlights">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow">Highlights</p>
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

        <SectionReveal className="subsection-label">Coding Activity</SectionReveal>

        <div className="tracking-grid">
          <SectionReveal className="card tracking-card">
            <div className="tracking-card-head">
              <h3>GitHub contributions</h3>
              <Seal>Live</Seal>
            </div>
            <img
              src={`https://ghchart.rshah.org/1C3D6E/${gh}`}
              alt={`GitHub contribution heatmap for ${gh}`}
              loading="lazy"
            />
            <p className="tracking-note">github.com/{gh}</p>
          </SectionReveal>

          <SectionReveal className="card tracking-card">
            <div className="tracking-card-head">
              <h3>LeetCode activity</h3>
              <Seal>Live</Seal>
            </div>
            <img
              src={`https://leetcard.jacoblin.cool/${lc}?theme=light&font=DM%20Sans&ext=heatmap`}
              alt={`LeetCode activity heatmap for ${lc}`}
              loading="lazy"
            />
            <p className="tracking-note">leetcode.com/{lc}</p>
          </SectionReveal>
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
