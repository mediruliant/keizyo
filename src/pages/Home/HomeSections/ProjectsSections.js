import React from "react";
import valeeqa from "../../../utilities/img/valeeqa1.png";
import { NavLink } from "react-router-dom";

const ProjectsSections = (props) => {
  const img = props.img;
  return (
    <div className="w-full h-[90%] md:flex md:gap-1 md:items-end md:justify-start">
      <div
        className={`
            ${props.bgColor}
            max-w-lg 
            mx-3 
            aspect-[4/3] 
            rounded-2xl 
            flex
            justify-center items-end
            overflow-hidden
            shadow-xl
            md:max-w-xl
            md:mx-auto
            md:aspect-video
            md:ml-10
            md:mr-0
          `}
      >
        <img
          src={img}
          alt={img}
          className="w-[85%] h-[90%] md:w-full md:h-full object-cover object-top shadow-2xl"
        ></img>
      </div>
      <div className="text-content max-w-lg mx-4 mt-4 text-center md:text-start md:mx-4 md:max-w-md">
        <h5 className="text-2xl font-bold">{props.name}</h5>
        <p className="mt-4 font-sans font-semibold">{props.short}</p>
        <button className="py-1 mt-2 mx-2 md:mx-0 font-semibold text-slate-700 hover:text-black relative overflow-hidden group">
          <NavLink to={props.link}>Project detail</NavLink>
          <div className="h-[2px] w-full bg-slate-400 origin-left absolute bottom-0 -z-10"></div>
          <div className="h-[2px] w-0 bg-black origin-left  absolute bottom-0 group-hover:w-full duration-300 ease-in-out"></div>
        </button>
      </div>
    </div>
  );
};

ProjectsSections.defaultProps = {
  bgColor: "bg-red-700",
  img: valeeqa,
  name: "Valeeqa Studio Official Website",
  short: "Website, HTML/CSS, JS",
  link: "/",
};

export default ProjectsSections;
