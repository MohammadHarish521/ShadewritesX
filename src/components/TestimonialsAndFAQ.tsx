import { useEffect, useRef } from 'react';
import './TestimonialsAndFAQ.css';

const testimonials = [
  {
    content: "ShadeWritesX completely transformed my LinkedIn presence. I went from 500 to 15,000 followers in just 3 months. Their voice matching is uncanny.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
    initials: "SJ"
  },
  {
    content: "The best investment for my personal brand. The articles are well-researched, insightful, and always delivered on time.",
    author: "Michael Ross",
    role: "Founder, Stratos AI",
    initials: "MR"
  },
  {
    content: "I was skeptical about ghostwriting, but ShadeWritesX captured my tone perfectly. Now I have more time to focus on building my business.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Bloom",
    initials: "ER"
  },
  {
    content: "Their newsletter service is top-notch. Open rates have doubled since we started working with them.",
    author: "David Chen",
    role: "VP of Sales, Nexus",
    initials: "DC"
  },
  {
    content: "Professional, discreet, and incredibly talented writers. Highly recommended for any executive looking to scale their influence.",
    author: "Amanda White",
    role: "COO, Vertex",
    initials: "AW"
  }
];

const faqs = [
  {
    question: "How does the ghostwriting process work?",
    answer: "We start with a discovery call to understand your voice and goals. Then, we conduct interviews to gather your insights, draft content, and refine it based on your feedback until it's perfect."
  },
  {
    question: "Will the content sound like me?",
    answer: "Absolutely. We specialize in voice matching. We analyze your previous writing and speaking engagements to ensure every piece feels authentic to you."
  },
  {
    question: "alertIs the service confidential?",
    answer: "Yes, 100%. We sign NDAs with all our clients. Your audience will never know you didn't write the content yourself."
  },
  {
    question: "What platforms do you support?",
    answer: "We primarily focus on LinkedIn, Twitter/X, and long-form platforms like Medium and Substack, but we can adapt to any channel you need."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, we offer unlimited revisions until you are completely satisfied with the content."
  }
];

const TestimonialsAndFAQ = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    }, []);

    function addAnimation() {
        const scroller = scrollerRef.current;
        if (scroller) {
            scroller.setAttribute("data-animated", "true");
            const scrollerInner = scroller.querySelector(".scroller-inner");
             if(scrollerInner) {
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
             }
        }
    }

  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Success Stories</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="scroller" ref={scrollerRef}>
            <ul className="scroller-inner">
              {testimonials.map((testimonial, index) => (
                <li key={index} className="testimonial-card">
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.initials}</div>
                    <div className="author-info">
                        <span className="author-name">{testimonial.author}</span>
                        <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">FAQ</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                    {faq.question}
                </div>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsAndFAQ;
