import { motion } from "framer-motion";
import { BadgeDollarSign, CircleX, Clock, ListOrdered, Search } from "lucide-react";
import { useEffect, useState } from "react";

interface PayHistory {
    item: string;
    destination: string;
    date: string;
    time: string;
    amount: number;
    method: string;
    status: string;
    ref: string;
}

const PaymentHistory = () => {
    const [searchInput, setSearchInput] = useState('');
    const allPaymentHistory: PayHistory[] = [
        {item:'Blood Units', destination:'Rivon Clinic', date:'Nov 5, 2025', time:'11:29 AM', amount:43000, method:'Paystack', status:'pending', ref:'EVT-00123456'},
        {item:'Blood Units', destination:'Rivon Clinic', date:'Nov 5, 2025', time:'11:29 AM', amount:43000, method:'Paystack', status:'success', ref:'EVT-00123456'},
        {item:'Blood Units', destination:'Rivon Clinic', date:'Nov 5, 2025', time:'11:29 AM', amount:43000, method:'Paystack', status:'failed', ref:'EVT-00123456'},
        {item:'Blood Units', destination:'Rivon Clinic', date:'Nov 5, 2025', time:'11:29 AM', amount:43000, method:'Paystack', status:'success', ref:'EVT-00123456'},
        {item:'Blood Units', destination:'Rivon Clinic', date:'Nov 5, 2025', time:'11:29 AM', amount:43000, method:'Paystack', status:'success', ref:'EVT-00123456'}
    ];
    const [paymentHistory, setPaymentHistory] = useState<PayHistory[]>(allPaymentHistory);
    const successfullPayments = allPaymentHistory.filter((payment)=> payment.status === 'success');
    const failedPayments = allPaymentHistory.filter((payment)=> payment.status === 'failed');
    const pendingPayments = allPaymentHistory.filter((payment)=> payment.status === 'pending');
    
    const [currentFilter, setCurrentFilter] = useState('All');
    const filters = [{name:'All', count:allPaymentHistory.length}, {name:'Success', count:successfullPayments.length}, {name:'Failed', count:failedPayments.length}, {name:'Pending', count:pendingPayments.length}];
    const tableHeaders = ['DATE & TIME', 'ITEM & DESTINATION', 'AMOUNT', 'PAYMENT METHOD', 'STATUS', 'REFERENCE'];

    useEffect(()=>{
        currentFilter === 'All'? setPaymentHistory(allPaymentHistory) :
        currentFilter === 'Success'? setPaymentHistory(successfullPayments) :
        currentFilter === 'Failed'? setPaymentHistory(failedPayments) :
        currentFilter === 'Pending'? setPaymentHistory(pendingPayments) : null
    },[currentFilter]);

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


        <div className="w-full p-2 md:p-5 flex items-center justify-between rounded-xl shadow-sm">

            <div className="relative w-70 h-9 border border-gray-200 focus-within:border-gray-300 rounded-md flex items-center px-2 gap-2
                transition-all duration-200">
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
                                <p className="font-medium text-sm">
                                    {filter.name} ({filter.count})
                                </p>
                        </button>
                    ))
                }
            </div>
        </div>


        {/* Table */}
        <div className="w-full flex flex-col rounded-xl overflow-hidden border border-gray-200">
            {/* Table head */}
            <div className="w-full grid grid-cols-6">
                {
                    tableHeaders.map((th, index)=>(
                        <div className="flex p-5 bg-gray-50 border-b border-gray-200">
                            <p className="text-sm text-text/70 font-medium" key={index}>{th}</p>
                        </div>
                    ))
                }

            </div>

            {/* Table Body */}
            {
                paymentHistory.map((payment, index)=>(
                    <div className="w-full grid grid-cols-6 border-b border-gray-200 last:border-transparent" key={index}>
                        <div className="flex flex-col justify-center gap-0.5 p-5">
                            <p className="text-xs text-text font-medium" >{payment.date}</p>
                            <p className="text-text/70 text-xs">{payment.time}</p>
                        </div>
                        <div className="flex flex-col justify-center gap-0.5 p-5">
                            <p className="text-xs text-text font-medium" >{payment.item}</p>
                            <p className="text-text/70 text-xs">{payment.destination}</p>
                        </div>
                        <div className="flex flex-col justify-center gap-0.5 p-5">
                            <p className="text-xs text-text font-medium" >₦{payment.amount}</p>
                        </div>
                        <div className="flex items-center gap-2 p-5">
                            <div className="w-fit flex rounded-sm px-2 py-0.5 bg-gray-400"><p className="text-xs text-white font-medium">PAY</p></div>
                            <p className="text-xs text-text" >Paystack</p>
                        </div>
                        <div className="flex flex-col justify-center gap-0.5 p-5">
                            <div className={`w-fit flex items-center gap-1 py-0.5 px-2 rounded-2xl 
                                ${payment.status === 'success'? 'bg-green-200 text-green-700':
                                payment.status === 'failed'? 'bg-red-200 text-red-700':
                                payment.status === 'pending'? 'bg-amber-200 text-amber-700':''}`}>
                                {
                                    payment.status === 'failed'? <CircleX size={12}/> :
                                    payment.status === 'pending'? <Clock size={12}/> : null
                                }
                                <p className="text-xs font-medium">{payment.status === 'success'? 'Success':
                                    payment.status === 'failed'? 'Failed': payment.status === 'pending'? 'Pending':''}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-0.5 p-5">
                            <p className="text-xs text-text" >{payment.ref}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PaymentHistory;