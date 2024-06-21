import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element
      name="about"
      className="element w-full flex justify-center pt-10 sm:mt-32"
    >
      <div className="w-10/12 sm:w-9/12">
        <h2 className="text-3xl text-or font-nav text-left show-on-blur py-4">
          About me
        </h2>
        <p className="font-par w-full sm:w-6/12 text-base leading-8 pb-6">
          I am a passionate about technology since my Control Engineering
          studies. My educational journey has given me a solid foundation in
          programming and developed my passion for IT. I enjoy creating
          appealing websites that prioritize both creativity and user
          experience.
        </p>
        <p className="font-par w-full sm:w-6/12 text-base leading-8 pb-6">
          As a recent graduate of a 15-week Software Engineering Bootcamp, I am
          looking forward to joining a company that will allow me to grow and
          continue developing my passion for the tech industry.
        </p>
        <p className="font-par w-full sm:w67/12 text-base leading-8">
          Here are some of the latest technologies I've been working with:
          <div className="flex gap-10 pt-2">
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
        </p>
      </div>
    </Element>
  );
};

export default About;
