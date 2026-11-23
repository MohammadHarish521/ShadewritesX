import { useEffect, useState } from 'react';
import { ArrowUpRight, BookOpen, Check, FileText, Linkedin, Mail, PenLine } from 'lucide-react';
import { AUTHOR, CHAPTERS, FOR, SITE } from '../data/playbook';
import HeroAnimation from './HeroAnimation';
import ResultsSection from './ResultsSection';
import TestimonialsAndFAQ from './TestimonialsAndFAQ';
import './SmartScribeLanding.css';
import './PlaybookContent.css';

const navigation = [
  { id: 'home', label: 'Overview' },
  { id: 'features', label: "What's inside" },
  { id: 'how-it-works', label: '30-day plan' },
  { id: 'about', label: 'About' },
];

const weeks = [
  { title: 'Prepare your profile', body: 'Define your intended reader, record your baseline, and give new visitors a clearer reason to follow.' },
  { title: 'Publish from your work', body: 'Turn your projects, decisions, and lessons into useful posts. Give each post a purpose.' },
  { title: 'Join the conversation', body: 'Find relevant people, contribute useful replies, and test a publishing routine you can maintain.' },
  { title: 'Review and adjust', body: 'Look at who responds and which posts start useful conversations. Choose one experiment for the next week.' },
];

const releases = [
  { name: 'First 20 copies', price: '$19', description: 'Early copies. Same playbook. Lowest price.' },
  { name: 'Next 30 copies', price: '$29', description: 'Opens when the first 20 are gone.' },
  { name: 'Standard price', price: '$39', description: 'The price after the first 50 copies.' },
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
            <button type="button" className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenuBtn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} aria-controls="mobileMenu">
              <span /><span /><span />
            </button>
          </div>
        </div>
        <nav className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenu" aria-label="Mobile navigation" inert={!mobileMenuOpen}>
          {navigation.map(({ id, label }) => <a key={id} href={`#${id}`} className="mobile-link" onClick={() => setMobileMenuOpen(false)}>{label}</a>)}
          <a href="#pricing" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section id="home" className="hero">
          <div className="container"><div className="hero-grid">
            <div className="hero-content-left">
              <div className="hero-badge"><span className="badge-dot" /><span className="hero-badge-text">For developers & builders outside the US</span></div>
              <h1 className="hero-title">Grow a US audience<br />that gets what<br />you&apos;re building.</h1>
              <p className="hero-description">Turn what you&apos;re building into a reason to follow you on X. A clearer profile, useful posts, and a plan for your next 30 days.</p>
              <div className="hero-buttons">
                <a href={`${SITE.url}/#pricing`} className="btn btn-primary">Get the playbook <ArrowUpRight size={16} aria-hidden="true" /></a>
                <a href="#sample" className="btn btn-secondary">Try a free lesson</a>
              </div>
              <p className="playbook-byline">Built from India. By <a href={AUTHOR.url} target="_blank" rel="noopener noreferrer">{AUTHOR.name} · @{AUTHOR.handle}</a>.</p>
              <div className="hero-stats">
                <div className="stat-item"><span className="stat-number">{AUTHOR.followers}</span><span className="stat-label">Followers on X</span></div>
                <div className="stat-item"><span className="stat-number">8</span><span className="stat-label">Practical chapters</span></div>
                <div className="stat-item"><span className="stat-number">30</span><span className="stat-label">Days of practice</span></div>
              </div>
            </div>
            <div className="hero-content-right"><HeroAnimation /></div>
          </div></div>
        </section>

        <ResultsSection />

        <section id="features" className="features">
          <div className="container">
            <div className="section-header"><span className="section-label">A peek inside the playbook</span><h2 className="section-title">Eight chapters.<br />Something to do in each.</h2><p className="playbook-section-description">Find your readers. Shape your profile and posts. Put it into practice over 30 days.</p></div>
            <div className="features-grid">
              {CHAPTERS.map((chapter) => (
                <article className="feature-card" key={chapter.number}>
                  <div className="feature-icon-wrapper chapter-number" aria-label={`Chapter ${chapter.number}`}>{chapter.number}</div>
                  <div className="chapter-copy">
                    <h3 className="feature-title">{chapter.title}</h3>
                    <p className="feature-description">{chapter.body}</p>
                    {'posts' in chapter && <ul className="feature-list">{chapter.posts.map((post) => <li key={post.name}>{post.name}: {post.body}</li>)}</ul>}
                    <p className="chapter-outcome"><span>You&apos;ll work on</span>{chapter.outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <div className="section-header"><span className="section-label">Your next 30 days</span><h2 className="section-title">A routine you can return to.</h2><p className="playbook-section-description">An adaptable practice plan. Start with your work and review what happens each week.</p></div>
            <div className="workflow-container">{weeks.map((week) => <article key={week.title} className="workflow-step"><div className="step-content"><h3 className="step-title">{week.title}</h3><p className="step-description">{week.body}</p></div></article>)}</div>
          </div>
        </section>

        <section id="sample" className="tech-stack">
          <div className="container">
            <div className="section-header"><span className="section-label">Try a free writing exercise</span><h2 className="section-title">Same work.<br />A clearer reason to care.</h2><p className="playbook-section-description">Take an ordinary project update. Find the useful decision inside it. Give another builder something to think about.</p></div>
            <div className="playbook-sample-grid">
              <article className="playbook-sample-card">
                <span className="section-label">An illustrative example</span><h3 className="feature-title">Turn an update into a useful post.</h3>
                <details className="playbook-original"><summary>See the first draft</summary><blockquote>Another weekend of coding. Making progress on my side project. Excited to keep building!</blockquote></details>
                <blockquote className="playbook-rewrite"><p>My signup form asked for company size before anyone had tried the product.</p><p>I&apos;m moving that question to the point where the answer helps set up their workspace.</p><p>For each signup field, I now ask: do we need this to get someone started?</p><p>What do you ask upfront that could wait?</p></blockquote>
                <p className="feature-description">The lesson: share a choice another builder can learn from.</p>
              </article>
              <div className="playbook-sample-card">
                <PenLine size={32} aria-hidden="true" /><h3 className="feature-title">Read it. Try it. Make it your own.</h3><p className="feature-description">A four-page free lesson with a worked example and a ten-minute exercise. No signup needed.</p>
                <ol className="playbook-exercise"><li>Pick something you built or changed this week.</li><li>Name the person who would find it useful.</li><li>Explain one choice and the reason behind it.</li><li>Ask a question that person could answer.</li></ol>
                <a href={`${SITE.url}/read`} className="btn btn-primary">Read the free lesson <ArrowUpRight size={16} aria-hidden="true" /></a>
                <a href={`${SITE.url}/formats`} className="playbook-text-link">Browse the 100 post formats <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container"><div className="about-grid">
            <div className="about-left"><span className="section-label">From one builder to another</span><h2 className="section-title">Built from India.<br />Written from experience.</h2><p className="feature-description">{AUTHOR.name} is a {AUTHOR.role.toLowerCase()} with {AUTHOR.followers} followers on X. The playbook brings together practical work on your profile, posts, conversations, and weekly review.</p><a href={AUTHOR.url} target="_blank" rel="noopener noreferrer" className="playbook-text-link">Meet @{AUTHOR.handle} <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            <div className="about-right"><h3 className="feature-title">Made for builders, wherever you build.</h3><ul className="playbook-audience">{FOR.map((item) => <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul></div>
          </div></div>
        </section>

        <section id="pricing" className="tech-stack">
          <div className="container">
            <div className="section-header"><span className="section-label">One playbook. Your next 30 days.</span><h2 className="section-title">A clearer plan.<br />Yours to put to work.</h2><p className="playbook-section-description">The complete playbook at every price. Same chapters. Same exercises. Only the release price changes.</p></div>
            <div className="tech-grid">{releases.map((release) => <article className="tech-card" key={release.name}><span className="tech-category">{release.name}</span><h3 className="playbook-price">{release.price}<span>USD · one time</span></h3><p className="feature-description">{release.description}</p><ul className="feature-list"><li>All eight practical chapters</li><li>Worked examples & writing exercises</li><li>Profile checklist & weekly review</li><li>Your 30-day practice plan</li></ul></article>)}</div>
            <div className="playbook-pricing-action"><a href={`${SITE.url}/#pricing`} className="btn btn-primary">Check availability & get the playbook <ArrowUpRight size={16} aria-hidden="true" /></a><p className="feature-description">One payment. Yours to keep. Current pricing and checkout are on the playbook site.</p><a className="playbook-text-link" href="#refund-policy">7-day refund policy</a></div>
          </div>
        </section>

        <TestimonialsAndFAQ />

        <section className="cta"><div className="container"><div className="cta-content"><h2 className="cta-title">Give the right people<br />a reason to follow.</h2><p className="cta-description">Start with your profile. Share something useful from your work.<br />Build a routine you can return to for the next 30 days.</p><a href={`${SITE.url}/#pricing`} className="btn btn-primary">Get the playbook <ArrowUpRight size={16} aria-hidden="true" /></a></div></div></section>
      </main>

      <footer className="footer-simple"><div className="container">
        <div className="footer-simple-content">
          <a className="logo" href="#home"><BookOpen className="logo-icon" aria-hidden="true" /><span className="logo-text">shadoWritesX</span></a>
          <nav className="footer-nav" aria-label="Footer"><a href="#features">Chapters</a><a href="#sample">Free lesson</a><a href="#pricing">Pricing</a><a href="#faq">Questions</a></nav>
          <div className="footer-socials"><a href={AUTHOR.url} target="_blank" rel="noopener noreferrer" aria-label="Harish on X"><span aria-hidden="true">𝕏</span></a><a href="https://www.linkedin.com/in/mdharish84/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a><a href="mailto:xharish52@gmail.com" aria-label="Email Harish"><Mail size={20} /></a></div>
        </div>
        <div className="footer-simple-bottom"><p>© {new Date().getFullYear()} shadoWritesX · {SITE.name}. By {AUTHOR.name}.</p></div>
      </div></footer>
    </div>
  );
};

export default SmartScribeLanding;
