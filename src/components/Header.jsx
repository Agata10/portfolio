import Navbar from './Navbar';
import logo from '../assets/A.png';
const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full gap-4 sm:gap-0 px-10 sm:px-36 h-20 mt-4 sm:mt-2">
      <img src={logo} alt="logo" className="h-16 logo-rotate" />
      <Navbar />
    </div>
  );
};

export default Header;
