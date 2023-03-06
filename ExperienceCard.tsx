import React from 'react'
import {motion} from "framer-motion"
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px]  bg-[#292929] p-20   hover:opacity-100
    opacity-70 cursor-pointer xl:flex-row transition-opacity duration-200 overflow-hidden snap-center xl:snap-center
    '>
       <motion.img
       initial={{
        x:-100,
        opacity:0,
       }}
       transition={{durartion:1.2}}
       whileInView={{opacity:1,y:0}}
       viewport={{once:true}}
       className='ml-40 p-3 w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px]  object-cover object-center'
       src="https://avatars.githubusercontent.com/u/126412402?v=4"
       alt=""
       />
       <div className='px-0 md:px-10 ml-2 '>
        <h4 className='text-2xl font-light ml-4'>CEO of CODEALB</h4>
        <p className='mt-1 ml-20'>codeAlb</p>
        <div className='flex space-x-2 my-2 ml-20'>
            <img className='h-4 w-4 rounded-full' alt=""  src ="https://cdn-icons-png.flaticon.com/512/919/919851.png"/>
            <img className='h-4 w-4 rounded-full' alt=""  src ="https://cdn-icons-png.flaticon.com/512/919/919851.png"/>
            <img className='h-4 w-4 rounded-full' alt=""  src ="https://cdn-icons-png.flaticon.com/512/919/919851.png"/>
        </div>
        <p className='uppercase p-y-5 text-gray-300 ml-20'>20-2-2023</p>
        <ul className='list-disc space-y-4  text-sm'>
            <li>Im not currently not working</li>
            <li>Things become better and better </li>
            <li>I continue to learn...its pleasure</li>
        </ul>
       </div>
         
    </article>
  )
}

export default ExperienceCard