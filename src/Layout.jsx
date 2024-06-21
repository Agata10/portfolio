import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Projects from './components/Projects';
import { useState } from 'react';

const Layout = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <div className="min-h-screen text-wh bg-dark overflow-x-hidden">
        <Header showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        <Greeting />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
