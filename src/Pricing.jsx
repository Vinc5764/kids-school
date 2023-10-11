/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from 'react';

const Pricing = () => {
  return (
    <div id="Pricing">
      <Promo
        promo="Unlimited product updates"
        gig="1GB Cloud storage"
        email="Email and community support"
      />
    </div>
  );
};

const Promo = ({ promo, gig, email }) => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch('pricing.json')
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);
  return (
    <div className="mx-4 my-32 lg:mx-12" id="portfolio">
      <div className="mb-20 flex flex-col justify-between gap-5 sm:flex-row md:items-center">
        <div>
          <p className=" mb-5 text-sm font-bold  text-primary">
            Practice Advice
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">Watch Our Courses</h2>
          <p className="pt-2 leading-[1.25rem]">
            Problems trying to resolve the conflict between
            <br className="hidden lg:block" /> the two major realms of Classical
            physics: Newtonian mechanics{' '}
          </p>
        </div>
      </div>

      {/* pricing card */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {pricing.map((pricing) => (
          <div key={pricing.id} className="rounded-lg bg-white shadow-xl">
            {pricing.special && pricing.new && (
              <img
                src={pricing.new}
                alt=""
                key={pricing.id}
                className={`${
                  pricing.special
                    ? 'relative bottom-8 left-[20rem] mb-[-5rem] sm:left-[10rem] lg:left-[13rem] xl:left-[20rem]'
                    : ''
                }`}
              />
            )}
            <img src={pricing.image} alt="" className="pl-8 pt-16" />
            <div className="p-8">
              <div className="inline-flex w-full flex-row items-center justify-between">
                <h3 className="mb-2 text-lg font-bold">{pricing.name}</h3>
              </div>
              <p className="text-body mb-4">{pricing.description}</p>
              <p className="pt-2 text-[2.5rem] font-bold text-primary">
                19$ <br />
                <h4 className="text-[0.875rem] leading-6 text-[#8EC2F2]">
                  Per Month
                </h4>
              </p>
              <h2 className="w-7/12 pb-4 text-[#737373]">{pricing.slogan}</h2>
              <button className="duration-30 -ml-2 mt-2 w-7/12 rounded-sm border border-primary bg-primary px-4 py-2 font-bold text-white transition-all hover:bg-white hover:text-primary">
                Learn More
              </button>
              <div className="ml-[-0.6rem] inline-flex flex-col justify-between gap-4 pt-4 text-[0.875rem] font-bold text-[#252B42]">
                <div className="flex gap-2 ">
                  <img src={pricing.sales} alt="sales" />
                  <p className="inline-flex">{promo}</p>
                </div>
                <div className="flex gap-2 ">
                  <img src={pricing.sales} alt="sales" />
                  <p className="inline-flex">{promo}</p>
                </div>
                <div className="flex gap-2">
                  <img src={pricing.sales} alt="sales" />
                  <p className="inline-flex">{promo}</p>
                </div>
                <div className="flex gap-2 ">
                  <img src={pricing.case} alt="case" />
                  <p className="inline-flex">{gig}</p>
                </div>
                <div className="flex gap-2">
                  <img src={pricing.case} alt="case" />
                  <p className="inline-flex">{email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
