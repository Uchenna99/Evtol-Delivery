import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    section: any;
    confirmation: ()=>void;
}

const SidebarOption = ({ section, confirmation }:Props) => {
    const navigate = useNavigate();
    const [hovering, setHovering] = useState(false);

    const handleClick = ()=>{
        setHovering(false);
        if(section.value !== "Logout"){
            navigate(section.navigate);
            return
        }
        confirmation();
    };


  return (
    <>
        <motion.div className="relative h-16"
            onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
            >

            <div className={`flex items-center gap-3 rounded-xl p-2 border border-transparent transition-all duration-300 
                absolute overflow-hidden
                ${hovering? 'border-gray-100 shadow-sm hover:shadow-lg hover:bg-gray-50 w-[250px]':'w-16'}
                ${section.value === 'Logout'? 'hover:bg-red-100':'bg-white'}`}
                onClick={handleClick}
                >

                <div className="bg-white rounded-md z-20">
                    <div className={`w-11 aspect-square rounded-md grid place-items-center ${section.colour}`}>
                        {section.icon}
                    </div>
                </div>
                <motion.div className={`z-10`}
                    initial={{x:'100%', opacity:0}}
                    animate={hovering? {x:0, opacity:1}:{}}
                    transition={{duration:0.3}}>
                    <p className="text-text font-semibold text-nowrap">
                    {section.value}
                    </p>
                    <p className="text-text text-xs text-nowrap">
                    {section.label}
                    </p>
                </motion.div>
            </div>

        </motion.div>

    </>
  )
}

export default SidebarOption;