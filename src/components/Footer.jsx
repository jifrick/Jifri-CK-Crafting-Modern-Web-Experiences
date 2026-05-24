import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-top">
          {/* Logo */}
          <div className="footer-brand">
            <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); handleScrollTo('hero'); }}>
              JIFRI<span className="logo-dot">CK</span>
            </a>
            <p className="brand-description">
              Building premium, creative, and highly immersive web experiences that elevate the digital canvas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="links-title">Quick Links</h4>
            <ul className="links-list">
              <li>
                <a href="#hero" onClick={(e) => { e.preventDefault(); handleScrollTo('hero'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Info */}
          <div className="footer-connect">
            <h4 className="links-title">Connect</h4>
            <div className="connect-socials">
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
            </div>
            <p className="connect-email">jifri.chakkalan@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} <strong>Jifri CK</strong>. All rights reserved.
          </p>
          <p className="crafted">
            Made with <Heart size={12} className="heart-icon" /> &amp; React
          </p>
          
          <button
            className="btn-back-to-top"
            onClick={() => handleScrollTo('hero')}
            aria-label="Scroll back to top"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-main {
          background-color: #030304;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          padding: 5rem 0 2.5rem 0;
          position: relative;
          z-index: 10;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .brand-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 320px;
          margin-top: 1rem;
        }
        
        .links-title {
          font-family: var(--font-headings);
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }
        .links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .links-list a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }
        .links-list a:hover {
          color: var(--accent-cyan);
          padding-left: 4px;
        }
        
        .footer-connect {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .connect-socials {
          display: flex;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .connect-email {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-family: var(--font-headings);
        }
        
        /* Bottom Row */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
        }
        .copyright {
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        .copyright strong {
          color: var(--text-secondary);
        }
        .crafted {
          font-size: 0.875rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .heart-icon {
          color: var(--accent-cyan);
          fill: var(--accent-cyan);
          animation: beat 1.5s infinite alternate;
        }
        
        .btn-back-to-top {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          font-family: var(--font-headings);
          font-weight: 500;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition-smooth);
        }
        .btn-back-to-top:hover {
          background: rgba(255, 255, 255, 0.03);
          color: var(--accent-cyan);
          border-color: rgba(0, 240, 255, 0.2);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.05);
          transform: translateY(-2px);
        }

        @keyframes beat {
          to { transform: scale(1.2); }
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.25rem;
            text-align: center;
          }
          .btn-back-to-top {
            order: -1;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
