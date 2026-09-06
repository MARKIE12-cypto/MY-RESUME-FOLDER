import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#home" className={styles.logo} onClick={closeMenu} aria-label="Mark Aaron Patoc home">MAP<span>.</span></a>
        <button className={styles.menuButton} type="button" aria-expanded={isOpen} aria-controls="navigation-links" onClick={() => setIsOpen((previous) => !previous)}>
          {isOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
        <div id="navigation-links" className={styles.links + (isOpen ? ' ' + styles.open : '')}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About me</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu} className={styles.contact}>Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
