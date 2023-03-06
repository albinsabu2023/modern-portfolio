import React from 'react'
import {motion} from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkeExperience({}: Props) {
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
     className='h-screen flex relative overflow-hidden flex-col text-lft md:flow-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory   scrollbar-track-gray-400/20  scrollbar-thumb-[#F7Ab0A]/80 scrollbar-thin
  '>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
         
        </div>
    </motion.div>
  )
}

export default WorkeExperience