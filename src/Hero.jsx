import Courses from './Courses';
import none from './assets/none.png';

const Hero = () => {
  return (
    <div id="home">
      <div className="mt-40 flex  flex-col-reverse justify-between pl-[4.3rem] lg:mt-0 lg:flex-row">
        <div className="inline-flex flex-col items-center gap-8 pl-4 pt-4 md:text-justify lg:ml-[-4rem] lg:mt-24 lg:items-start lg:pt-32 lg:text-justify xl:pl-48">
          <h3 className="pt-4 text-primary">For Better Future</h3>
          <h1 className="text-[2rem] font-bold text-[#252B42] lg:text-[3.6rem] ">
            HIGH QUALITY
            <br />
            COURSES
          </h1>
          <p className="text-[#737373]">
            Every day brings with it a fresh
            <br /> set of learning possibilities.
          </p>
          <div className="">
            <button className=" mr-4 bg-primary  px-4 py-2 text-white transition-all duration-300 hover:rounded-md hover:border hover:bg-primary hover:text-white">
              Get Quote Now
            </button>
            <button className="duration-30 inline-flex rounded border border-primary bg-transparent px-4  py-2 text-primary transition-all hover:bg-primary hover:text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className=" lg:ml-16 lg:bg-[url('./assets/back.png')]">
          <img src={none} alt="kid" className="lg:mt-24 lg:pt-24 " />
        </div>
      </div>
      <div className="px-4 pt-8 ">
        <Courses />
      </div>
    </div>
  );
};

export default Hero;
