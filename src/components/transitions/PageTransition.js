import { motion } from "framer-motion";

const opacityAnimation = {
    initial: {
        opacity: 0,
     },
     animate: {
        opacity: 1,
     },
     exit: {
        opacity: 0,
     },
}

const slideOver = {
   initial: {x: '110%'},
   animate: {x: '0%'},
   exit: {x: '-110%'}
}

const ChildTransitionLeave = (props) => {
   return (
      <motion.div 
         className={`w-[100%] h-1/4 bg-violet-600 fixed z-[1000] ${props.top} -right-[110%]`}
         transition={{duration: 0.4, delay: props.del}}
         variants={slideOver}
         initial='initial'
         animate='animate'
         exit='exit'
      >
      </motion.div>
   )
}

const ChildTransitionEnter = (props) => {
   return(
      <motion.div 
         className={`w-[100%] h-1/4 bg-violet-600 fixed z-[1000] ${props.top} -left-[110%]`}
         transition={{duration: 0.4, delay: props.del}}
         variants={slideOver}
         initial='initial'
         animate='animate'
         exit='exit'
      >
      </motion.div>
   )
}

const PageTransition = ({ children }) => {
  return (
  <motion.div 
    className="top-0 page"
    transition={{
        ease: 'easeInOut',
        duration: 0.01,
        delay: 0.7,
    }}
    variants={opacityAnimation}
    initial='initial'
    animate='animate'
    exit='exit'
   >
      <ChildTransitionLeave top='top-0' />
      <ChildTransitionLeave top='top-1/4' del={0.15} />
      <ChildTransitionLeave top='top-1/2' del={0.275} />
      <ChildTransitionLeave top='bottom-0' del={0.325} />

      <ChildTransitionEnter top='top-0' del={1} />
      <ChildTransitionEnter top='top-1/4' del={1.15} />
      <ChildTransitionEnter top='top-1/2' del={1.3} />
      <ChildTransitionEnter top='bottom-0' del={1.4} />

    {children}
   </motion.div>
  )
}

export default PageTransition