import styles from './SkillCard.module.css'

// PROPS: each card receives its own name, category, and experience.
const SkillCard = ({ name, category, experience }) => (
  <article className={styles.card}>
    <span className={styles.symbol} aria-hidden="true">{name.slice(0, 2)}</span>
    <div><h3>{name}</h3><p>{category}</p></div>
    {experience && <span className={styles.experience}>{experience}</span>}
  </article>
)

export default SkillCard
