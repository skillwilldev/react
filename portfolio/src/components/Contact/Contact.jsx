import { useState } from 'react';
import { socials } from '@/data/socials';
import Button from '../Button/Button';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name';
  if (!form.email.trim()) {
    errors.email = 'Please enter your email';
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!form.message.trim()) errors.message = 'Please enter a message';
  return errors;
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // sending to backend
      setStatus('success');
      setForm(INITIAL_FORM);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="section-title">
          <span className="section-title__hash">#</span> get-in-touch
        </h2>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <span className="contact__error">{errors.name}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <span className="contact__error">{errors.email}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <span className="contact__error">{errors.message}</span>}
            </div>

            <Button as="button" type="submit" variant="primary">
              send
            </Button>

            {status === 'success' && (
              <p className="contact__success" role="status">
                Project under development. Email sending is temporarily disabled.
              </p>
            )}
          </form>

          <ul className="contact__socials">
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.url} target="_blank" rel="noreferrer" className="contact__social-link">
                  <span className="contact__social-label">{social.label}</span>
                  <span className="contact__social-value">{social.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;