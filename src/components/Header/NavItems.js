import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavItems = (props) => {
    const [slide, setSlide] = React.useState(false)
    
    const slideMenu = () => {
        setSlide(!slide)
    }
    
    return (
        <li className="w-full flex justify-stretch overflow-hidden">
            <NavLink to={props.href} className={`
               py-1.5
               px-3
               m-0
               relative
               w-full
               text-end
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
            `} onClick={slideMenu}>
                <motion.div 
                  className=""
                  initial={{ y: '100%', x: '10%' }}
                  animate={{ y: '0%', x: '0%' }}
                  exit={{y: '0%', x: '0%' }}
                  transition={{ duration: 0.3, delay: props.inDelay }}
                >
                    {props.menu}
                </motion.div>
            </NavLink>
        </li>
    )
}

export default NavItems;