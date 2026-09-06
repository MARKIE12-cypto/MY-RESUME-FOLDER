import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import styles from './App.module.css'
import { useEffect, useRef } from 'react'

const App = () => {
  const mainRef = useRef(null)

  useEffect(() => {
    // Reveal each section once, when it enters the viewport.
    if (!('IntersectionObserver' in window)) return

    const sections = [...mainRef.current.children]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeIn)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })

    sections.forEach((section) => observer.observe(section))
    return () => {
      observer.disconnect()
      sections.forEach((section) => section.classList.remove(styles.fadeIn))
    }
  }, [])

  return (
  <>
    <a className={styles.skipLink} href="#main">Skip to content</a>
    <Navbar />
    <main id="main" className={styles.main} ref={mainRef}>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <footer className={styles.footer}>
      <a href="#home" className={styles.signature}>MAP<span>.</span></a>
      <p>© {new Date().getFullYear()} Mark Aaron E. Patoc. Built with React & a little curiosity.</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  </>
  )
}

export default App
