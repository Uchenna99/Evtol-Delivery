import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
    section: any
}

const SidebarOption = ({ section }:Props) => {
  return (
    <Link to={''} className="flex-1 flex items-center gap-3 border border-gray-100 shadow-sm rounded-xl p-5
        hover:shadow-lg hover:bg-gray-50 last:hover:bg-red-100 transition-all duration-250">
        <div className={`w-11 aspect-square rounded-md grid place-items-center ${section.colour}`}>
            {section.icon}
        </div>
        <div className="">
            <p className="text-text text-lg font-semibold">
            {section.value}
            </p>
            <p className="text-text text-sm">
            {section.label}
            </p>
        </div>
    </Link>
  )
}

export default SidebarOption;