import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <ul className="flex gap-8 items-center">
      <li>
        <Link to="about" smooth={true} duration={500} className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={500} className="nav-link">
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500} className="nav-link">
          Contact me
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
