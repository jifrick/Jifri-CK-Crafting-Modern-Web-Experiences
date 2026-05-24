import React from 'react';
import { User, Code, Palette, Laptop, Sparkles } from 'lucide-react';

const About = () => {
  const skills = [
    'React.js',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Vanilla CSS & HSL Gradients',
    'Responsive Web Design',
    'UI/UX Design Systems',
    'Figma & Prototyping',
    'State Management (Redux/Context)',
    'Vite & Build Tooling',
    'REST APIs Integration',
    'Git & GitHub Workflows',
    'Modern Animations (Transitions & Keyframes)'
  ];

  const stats = [
    { value: '3+', label: 'Years Experience', icon: <Laptop size={20} className="stat-icon" /> },
    { value: '15+', label: 'Completed Projects', icon: <Code size={20} className="stat-icon" /> },
    { value: '99%', label: 'Visual Perfection', icon: <Palette size={20} className="stat-icon" /> },
    { value: '100%', label: 'Client Satisfaction', icon: <Sparkles size={20} className="stat-icon" /> }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal active">
          <span className="section-subtitle">Profile</span>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        </div>

        <div className="about-grid">
          {/* Left Bio Card */}
          <div className="about-bio-card glass-card reveal active">
            <div className="card-header-icon">
              <User size={24} className="accent-color-icon" />
            </div>
            <h3 className="bio-title">Who is Jifri CK?</h3>
            <p className="bio-text">
              I am a specialized <strong>React Developer</strong> and <strong>UI Designer</strong> focused on making the web look stunning and operate flawlessly. By combining clean frontend architecture with high-fidelity creative visual systems, I design web applications that are highly interactive, performant, and responsive.
            </p>
            <p className="bio-text">
              Whether building custom event platforms, modern analytics tools, or immersive branding environments, my work is driven by visual excellence, smooth performance, and attention to user micro-interactions.
            </p>

            {/* Stats Row */}
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div className="stat-item" key={idx}>
                  <div className="stat-icon-wrapper">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Skills Card */}
          <div className="about-skills-card glass-card reveal active">
            <div className="card-header-icon">
              <Code size={24} className="accent-color-icon" />
            </div>
            <h3 className="bio-title">My Tech Stack</h3>
            <p className="skills-description">
              I leverage a curated selection of tools, languages, and frameworks to craft optimized, premium user interfaces that look great on any screen size.
            </p>

            <div className="skills-tags-container">
              {skills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Quote banner */}
            <div className="quote-banner">
              <p className="quote-text">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <span className="quote-author">— Steve Jobs</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-position: center;
          position: relative;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: stretch;
        }
        .card-header-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(0, 240, 255, 0.06);
          border: 1px solid rgba(0, 240, 255, 0.15);
          margin-bottom: 1.5rem;
        }
        .accent-color-icon {
          color: var(--accent-cyan);
          filter: drop-shadow(0 0 5px rgba(0, 240, 255, 0.3));
        }
        .bio-title {
          font-size: 1.8rem;
          margin-bottom: 1.25rem;
        }
        .bio-text {
          margin-bottom: 1.25rem;
          font-size: 1rem;
        }
        .bio-text strong {
          color: var(--accent-cyan);
        }
        
        /* Stats Grid styles */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .stat-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          transition: var(--transition-smooth);
        }
        .stat-item:hover .stat-icon-wrapper {
          background: rgba(112, 0, 255, 0.08);
          border-color: rgba(112, 0, 255, 0.3);
          color: var(--accent-indigo);
          transform: translateY(-2px);
        }
        .stat-icon {
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .stat-item:hover .stat-icon {
          color: var(--text-primary);
        }
        .stat-value {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent-cyan);
          margin-bottom: 0.25rem;
        }
        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Skills Card styles */
        .skills-description {
          font-size: 1rem;
          margin-bottom: 1.75rem;
        }
        .skills-tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }
        
        /* Quote Banner styles */
        .quote-banner {
          background: rgba(255, 255, 255, 0.015);
          border-left: 3px solid var(--accent-cyan);
          padding: 1rem 1.25rem;
          border-radius: 0 12px 12px 0;
          margin-top: auto;
        }
        .quote-text {
          font-style: italic;
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
          line-height: 1.5;
        }
        .quote-author {
          font-size: 0.75rem;
          font-family: var(--font-headings);
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
