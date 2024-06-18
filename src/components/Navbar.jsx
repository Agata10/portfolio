import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500}>
          Contact me
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
