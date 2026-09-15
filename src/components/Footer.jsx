import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
        <div className="footer-links">
          <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.socials.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
