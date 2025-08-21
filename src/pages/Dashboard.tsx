import { useState } from "react"
import logo1 from "../assets/images/logo_white.svg"
import DashOption from "../components/DashOption"
import LogoutOption from "../components/LogoutOption";


const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState<string>('New Delivery');

    const handleLogout = ()=>{};

  return (
    <>
        <div className="w-full h-screen bg-background flex ">

            <div className="w-[250px] h-full bg-primary flex flex-col items-center justify-between pt-4 pb-4">

                <div className="w-full flex flex-col items-center gap-28">
                    <div className="flex items-center gap-3 cursor-pointer hover:scale-110 transition-all duration-200">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img src={logo1} alt="drone" 
                                className="scale-190 transition-all duration-200"
                            />
                        </div>

                        <h4 className={`text-white text-xl font-semibold`}>EVTOL</h4>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <DashOption title="New Delivery" selectedOption={selectedOption} onClick={(title)=> setSelectedOption(title)}/>
                        <DashOption title="Order Tracking" selectedOption={selectedOption} onClick={(title)=> setSelectedOption(title)}/>
                        <DashOption title="History" selectedOption={selectedOption} onClick={(title)=> setSelectedOption(title)}/>
                        <DashOption title="Profile" selectedOption={selectedOption} onClick={(title)=> setSelectedOption(title)}/>
                    </div>

                </div>


                <LogoutOption onLogout={handleLogout}/>

            </div>

        </div>
    </>
  )
}

export default Dashboard