import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ showNavbar, setShowNavbar }) => {
  const [click, setClicked] = useState(false);
  return (
    <ul
      className={`sm:flex sm:flex-row sm:gap-6 sm:px-0 items-center justify-end sm:slide-to-left ${
        showNavbar
          ? 'flex bg-darker flex-col w-full px-10 sm:flex-row gap-2 pb-2'
          : 'hidden'
      } `}
    >
      <li>
        <Link
          to="about"
          offset={click === 'about' ? -100 : 0}
          smooth={true}
          duration={500}
          className="nav-link font-nav cursor-pointer"
          onClick={() => {
            setClicked('about');
            setShowNavbar((prev) => !prev);
          }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          offset={click === 'projects' ? -100 : 0}
          smooth={true}
          duration={500}
          className="nav-link font-nav cursor-pointer"
          onClick={() => {
            setClicked('projects');
            setShowNavbar((prev) => !prev);
          }}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="nav-link font-nav cursor-pointer"
          onClick={() => {
            setClicked('contact');
            setShowNavbar((prev) => !prev);
          }}
        >
          Contact me
        </Link>
      </li>
      <li className="text-or nav-link font-nav cursor-pointer">
        <a
          href="https://drive.google.com/file/d/1Ceko6FDQutXedwNGYIhtNNkvn5DwGATI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
