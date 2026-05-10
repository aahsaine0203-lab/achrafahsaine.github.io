import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML / CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React / jQuery", level: 75 },
      ]
    },
    {
      title: "Programming & Databases",
      skills: [
        { name: "Langage C", level: 85 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {categories.map((category, index) => (
          <div key={index} className="skill-category glass-panel">
            <h3>{category.title}</h3>
            {category.skills.map((skill, sIndex) => (
              <div key={sIndex} className="skill-item">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  {/* data-level is used by jQuery to animate width */}
                  <div className="progress" data-level={`${skill.level}%`}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
