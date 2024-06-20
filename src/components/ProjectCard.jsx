import { useState } from 'react';
import git from '../assets/icons/github.svg';
import web from '../assets/icons/globe.svg';

const ProjectCard = ({ name, git_link, site_link, technologies }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="flex flex-col border-darker border-2 relative p-4 rounded-lg overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-2xl text-center">{name}</h3>
      <div className="flex">
        <a href={git_link}>
          <img src={git} alt="github icon" />
          GitHub
        </a>
        <a href={site_link}>
          <img src={web} alt="web icon" />
          Website
        </a>
      </div>
      <div className="flex gap-2">
        {technologies.map((t) => (
          <div key={crypto.randomUUID()} className=" bg-darker bg-opacity-5">
            {t}
          </div>
        ))}
      </div>
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(128,128,128,0.1), rgba(255,255,255, 0) 100%)`,
          }}
        ></div>
      )}
    </div>
  );
};

export default ProjectCard;
