import React from 'react';

const ProjectCard = ({ title, description, technologies, link, iconClass }) => {
  return (
    <div className="project-card glass-panel">
      <div className="project-icon">
        <i className={iconClass || "fa-solid fa-code"}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tech">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
