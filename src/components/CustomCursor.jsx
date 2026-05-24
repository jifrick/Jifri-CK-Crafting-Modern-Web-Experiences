import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setHidden(false);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Setup hover listeners for buttons, inputs, links, cards
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, .glass-card, .skill-tag, .mobile-nav-toggle');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial attachment
    addHoverListeners();

    // Re-attach when DOM changes (e.g. dynamic elements)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Dynamic Cursor Follower dot */}
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
        }}
      />
      {/* Outer Glow Ring */}
      <div
        className="cursor-ring"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${linkHovered ? 1.5 : clicked ? 0.9 : 1})`,
          opacity: linkHovered ? 0.15 : 0.4,
          borderColor: linkHovered ? 'var(--accent-cyan)' : 'rgba(0, 240, 255, 0.4)',
          boxShadow: linkHovered ? '0 0 15px var(--accent-cyan)' : 'none',
        }}
      />
      <style>{`
        .cursor-dot {
          width: 8px;
          height: 8px;
          background-color: var(--accent-cyan);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.1s ease;
          box-shadow: 0 0 10px var(--accent-cyan), 0 0 20px var(--accent-cyan);
        }
        .cursor-ring {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(0, 240, 255, 0.4);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        @media (max-width: 768px) {
          .cursor-dot, .cursor-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
