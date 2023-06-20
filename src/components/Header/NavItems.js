import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = (props) => {
    
    return (
        <div className="w-full flex justify-stretch overflow-hidden">
            <NavLink to={props.href} className={`
               py-1.5
               px-3
               m-0
               relative
               w-full
               ${props.textAlign}
               overflow-hidden
               hover:text-white
               before:content-['']
               before:absolute
               before:-z-10
               before:top-0
               before:right-0
               before:w-0
               before:h-full
               before:bg-violet-500
               before:hover:w-full
               before:duration-200
               duration-200
            `} 
            >
                <div>
                    {props.menu}
                </div>
            </NavLink>
        </div>
    )
}

export default NavItems;