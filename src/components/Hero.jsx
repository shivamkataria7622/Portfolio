import React from 'react'
import {HERO_CONTENT} from "../constants"
import myimg from "../assets/projects/clg2.jpg"
import { motion } from "framer-motion"
 
const container = (delay) => ({
    hidden: {x:-100 , opacity: 0},
    visible: {
      x:0,
      opacity:1,
      transition:{duration:0.5,delay: delay}
    }
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
        <div className='w-full lg:w-1/2'>
        <div className='flex flex-col items-center lg:items-start'>
      <motion.h1 
      variants={container(0)}
      initial="hidden"
      animate="visible" 
       className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl ml-4'>Shivam Kataria </motion.h1>
      <motion.span whileHover={{ scale: 1.2 }}
      variants={container(0.5)}
      initial="hidden"
      animate="visible" 
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -50, right: 100 }} className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ml-5'>
        Full Stack Devoloper
      </motion.span>
      <motion.p variants={container(1)}
      initial="hidden"
      animate="visible"  className=' ml-5 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
      </div>
     </div>
     <div className='w-full lg:w-1/2 lg:p-8'> 
            <div className='flex justify-center'>
                <motion.img 
      variants={container(1.2)}
      initial={{x:100,opacity:0}}
      animate="visible"  className='w-[360px] rounded-2xl ml-4' src={myimg} alt="image" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
