import { motion } from "framer-motion"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"

function Header() {
  return (
    <header className="sticky top-0 p-6 flex items-start justify-between max-w-7xl mx-auto  z-20 xl:items:center">
        <motion.div 
        initial={{
          opacity:0,
          x:-500,
          scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,

        }}
        transition={{
          duration:1.5,
        }}
        
        
        className=" flex flex-row items-center  xl:ml-20">
            <SocialIcon 
              url="https://github.com/albinsabu2023" 
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon 
              url="https://www.linkedin.com/in/albin-sabu-377798230/" 
              fgColor="gray" 
              bgColor="transparent"
            />
            <SocialIcon 
              url=" https://wa.me/+919544697960" 
              fgColor="gray" 
              bgColor="transparent"
              type="whatsapp"
            />
            <SocialIcon 
              url="https://www.facebook.com/albin.albin.144" 
              fgColor="gray" 
              bgColor="transparent"
              
             
            />
          

        </motion.div>
         
        <motion.div 
         onClick={() => (window.location.href = "#contact")}
        initial={{
          x:500,
          opacity:0,
          scale:0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1
        }}
        transition={{
          duration:1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer xl:mr-10">
            <SocialIcon 
              className="cursor-pointer" 
              network="email" 
              fgColor="gray" 
              bgColor="transparent" 
            />
            <p className="uppercase hidden  md:inline text-gray-400 text-sm">Get In Touch</p>
        </motion.div>
        
    </header>
  )
}

export default Header