import SectionReveal from './SectionReveal'
import { FiMail, FiDownload, FiPhone } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { profile, contact } from '../data/portfolioData'

export default function Contact() {
  const { socials } = profile
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow"><span className="num">08</span> Contact</p>
        </SectionReveal>

        <SectionReveal className="card contact-card">
          <h2>{contact.heading}</h2>
          <p>{contact.message}</p>
          <div className="contact-links">
            <a href={`mailto:${socials.email}`} className="btn btn-primary">
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
            <a href={profile.resumeFile} download className="btn btn-outline">
              <FiDownload /> Resume
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
