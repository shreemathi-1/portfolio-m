import SectionReveal from './SectionReveal'
import { techBadges } from '../data/portfolioData'

export default function TechBadges() {
  return (
    <div className="container" style={{ marginTop: -16, marginBottom: 72 }}>
      <SectionReveal className="badges-row">
        {techBadges.map((b) => (
          <img
            key={b.slug}
            src={`https://img.shields.io/badge/${encodeURIComponent(b.name)}-${b.color}?style=for-the-badge&logo=${b.slug}&logoColor=${b.logoColor}`}
            alt={b.name}
            loading="lazy"
          />
        ))}
      </SectionReveal>
    </div>
  )
}
