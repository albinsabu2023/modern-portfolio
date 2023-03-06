import Link from "next/link";
import {Cursor,useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles";
type Props = {}

function Hero({}: Props) {
    const[text,count]=useTypewriter({
        words:[
            "Hey,Albin Sabu here.",
            "Love to See you ",
            "Lets <Explore.tsx/>"
        ],
    
    loop:true,
    delaySpeed:2000,
    });
  return (
    <div className=" flex flex-col space-y-8 h-screen items-center justify-center text-center overflow-hidden">
        <BackgroundCircles/>
        <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/84149653?v=4" 
        alt=""/>
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
            <h1 className="text-5xl xl:text-6xl font-semibold px-10">
                <span className=" mr-3">{text}</span>
                <Cursor cursorColor="#F7AB0A"/>
            </h1>
            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
               
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
                 <Link href="#contact">
                    <button className="heroButton">ContactMe</button>
                </Link>

                
           </div>
        </div>
        
    </div>
  )
}

export default Hero