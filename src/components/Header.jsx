import React from 'react';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <img 
          src="/ana.jpeg" 
          alt="Achraf AHSAINE" 
          className="profile-img"
        />
        <h1 className="text-gradient">Achraf AHSAINE</h1>
        <h2>Software Engineering Student & Developer</h2>
        
        <div className="social-links">
          <a href="mailto:achrafahsaine06@gmail.com" className="social-icon" title="Email"><i className="fa-solid fa-envelope"></i></a>
          <a href="https://linkedin.com/in/achraf-ahsaine" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/aahsaine0203-lab" target="_blank" rel="noreferrer" className="social-icon" title="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="tel:+212627225925" className="social-icon" title="Phone: +212 627225925"><i className="fa-solid fa-phone"></i></a>
        </div>
        
        <a href="#about" className="btn btn-primary" style={{ marginRight: '1rem' }}>About Me</a>
        <a href="#contact" className="btn btn-outline">Contact</a>
      </div>
    </header>
  );
};

export default Header;
