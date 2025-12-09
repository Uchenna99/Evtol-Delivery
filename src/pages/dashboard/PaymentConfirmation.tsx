import { motion } from "framer-motion";
import { useAppContext } from "../../hooks/AppContext";
import paystack_logo from "../../assets/images/paystack_logo.png";
import PaystackButton from "../../components/PaystackButton";
import { useState } from "react";


const PaymentConfirmation = () => {
    const { setCurrentStep, selectedItems, address, name, phone } = useAppContext();
    const [initializing, setInitializing] = useState(false);
    const basePrice = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const deliveryFee = 1400;

  return (
    <div className="w-[1000px] max-w-full flex flex-col gap-10">

        <div className="flex flex-col gap-2 text-center">
            <motion.h4 className="text-text text-2xl font-semibold leading-normal"
                initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, ease:'easeInOut'}}>
                Payment & Confirmation
            </motion.h4>
            <motion.p className="text-text/70 leading-normal"
                initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.1, ease:'easeInOut'}}>
                Review your order and complete payment
            </motion.p>
        </div>


        <div className="w-full flex flex-col gap-5">

            <div className="wful flex flex-col md:flex-row gap-5">
                <motion.div className="flex-1 flex flex-col gap-2 border border-gray-200 rounded-lg shadow-md p-5"
                    initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.3, ease:'easeInOut'}}>
                    <h4 className="font-semibold">Order Summary</h4>

                    {
                        selectedItems.map((item, index)=>(
                            <div className="flex items-center gap-2 py-2 border-b border-gray-400 " key={index}>
                                <div className="min-w-12 min-h-12 rounded-sm bg-gray-100 bg-center bg-no-repeat bg-cover"
                                style={{backgroundImage:`url(${item.image})`}}></div>
                                <div className="">
                                    <p className="font-semibold text-sm">{item.name || 'Not selected'}</p>
                                    <p className="text-text/70 text-xs">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }

                    <div className="w-full flex items-center justify-between py-2 border-b border-gray-400">
                        <p className="text-sm text-text/70">Base Price:</p>
                        <p className="text-sm text-text">₦{basePrice.toLocaleString()}</p>
                    </div>

                    <div className="w-full flex items-center justify-between py-2 border-b border-gray-400">
                        <p className="text-sm text-text/70">Delivery Fee:</p>
                        <p className="text-sm text-text">₦{deliveryFee}</p>
                    </div>

                    <div className="w-full flex items-center justify-between py-2 border-b border-gray-400">
                        <p className="text-sm text-text font-semibold">Total:</p>
                        <p className="text-primary font-semibold">₦{(basePrice + deliveryFee).toLocaleString()}</p>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-text text-sm mb-1 font-semibold">Delivery Details</p>
                        <p className="text-text/70 text-xs truncate"><span className="font-semibold">Address:</span> {address}</p>
                        <p className="text-text/70 text-xs"><span className="font-semibold">Contact:</span> {name}</p>
                        <p className="text-text/70 text-xs"><span className="font-semibold">Phone:</span> {phone}</p>
                    </div>
                </motion.div>

                <motion.div className="flex-1 flex flex-col gap-5 border border-gray-200 rounded-lg shadow-md p-5"
                    initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.4, ease:'easeInOut'}}>
                    <h4 className="font-semibold">Payment Method</h4>

                    <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-md">
                        <div className="w-8 aspect-square rounded-sm bg-center bg-contain bg-no-repeat" 
                        style={{backgroundImage:`url(${paystack_logo})`}}></div>
                        <div className="">
                            <p className="font-semibold text-xs">Paystack</p>
                            <p className="text-text/70 text-[10px]">Secure payment processing</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center gap-2">
                        <PaystackButton
                            total={basePrice + deliveryFee}
                            initPaystack={()=> setInitializing(true)}
                        />

                        <p className="text-text/70 text-[10px] text-center">You will be redirected to a secure payment page</p>
                    </div>
                </motion.div>
            </div>

            <div className="w-full flex gap-5 mt-5 pb-15">
                <button className="w-fit py-2 px-6 bg-primary text-white rounded-md cursor-pointer hover:shadow-lg 
                    transition-all duration-200"
                    onClick={()=> setCurrentStep(2)}>
                    Back
                </button>
            </div>
        </div>

        {
            initializing &&
            <div className="fixed top-0 left-0 h-screen w-full bg-black/50 grid place-items-center">
                <p className="font-medium">Initializing Paystack...</p>
            </div>
        }

    </div>
  )
}

export default PaymentConfirmation;