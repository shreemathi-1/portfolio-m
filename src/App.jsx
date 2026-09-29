import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import StatsBar from './components/StatsBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Certifications from './components/Certifications'
import Highlights from './components/Highlights'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <StatsBar /> */}
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Certifications />
      <Highlights />
      <Contact />
      <Footer />
    </>
  )
}
