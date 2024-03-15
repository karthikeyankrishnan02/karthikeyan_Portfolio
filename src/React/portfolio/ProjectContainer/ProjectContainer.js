import React from 'react';
import { Element } from 'react-scroll';

const Project = ({ img, title, link }) => {
  return (
    <div className="project">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <a href={link}>View Project</a>
    </div>
  );
};

const ProjectContainer = () => {
  const projects = [
    {
      img: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
      title: "Project 1",
      link: "https://www.google.com"
    },
    {
      img: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
      title: "Project 2",
      link: "https://www.google.com"
    },
    {
      img: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
      title: "Project 3",
      link: "https://www.google.com"
    }
  ];

  return (
    <Element className="projectContainer" id='projects'>
      <h1>Projects</h1>
      <div className="projectContainer_projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
    </Element>
  );
};

export default ProjectContainer;
