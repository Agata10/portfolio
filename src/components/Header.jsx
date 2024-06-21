import Navbar from './Navbar';
import logo from '../assets/ADarker.png';
const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full gap-4 sm:gap-0 px-10 sm:px-40 h-20 bg-darker sticky top-0 left-0 z-10">
      <img src={logo} alt="logo" className="h-14 logo-rotate" />
      <Navbar />
    </div>
  );
};

export default Header;
