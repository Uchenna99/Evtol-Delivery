import { BadgePlus, LogOut, MapPin, Wallet } from "lucide-react";
import { Outlet } from "react-router-dom";
import SidebarOption from "./SidebarOption";



const DashboardLayout = () => {
  const sections = [
        {icon: <BadgePlus size={20} />, value: 'New Delivery', label: 'Request medical supplies', colour: 'bg-primary/20 text-primary'},
        {icon: <MapPin size={20} />, value:'Track Orders', label: 'Monitor your active deliveries', colour: 'bg-primary/20 text-primary'},
        {icon: <Wallet size={20} />, value: "Payment History", label: 'View transactions', colour: 'bg-green-100 text-green-800'},
        {icon: <LogOut size={20} />, value: "Logout", label: 'Logout of your account', colour: 'bg-red-100 text-red-600'},
    ];

  return (
    <div className="w-full flex justify-center bg-white">

      <div className="w-[1500px] max-w-full flex relative">

        <div className="min-w-20 h-full bg-gray-100">
          {
            sections.map((section, index)=>(
              <SidebarOption 
                key={index} 
                section={section}
              />
            ))  
          }

        </div>

        <div className="w-full flex flex-col">
          
          <div className="w-full h-12 bg-gray-200"></div>

          <Outlet />

        </div>


      </div>


    </div>
  )
}

export default DashboardLayout;