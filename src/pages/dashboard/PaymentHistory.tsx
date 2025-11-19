import { motion } from "framer-motion";
import { BadgeDollarSign, ListOrdered, Search } from "lucide-react";
import { useState } from "react";



const PaymentHistory = () => {
    const [searchInput, setSearchInput] = useState('');
    const [currentFilter, setCurrentFilter] = useState('All');
    const filters = [{name:'All', count:10}, {name:'Success', count:7}, {name:'Failed', count:1}, {name:'Pending', count:2}];

    const handleFilterChange = (name: string)=>{
        if(currentFilter !== name) {
            setCurrentFilter(name);
        } else { return }
    };

  return (
    <div className="w-full flex flex-col gap-10 p-5 py-10">

        <div className="flex flex-col gap-2">
            <motion.h4 className="text-text text-2xl font-semibold leading-normal"
                initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} transition={{duration:0.3, ease:'easeInOut'}}>
                Payment History
            </motion.h4>
            <motion.p className="text-text/70 leading-normal"
                initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} transition={{duration:0.3, delay:0.1, ease:'easeInOut'}}>
                Track all your medical supply delivery payments
            </motion.p>
        </div>


        <div className="w-full flex flex-col md:flex-row gap-5">

            <div className="w-70 max-w-full flex gap-4 border border-gray-100 shadow-sm rounded-xl p-2 sm:p-5" >
                <div className={`w-11 aspect-square rounded-md grid place-items-center text-green-800 bg-green-100`}>
                    <BadgeDollarSign />
                </div>
                <div className="">
                    <p className="text-text/70 text-xs font-medium">
                        Total Spent
                    </p>
                    <p className="text-text text-lg font-semibold">
                        215,000
                    </p>
                </div>
            </div>

            <div className="w-80 max-w-full flex gap-4 border border-gray-100 shadow-sm rounded-xl p-2 sm:p-5" >
                <div className={`w-11 aspect-square rounded-md grid place-items-center text-primary bg-primary/20`}>
                    <ListOrdered/>
                </div>
                <div className="">
                    <p className="text-text/70 text-xs font-medium">
                        Total Payments
                    </p>
                    <p className="text-text text-lg font-semibold">
                        7
                    </p>
                </div>
            </div>

        </div>


        <div className="w-full p-2 md:p-5 flex items-center justify-between">

            <div className="relative w-70 h-9 border border-gray-500 rounded-md flex items-center px-2 gap-2">
                <Search size={20} color="#6a7282"/>
                <input type="text" 
                    className="px-1 border-none outline-none"
                    placeholder="Search payments..."
                    value={searchInput}
                    onChange={(e)=> setSearchInput(e.target.value)}
                />
            </div>

            <div className="flex items-center gap-2">
                {
                    filters.map((filter, index)=>(
                        <button className={`flex px-4 py-2 rounded-md cursor-pointer transition-all duration-200
                            ${currentFilter === filter.name? 'bg-primary text-white':'bg-gray-100 text-text/70 hover:bg-gray-200'}`} 
                            key={index}
                            onClick={()=> handleFilterChange(filter.name)}>
                                <p className="font-medium">
                                    {filter.name} ({filter.count})
                                </p>
                        </button>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default PaymentHistory;