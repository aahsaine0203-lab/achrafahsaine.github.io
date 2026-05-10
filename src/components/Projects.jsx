import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      title: "To-Do List Website",
      description: "A practical and interactive web application to manage daily tasks, demonstrating skills in DOM manipulation and web styling.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      iconClass: "fa-solid fa-list-check"
    },
    {
      title: "Video Game Project",
      description: "A 2D video game developed to apply advanced programming concepts, logic, object-oriented principles, and game loops.",
      technologies: ["C++", "SFML", "OOP"],
      link: "#",
      iconClass: "fa-solid fa-gamepad"
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            iconClass={project.iconClass}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
