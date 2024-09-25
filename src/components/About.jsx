import { Element } from 'react-scroll';

const About = ({ clicked }) => {
  return (
    <Element
      name="about"
      id="about"
      className="element w-full flex justify-center  slide-to-right"
    >
      <div className="w-10/12 sm:w-9/12 mt-10 sm:mt-24">
        <h2 className="text-3xl text-or font-nav text-left py-4">About me</h2>
        <p className="font-par w-full md:w-6/12 text-base leading-8 pb-6">
          My passion for technology began during my Automation Control
          Engineering and Robotics studies, where I built a solid foundation in
          programming and discovered my love for IT. I thrive on designing
          websites that balance creativity and user experience, ensuring each
          project is both functional and visually engaging.
        </p>
        <p className="font-par w-full md:w-6/12 text-base leading-8 pb-6">
          As a recent graduate of a 15-week Software Engineering Bootcamp, I'm
          excited to contribute to a forward-thinking company that fosters
          growth and fuels my enthusiasm for the tech industry.
        </p>
        <div className="font-par w-full md:w-6/12 text-base leading-8">
          Here are some of the latest technologies I've been working with:
          <div className="flex gap-6 sm:gap-10 pt-2">
            <ul className="list-arrow text-sm font-main">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul className="list-arrow text-sm font-main">
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
            </ul>
            <ul className="list-arrow text-sm font-main">
              <li>Material UI</li>
              <li>GIT</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
