import React from "react";
import { NavLink } from "react-router-dom";

const WhereTo = () => {
  return (
    <div className="w-full mx-auto sm:flex gap-6 sm:justify-between sm:items-end relative">

      <div className="title">
        <h3 className="my-5 md:my-0 md:mb-16 text-4xl font-semibold font-mono text-white">
          WhereTo="?"
        </h3>
        <div className="w-full h-32 bg-blue-800 rounded-xl p-5 mb-5 sm:mb-0 relative overflow-hidden">
          <p className="text-2xl font-semibold text-slate-200">
            Illuminate me with facts. What info do you seek?
          </p>
          <div className="w-2/6 aspect-square rounded-full outline outline-white/25 outline-[30px] absolute right-0 -top-20"></div>
          <div className="w-1/6 aspect-square rounded-full outline outline-white/25 outline-[24px] absolute -left-5 -bottom-10"></div>
        </div>
      </div>

      <div className="max-w-[400px] min-w-[300px] md:max-w-[800px] md:min-w-[700px] md:w-1/2 grid grid-cols-4 md:grid-cols-6 gap-4">
        <NavLink to="/about" className="col-span-4 md:col-span-2 p-6 bg-violet-800 rounded-xl aspect-[4/2] md:aspect-square relative overflow-hidden group hover:scale-95 duration-300 ease-in-out">
          <div className="text-white">
            <h4 className=" text-3xl">About me</h4>
            <p className="text-xl">Inside My Wheelhouse {'>'}</p>
            <div className="absolute w-1/2 aspect-square rounded-full ring-[35px] ring-white/25 right-0 group-hover:scale-125 group-hover:-translate-x-full duration-[5000ms] md:-bottom-10"></div>
          </div>
        </NavLink>
        <NavLink to='/projects' className="col-span-2 p-4 bg-teal-800 rounded-xl aspect-square relative overflow-hidden group hover:scale-95 duration-300 ease-in-out">
            <div className="text-white">
            <h4 className=" text-2xl leading-6">Latest Projects</h4>
            <p className="text-xl"> {'>'}</p>
            <div className="absolute w-1/2 aspect-square rounded-full ring-[25px] md:ring-[35px] ring-white/25 -left-5 -top-5 group-hover:scale-150 group-hover:translate-x-1/2 group-hover:ring-[100px] duration-[5000ms]"></div>
          </div>
        </NavLink>
        <NavLink to='/contact' className="col-span-2 p-4 bg-orange-700 rounded-xl aspect-square relative overflow-hidden group hover:scale-95 duration-300 ease-in-out">
            <div className="text-white">
            <h4 className=" text-2xl">Offers</h4>
            <p className="text-lg leading-5 mt-2">Products & Services {'>'}</p>
            <div className="absolute w-1/2 aspect-square rounded-full ring-[25px] md:ring-[35px] ring-white/25 left-0 group-hover:ring-[100px] duration-[5000ms] md:-bottom-10"></div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default WhereTo;
