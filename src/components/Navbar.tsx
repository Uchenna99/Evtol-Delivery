import logo1 from "../assets/images/logo_white.svg"
import logo2 from "../assets/images/logo_black.svg"
import { Menu, User2, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {
    trigger: boolean;
    loggedIn: boolean;
}

const Navbar = ({ trigger, loggedIn }:Props) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`w-full h-14 flex justify-center fixed top-0 left-0 z-50 px-5 md:px-10 transition-all duration-300
        ${trigger? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        <div className="w-full xl:w-[1240px] flex justify-between items-center">

            <div className="flex items-center gap-3 cursor-pointer hover:scale-110 transition-all duration-200">
                <div className="w-12 h-12 flex items-center justify-center">
                    <img src={trigger? logo2 : logo1} alt="drone" 
                        className="scale-190 transition-all duration-200"
                    />
                </div>

                <h4 className={`${trigger? 'text-text':'text-white'} text-lg font-semibold`}>EVTOL</h4>
            </div>

            <div className="flex items-center gap-5">
                {
                    loggedIn &&
                    <User2
                        color={trigger? '#1A202C' : '#ffff'}
                        className="cursor-pointer hover:scale-110"
                    />
                }

                <div className="cursor-pointer hover:scale-110">
                    {
                        menuOpen?
                        <X
                            color={trigger? '#1A202C' : '#ffff'}
                            onClick={()=> setMenuOpen(false)}
                        />
                        :
                        <Menu
                            color={trigger? '#1A202C' : '#ffff'}
                            onClick={()=> setMenuOpen(true)}
                        />
                    }
                </div>
            </div>

        </div>

        <motion.div className={`fixed top-14 right-0 w-2/3 sm:w-1/2 transition-all duration-300 px-3 sm:px-6 py-10 shadow-sm flex flex-col gap-4
            ${trigger? 'bg-primary' : 'bg-background'}`}
            initial={{x:'105%'}} animate={menuOpen? {x:0}:{}}
            transition={{duration:0.3, ease:'easeInOut'}}>

            <div className={`w-full h-10 flex items-center px-5 hover:bg-secondary/10 transition-all duration-200 cursor-pointer`}
                onClick={()=> navigate('signup')}>
                <p className={`${trigger? 'text-white' : 'text-text'} text-lg font-semibold`}>Sign Up / Sign In</p>
            </div>

            <div className={`w-full h-10 flex items-center px-5 hover:bg-secondary/10 transition-all duration-200 cursor-pointer`}>
                <p className={`${trigger? 'text-white' : 'text-text'} text-lg font-semibold`}>Medications</p>
            </div>

            <div className={`w-full h-10 flex items-center px-5 hover:bg-secondary/10 transition-all duration-200 cursor-pointer`}>
                <p className={`${trigger? 'text-white' : 'text-text'} text-lg font-semibold`}>Blog</p>
            </div>

            <div className={`w-full h-10 flex items-center px-5 hover:bg-secondary/10 transition-all duration-200 cursor-pointer`}>
                <p className={`${trigger? 'text-white' : 'text-text'} text-lg font-semibold`}>Contact Us</p>
            </div>

        </motion.div>

    </div>
  )
}

export default Navbar;