import { Link } from 'react-scroll';

const Navbar = ({ showNavbar }) => {
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
      <li className="text-or nav-link font-nav cursor-pointer">
        <a
          href="https://drive.google.com/file/d/1jObHhNbHiC_kMMwfkUy3tQ-TfeGVk5Na/view?usp=sharing"
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
