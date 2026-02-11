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
              <span className="logo-text">ShadeWritesX</span>
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
              <span className="hero-badge-text">Premium Content Agency</span>
            </div>
            <h1 className="hero-title">
              Elevate Your<br/>Digital Voice
            </h1>
            <p className="hero-description">
              ShadeWritesX transforms your ideas into influential narratives. 
              Professional ghostwriting for thought leaders, executives, and visionaries.
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
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5M+</span>
                <span className="stat-label">Content Views</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Expertise</span>
            <h2 className="section-title">Content Solutions</h2>
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
                <h3 className="feature-title">LinkedIn Ghostwriting</h3>
                <p className="feature-description">
                  Build authority with consistent, high-engagement posts tailored to your personal brand voice.
                </p>
                <ul className="feature-list">
                  <li>Personal Branding</li>
                  <li>Engagement Strategy</li>
                  <li>Analytics Growth</li>
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
                <h3 className="feature-title">Blog & SEO</h3>
                <p className="feature-description">
                  Long-form content designed to rank on Google and demonstrate deep industry expertise.
                </p>
                <ul className="feature-list">
                  <li>Keyword Research</li>
                  <li>In-depth Guides</li>
                  <li>Case Studies</li>
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
                <h3 className="feature-title">Newsletters</h3>
                <p className="feature-description">
                   Nurture your audience with high-value email newsletters that convert readers into clients.
                </p>
                <ul className="feature-list">
                  <li>Weekly Digests</li>
                  <li>Sales Sequences</li>
                  <li>Subscriber Growth</li>
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
                <h3 className="feature-title">Thought Leadership</h3>
                <p className="feature-description">
                  Opinion pieces and white papers that position you as a visionary in your field.
                </p>
                <ul className="feature-list">
                  <li>Industry Analysis</li>
                  <li>Op-Eds</li>
                  <li>Keynote Scripts</li>
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
             <span className="section-label">Process</span>
             <h2 className="section-title">How We Work</h2>
          </div>
          <div className="workflow-container">
            <div className="workflow-step">
              <div className="step-content">
                <h3 className="step-title">Discovery</h3>
                <p className="step-description">
                  We deep dive into your goals, voice, and target audience to craft a strategy.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-content">
                <h3 className="step-title">Creation</h3>
                <p className="step-description">
                  Our expert writers draft compelling content that aligns with your brand.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-content">
                <h3 className="step-title">Refinement</h3>
                <p className="step-description">
                  Collborative review process to ensure every word is perfect.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-content">
                <h3 className="step-title">Growth</h3>
                <p className="step-description">
                   Publish, engage, and watch your digital presence expand.
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
            <span className="section-label">Target Channels</span>
            <h2 className="section-title">Where We Deliver</h2>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-category">Social Platforms</div>
              <div className="tech-items">
                <span className="tech-badge">LinkedIn</span>
                <span className="tech-badge">Twitter / X</span>
                <span className="tech-badge">Threads</span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-category">Long Form</div>
              <div className="tech-items">
                <span className="tech-badge">Substack</span>
                <span className="tech-badge">Medium</span>
                <span className="tech-badge">Company Blog</span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-category">Domains</div>
              <div className="tech-items">
                <span className="tech-badge">SaaS</span>
                <span className="tech-badge">Fintech</span>
                <span className="tech-badge">HealthTech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container about-container">
            <div className="section-header">
                 <span className="section-label">About Us</span>
                 <h2 className="section-title">The Agency</h2>
            </div>
            <div className="about-content-wrapper">
                <p className="about-text">
                    ShadeWritesX is a premium ghostwriting agency dedicated to helping leaders articulate their vision. 
                    We believe that great ideas deserve great writing. Our team of experienced writers and editors work 
                    silently behind the scenes to amplify your voice and authority.
                </p>
                <div className="about-details-grid">
                    <div className="about-detail-item">
                        <h4>Mission</h4>
                        <p>Elevate Global Thought Leadership</p>
                    </div>
                    <div className="about-detail-item">
                         <h4>Focus</h4>
                        <p>Quality, Voice & Impact</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Start Your Journey</h2>
            <p className="cta-description">
              Ready to take your content to the next level? Schedule a discovery call today.
            </p>
            <button className="btn btn-primary">
              Book Consultation
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
                <span className="logo-text">ShadeWritesX</span>
              </div>
              <p className="footer-tagline">
                Professional Ghostwriting Agency
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
            <p>© 2024 ShadeWritesX. All rights reserved.</p>
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
