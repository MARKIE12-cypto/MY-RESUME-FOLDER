import styles from './ProjectCard.module.css'

// PROPS: the Projects parent supplies the data for this reusable child.
const ProjectCard = ({ title, description, technologies, category, number }) => (
  <article className={styles.card}>
    <div className={styles.top}><span className={styles.number}>{number}</span><span className={styles.category}>{category}</span></div>
    <h3>{title}</h3>
    <p>{description}</p>
    <ul className={styles.technologies} aria-label={title + ' technologies'}>
      {technologies.map((technology) => <li key={technology}>{technology}</li>)}
    </ul>
  </article>
)

export default ProjectCard
