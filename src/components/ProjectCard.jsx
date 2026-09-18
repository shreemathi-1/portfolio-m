import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import Seal from './Seal'

export default function ProjectCard({ project }) {
  const media = project.video ? [{ type: 'video', src: project.video }, ...project.screenshots.map((s) => ({ type: 'image', src: s }))] : project.screenshots.map((s) => ({ type: 'image', src: s }))
  const [idx, setIdx] = useState(0)
  const current = media[idx] || media[0]

  const prev = () => setIdx((i) => (i - 1 + media.length) % media.length)
  const next = () => setIdx((i) => (i + 1) % media.length)

  return (
    <div className="card project-card">
      <div className="project-card-inner">
        <div className="project-gallery">
          {current?.type === 'video' ? (
            <video src={current.src} controls poster={project.screenshots[0]} />
          ) : (
            <img src={current?.src} alt={`${project.name} screenshot ${idx + 1}`} />
          )}
          {media.length > 1 && (
            <>
              <button className="gallery-nav prev" onClick={prev} aria-label="Previous media"><FiChevronLeft /></button>
              <button className="gallery-nav next" onClick={next} aria-label="Next media"><FiChevronRight /></button>
              <div className="gallery-dots">
                {media.map((_, i) => (
                  <button key={i} className={i === idx ? 'active' : ''} onClick={() => setIdx(i)} aria-label={`Show media ${i + 1}`} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="project-body">
          {project.featured && <span className="project-featured-tag">Featured</span>}
          <h3>{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
          <p className="project-desc">{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span className="tech-pill" key={t}>{t}</span>
            ))}
          </div>
          <div className="project-links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                <FiExternalLink /> Live demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                <FaGithub /> Source
              </a>
            )}
           
          </div>
        </div>
      </div>
    </div>
  )
}
