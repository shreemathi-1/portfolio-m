import SectionReveal from './SectionReveal'
import Seal from './Seal'
import { tracking } from '../data/portfolioData'

export default function Tracking() {
  const { githubUsername: gh, leetcodeUsername: lc } = tracking

  return (
    <section className="section" id="tracking">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow"><span className="num">06</span> Tracking</p>
          <h2>Live coding activity</h2>
          <p>Pulled live from GitHub and LeetCode — not a static screenshot, so it stays current on its own.</p>
        </SectionReveal>

        <div className="tracking-grid">
          <SectionReveal className="card tracking-card">
            <div className="tracking-card-head">
              <h3>GitHub activity</h3>
              <Seal>Live</Seal>
            </div>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${gh}&show_icons=true&theme=default&hide_border=true&bg_color=FFFDFA&title_color=1C3D6E&icon_color=1C3D6E&text_color=3D4658`}
              alt="GitHub stats"
              loading="lazy"
            />
            <p className="tracking-note">github.com/{gh}</p>
          </SectionReveal>

          <SectionReveal className="card tracking-card">
            <div className="tracking-card-head">
              <h3>GitHub streak</h3>
              <Seal>Live</Seal>
            </div>
            <img
              src={`https://streak-stats.demolab.com?user=${gh}&theme=default&hide_border=true&background=FFFDFA&ring=1C3D6E&fire=B06A10&currStreakLabel=1C3D6E`}
              alt="GitHub streak stats"
              loading="lazy"
            />
            <p className="tracking-note">Updated automatically each day</p>
          </SectionReveal>

          <SectionReveal className="card tracking-card">
            <div className="tracking-card-head">
              <h3>Top languages</h3>
              <Seal>Live</Seal>
            </div>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${gh}&layout=compact&theme=default&hide_border=true&bg_color=FFFDFA&title_color=1C3D6E&text_color=3D4658`}
              alt="Top languages"
              loading="lazy"
            />
            <p className="tracking-note">By bytes committed, last 6 months</p>
          </SectionReveal>

          <SectionReveal className="card tracking-card">
            <div className="tracking-card-head">
              <h3>LeetCode progress</h3>
              <Seal>Live</Seal>
            </div>
            <img
              src={`https://leetcard.jacoblin.cool/${lc}?theme=light&font=Source%20Sans%20Pro&ext=heatmap`}
              alt="LeetCode stats"
              loading="lazy"
            />
            <p className="tracking-note">leetcode.com/{lc}</p>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
