import { BadgeDollarSign, BriefcaseMedical, Clock, PlaneTakeoff, ShieldCheck, User } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import type { EvtolUser } from "../../assets/Interfaces";

interface LayoutContext {
    user: EvtolUser | null;
}

const DashboardHome = () => {
    const { user } = useOutletContext<LayoutContext>();

    const userStats = [
        {icon: <PlaneTakeoff size={20} />, value: 13, label: 'Total Deliveries', colour: 'bg-secondary'},
        {icon: <Clock size={20} />, value:2, label: 'Active Orders', colour: 'bg-orange-400'},
        {icon: <BadgeDollarSign size={20} />, value: "₦435,000", label: 'Payment History', colour: 'bg-green-500'},
        {icon: <ShieldCheck size={20} />, value: "Verified", label: 'Account Status', colour: 'bg-primary'},
    ];

    const orders = [
        {itemName:'Vaccine', destination:'RiverCare Clinic', time:'20 minutes ago', amount:'₦25,000', status:'In transit'},
        {itemName:'Anti-venom', destination:'RiverCare Clinic', time:'Yesterdy', amount:'₦125,000', status:'Delivered'},
        {itemName:'Vaccine', destination:'RiverCare Clinic', time:'5 days ago', amount:'₦25,000', status:'Pending'},
    ];

  return (
    <div className="w-full flex flex-col gap-4 p-5">

        <div className="w-full bg-gradient-to-br from-primary via-primary to-secondary rounded-xl 
            flex items-center justify-between p-5">

            <div className="flex flex-col text-white gap-2">
                <p className="text-xl md:text-2xl font-semibold">
                    Welcome back{", " + user?.firstName || "null"}
                </p>
                <p className="max-md:text-sm">
                    {user?.occupation || "..."}
                </p>
            </div>

            <div className="min-w-20 md:min-w-24 aspect-square rounded-full bg-secondary grid place-items-center text-white">
                <User size={35}/>
            </div>
        </div>


        <div className="w-full flex flex-col md:flex-row justify-between gap-5">
            {
                userStats.map((stat, index)=>(
                    <div className="flex-1 flex md:flex-col md:gap-1 border border-gray-100 shadow-sm rounded-xl p-2 sm:p-5 gap-4" 
                        key={index}>
                        <div className={`w-11 aspect-square rounded-md grid place-items-center text-white ${stat.colour}`}>
                            {stat.icon}
                        </div>
                        <div className="">
                            <p className="text-text text-lg md:text-xl font-semibold">
                                {stat.value}
                            </p>
                            <p className="text-text text-xs md:text-sm">
                                {stat.label}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>


        <div className="w-full flex flex-col gap-2 p-3 md:p-5 bg-white border border-gray-100 shadow-sm rounded-xl">

            <div className="w-full flex justify-between items-center mb-2">
                <p className="md:text-lg font-semibold">
                    Recent Orders
                </p>
                <Link to={''} className="text-secondary font-semibold hover:text-primary hover:underline
                    transition-all duration-200 max-md:text-sm">
                    View all
                </Link>
            </div>

            {
                orders.map((order, index)=>(
                    <div className="w-full bg-gray-100 flex justify-between rounded-xl p-4" key={index}>

                        <div className="flex items-center gap-3">
                            <div className="w-11 aspect-square rounded-md grid place-items-center text-primary bg-primary/20">
                                <BriefcaseMedical size={20}/>
                            </div>
                            <div className="">
                                <p className="text-text text-sm font-semibold">
                                    {order.itemName}
                                </p>
                                <p className="text-text/70 text-sm">
                                    {order.destination}
                                </p>
                                <p className="text-xs text-text/70">
                                    {order.time}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <p className="text-text text-sm font-semibold">
                                {order.amount}
                            </p>
                            <div className={`h-6 flex items-center px-3 rounded-xl text-xs
                                ${order.status === 'Delivered'? 'bg-green-100 text-green-800' :
                                    order.status === 'In transit'? 'bg-blue-100 text-blue-800' :
                                    order.status === 'Pending'? 'bg-amber-100 text-amber-800' : null}`}>
                                {order.status}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default DashboardHome;