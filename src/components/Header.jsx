import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sticky indicator
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide / Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      lastScrollY = currentScrollY;

      // Track active section
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPos = currentScrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`header-main ${isScrolled ? 'glass-nav scrolled' : ''} ${
        isVisible ? 'visible' : 'hidden'
      }`}
    >
      <div className="container header-container">
        <a href="#hero" className="logo" onClick={(e) => handleLinkClick(e, 'hero')}>
          JIFRI<span className="logo-dot">CK</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li>
              <a
                href="#hero"
                className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'hero')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Button & Socials */}
        <div className="header-actions">
          <a
            href="https://github.com/jifrick"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jifrickofficial"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#contact"
            className="btn-hire"
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Hire Me <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-nav-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <a
              href="#hero"
              className={`mobile-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'hero')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="mobile-drawer-footer">
          <div className="mobile-socials">
            <a
              href="https://github.com/jifrick"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jifrickofficial"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="mobile-email">jifri.chakkalan@gmail.com</p>
        </div>
      </div>

      {/* Local Component Styles */}
      <style>{`
        .header-main {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .header-main.visible {
          transform: translateY(0);
        }
        .header-main.hidden {
          transform: translateY(-100%);
        }
        .header-main.scrolled {
          height: 70px;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .logo {
          font-family: var(--font-headings);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: -0.04em;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
        }
        .logo:hover {
          letter-spacing: -0.02em;
        }
        .logo-dot {
          color: var(--accent-cyan);
          text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }
        .nav-list {
          display: flex;
          list-style: none;
          gap: 2.5rem;
        }
        .nav-link {
          font-family: var(--font-headings);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0;
          transition: var(--transition-smooth);
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
          transition: var(--transition-smooth);
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .nav-link.active {
          color: var(--accent-cyan);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
          text-decoration: none;
        }
        .social-icon-btn:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 240, 255, 0.3);
          background: rgba(0, 240, 255, 0.05);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
          transform: translateY(-2px);
        }
        .btn-hire {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.6rem 1.25rem;
          border-radius: 20px;
          font-family: var(--font-headings);
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          transition: var(--transition-smooth);
        }
        .btn-hire:hover {
          background: var(--accent-cyan);
          color: #050505;
          border-color: var(--accent-cyan);
          box-shadow: var(--glow-shadow);
          transform: translateY(-2px);
        }
        .mobile-nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          z-index: 1001;
        }
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: rgba(5, 5, 5, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-nav-drawer.open {
          transform: translateX(0);
        }
        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          text-align: center;
          margin-bottom: 4rem;
        }
        .mobile-nav-link {
          font-family: var(--font-headings);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-smooth);
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--accent-cyan);
          text-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
        }
        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .mobile-socials {
          display: flex;
          gap: 1.5rem;
        }
        .mobile-email {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 900px) {
          .nav-desktop, .header-actions {
            display: none;
          }
          .mobile-nav-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
