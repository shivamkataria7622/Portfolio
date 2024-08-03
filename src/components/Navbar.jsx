import logo from "../assets/kevinRushLogo.png";
import log from "../assets/projects/sk.jpeg"
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import s from "../assets/projects/sk.avif"

const Navbar = () => {
  return (

        <nav className=" flex mb-5  items-center justify-between py-6">
            <div className="flex items-center flex-shrink-0">
                <h1 className="font-serif text-2xl ml-3 hover:scale-125 transition-transform duration-300 cursor-pointer">PORTFOLIO</h1>
                </div>
                <div className="m-8 items-center flex justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/shivam-kataria-685375273/" className="hover:scale-125 transition-transform duration-300"><FaLinkedin/></a>
                <a href="https://github.com/shivamkataria7622"  className="hover:scale-125 transition-transform duration-300"><FaGithub/> </a>
                <a href="https://x.com/katariashivam22" className="hover:scale-125 transition-transform duration-300"><FaXTwitter/></a>
                <a href="https://www.instagram.com/shivamkataria622/" className="hover:scale-125 transition-transform duration-300"> <FaInstagram/></a>
                </div>
        </nav>
   
  )
}

export default Navbar
