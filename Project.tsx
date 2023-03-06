import React from 'react'
import {motion} from "framer-motion"
type Props = {
 
}

function Project({}: Props) {
    const projects=[1,]
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
    className='h-screen relative flex overflow-hidden  text-left flex-col
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0 
    '>
    <h3  className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
    <div  className='w-full relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
      scrollbar-track-gray-400/20  scrollbar-thumb-[#F7Ab0A]/80 scrollbar-thin'>
        {
            projects.map((project,i) =>(
                // eslint-disable-next-line react/jsx-key
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                   <motion.img
                         initial ={{
                        y:-80,
                        opacity:0,
                        }}
                        whileInView={{
                        opacity:1,
                        y:0,
                        }}
                            transition={{
                        duration:1.2,
                        }}
                        viewport={{
                            once:true,
                        }}
                    src="data:image/jpeg;base64,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" 
                    alt="" 
                     className='h-[100px] mt-[90px] rounded-lg '/>
                   <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center animate-pulse'><span
                    className=' underline decoration-[#F7AB0A]/50'
                    ></span>ChaTGpt-next</h4>
                    
                     <p className=' text-sm text-center md:text-left'>
                      ChatGpt model created with additional features using nextjs,react css.Better authentication implemented using firebase.Check it to hava e better experience
                       <a href="https://chatgpt-next-iota.vercel.app/" className='text-[#F7AB0A]'>click to see</a>.
                    </p>  
                    </div>
                    
               </div>
              ))
        }
         {
            projects.map((project,i) =>(
                // eslint-disable-next-line react/jsx-key
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                   <motion.img
                         initial ={{
                        y:-80,
                        opacity:0,
                        }}
                        whileInView={{
                        opacity:1,
                        y:0,
                        }}
                            transition={{
                        duration:1.2,
                        }}
                        viewport={{
                            once:true,
                        }}
                    src="https://i.pinimg.com/236x/0f/ff/0d/0fff0d70a82d1b88985c4a52e75494c5.jpg" 
                    alt="" 
                     className='h-[100px] mt-[90px]  rounded-lg'/>
                   <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center animate-pulse'><span
                    className=' underline decoration-[#F7AB0A]/50'
                    ></span >ChaTRoom</h4>
                    
                     <p className=' text-sm text-center md:text-left'>
                      Chatroom is a web based application to send messages from anywhere in world.we can create rooms and add chats.Created using React,Html ,Css .Connected to realtime database in firestore
                       <a href="https://chatroom-9fc21.web.app//" className='text-[#F7AB0A]'>click to see</a>.
                    </p>  
                    </div>
                    
               </div>
              ))
        }
    </div>
    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[250px] -skew-y-12'></div>

    </motion.div>
  )
}

export default Project