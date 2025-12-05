import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../../hooks/AppContext";
import { useNavigate } from "react-router-dom";

interface Props {
    onClose: ()=>void;
}

const ConfirmLogout = ({ onClose }:Props) => {
    const { logout } = useAppContext();
    const navigate = useNavigate();
    const [loggingOut, setLoggingOut] = useState(false);

    const handleLogout = ()=>{
        setLoggingOut(true);
        setTimeout(() => {
            logout();
            navigate("/");
        }, 500);
    };

  return (
    <>
        <div className="fixed top-0 left-0 z-100 w-full h-screen bg-black/40 grid place-items-center px-5" >

            <motion.div className="w-full max-w-sm bg-white p-5 rounded-xl flex flex-col items-center gap-5"
                initial={{opacity:0, scale:0.6}} animate={{opacity:1, scale:1}} transition={{duration:0.3, ease:'easeInOut'}}>
                <LogOut
                    size={40}
                    className="text-red-600 rounded-md bg-red-100 p-2"
                />

                <p className="text-center font-medium">
                    Your are about to Logout of your dashboard!
                </p>

                <div className="w-full flex items-center gap-5 mt-5">
                    <button className="flex-1 py-2 bg-primary/40 rounded-md text-white font-medium cursor-pointer transition-all duration-200
                        hover:bg-primary active:bg-primary"
                        onClick={onClose}>
                        Cancel
                    </button>
                    <button className="flex-1 py-2 bg-red-200 rounded-md text-white font-medium cursor-pointer transition-all duration-200
                        hover:bg-red-500 active:bg-red-500"
                        onClick={handleLogout}>
                            {loggingOut? "Bye...":"Yes, Logout"}
                    </button>
                </div>
            </motion.div>

        </div>
    </>
  )
}

export default ConfirmLogout;