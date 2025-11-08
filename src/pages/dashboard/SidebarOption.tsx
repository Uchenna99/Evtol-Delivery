import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
    section: any
}

const SidebarOption = ({ section }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <motion.div className={`relative h-16`}
        onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
        >

        <Link to={''} className={`flex items-center gap-3 rounded-xl p-2 border border-transparent transition-all duration-250 
            absolute overflow-hidden
            ${hovering? 'border-gray-100 shadow-sm hover:shadow-lg hover:bg-gray-50 w-[270px]':''}`}
            >

            <div className="bg-white z-20">
                <div className={`w-11 aspect-square rounded-md grid place-items-center ${section.colour}`}>
                    {section.icon}
                </div>
            </div>
            <motion.div className={`z-10`}
                initial={{x:'100%', opacity:0}}
                animate={hovering? {x:0, opacity:1}:{}}
                transition={{duration:0.4}}>
                <p className="text-text font-semibold text-nowrap">
                {section.value}
                </p>
                <p className="text-text text-xs text-nowrap">
                {section.label}
                </p>
            </motion.div>
        </Link>

    </motion.div>
  )
}

export default SidebarOption;