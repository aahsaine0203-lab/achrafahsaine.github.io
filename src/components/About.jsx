import React from 'react';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content glass-panel animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <p>
          Hello! I'm Achraf, a passionate Software Engineering Student currently in my second year at university (S4). 
          My journey in programming started with building fundamental skills in C and C++, and has evolved into creating interactive full-stack web applications.
        </p>
        <p>
          I specialize in building solid web experiences using HTML, CSS, JavaScript, and interacting with databases via SQL. My goal is to continually learn and craft solutions that are highly performant and user-friendly.
        </p>
        <p>
          When I'm not coding or studying, you can find me exploring new technologies, working on personal game development projects, and building practical applications.
        </p>
      </div>
    </section>
  );
};

export default About;
