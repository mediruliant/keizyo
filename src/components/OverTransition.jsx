import { motion, AnimatePresence } from "framer-motion";

const OverTransitionIn = () => {
    return(
        <AnimatePresence initial={false}>
            
      <motion.div 
        className="w-screen h-1/3 absolute z-[100] bg-slate-600 top-0 translate-x-1/2"
        initial= {{x: '100%'}}
        animate= {{x: '0%'}}
        exit= {{x: '-100%'}}
        transition= {{duration: 0.5}}
      ></motion.div>

        </AnimatePresence>
    )
}

export default OverTransitionIn;