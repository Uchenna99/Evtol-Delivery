import { BadgeDollarSign, BriefcaseMedical, Clock, PlaneTakeoff, ShieldCheck, User } from "lucide-react";
import { Link } from "react-router-dom";



const DashboardHome = () => {
    const userStats = [
        {icon: <PlaneTakeoff size={20} />, value: 13, label: 'Total Deliveries', colour: 'bg-secondary'},
        {icon: <Clock size={20} />, value:2, label: 'Active Orders', colour: 'bg-orange-400'},
        {icon: <BadgeDollarSign size={20} />, value: "N 235,000", label: 'Payment History', colour: 'bg-green-500'},
        {icon: <ShieldCheck size={20} />, value: "Verified", label: 'Account Status', colour: 'bg-primary'},
    ];
  return (
    <div className="w-full flex flex-col gap-7 p-5">

        <div className="w-full bg-gradient-to-br from-primary via-primary to-secondary rounded-xl 
            flex items-center justify-between p-5">

            <div className="flex flex-col text-white gap-2">
                <p className="text-2xl font-semibold">
                    Welcome back, Dr. Uchenna Agbu
                </p>
                <p className="">
                    Pharmacist, Goodwill Pharmacy
                </p>
            </div>

            <div className="min-w-24 aspect-square rounded-full bg-secondary grid place-items-center text-white">
                <User size={30}/>
            </div>
        </div>


        <div className="w-full flex flex-col md:flex-row justify-between gap-5">
            {
                userStats.map((stat, index)=>(
                    <div className="flex-1 flex flex-col gap-1 border border-gray-100 shadow-sm rounded-xl p-5" key={index}>
                        <div className={`w-11 aspect-square rounded-md grid place-items-center text-white ${stat.colour}`}>
                            {stat.icon}
                        </div>
                        <p className="text-text text-xl font-semibold">
                            {stat.value}
                        </p>
                        <p className="text-text text-sm">
                            {stat.label}
                        </p>
                    </div>
                ))
            }
        </div>


        <div className="w-full flex flex-col gap-2 p-5 bg-white border border-gray-100 shadow-sm rounded-xl">

            <div className="w-full flex justify-between items-center mb-2">
                <p className="text-lg font-semibold">
                    Recent Orders
                </p>
                <Link to={''} className="text-secondary font-semibold hover:text-primary hover:underline
                    transition-all duration-200">
                    View all
                </Link>
            </div>

            {
                Array.from({length:4}, (_, index)=>(
                    <div className="w-full bg-gray-100 flex justify-between rounded-xl p-4" key={index}>

                        <div className="flex items-center gap-3">
                            <div className="w-11 aspect-square rounded-md grid place-items-center text-primary bg-primary/20">
                                <BriefcaseMedical size={20}/>
                            </div>
                            <div className="">
                                <p className="text-text text-sm font-semibold">
                                    Vaccines
                                </p>
                                <p className="text-text/70 text-sm">
                                    RiverCare Clinic
                                </p>
                                <p className="text-xs text-text/70">
                                    7 hours ago
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <p className="text-text text-sm font-semibold">
                                N25,000
                            </p>
                            <div className="h-6 flex items-center px-3 rounded-xl bg-green-100 text-green-800 text-xs">
                                Delivered
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