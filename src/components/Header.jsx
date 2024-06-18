import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full gap-4 sm:gap-0 px-10 sm:px-36 h-20 pt-10 sm:pt-0">
      LOGO
      <Navbar />
    </div>
  );
};

export default Header;
