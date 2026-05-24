// Jifri CK Premium Portfolio - Powered by React and GitHub Actions
import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.1,
    });

    reveals.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Premium Ambient Background Mesh & Grid Overlay */}
      <div className="bg-ambient">
        <div className="bg-grid"></div>
        <div className="ambient-glow-1"></div>
        <div className="ambient-glow-2"></div>
      </div>

      {/* Interactive premium cursor follower */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Header />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;

