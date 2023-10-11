/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from 'react';
import right from './assets/right.svg';

const Product = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="mx-4 my-32 lg:mx-12" id="Product">
      <div className="mb-20 flex flex-col justify-between gap-5 sm:flex-row md:items-center">
        <div>
          <p className=" mb-5 text-sm font-bold  text-primary">
            Practice Advice
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Our Popular Courses
          </h2>
          <p className="pt-2 leading-[1.25rem] text-white">
            Problems trying to resolve the conflict between
            <br className="hidden lg:block" /> the two major realms of Classical
            physics: Newtonian mechanics{' '}
          </p>
        </div>
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="rounded-lg bg-white shadow-xl">
            <img src={project.image} alt="" className="w-full" />
            <div className="p-8">
              <div className="inline-flex w-full flex-row items-center justify-between">
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {project.name}
                </h3>
                <img
                  src={project.rating}
                  alt="rating"
                  className=" justify-end"
                />
              </div>
              <h2 className="pb-4 font-bold">{project.slogan}</h2>
              <p className="text-body mb-4">{project.description}</p>
              <div className="flex">
                <img src={project.sales} alt="sales" /> <p>15 Sales</p>
              </div>
              <p className="pt-2 font-semibold text-[#BDBDBD]">
                $16.48 <span className="font-bold text-secondary">$6.48</span>
              </p>
              <button className="duration-30 -ml-2 mt-2 inline-flex rounded-3xl border border-primary bg-transparent px-4 py-2 font-bold text-primary transition-all hover:bg-primary hover:text-white">
                Learn More
                <img src={right} alt="arrow" className="pl-2 pt-[0.2rem]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
