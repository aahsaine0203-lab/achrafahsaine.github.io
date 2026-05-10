import React from 'react';

const Education = () => {
  const experiences = [
    {
      period: "Present",
      title: "Second Year University Student (S4)",
      institution: "University",
      description: "Pursuing advanced studies in software engineering, mastering fundamental programming languages like C/C++, databases (SQL), and web technologies.",
      className: "left"
    },
    {
      period: "Past",
      title: "First Year University Core",
      institution: "University",
      description: "Studied core Mathematics, Algorithmic Logic, and Python.",
      className: "right"
    }
  ];

  return (
    <section id="education" className="container">
      <h2 className="section-title">Experience & Education</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${exp.className}`}>
            <div className="timeline-content glass-panel">
              <h4>{exp.period}</h4>
              <h3>{exp.title}</h3>
              <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{exp.institution}</p>
              {/* Accordion content controlled by jQuery */}
              <div className="timeline-desc">
                <p>{exp.description}</p>
              </div>
              <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                <i className="fa-solid fa-chevron-down text-muted accordion-icon" style={{ fontSize: '0.8rem', cursor: 'pointer' }}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
