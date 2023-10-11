import Courses from './Courses';
import none from './assets/none.png';

const Hero = () => {
  return (
    <div id="home">
      <div className="mt-40 flex  flex-col-reverse justify-between lg:mt-0 lg:flex-row">
        <div className="inline-flex flex-col gap-8 pl-4 pt-4 lg:mt-[15rem] lg:pl-32 lg:text-justify">
          <h3 className="pt-4 text-primary">For Better Future</h3>
          <h1 className="text-[2rem] font-bold text-[#252B42] lg:text-[3.6rem] ">
            HIGH QUALITY
            <br />
            COURSES
          </h1>
          <p className="text-[#737373]">
            Every day brings with it a fresh set of learning possibilities.
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
        <div className=" lg:bg-[url('./assets/back.png')]">
          <img src={none} alt="kid" className="lg:pt-24" />
        </div>
      </div>
      <div className="px-4 pt-8 lg:pt-0">
        <Courses />
      </div>
    </div>
  );
};

export default Hero;
