import { useState, useEffect } from 'react'
import SectionReveal from './SectionReveal'
import { FiMail, FiDownload, FiPhone } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { profile, contact } from '../data/portfolioData'

// Arriving via the nav's "Resume" link (#resume) highlights the Resume button;
// reaching Contact any other way leaves "Email me" as the highlighted one.
function useResumeFocus() {
  const [hash, setHash] = useState(() =>
    typeof window === 'undefined' ? '' : window.location.hash
  )

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash === '#resume'
}

export default function Contact() {
  const { socials } = profile
  const resumeFocused = useResumeFocus()

  return (
    <section className="section section-dark" id="contact">
      {/* Sits at the top of Contact, so #resume lands in the same place as
          #contact while telling this section which button to highlight. */}
      <span id="resume" className="contact-anchor" aria-hidden="true" />
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow">Contact</p>
        </SectionReveal>

        <SectionReveal className="card contact-card">
          <h2>{contact.heading}</h2>
          <p>{contact.message}</p>
          <div className="contact-links">
            <a
              href={`mailto:${socials.email}`}
              className={`btn ${resumeFocused ? 'btn-outline' : 'btn-primary'}`}
            >
              <FiMail /> Email me
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={socials.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FaGithub /> GitHub
            </a>
            <a href={socials.leetcode} target="_blank" rel="noreferrer" className="btn btn-outline">
              <SiLeetcode /> LeetCode
            </a>
            <a href={`tel:${socials.phone.replace(/\s/g, '')}`} className="btn btn-outline">
              <FiPhone /> Call
            </a>
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noreferrer"
              className={`btn ${resumeFocused ? 'btn-primary' : 'btn-outline'}`}
            >
              <FiDownload /> Resume
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
