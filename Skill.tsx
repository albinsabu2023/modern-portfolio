import {motion} from "framer-motion"

type Props = {
  directionLeft?:boolean,
  title:any
}

function Skill({directionLeft,title}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img 
        initial={{
          x:directionLeft? -200:200,
          opacity:0,
        }}
        transition ={{
          duration:1,
        }}
        whileInView={{
          opacity:1,
          x:0,
        }}
        viewport={{
          once:true
       }}
        src={title}
        alt=""

        className="xl:w-54 xl:h-54 z-0"

      />
      <div className="absolute opacity-0 group-hover:opacity-100 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 xl:w-32 xl:h-32 rounded-full z-0 ">
        <div className="flex items-center justify-center h-full ">
          <p className="text-xs font-bold text-white opacity-100 bg-transparent z-30  ">100%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill