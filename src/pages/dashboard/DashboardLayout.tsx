import { BadgePlus, LogOut, MapPin, Menu, Wallet, X } from "lucide-react";
import { Outlet } from "react-router-dom";
import SidebarOption from "./SidebarOption";
import { motion } from "framer-motion";
import MobileSidebarOption from "./MobileSidebarOption";
import { useAppContext } from "../../hooks/AppContext";
import { useEffect, useState } from "react";
import { apiRequest } from "../../hooks/Api";
import { jwtDecode } from "jwt-decode";
import type { DecodedToken, EvtolUser } from "../../assets/Interfaces";
import ConfirmLogout from "../../components/modals/ConfirmLogout";



const DashboardLayout = () => {
  const { dropDown, setDropDown, loadingSecurePage } = useAppContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<EvtolUser | null>(null);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const sections = [
      {icon: <BadgePlus size={20} />, value: 'New Delivery', label: 'Request medical supplies', colour: 'bg-primary/20 text-primary', navigate:'new-delivery'},
      {icon: <MapPin size={20} />, value:'Track Orders', label: 'Monitor your active deliveries', colour: 'bg-primary/20 text-primary', navigate:''},
      {icon: <Wallet size={20} />, value: "Payment History", label: 'View transactions', colour: 'bg-green-100 text-green-800', navigate:'payment-history'},
      {icon: <LogOut size={20} />, value: "Logout", label: 'Logout of your account', colour: 'bg-red-100 text-red-600', navigate:''},
  ];

  useEffect(()=>{
    const fetchUser = async ()=>{
      const token = localStorage.getItem("evtol-user-token");
      if(token){
        const decoded = jwtDecode<DecodedToken>(token);
        await apiRequest("GET", `/api/v1/users/get-user/${decoded.id}`)
        .then((response)=>{
          setUser(response.data as EvtolUser);
        })
        .catch((error)=>{
          console.log(error);
        })
        .finally(()=>{
          setIsLoading(false);
        });
      }
    };
    fetchUser();
  },[]);

  if(loadingSecurePage){
    return (
      <div className="w-full h-screen grid place-items-center">Verifying...</div>
    )
  }

  if(isLoading){
    return (
      <div className="w-full h-screen grid place-items-center">Loading...</div>
    )
  }

  return (
    <div className="w-full flex justify-center bg-white overflow-hidden relative">

      <div className="w-[1500px] max-w-full flex relative">

        {/* Side Bar */}
        <div className="max-md:hidden min-w-16 h-full flex flex-col pt-25 gap-4 z-50">
          {
            sections.map((section, index)=>(
              <SidebarOption 
                key={index} 
                section={section}
                confirmation={()=> setConfirmLogout(true)}
              />
            ))  
          }

        </div>


        {/* MOBILE SIDE BAR */}
        <motion.div className="w-72 min-w-72 h-full fixed top-0 z-100 bg-gray-100 p-4"
          initial={{x:'-100%', opacity:0}}
          animate={dropDown? {x:0, opacity:1}:{}}
          transition={{duration:0.3}}>

            <div className="w-full flex justify-end">
              <X 
                size={25}
                onClick={()=> setDropDown(false)}
              />
            </div>
            <div className="w-full flex flex-col gap-5 overflow-hidden mt-5">
              {
                sections.map((section, index)=>(
                  <MobileSidebarOption 
                    key={index} 
                    section={section}
                    dropDown={dropDown}
                    confirmation={()=> setConfirmLogout(true)}
                  />
                ))  
              }
            </div>

        </motion.div>

        <div className="w-full md:w-[calc(100%-64px)] flex flex-col">
          
          <div className="w-full h-11 flex items-end px-5">

            <Menu 
              size={25}
              className="md:hidden"
              onClick={()=> setDropDown(true)}
            />

          </div>

          <Outlet context={{user}} />

        </div>


      </div>


      {/* Confirm Logout */}
        {
            confirmLogout &&
            <ConfirmLogout
                onClose={()=> setConfirmLogout(false)}
            />
        }

    </div>
  )
}

export default DashboardLayout;