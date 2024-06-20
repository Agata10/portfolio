import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import { useState } from 'react';

const projects = [
  {
    name: 'TravelLog',
    git_link: 'https://github.com/Agata10/travel-log',
    site_link: 'https://travel-log-1.onrender.com',
    technologies: [
      'React',
      'JavaScript',
      'Material UI',
      'Tailwind CSS',
      'MongoDB',
      'Express.js',
      'Node.js',
    ],
  },
  {
    name: 'StrengthEra',
    git_link: 'https://github.com/Agata10/Strengthera',
    site_link: 'https://strengthera.netlify.app',
    technologies: ['React', 'Tailwind CSS', 'API'],
  },
  {
    name: 'MapSketcher - figma plugin',
    git_link: 'https://github.com/Agata10/figma-plugin-mapSketcher',
    site_link:
      'https://www.figma.com/community/plugin/1339309615155736818/map-sketcher',
    technologies: ['React', 'TypeScript', 'Figma Plugin API', 'Webpack'],
  },
  {
    name: 'MovieFinder',
    git_link: 'https://github.com/Agata10/movie-app',
    site_link: 'https://agata10.github.io/movie-app/',
    technologies: ['React', 'JavaScript', 'Bootstrap', 'CSS', 'API'],
  },
  {
    name: 'TicTacToe',
    git_link: 'https://github.com/Agata10/TicTacToe',
    site_link: 'https://agata10.github.io/TicTacToe/',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'TaskManager',
    git_link: 'https://github.com/Agata10/Todo-app',
    site_link: 'https://agata10.github.io/Todo-app/',
    technologies: ['JavaScript', 'HTML/CSS', 'Webpack'],
  },
];

const Projects = () => {
  return (
    <Element
      name="projects"
      className="element w-full flex justify-center pt-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12">
        <h2 className="col-span-1 sm:col-span-2 lg:col-span-3 text-3xl text-or font-nav text-center">
          My Projects
        </h2>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            git_link={project.git_link}
            site_link={project.site_link}
            technologies={project.technologies}
          />
        ))}
      </div>
    </Element>
  );
};

export default Projects;
