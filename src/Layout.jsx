import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Projects from './components/Projects';

const Layout = () => {
  return (
    <>
      <div className="h-screen text-wh bg-dark">
        <Header />
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
