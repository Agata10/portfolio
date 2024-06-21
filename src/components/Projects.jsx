import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import travel from '../assets/projects/travel.png';
import todo from '../assets/projects/todo.png';
import map from '../assets/projects/map.png';
import tic from '../assets/projects/tic.png';
import workout from '../assets/projects/workout.png';
import movie from '../assets/projects/movie.png';

const projects = [
  {
    src: travel,
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
    src: workout,
    name: 'StrengthEra',
    git_link: 'https://github.com/Agata10/Strengthera',
    site_link: 'https://strengthera.netlify.app',
    technologies: ['React', 'Tailwind CSS', 'API'],
  },
  {
    src: map,
    name: 'MapSketcher',
    git_link: 'https://github.com/Agata10/figma-plugin-mapSketcher',
    site_link:
      'https://www.figma.com/community/plugin/1339309615155736818/map-sketcher',
    technologies: ['React', 'TypeScript', 'Figma Plugin API', 'CSS', 'Webpack'],
  },
  {
    src: movie,
    name: 'MovieFinder',
    git_link: 'https://github.com/Agata10/movie-app',
    site_link: 'https://agata10.github.io/movie-app/',
    technologies: ['React', 'JavaScript', 'Bootstrap', 'API'],
  },
  {
    src: tic,
    name: 'TicTacToe',
    git_link: 'https://github.com/Agata10/TicTacToe',
    site_link: 'https://agata10.github.io/TicTacToe/',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    src: todo,
    name: 'TaskManager',
    git_link: 'https://github.com/Agata10/Todo-app',
    site_link: 'https://agata10.github.io/Todo-app/',
    technologies: ['JavaScript', 'HTML/CSS', 'Webpack'],
  },
];

const Projects = () => {
  return (
    <Element name="projects" className="element w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12 pt-14 sm:pt-24">
        <h2 className="col-span-1 sm:col-span-2 lg:col-span-3 text-3xl text-or font-nav text-center show-on-blur pb-6">
          My Projects
        </h2>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            src={project.src}
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
