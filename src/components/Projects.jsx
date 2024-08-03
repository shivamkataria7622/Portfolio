import { PROJECTS } from "../constants"
import{motion} from "framer-motion"

const container = (delay) => ({
  hidden: {x:-100 , opacity: 0},
  visible: {
    x:0,
    opacity:1,
    transition:{duration:0.5,delay: delay}
  }
});

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2  variants={container(0)}
      initial="hidden"
      animate="visible"  className='text-center text-4xl my-10'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
              <motion.img  variants={container(0)}
      initial="hidden"
      animate="visible" src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded-lg" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">  {project.title}</h6>
            <p className="mb-2 text-neutral-400">{project.description}</p>
            
           </div>
            </div>
          )
        })}
      </div>
     
    </div>
  )
}

export default Projects

