import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Hero = () => {
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
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Hero Left Content */}
        <div className="hero-content">
          <div className="hero-badge reveal active">
            <Sparkles size={14} className="badge-icon" />
            <span>Available for freelance & full-time roles</span>
          </div>

          <h1 className="hero-title reveal active">
            Design. Code. <br />
            <span className="gradient-text">Innovate.</span>
          </h1>

          <p className="hero-description reveal active">
            Hi, I'm <strong className="highlight-name">Jifri CK</strong>. A passionate React Developer & UI Designer dedicated to building premium, creative, and highly immersive web experiences that merge flawless performance with absolute design aesthetics.
          </p>

          <div className="hero-cta reveal active">
            <button className="btn-primary" onClick={() => handleScrollTo('projects')}>
              View My Work <ArrowRight size={16} />
            </button>
            <button className="btn-secondary" onClick={() => handleScrollTo('contact')}>
              Let's Connect
            </button>
          </div>

          <div className="hero-socials reveal active">
            <span className="socials-label">Connect with me:</span>
            <div className="socials-list">
              <a
                href="https://github.com/jifrick"
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jifrickofficial"
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Right Image / Glow Circle */}
        <div className="hero-media reveal active">
          <div className="image-glow-wrapper">
            <div className="halo-ring ring-1"></div>
            <div className="halo-ring ring-2"></div>
            <div className="halo-ring ring-3"></div>
            <div className="image-glow-container">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGYKQ77UGZwkw/profile-displayphoto-crop_800_800/B56Z4siVlHIYAI-/0/1778863660695?e=1781136000&v=beta&t=TS11stGfKAevlp3zCyQER3MYOajnxg1S2OoxP-Hd-vM"
                alt="Jifri CK Profile"
                className="profile-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80';
                }}
              />
            </div>
            {/* Tech tag floating */}
            <div className="floating-badge badge-react">
              <span className="badge-dot"></span> React
            </div>
            <div className="floating-badge badge-design">
              <span className="badge-dot"></span> UI/UX
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Arrow indicator */}
      <div className="scroll-indicator" onClick={() => handleScrollTo('about')}>
        <span className="mouse-wheel"></span>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 120px;
          padding-bottom: 4rem;
          overflow: hidden;
          position: relative;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 240, 255, 0.05);
          border: 1px solid rgba(0, 240, 255, 0.15);
          color: var(--accent-cyan);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-family: var(--font-headings);
          font-weight: 500;
          margin-bottom: 2rem;
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.05);
        }
        .badge-icon {
          animation: float 2s infinite ease-in-out;
        }
        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }
        .hero-description {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 580px;
        }
        .highlight-name {
          color: var(--text-primary);
          position: relative;
          z-index: 1;
        }
        .highlight-name::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(0, 240, 255, 0.3);
          z-index: -1;
        }
        .hero-cta {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }
        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .socials-label {
          font-family: var(--font-headings);
          font-size: 0.875rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .socials-list {
          display: flex;
          gap: 1rem;
        }
        .hero-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
          text-decoration: none;
        }
        .hero-social-link:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 240, 255, 0.3);
          background: rgba(0, 240, 255, 0.05);
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.15);
          transform: translateY(-3px) scale(1.05);
        }

        /* Profile Image Styles */
        .hero-media {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .image-glow-wrapper {
          position: relative;
          width: 320px;
          height: 320px;
        }
        .image-glow-container {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--accent-cyan);
          box-shadow: 0 0 25px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(0, 240, 255, 0.2);
          position: relative;
          z-index: 5;
          background: var(--bg-secondary);
          transition: var(--transition-bounce);
        }
        .image-glow-wrapper:hover .image-glow-container {
          transform: scale(1.03);
          border-color: #fff;
          box-shadow: 0 0 35px rgba(0, 240, 255, 0.5), inset 0 0 25px rgba(0, 240, 255, 0.3);
        }
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        .image-glow-wrapper:hover .profile-img {
          transform: scale(1.08);
        }

        /* Glowing backdrops */
        .halo-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(0, 240, 255, 0.05);
          z-index: 1;
          pointer-events: none;
        }
        .ring-1 {
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.015) 0%, transparent 70%);
          animation: float 6s infinite ease-in-out;
        }
        .ring-2 {
          width: 450px;
          height: 450px;
          border-color: rgba(112, 0, 255, 0.03);
          background: radial-gradient(circle, rgba(112, 0, 255, 0.02) 0%, transparent 70%);
          animation: float 8s infinite ease-in-out reverse;
        }
        .ring-3 {
          width: 520px;
          height: 520px;
          animation: float 10s infinite ease-in-out;
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          background: rgba(10, 10, 12, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 0.5rem 1rem;
          font-family: var(--font-headings);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 10;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          transition: var(--transition-bounce);
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .badge-react {
          top: 15%;
          right: -10%;
          border-color: rgba(0, 240, 255, 0.3);
          animation: float 5s infinite ease-in-out alternate;
        }
        .badge-react .badge-dot {
          background-color: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
        }
        .badge-design {
          bottom: 15%;
          left: -15%;
          border-color: rgba(112, 0, 255, 0.3);
          animation: float 6s infinite ease-in-out alternate 1s;
        }
        .badge-design .badge-dot {
          background-color: var(--accent-indigo);
          box-shadow: 0 0 8px var(--accent-indigo);
        }
        .image-glow-wrapper:hover .badge-react {
          transform: translate(5px, -5px);
        }
        .image-glow-wrapper:hover .badge-design {
          transform: translate(-5px, 5px);
        }

        /* Scroll down mouse indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 26px;
          height: 42px;
          border-radius: 15px;
          border: 2px solid var(--text-muted);
          cursor: pointer;
          display: flex;
          justify-content: center;
          transition: border-color 0.3s ease;
        }
        .scroll-indicator:hover {
          border-color: var(--accent-cyan);
        }
        .mouse-wheel {
          width: 4px;
          height: 8px;
          background-color: var(--text-muted);
          border-radius: 2px;
          margin-top: 8px;
          animation: scroll-wheel 1.5s infinite;
        }
        .scroll-indicator:hover .mouse-wheel {
          background-color: var(--accent-cyan);
        }

        @keyframes scroll-wheel {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .hero-content {
            align-items: center;
            order: 2;
          }
          .hero-title {
            font-size: 3.5rem;
          }
          .hero-media {
            order: 1;
            margin-bottom: 1rem;
          }
          .image-glow-wrapper {
            width: 240px;
            height: 240px;
          }
          .badge-react {
            right: -5%;
          }
          .badge-design {
            left: -10%;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.75rem;
          }
          .hero-cta {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
