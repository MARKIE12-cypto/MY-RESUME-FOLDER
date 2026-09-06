import { useState } from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  // STATE: controlled inputs keep their values in React.
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [feedback, setFeedback] = useState('')

  // onChange passes the input event to this arrow function.
  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    setFeedback('')
  }

  // Demo only: prevent a page reload and display local feedback.
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setFeedback('Please enter a name and message with more than just spaces.')
      return
    }
    setFeedback('Thank you, ' + form.name.trim() + '! Your demo message has been submitted locally. No message was sent.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>04 / GET IN TOUCH</p>
        <h2 id="contact-title">Have an idea?<br /><span>Let’s talk.</span></h2>
        <p>Whether it’s a project, a learning opportunity, or just a hello — I’d love to hear from you.</p>
        <dl className={styles.details}>
          <div><dt>EMAIL</dt><dd><a href="mailto:markieparloc@gmail.com">markieparloc@gmail.com ↗</a></dd></div>
          <div><dt>PHONE</dt><dd><a href="tel:+639661778432">0966 177 8432</a></dd></div>
          <div><dt>GITHUB</dt><dd><a href="https://github.com/MARKIE12-cypto" target="_blank" rel="noreferrer">MARKIE12-cypto ↗</a></dd></div>
        </dl>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Leave a message</h3>
        <p className={styles.note}>Assignment demo — this form shows a local confirmation. To reach me, use my email link.</p>
        <div className={styles.row}>
          <label htmlFor="contact-name">Name<input id="contact-name" name="name" autoComplete="name" placeholder="Your name" value={form.name} onChange={handleChange} required maxLength={80} /></label>
          <label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required maxLength={254} /></label>
        </div>
        <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" placeholder="Tell me what’s on your mind…" rows={5} value={form.message} onChange={handleChange} required maxLength={2000} /></label>
        <div className={styles.formBottom}><small>{form.message.length} / 2000 characters</small><button type="submit">Submit demo <span aria-hidden="true">↗</span></button></div>
        <p className={styles.feedback} role="status">{feedback}</p>
      </form>
    </section>
  )
}

export default Contact
