import { useState } from 'react'
import SkillCard from '../components/SkillCard'
import styles from './Skills.module.css'

const skills = [
  { name: 'HTML', category: 'Front-End', group: 'Web Development' },
  { name: 'CSS', category: 'Front-End', group: 'Web Development' },
  { name: 'JavaScript', category: 'Front-End', group: 'Web Development' },
  { name: 'React.js', category: 'Front-End', group: 'Web Development' },
  { name: 'PHP', category: 'Back-End', group: 'Web Development', experience: '2 years' },
  { name: 'Laravel', category: 'Back-End', group: 'Web Development', experience: '6 months' },
  { name: 'Livewire', category: 'Back-End', group: 'Web Development', experience: '6 months' },
  { name: 'MySQL', category: 'Database', group: 'Web Development', experience: '2 years' },
  { name: 'Python', category: 'Programming', group: 'Programming', experience: '1 year' },
  { name: 'Git / GitHub', category: 'Tools', group: 'Tools' },
  { name: 'Video Editing', category: 'Creative Skills', group: 'Creative' },
  { name: 'Photography', category: 'Creative Skills', group: 'Creative' },
  { name: 'Graphic Design', category: 'Creative Skills', group: 'Creative' },
  { name: 'Photo Editing', category: 'Creative Skills', group: 'Creative' },
]
const categories = ['All', 'Web Development', 'Programming', 'Tools', 'Creative']

const Skills = () => {
  const [category, setCategory] = useState('All')
  const visibleSkills = skills.filter((skill) => category === 'All' || skill.group === category)

  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-title">
      <p className={styles.eyebrow}>02 / MY TOOLKIT</p>
      <div className={styles.heading}><h2 id="skills-title">The skills behind the work<span>.</span></h2><p>A mix of logic, design, and hands-on learning.</p></div>
      <div className={styles.filters} role="group" aria-label="Filter skills">
        {categories.map((item) => (
          <button key={item} type="button" aria-pressed={category === item} className={category === item ? styles.active : ''} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <p className={styles.count} role="status">{visibleSkills.length} skills · {category}</p>
      <div className={styles.grid}>
        {visibleSkills.map((skill) => <SkillCard key={skill.name} name={skill.name} category={skill.category} experience={skill.experience} />)}
      </div>
    </section>
  )
}

export default Skills
