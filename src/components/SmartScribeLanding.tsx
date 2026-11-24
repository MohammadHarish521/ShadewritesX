import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, FileText, Linkedin, Mail } from 'lucide-react';
import { AUTHOR, FOR, PROCESS, SERVICES, SITE } from '../data/services';
import HeroAnimation from './HeroAnimation';
import ResultsSection from './ResultsSection';
import TestimonialsAndFAQ from './TestimonialsAndFAQ';
import './SmartScribeLanding.css';
import './PlaybookContent.css';

const navigation = [
  { id: 'home', label: 'Overview' },
  { id: 'features', label: 'Services' },
  { id: 'how-it-works', label: 'Process' },
  { id: 'about', label: 'About' },
];

const engagement = [
  {
    name: 'The writing',
    description: 'Profile, posts, and replies drafted from your work and reviewed by you.',
  },
  {
    name: 'The cadence',
    description: 'A publishing rhythm you can keep, with a weekly look at what got a response.',
  },
  {
    name: 'The call',
    description: 'Thirty minutes to see if your account and the readers you want are a fit.',
  },
];

const SmartScribeLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const visible = navigation.filter(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 180;
      });
      setActiveSection(visible[visible.length - 1]?.id ?? 'home');
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        document.getElementById('mobileMenuBtn')?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 769px)');
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="landing-page">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <a className="logo" href="#home" onClick={() => setMobileMenuOpen(false)} aria-label="shadoWritesX home">
              <FileText className="logo-icon" aria-hidden="true" />
              <span className="logo-text">shadoWritesX</span>
            </a>
            <nav className="nav-links" aria-label="Primary navigation">
              {navigation.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className={`nav-link ${activeSection === id ? 'active' : ''}`} aria-current={activeSection === id ? 'location' : undefined}>{label}</a>
              ))}
            </nav>
            <a href={SITE.bookingUrl} className="btn btn-primary nav-cta" target="_blank" rel="noopener noreferrer">Book a call</a>
            <button type="button" className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenuBtn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} aria-controls="mobileMenu">
              <span /><span /><span />
            </button>
          </div>
        </div>
        <nav className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenu" aria-label="Mobile navigation" inert={!mobileMenuOpen}>
          {navigation.map(({ id, label }) => <a key={id} href={`#${id}`} className="mobile-link" onClick={() => setMobileMenuOpen(false)}>{label}</a>)}
          <a href={SITE.bookingUrl} className="btn btn-primary mobile-book" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Book a call <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section id="home" className="hero">
          <div className="container"><div className="hero-grid">
            <div className="hero-content-left">
              <div className="hero-badge"><span className="badge-dot" /><span className="hero-badge-text">Ghostwriting for founders on X</span></div>
              <h1 className="hero-title">Your account,<br />written in<br />your voice.</h1>
              <p className="hero-description">I write the posts, shape the profile, and keep a cadence so the right people find what you are building.</p>
              <div className="hero-buttons">
                <a href={SITE.bookingUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Book a call <ArrowUpRight size={16} aria-hidden="true" /></a>
                <a href="#proof" className="btn btn-secondary">See the work</a>
              </div>
              <p className="playbook-byline">Written by <a href={AUTHOR.url} target="_blank" rel="noopener noreferrer">{AUTHOR.name} · @{AUTHOR.handle}</a>, a {AUTHOR.role.toLowerCase()}.</p>
              <div className="hero-stats">
                <div className="stat-item"><span className="stat-number">{AUTHOR.followers}</span><span className="stat-label">Followers on X</span></div>
                <div className="stat-item"><span className="stat-number">357.4K</span><span className="stat-label">Impressions, one client month</span></div>
                <div className="stat-item"><span className="stat-number">2K</span><span className="stat-label">New follows, that month</span></div>
              </div>
            </div>
            <div className="hero-content-right"><HeroAnimation /></div>
          </div></div>
        </section>

        <ResultsSection />

        <section id="features" className="features">
          <div className="container">
            <div className="section-header"><span className="section-label">Ghostwriting</span><h2 className="section-title">I write the account.<br />You keep the voice.</h2><p className="playbook-section-description">Profile, posts, replies, and a weekly review. The work is yours to approve before anyone else sees it.</p></div>
            <div className="features-grid">
              {SERVICES.map((service) => (
                <article className="feature-card" key={service.number}>
                  <div className="feature-icon-wrapper chapter-number" aria-hidden="true">{service.number}</div>
                  <div className="chapter-copy">
                    <h3 className="feature-title">{service.title}</h3>
                    <p className="feature-description">{service.body}</p>
                    <ul className="feature-list">{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <div className="section-header"><span className="section-label">How we work</span><h2 className="section-title">From a call to a cadence.</h2><p className="playbook-section-description">You stay in the drafts. I keep the account from going quiet.</p></div>
            <div className="workflow-container">{PROCESS.map((step) => <article key={step.title} className="workflow-step"><div className="step-content"><h3 className="step-title">{step.title}</h3><p className="step-description">{step.body}</p></div></article>)}</div>
          </div>
        </section>

        <section id="sample" className="tech-stack">
          <div className="container">
            <div className="section-header"><span className="section-label">A writing sample</span><h2 className="section-title">Same update.<br />A reason to follow.</h2><p className="playbook-section-description">An ordinary project note, rewritten the way I would draft it for a founder. Illustrative, not a client post.</p></div>
            <div className="playbook-sample-grid">
              <article className="playbook-sample-card">
                <span className="section-label">Before</span>
                <h3 className="feature-title">The note they would have posted.</h3>
                <blockquote className="playbook-original-quote">Another weekend of coding. Making progress on my side project. Excited to keep building!</blockquote>
                <p className="feature-description">Nothing for a reader to use, and no reason to follow the account.</p>
              </article>
              <article className="playbook-sample-card">
                <span className="section-label">After</span>
                <h3 className="feature-title">The draft I would send back.</h3>
                <blockquote className="playbook-rewrite"><p>My signup form asked for company size before anyone had tried the product.</p><p>I&apos;m moving that question to the point where the answer helps set up their workspace.</p><p>For each signup field, I now ask: do we need this to get someone started?</p><p>What do you ask upfront that could wait?</p></blockquote>
                <p className="feature-description">You mark it up. If it does not sound like you, it does not publish.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container"><div className="about-grid">
            <div className="about-left"><span className="section-label">Who writes</span><h2 className="section-title">One writer.<br />Your name on the posts.</h2><p className="feature-description">{AUTHOR.name} is a {AUTHOR.role.toLowerCase()} with {AUTHOR.followers} followers on X. He writes for founders and builders who want their work understood, including by US readers.</p><a href={AUTHOR.url} target="_blank" rel="noopener noreferrer" className="playbook-text-link">Read @{AUTHOR.handle} on X <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            <div className="about-right"><h3 className="feature-title">A fit when this is you.</h3><ul className="playbook-audience">{FOR.map((item) => <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul></div>
          </div></div>
        </section>

        <section id="booking" className="tech-stack">
          <div className="container">
            <div className="section-header"><span className="section-label">Work together</span><h2 className="section-title">Start with a call,<br />not a content calendar.</h2><p className="playbook-section-description">We look at your account and decide if I should write it. No package page, and no follower guarantee.</p></div>
            <div className="tech-grid">{engagement.map((item) => <article className="tech-card" key={item.name}><span className="tech-category">{item.name}</span><p className="feature-description">{item.description}</p></article>)}</div>
            <div className="playbook-pricing-action"><a href={SITE.bookingUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Book a 30-minute call <ArrowUpRight size={16} aria-hidden="true" /></a><p className="feature-description">Or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p></div>
          </div>
        </section>

        <TestimonialsAndFAQ />

        <section className="cta"><div className="container"><div className="cta-content"><h2 className="cta-title">Hand me the account.<br />Keep the voice.</h2><p className="cta-description">Tell me who you want reading and what you are building.<br />I will tell you if I can write it.</p><a href={SITE.bookingUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Book a call <ArrowUpRight size={16} aria-hidden="true" /></a></div></div></section>
      </main>

      <footer className="footer-simple"><div className="container">
        <div className="footer-simple-content">
          <a className="logo" href="#home"><FileText className="logo-icon" aria-hidden="true" /><span className="logo-text">shadoWritesX</span></a>
          <nav className="footer-nav" aria-label="Footer"><a href="#features">Services</a><a href="#how-it-works">Process</a><a href="#proof">Results</a><a href="#faq">Questions</a></nav>
          <div className="footer-socials"><a href={AUTHOR.url} target="_blank" rel="noopener noreferrer" aria-label="Harish on X"><span aria-hidden="true">𝕏</span></a><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a><a href={`mailto:${SITE.email}`} aria-label="Email Harish"><Mail size={20} /></a></div>
        </div>
        <div className="footer-simple-bottom"><p>© {new Date().getFullYear()} shadoWritesX. Ghostwriting by {AUTHOR.name}.</p></div>
      </div></footer>
    </div>
  );
};

export default SmartScribeLanding;
