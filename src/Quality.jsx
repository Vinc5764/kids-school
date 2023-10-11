import quotes from './assets/quote.png';
import half from './assets/quality.png';
import right from './assets/right.svg';

const Quality = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-32 pt-8 lg:flex-row">
      <div>
        <img src={half} alt="" />
      </div>
      <div className="flex flex-col items-start justify-center gap-4 lg:w-[23rem]">
        <img src={quotes} alt="line" className="h-2 w-20" />
        <h1 className="text-[2rem] font-bold lg:text-[2.5rem]">
          Get Quality Education
        </h1>
        <p className="text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{' '}
        </p>
        <h3 className="inline-flex font-bold text-primary">
          Learn More <img src={right} alt="arrow" className="pl-2" />
        </h3>
      </div>
    </div>
  );
};

export default Quality;
