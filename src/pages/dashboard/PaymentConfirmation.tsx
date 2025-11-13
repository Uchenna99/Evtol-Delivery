import { motion } from "framer-motion";
import { useAppContext } from "../../hooks/AppContext";


const PaymentConfirmation = () => {
    const { setCurrentStep } = useAppContext();

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
                <div className="flex-1 flex flex-col gap-2 border border-gray-200 rounded-lg shadow-md p-5">
                    <h4 className="font-semibold">Order Summary</h4>
                    <div className="flex items-center gap-2">
                        <div className="min-w-12 min-h-12 rounded-sm bg-gray-100"></div>
                        <div className="">
                            <p className="font-semibold text-sm">Blood units</p>
                            <p className="text-text/70 text-xs">Sterile blood storage packs for emergency transfusions.</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-2 border border-gray-200 rounded-lg shadow-md p-5"></div>
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