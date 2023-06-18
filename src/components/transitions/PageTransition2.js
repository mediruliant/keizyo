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
   initial: {x: '100%'},
   animate: {x: '0%'},
   exit: {x: '-100%'}
}

const ChildTransitionLeave = (props) => {
   return (
      <motion.div 
         className={`w-screen h-full bg-violet-600 absolute z-[1000] ${props.top} -right-[100%]`}
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
         className={`w-screen h-full bg-violet-600 absolute z-[1000] ${props.top} -left-[100%]`}
         transition={{duration: 0.4, delay: props.del}}
         variants={slideOver}
         initial='initial'
         animate='animate'
         exit='exit'
      >
      </motion.div>
   )
}

const PageTransition2 = ({ children }) => {
  return (
  <motion.div 
    className="page fixed top-0"
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

      <ChildTransitionEnter top='bottom-0' del={1.4} />

    {children}
   </motion.div>
  )
}

export default PageTransition2