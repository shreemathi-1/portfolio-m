import { useState } from 'react'
import SectionReveal from './SectionReveal'
import Seal from './Seal'
import CredentialCard from './CredentialCard'
import { certifications } from '../data/portfolioData'
import { FiX } from 'react-icons/fi'

export default function Certifications() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow">Credentials</p>
          <h2>Certifications</h2>
          <p>Each card is the certificate itself — click one to see it full size.</p>
        </SectionReveal>

        <div className="cert-grid">
          {certifications.map((c) => (
            <CredentialCard
              key={c.id}
              image={c.image}
              eyebrow={c.issuer}
              title={c.title}
              meta={c.date}
              onOpen={() => setOpen({ label: `${c.issuer} — ${c.title}`, image: c.image, title: c.title })}
            />
          ))}
        </div>
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-head">
              <Seal>{open.label}</Seal>
              <button className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close">
                <FiX />
              </button>
            </div>
            <img src={open.image} alt={`${open.title} certificate`} />
          </div>
        </div>
      )}
    </section>
  )
}
