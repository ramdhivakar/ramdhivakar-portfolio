import { motion } from "framer-motion";

const transitionvarient = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%' ],
    width: ['0%', '100%' ],
  },
};
const Transition = () => {
  return (
    <>
      <motion.div 
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]" variants={transitionvarient} 
            initial="initial" animate="animate" exit="exit" transition={{delay: 0.2, duration:0.6, ease:"easeInOut"}}>
      </motion.div>
      <motion.div 
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]" variants={transitionvarient} 
            initial="initial" animate="animate" exit="exit" transition={{delay: 0.4, duration:0.6, ease:"easeInOut"}}>
      </motion.div>
      <motion.div 
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]" variants={transitionvarient} 
            initial="initial" animate="animate" exit="exit" transition={{delay: 0.6, duration:0.6, ease:"easeInOut"}}>
      </motion.div>
    </>
  );
};

export default Transition;
