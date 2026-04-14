import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import useLenis from './hooks/useLenis';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  
  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    // Disable scrolling when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className="app-container">
      <CustomCursor />
      
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          
          <footer style={{ 
            padding: '50px 0', 
            textAlign: 'center', 
            borderTop: '1px solid var(--glass-border)',
            background: 'var(--bg-dark)'
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} DevPortfolio. Crafted with ❤️ and high-performance code.
            </p>
          </footer>
        </main>
      )}
    </div>
  );
}

export default App;
