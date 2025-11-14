import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppContext } from "../../hooks/AppContext";

interface Props {
    section: any;
    dropDown: boolean;
}

const MobileSidebarOption = ({ section, dropDown }:Props) => {
    const { setDropDown } = useAppContext();

  return (
    <motion.div className="relative h-16" 
        initial={{x:'100%', opacity:0}}
        animate={dropDown? {x:0, opacity:1}:{}}
        transition={{duration:0.3, delay:0.2}}>

        <Link to={section.navigate} className={`w-full bg-white flex items-center gap-3 rounded-xl p-2 border border-gray-100 transition-all duration-300 
            shadow-sm active::shadow-lg
            ${section.value === 'Logout'? 'active::bg-red-100':'active::bg-gray-50'}`}
            onClick={()=> setDropDown(false)}>

            <div className="bg-white rounded-md z-20">
                <div className={`w-11 aspect-square rounded-md grid place-items-center ${section.colour}`}>
                    {section.icon}
                </div>
            </div>
            <motion.div className="">
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

export default MobileSidebarOption;