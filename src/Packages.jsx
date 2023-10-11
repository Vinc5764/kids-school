// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Reviews from './Reviews';

const Packages = () => {
  return (
    <div className=" my-2 px-4 py-32 lg:px-12 " id="testimonials">
      <div className="mb-20 ml-[-3rem] lg:ml-0">
        <p className="mb-5 text-sm font-semibold text-primary">
          Practice Advice
        </p>
        <h2 className=" text-4xl  font-bold md:text-5xl">
          Approachable Packages
        </h2>
        <p className="pt-4 text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{' '}
        </p>
      </div>

      <div>
        <Reviews />
      </div>
    </div>
  );
};

export default Packages;
