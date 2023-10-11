const Newsletter = () => {
  return (
    <div className="flex  flex-col justify-center text-center" id="Contact">
      <div className="mb-10 inline-flex flex-col justify-between gap-4 lg:mb-20">
        <h2 className="text-primary">Newsletter</h2>
        <h1 className="text-2xl font-bold ">Most Popular Courses</h1>
        <p className="text-[#737373]">
          Problems trying to resolve the conflict between{' '}
          <br className="hidden lg:block" /> the two major realms of Classical
          physics: Newtonian mechanics{' '}
        </p>
      </div>
      <div className=" inline-flex items-center  justify-center lg:w-[36rem]">
        <input
          type="text"
          id="email"
          placeholder="Your Email"
          name="firstname"
          className="mt-2  block w-8/12 rounded-sm border border-solid border-[#E6E6E6] bg-[#F9F9F9] py-2 placeholder:text-base placeholder:text-[#737373] lg:w-full"
        />
        <button className=" mt-2 bg-primary  px-4 py-2 text-white transition-all duration-300 hover:rounded-md hover:border hover:bg-primary hover:text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
