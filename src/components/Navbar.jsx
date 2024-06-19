import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <ul className="flex gap-6 items-center slide-to-left">
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="nav-link font-nav cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="nav-link font-nav cursor-pointer"
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
        >
          Contact me
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
