import { useEffect, useRef, useState } from 'react';
import './SmartScribeLanding.css';

const SmartScribeLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Refs for animations
  const heroStatsRef = useRef<HTMLDivElement>(null);
  
  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'features', 'how-it-works', 'about'];
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                (entry.target as HTMLElement).style.opacity = '1';
                (entry.target as HTMLElement).style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.feature-card, .workflow-step, .tech-card');
    elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(20px)';
        htmlEl.style.transition = `all 0.6s cubic-bezier(0.22, 1, 0.36, 1)`; 
        observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Stats Counter
  useEffect(() => {
    const animateCounter = (element: Element, target: number, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toString();
            }
        }, 16);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number, .stat-value');
                statNumbers.forEach(stat => {
                    const targetText = stat.textContent;
                    const targetNumber = parseInt(targetText || '0');
                    if (!isNaN(targetNumber) && targetNumber > 0) {
                        animateCounter(stat, targetNumber);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (heroStatsRef.current) statsObserver.observe(heroStatsRef.current);

    return () => statsObserver.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
        const navbarHeight = 80;
        const targetPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L36 12L20 20L4 12L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 12V28L20 36L36 28V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 20V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="logo-text">SmartScribe</span>
            </div>
            <div className="nav-links">
              {['home', 'features', 'how-it-works', 'about'].map(item => (
                <a 
                    key={item} 
                    href={`#${item}`} 
                    className={`nav-link ${activeSection === item ? 'active' : ''}`}
                    onClick={(e) => scrollToSection(e, item)}
                >
                    {item.replace(/-/g, ' ')}
                </a>
              ))}
            </div>
            <button 
                className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} 
                id="mobileMenuBtn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
              <span style={mobileMenuOpen ? {transform: 'rotate(45deg) translateY(6px)'} : {}}></span>
              <span style={mobileMenuOpen ? {opacity: 0} : {}}></span>
              <span style={mobileMenuOpen ? {transform: 'rotate(-45deg) translateY(-6px)'} : {}}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenu">
        {['home', 'features', 'how-it-works', 'about'].map(item => (
            <a 
                key={item} 
                href={`#${item}`} 
                className="mobile-link"
                onClick={(e) => scrollToSection(e, item)}
            >
                {item.charAt(0).toUpperCase() + item.slice(1).replace(/-/g, ' ')}
            </a>
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span className="hero-badge-text">Decentralized Decision Intelligence</span>
            </div>
            <h1 className="hero-title">
              Traceability &<br/>Reasoning Platform
            </h1>
            <p className="hero-description">
              SmartScribe transforms unstructured audio into structured intelligence. 
              Advanced speech recognition and NLP reasoning for academic and enterprise precision.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn btn-secondary">
                View Documentation
              </button>
            </div>
            <div className="hero-stats" ref={heroStatsRef}>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Core Modules</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Languages</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Capabilities</span>
            <h2 className="section-title">Technical Specifications</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="23"/>
                  <line x1="8" y1="23" x2="16" y2="23"/>
                </svg>
              </div>
              <div>
                <h3 className="feature-title">Acoustic Processing</h3>
                <p className="feature-description">
                  High-fidelity speech-to-text conversion supporting MP3, WAV, and M4A formats with real-time ingestion capabilities.
                </p>
                <ul className="feature-list">
                  <li>Multi-format Support</li>
                  <li>Real-time Latency</li>
                  <li>Noise Cancellation</li>
                </ul>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div>
                <h3 className="feature-title">Semantic Reasoning</h3>
                <p className="feature-description">
                  NLP-driven summarization engine that extracts core logic and arguments from unstructured discourse.
                </p>
                <ul className="feature-list">
                  <li>Abstractive Summarization</li>
                  <li>Context Retention</li>
                  <li>Key Entity Extraction</li>
                </ul>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 6 2 18 2 18 9"/>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                  <rect x="6" y="14" width="12" height="8"/>
                </svg>
              </div>
              <div>
                <h3 className="feature-title">Document Synthesis</h3>
                <p className="feature-description">
                   Automated generation of structured PDF artifacts suitable for academic and professional distribution.
                </p>
                <ul className="feature-list">
                  <li>LaTeX-style Formatting</li>
                  <li>Structure Enforcement</li>
                  <li>Vector-ready Output</li>
                </ul>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div>
                <h3 className="feature-title">Global Localization</h3>
                <p className="feature-description">
                  Native support for 10+ languages ensuring cross-border applicability and content localization.
                </p>
                <ul className="feature-list">
                  <li>UTF-8 Compliance</li>
                  <li>Locale Detection</li>
                  <li>Multi-script Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
             <span className="section-label">Workflow</span>
             <h2 className="section-title">Processing Pipeline</h2>
          </div>
          <div className="workflow-container">
            <div className="workflow-step">
              <div className="step-content">
                <h3 className="step-title">Ingestion</h3>
                <p className="step-description">
                  Upload raw audio artifacts to the secure processing buffer.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-content">
                <h3 className="step-title">Transcription</h3>
                <p className="step-description">
                  AI engine resolves phonemes to graph memes with temporal alignment.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-content">
                <h3 className="step-title">Synthesis</h3>
                <p className="step-description">
                  Semantic reduction and logical restructuring of content.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-content">
                <h3 className="step-title">Distribution</h3>
                <p className="step-description">
                  Compile finalized artifacts into portable document format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Infrastructure</span>
            <h2 className="section-title">System Architecture</h2>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-category">Frontend Logic</div>
              <div className="tech-items">
                <span className="tech-badge">React.js</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">Vite</span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-category">Backend Core</div>
              <div className="tech-items">
                <span className="tech-badge">Python 3.10</span>
                <span className="tech-badge">Flask API</span>
                <span className="tech-badge">REST</span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-category">Intelligence</div>
              <div className="tech-items">
                <span className="tech-badge">OpenAI Whisper</span>
                <span className="tech-badge">Transformers</span>
                <span className="tech-badge">NLTK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container" style={{padding: '6rem 0'}}>
            <div className="section-header">
                 <span className="section-label">About Project</span>
                 <h2 className="section-title">Academic Context</h2>
            </div>
            <div style={{maxWidth: '800px'}}>
                <p style={{fontSize: '1.25rem', color: 'var(--text-subtle)', lineHeight: '1.6', marginBottom: '2rem'}}>
                    SmartScribe is engineered as a high-precision mini project to demonstrate the viability of 
                    AI-assisted education tools. It adheres to strict academic evaluation criteria, focusing on 
                    explainable logic, clean architecture, and practical utility.
                </p>
                <div style={{display: 'flex', gap: '4rem', borderTop: '1px solid var(--border)', paddingTop: '2rem'}}>
                    <div>
                        <h4 style={{fontFamily: 'var(--font-mono)', fontSize: '0.875rem', marginBottom: '0.5rem'}}>Scope</h4>
                        <p style={{color: 'var(--text-subtle)'}}>Mini Project (Evaluation Ready)</p>
                    </div>
                    <div>
                         <h4 style={{fontFamily: 'var(--font-mono)', fontSize: '0.875rem', marginBottom: '0.5rem'}}>Domain</h4>
                        <p style={{color: 'var(--text-subtle)'}}>Natural Language Processing</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Initialize Workspace</h2>
            <p className="cta-description">
              Deploy the SmartScribe intelligent assistant for your academic workflow.
            </p>
            <button className="btn btn-primary">
              Launch Application
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M20 4L36 12L20 20L4 12L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M4 12V28L20 36L36 28V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M20 20V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="logo-text">SmartScribe</span>
              </div>
              <p className="footer-tagline">
                Decision Traceability & Reasoning Platform
              </p>
            </div>
            <div className="footer-column">
              <h4>Platform</h4>
              <a href="#features">Capabilities</a>
              <a href="#how-it-works">Pipeline</a>
              <a href="#tech">Architecture</a>
            </div>
            <div className="footer-column">
              <h4>Documentation</h4>
              <a href="#">API Reference</a>
              <a href="#">System Specs</a>
              <a href="#">Deployment</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">License</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 SmartScribe System. Academic License.</p>
            <div style={{display: 'flex', gap: '2rem'}}>
              <a href="#" style={{color: 'inherit', textDecoration: 'none'}}>GitHub Repository</a>
              <a href="#" style={{color: 'inherit', textDecoration: 'none'}}>Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartScribeLanding;
