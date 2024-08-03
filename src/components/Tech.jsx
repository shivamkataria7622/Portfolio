import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import {animate, motion} from "framer-motion"

const iconvar =(duration) => ({
    initial:{y:-10 },
    animate:{
      y:[10,-10],
      transition:{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType:"reverse"
      }
    }
});


const Tech = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0 , y:-100}}
        transition={4.5}
      className="my-10 text-center text-4xl">Technologies</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
     
       <motion.div 
        variants={iconvar(4)}
        initial="initial"
        animate = "animate"
       className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400"/>
      </motion.div>
        <motion.div  variants={iconvar(2)}
        initial="initial"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMongodb className="text-7xl text-green-400"/>
      </motion.div>
        <motion.div  variants={iconvar(4)}
        initial="initial"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiNextjsFill className="text-7xl text-white-400"/>
      </motion.div>
        <motion.div  variants={iconvar(1.5)}
        initial="initial"
        animate = "animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaNodeJs className="text-7xl text-green-400"/>
      </motion.div>
        <motion.div  variants={iconvar(1)}
        initial="initial"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiVite className="text-7xl text-purple-400"/>
      </motion.div>
    </div>
    </div>
    
  )
}

export default Tech
