import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'

const projects = [
  {
    id: 1,
    title: 'SIEL SPACE — Facility Reservation and Monitoring System',
    description: 'A web-based system for managing university facilities, with role-based access for Super Administrators, Office Administrators, and External Users. Features include reservations, scheduling, amenities, notifications, feedback, and administration.',
    technologies: ['Laravel', 'PHP', 'Livewire', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Git'],
    category: 'Laravel',
  },
  {
    id: 2,
    title: 'React Portfolio Website',
    description: 'My personal space on the web. A responsive portfolio with Home, About Me, Skills, Projects, and Contact sections, reusable components, interactive filters, and CSS Modules.',
    technologies: ['React.js', 'JavaScript', 'HTML', 'CSS Modules', 'Vite'],
    category: 'React',
  },
  {
    id: 3,
    title: 'React Student Portal Application',
    description: 'A student-focused React application that uses reusable components, React state, event handling, and API integration to organize the student experience.',
    technologies: ['React.js', 'JavaScript', 'CSS', 'REST API', 'Vite'],
    category: 'React',
  },
  {
    id: 4,
    title: 'Web-Based Database Applications',
    description: 'Database-driven applications with create, read, update, and delete (CRUD) functionality, forms, validation, and relational databases.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'PHP',
  },
]
const filters = ['All', 'React', 'Laravel', 'PHP']

const Projects = () => {
  // STATE: the selected category controls which project cards are rendered.
  const [filter, setFilter] = useState('All')
  const visibleProjects = projects.filter((project) => filter === 'All' || project.category === filter)

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <p className={styles.eyebrow}>03 / SELECTED PROJECTS</p>
      <div className={styles.heading}><div><h2 id="projects-title">Learning by building<span>.</span></h2><p>From classroom concepts to practical applications.</p></div><a href="https://github.com/MARKIE12-cypto" target="_blank" rel="noreferrer">GitHub profile ↗</a></div>
      <div className={styles.filters} role="group" aria-label="Filter projects">
        {filters.map((item) => (
          <button key={item} type="button" aria-pressed={filter === item} className={filter === item ? styles.active : ''} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>
      <p className={styles.count} role="status">{visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} · {filter}</p>
      <div className={styles.grid}>
        {/* PROPS: pass each project's data from the parent to the child. */}
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            category={project.category}
            number={String(project.id).padStart(2, '0')}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
