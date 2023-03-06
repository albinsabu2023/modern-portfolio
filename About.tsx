import React from 'react'
import {motion} from "framer-motion"
type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial ={{
      opacity:0,
    }}
    whileInView={{
      opacity:1,
    }}
    transition={{
      duration:1.5,
    }}
    className='flex flex-col relative text-center md:text-left  md:flex-row  h-screen  max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
      initial={{
          x:-200,
          opacity:0,
      }}
      whileInView={{
        x:0,
        opacity:1,
      }}
      viewport={{
        once:true,
      }}
      transition={{
        duration:1.2,
      }}
      className=" p-9 mt-10 -mb-20  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64
        md:h-95 xl:w-[250px] xl:h-[350px] xl:rounded-lg
      "
      src="https://avatars.githubusercontent.com/u/105560193?v=4"
      />
      <div className='space-y-2 px-0 md:px-10'>
        <h2 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h2>
        <p className='text-sm '>
          HELLOOOO !!!✌️ Whats up mate??I am <span className='text-[#F7AB0A]'>ALBIN SABU</span> An Enthusiastic developer.He He I  am not working
          I am still studiying.My Dream is to Uncover all the pssibilities of learning.I specialize in web application development, primarily using HTML, CSS, JavaScript, Next and React. I am passionate about creating intuitive, user-friendly software and applications, and am always looking to learn and improve my knowledge of the latest technologies. In my free time, I enjoy spending time with my family, playing board games, and exploring new places.
        </p>
      </div>

    </motion.div>
  )
}

export default About