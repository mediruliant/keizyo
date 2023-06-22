import React from "react";
import medmed from "../../utilities/img/medmedWle.jpg";
import memedRotate from '../../utilities/img/memedRotate.png'

const MouseFollowingOnHover = () => {

  return (
    <div id="circle" className="w-52 aspect-square rounded-full flex items-center justify-center bg-yellow-400 relative">
        <div id="text" className="w-[97.5%] aspect-square rounded-full absolute top-0.5 flex grayscale">
            <img className="w-full h-full object-cover animate-spin-slow" alt={memedRotate} src={memedRotate}></img>
        </div>
      <div className="w-[87%] aspect-square rounded-full overflow-hidden flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          alt={medmed}
          src={medmed}
        ></img>
      </div>
    </div>
  );
};

export default MouseFollowingOnHover;
