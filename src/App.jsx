import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import { initAnimations } from './js/animations';
import { initValidation } from './js/validation';

function App() {
  useEffect(() => {
    // Initialize jQuery logic when component mounts
    initAnimations();
    initValidation();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <ContactForm />
      
      <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--border-color)', marginTop: '2rem' }}>
        <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} Achraf AHSAINE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
