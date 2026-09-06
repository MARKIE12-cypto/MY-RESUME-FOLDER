import styles from './About.module.css'

const About = () => (
  <section id="about" className={styles.about} aria-labelledby="about-title">
    <div>
      <p className={styles.eyebrow}>01 / ABOUT ME</p>
      <h2 id="about-title">A developer’s mindset.<br /><span>A creative perspective.</span></h2>
      <p>I’m Mark, a Bachelor of Science in Information Technology student at Central Luzon State University. I’m interested in web and software development, and I enjoy turning everyday problems into practical applications.</p>
      <p>My experience includes PHP, MySQL, Laravel, Livewire, JavaScript, React, and Python. Beyond code, I explore video editing, photography, graphic design, and photo editing — bringing a visual perspective to the things I build.</p>
      <a href="https://github.com/MARKIE12-cypto" target="_blank" rel="noreferrer">Find me on GitHub ↗</a>
    </div>
    <aside className={styles.education}>
      <span className={styles.icon} aria-hidden="true">↗</span>
      <p className={styles.eyebrow}>CURRENTLY LEARNING AT</p>
      <h3>Central Luzon<br />State University</h3>
      <p>Bachelor of Science in<br />Information Technology</p>
      <div><span>Expected graduation</span><strong>2026–2027</strong></div>
      <small>Nueva Ecija, Philippines</small>
    </aside>
  </section>
)

export default About
