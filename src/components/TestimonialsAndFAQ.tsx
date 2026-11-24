import { FAQ, SITE } from '../data/services';
import './TestimonialsAndFAQ.css';

const TestimonialsAndFAQ = () => (
  <section id="faq" className="faq-section">
    <div className="container">
      <div className="section-header"><span className="section-label">Before you book</span><h2 className="section-title">Questions about<br />the ghostwriting.</h2></div>
      <div className="faq-grid">{FAQ.map((faq) => (
        <details key={faq.id} className="faq-item" name="service-faq">
          <summary className="faq-question">{faq.question}</summary>
          <p className="faq-answer">{faq.answer}{faq.id === 'start' && <> <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">Book the call</a>.</>}</p>
        </details>
      ))}</div>
      <p className="playbook-proof-note">The numbers above are the evidence. If you want the account written, book the call.</p>
    </div>
  </section>
);

export default TestimonialsAndFAQ;
