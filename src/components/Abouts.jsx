import aboutimg from "../assets/projects/me.jpg";
import {ABOUT_TEXT} from "../constants";
import {motion} from "framer-motion"

const container = (delay) => ({
  hidden: {x:-100 , opacity: 0},
  visible: {
    x:0,
    opacity:1,
    transition:{duration:0.5,delay: delay}
  }
});

const Abouts = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <motion.h2  variants={container(0)}
      initial="hidden"
      animate="visible"  className="my-10 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap  ">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="  flex items-center justify-center">
            <motion.img  variants={container(0.5)}
      initial="hidden"
      animate="visible"  className="rounded-2xl w-[400px] -py-8" src={aboutimg} alt="abt" />
          </div>
        </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <motion.p  variants={container(1)}
      initial={{x:100,opacity:0}}
      animate="visible" className=' max-w-2xl py-6 font-light tracking-tighter'>{ABOUT_TEXT}</motion.p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Abouts;
