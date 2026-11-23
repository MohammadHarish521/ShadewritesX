import { FAQ } from '../data/playbook';
import './TestimonialsAndFAQ.css';

const TestimonialsAndFAQ = () => (
  <section id="faq" className="faq-section">
    <div className="container">
      <div className="section-header"><span className="section-label">Glad you asked</span><h2 className="section-title">A few questions.<br />Straight answers.</h2></div>
      <div className="faq-grid">{FAQ.map((faq) => (
        <details key={faq.id} id={faq.id === 'refunds' ? 'refund-policy' : undefined} className="faq-item" name="playbook-faq">
          <summary className="faq-question">{faq.question}</summary>
          <p className="faq-answer">{faq.answer}{faq.id === 'refunds' && <> <a href="mailto:xharish52@gmail.com">Email Harish</a>.</>}</p>
        </details>
      ))}</div>
      <p className="playbook-proof-note">No secret growth hack. Just a system you can keep showing up for.</p>
    </div>
  </section>
);

export default TestimonialsAndFAQ;
