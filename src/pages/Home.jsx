import { useState } from 'react'
import styles from './Home.module.css'
import profilePhoto from '../assets/mark-profile.jpg'
const Home = () => {
  // STATE: React remembers this message between renders.
  const [message, setMessage] = useState('A little curiosity. A lot of possibilities.')

  // ARROW FUNCTION + EVENT HANDLER: clicking the button updates the UI.
  const handleWelcome = () => {
    setMessage('Thank you for visiting my portfolio! Let’s build something meaningful.')
  }

  return (
    <section id="home" className={styles.home} aria-labelledby="home-title">
      <div className={styles.intro}>
        <p className={styles.eyebrow}><span /> BSIT STUDENT · CLSU</p>
        <h1 id="home-title">Hi, I’m Mark Aaron<span className={styles.name}>E. Patoc<span className={styles.dot}>.</span></span></h1>
        <p className={styles.role}>Turning ideas into <span>digital experiences.</span></p>
        <p className={styles.description}>Aspiring Web Developer / Front-End Developer / Software Developer. I bring together code and creativity to build thoughtful, useful things for the web.</p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>View projects <span aria-hidden="true">↗</span></a>
          <a href="#contact" className={styles.secondary}>Contact me <span aria-hidden="true">→</span></a>
        </div>
        <div className={styles.welcome}>
          <button type="button" onClick={handleWelcome}>Say hello <span aria-hidden="true">✦</span></button>
          <p role="status">{message}</p>
        </div>
      </div>
      <div className={styles.visual} aria-label="Developer profile card">
        <div className={styles.orbit} aria-hidden="true" />
        <div className={styles.profile}>
          <div className={styles.windowBar}><span /><span /><span /><small>developer.profile</small></div>
          <div className={styles.profileContent}>
            <img className={styles.profilePhoto} src={profilePhoto} alt="Mark Aaron E. Patoc smiling at a café" width={4176} height={2784} fetchPriority="high" />
            <p className={styles.profileLabel}>CODE. CREATE. KEEP LEARNING.</p>
            <h2>Mark Aaron E. Patoc</h2>
            <p className={styles.location}>Nueva Ecija, Philippines</p>
            <div className={styles.code}><p><span>const</span> developer = {'{'}</p><p>  focus: <em>"Web & software"</em>,</p><p>  mindset: <em>"Always learning"</em></p><p>{'};'}</p></div>
            <div className={styles.profileBottom}><span><b /> Building my next chapter</span><span>↗</span></div>
          </div>
        </div>
        <span className={styles.floatingTag}>✦ &nbsp; Developer + Creative</span>
      </div>
      <div className={styles.bottomLine}><span>BASED IN NUEVA ECIJA, PHILIPPINES</span><a href="#about">A little more about me ↓</a></div>
    </section>
  )
}

export default Home
