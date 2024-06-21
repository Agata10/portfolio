import Navbar from './Navbar';
import logo from '../assets/ADarker.png';
import { useState } from 'react';
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 h-20 sm:px-40 bg-darker sticky top-0 left-0 z-10 ${
        showNavbar ? 'mb-24' : 'mb-0'
      }`}
    >
      <div className="flex justify-between items-center w-full sm:w-6/12 pt-2 sm:pt-0 px-10 sm:px-0">
        <img src={logo} alt="logo" className="h-14 logo-rotate" />
        <button onClick={toggleNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#FF5714"
            className="bi bi-list sm:hidden"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>
      <Navbar showNavbar={showNavbar} />
    </div>
  );
};

export default Header;
