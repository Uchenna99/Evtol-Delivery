import { motion } from "framer-motion";


const DeliveryDetails = () => {
  return (
    <div className="w-[1000px] max-w-full flex flex-col gap-2">

        <div className="flex flex-col gap-2 text-center">
            <motion.h4 className="text-text text-2xl font-semibold leading-normal"
                initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, ease:'easeInOut'}}>
                Delivery Details
            </motion.h4>
            <motion.p className="text-text/70 leading-normal"
                initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.1, ease:'easeInOut'}}>
                Provide delivery information for your supply
            </motion.p>
        </div>


        <div className="flex flex-col gap-2">
            <label htmlFor="address">Delivery Address</label>
            <textarea id="address" 
                className="w-full outline outline-gray-200 rounded-md p-4"
            />
        </div>

    </div>
  )
}

export default DeliveryDetails;