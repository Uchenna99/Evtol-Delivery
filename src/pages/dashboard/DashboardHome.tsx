import { BadgeDollarSign, Clock, PlaneTakeoff, ShieldCheck, User } from "lucide-react";



const DashboardHome = () => {
    const userStats = [
        {icon: <PlaneTakeoff size={20} />, value: 13, label: 'Total Deliveries', colour: 'bg-secondary'},
        {icon: <Clock size={20} />, value:2, label: 'Active Orders', colour: 'bg-orange-400'},
        {icon: <BadgeDollarSign size={20} />, value: "N 235,000", label: 'Payment History', colour: 'bg-green-500'},
        {icon: <ShieldCheck size={20} />, value: "Verified", label: 'Account Status', colour: 'bg-primary'},
    ];
  return (
    <div className="w-full flex flex-col gap-7 px-5">

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
    </div>
  )
}

export default DashboardHome;