import { motion } from "framer-motion";
import { useAppContext } from "../../hooks/AppContext";


const PaymentConfirmation = () => {
    const { setCurrentStep, selected, address, name } = useAppContext();

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

            <div className="wful flex gap-5">
                <motion.div className="flex-1 flex flex-col gap-2 border border-gray-200 rounded-lg shadow-md p-5"
                    initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.3, ease:'easeInOut'}}>
                    <h4 className="font-semibold">Order Summary</h4>

                    <div className="flex items-center gap-2 py-2 border-b border-gray-400">
                        <div className="min-w-12 min-h-12 rounded-sm bg-gray-100"></div>
                        <div className="">
                            <p className="font-semibold text-sm">{selected?.name || 'Not selected'}</p>
                            <p className="text-text/70 text-xs">{selected?.description}</p>
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-between py-2 border-b border-gray-400">
                        <p className="text-sm text-text/70">Base Price:</p>
                        <p className="text-sm text-text">₦{selected?.price.toLocaleString()}</p>
                    </div>

                    <div className="w-full flex items-center justify-between py-2 border-b border-gray-400">
                        <p className="text-sm text-text font-semibold">Total:</p>
                        <p className="text-primary font-semibold">₦{selected?.price.toLocaleString()}</p>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-text text-sm mb-1 font-semibold">Delivery Details</p>
                        <p className="text-text/70 text-xs"><span className="font-semibold">Address:</span> {address}</p>
                        <p className="text-text/70 text-xs"><span className="font-semibold">Contact:</span> {name}</p>
                    </div>
                </motion.div>

                <motion.div className="flex-1 flex flex-col gap-5 border border-gray-200 rounded-lg shadow-md p-5"
                    initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.4, ease:'easeInOut'}}>
                    <h4 className="font-semibold">Payment Method</h4>

                    <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-md">
                        <div className="w-10 aspect-[3/2] rounded-sm bg-green-500"></div>
                        <div className="">
                            <p className="font-semibold text-xs">Paystack</p>
                            <p className="text-text/70 text-[10px]">Secure payment processing</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center gap-2">
                        <button className="w-full py-2 bg-primary rounded-md text-white cursor-pointer hover:shadow-lg transition-all duration-200">
                            Pay ₦{selected?.price.toLocaleString()}
                        </button>

                        <p className="text-text/70 text-[10px] text-center">You will be redirected to a secure payment page</p>
                    </div>
                </motion.div>
            </div>

            <div className="w-full flex gap-5 mt-5">
                <button className="w-fit py-2 px-6 bg-primary text-white rounded-md cursor-pointer hover:shadow-lg transition-all duration-200"
                    onClick={()=> setCurrentStep(2)}>
                    Back
                </button>
            </div>
        </div>

    </div>
  )
}

export default PaymentConfirmation;