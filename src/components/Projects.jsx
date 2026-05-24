import React from 'react';
import { Calendar, Globe, Briefcase, BarChart3, ArrowUpRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projectList = [
    {
      id: 'webinvite',
      title: 'WebInvite',
      description: 'Modern invitation and event website platform. Revolutionizing event RSVP and invitations through seamless immersive digital invitations.',
      link: 'https://webinvite.in',
      tags: ['React', 'CSS Variables', 'Animation', 'UX/UI'],
      icon: <Calendar size={22} className="project-card-icon" />,
      color: 'rgba(0, 240, 255, 0.15)', // Neon Cyan tint
      glowColor: '#00f0ff'
    },
    {
      id: 'yawmatic',
      title: 'YAWMATIC',
      description: 'Creative digital web experience brand designing and developing immersive cutting-edge applications for visionary organizations.',
      link: '#contact',
      tags: ['Branding', 'Web Engineering', 'Interaction Design'],
      icon: <Globe size={22} className="project-card-icon" />,
      color: 'rgba(112, 0, 255, 0.15)', // Neon Purple tint
      glowColor: '#7000ff'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing modern frontend achievements, using glassmorphic panels, responsive grids, and scroll animations.',
      link: '#hero',
      tags: ['React', 'CSS System', 'Micro-Interactions'],
      icon: <Briefcase size={22} className="project-card-icon" />,
      color: 'rgba(255, 0, 128, 0.15)', // Neon Pink tint
      glowColor: '#ff0080'
    },
    {
      id: 'dashboard',
      title: 'React Dashboard',
      description: 'Dynamic data-rich analytics utility showing application performance monitors, interactive charts, and responsive user widgets.',
      link: '#',
      tags: ['React', 'Data Charts', 'State management'],
      icon: <BarChart3 size={22} className="project-card-icon" />,
      color: 'rgba(240, 255, 0, 0.15)', // Neon Yellow tint
      glowColor: '#f0ff00'
    }
  ];

  const handleLinkClick = (e, link) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(link.substring(1));
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal active">
          <span className="section-subtitle">Showcase</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        </div>

        {/* 2x2 Grid */}
        <div className="projects-grid">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card reveal active"
              style={{ '--glow-color': project.glowColor }}
            >
              {/* Animated corner glow highlight */}
              <div className="card-border-glow" style={{ background: `radial-gradient(circle at 100% 0%, ${project.glowColor} 0%, transparent 60%)` }}></div>

              <div className="project-card-header">
                <div className="project-icon-wrapper" style={{ backgroundColor: project.color, borderColor: `rgba(${project.glowColor === '#00f0ff' ? '0,240,255' : '112,0,255'},0.2)` }}>
                  {project.icon}
                </div>
                
                {project.link !== '#' ? (
                  <a
                    href={project.link}
                    target={project.link.startsWith('#') ? '_self' : '_blank'}
                    rel="noreferrer"
                    className="project-external-link"
                    onClick={(e) => handleLinkClick(e, project.link)}
                    aria-label={`Visit ${project.title}`}
                  >
                    {project.link.startsWith('#') ? <ArrowUpRight size={18} /> : <ExternalLink size={18} />}
                  </a>
                ) : (
                  <span className="project-link-disabled" title="Internal System Preview">
                    <ArrowUpRight size={18} style={{ opacity: 0.2 }} />
                  </span>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Tags and Links Footer */}
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.link !== '#' ? (
                  <a
                    href={project.link}
                    target={project.link.startsWith('#') ? '_self' : '_blank'}
                    rel="noreferrer"
                    className="project-text-link"
                    onClick={(e) => handleLinkClick(e, project.link)}
                  >
                    {project.link.startsWith('#') ? 'View Details' : 'Visit Platform'}
                  </a>
                ) : (
                  <span className="project-text-link disabled">Demo Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }
        
        /* Premium Project Card layout */
        .project-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
          min-height: 320px;
          cursor: default;
          padding: 2.5rem;
          transition: var(--transition-smooth);
        }
        .card-border-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }
        .project-card:hover .card-border-glow {
          opacity: 0.15;
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(var(--glow-color), 0.25);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45), 0 0 25px rgba(var(--glow-color), 0.1);
        }
        
        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 2rem;
          z-index: 1;
        }
        
        .project-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          transition: var(--transition-bounce);
        }
        .project-card:hover .project-icon-wrapper {
          transform: scale(1.08) rotate(3deg);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
        }
        .project-card-icon {
          transition: var(--transition-smooth);
        }
        
        .project-external-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          transition: var(--transition-smooth);
          text-decoration: none;
        }
        .project-external-link:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
          transform: translate(2px, -2px);
        }
        
        .project-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.85rem;
          color: var(--text-primary);
          transition: var(--transition-smooth);
          z-index: 1;
        }
        .project-card:hover .project-title {
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }
        
        .project-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
          flex-grow: 1;
          z-index: 1;
        }
        
        /* Footer tags */
        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          z-index: 1;
        }
        
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .project-tag-pill {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 4px;
          padding: 0.25rem 0.6rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .project-card:hover .project-tag-pill {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }
        
        .project-text-link {
          font-family: var(--font-headings);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: var(--transition-smooth);
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
        }
        .project-text-link:not(.disabled):hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
        }
        .project-text-link.disabled {
          color: var(--text-muted);
          cursor: not-allowed;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .project-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
