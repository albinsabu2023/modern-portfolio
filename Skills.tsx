import React from 'react'
import {motion} from "framer-motion"
import Skill from './Skill'
type Props = {
  
}

function Skills({}: Props) { 
  const url1="https://cdn.iconscout.com/icon/free/png-512/html5-40-1175193.png?f=avif&w=512"
  const url2="https://cdn.iconscout.com/icon/premium/png-512-thumb/js-file-17-502455.png?f=avif&w=512"
  const url3="https://cdn.iconscout.com/icon/free/png-512/tailwind-css-5285308-4406745.png?f=avif&w=512"
  const url4="https://cdn.iconscout.com/icon/free/png-512/c-57-1175191.png?f=avif&w=512"
  const url5="https://cdn.iconscout.com/icon/free/png-512/c-4-226082.png?f=avif&w=512" 
  const url6="https://cdn.iconscout.com/icon/free/png-512/logo-1889531-1597591.png?f=avif&w=512"
  const url7="https://cdn.iconscout.com/icon/free/png-512/firebase-3521427-2944871.png?f=avif&w=512"
  const url8="https://cdn.iconscout.com/icon/free/png-512/java-59-1174952.png?f=avif&w=512"
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
    
    className=" flex  relative flex-col  xl:flex-row
    max-w-[200px] xl:px-10 min-h-screen  justify-center xl:space-y-0 mx-auto items-center
    text-center md:text-left 
    ">
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
       <h3 className=' absolute text-center top-36 uppercase tracking-[3px] text-gray-500 text-sm text-inline' >Hover,see  status</h3>
        <div className='grid grid-cols-3 gap-5'>
            <Skill title={url1}/>
            <Skill title={url2}/>
            <Skill title={url3}/>
            <Skill title={url4}/>
            <Skill title={url5}/>
            <Skill title={url6}/>
            <Skill title={url7}/>
            <Skill title={url8}/>

            
            

        </div>
    </motion.div>
  )
}

export default Skills