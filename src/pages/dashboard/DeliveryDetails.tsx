import { motion } from "framer-motion";
import { useAppContext } from "../../hooks/AppContext";


const DeliveryDetails = () => {
    const { setCurrentStep, address, name, phone, notes, setAddress, setName, setPhone, setNotes } = useAppContext();

    const isValid = address.length>2 && name.length>2 && phone.length>2

  return (
    <div className="w-[1000px] max-w-full flex flex-col gap-10">

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


        <form action="" className="flex flex-col gap-5">

            <motion.div className="flex flex-col gap-2"
                initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.3, ease:'easeInOut'}}>
                <label htmlFor="address">Delivery Address <span className="text-accent">*</span></label>
                <textarea id="address" 
                    className="w-full outline outline-gray-200 rounded-md px-4 py-2 focus:outline-2 transition-all duration-200"
                    placeholder="Enter complete delivery address"
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                    required
                />
            </motion.div>

            <div className="w-full flex flex-col sm:flex-row gap-5">
                <motion.div className="flex-1 flex flex-col gap-2"
                    initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.4, ease:'easeInOut'}}>
                    <label htmlFor="contact">Contact Person <span className="text-accent">*</span></label>
                    <input type="text" id="contact"
                        className="w-full outline outline-gray-200 rounded-md px-4 py-2 focus:outline-2 transition-all duration-200"
                        placeholder="Dr. Jon Snow"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        required
                    />
                </motion.div>
                <motion.div className="flex-1 flex flex-col gap-2"
                    initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.5, ease:'easeInOut'}}>
                    <label htmlFor="number">Contact Number <span className="text-accent">*</span></label>
                    <input type="text" id="number"
                        className="w-full outline outline-gray-200 rounded-md px-4 py-2 focus:outline-2 transition-all duration-200"
                        placeholder="09012345678"
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)}
                        required
                    />
                </motion.div>
            </div>

            <motion.div className="flex flex-col gap-2"
                initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.6, ease:'easeInOut'}}>
                <label htmlFor="address">Special Notes <span className="text-text/70">(Optional)</span></label>
                <textarea id="address" 
                    className="w-full outline outline-gray-200 rounded-md px-4 py-2 focus:outline-2 transition-all duration-200"
                    placeholder="Any special handling instructions..."
                    value={notes}
                    onChange={(e)=> setNotes(e.target.value)}
                />
            </motion.div>


            <div className="w-full flex justify-between gap-4 mt-5">
                <button className="w-fit py-2 px-4 sm:px-6 bg-primary text-white rounded-md cursor-pointer hover:shadow-lg transition-all duration-200"
                    onClick={()=> setCurrentStep(1)}>
                    Back
                </button>

                <button className="w-fit py-2 px-4 sm:px-6 bg-primary text-white rounded-md cursor-pointer hover:shadow-lg disabled:bg-gray-400
                    disabled:cursor-not-allowed transition-all duration-200"
                    disabled={!isValid}
                    onClick={()=> setCurrentStep(3)}>
                    Continue to Payment
                </button>
            </div>

        </form>

    </div>
  )
}

export default DeliveryDetails;