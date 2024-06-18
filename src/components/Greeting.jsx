import mypic from '../assets/file.png';
const Greeting = () => {
  return (
    <div className="flex w-full justify-center items-center gap-40 pt-10 ">
      <div className="flex flex-col gap-2 w-5/12 slide-to-right">
        <p className="text-or font-nav pl-2">Hi there! My name is</p>
        <h2 className="font-main font-semibold tracking-wide text-5xl text-wh">
          Agata Deter.
        </h2>
        <h6 className='"font-main font-semibold tracking-wide text-4xl text-wh"'>
          I'm a full-stack developer.
        </h6>
        <p className="w-10/12">
          Creative proffesional passionate about designing appealing and
          user-friendly websites. Ready and excited to transition into the world
          of IT.
        </p>
      </div>
      <div>
        <div className="box slide-to-left">
          <img src={mypic} alt="me" className="h-64 w-72 border-2 border-or" />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
