import SupplyCard from "./SupplyCard";
import type { Supply } from "../../assets/Interfaces";
import { useAppContext } from "../../hooks/AppContext";
import { motion } from "framer-motion";



const SelectMedicalSupply = () => {
    const { selected, setCurrentStep } = useAppContext();

    const supplies: Supply[] = [
        {name:'Vaccines', description:'Temperature controlled vaccine vials for immunization.', price:35000},
        {name:'Blood units', description:'Sterile blood storage packs for emergency transfusions.', price:43000},
        {name:'HIV test kits', description:'HIV diagnostic test kit with medical sample collection tools', price:16000}
    ];

  return (
    <div className="w-full flex flex-col gap-2">

        <div className="flex flex-col gap-2 text-center">
            <motion.h4 className="text-text text-2xl font-semibold leading-normal"
                initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, ease:'easeInOut'}}>
                Select Medical Supply
            </motion.h4>
            <motion.p className="text-text/70 leading-normal"
                initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.1, ease:'easeInOut'}}>
                Choose the type of medical supply you need delivered
            </motion.p>
        </div>


        <div className="w-full grid grid-cols-2 md:grid-cols-3 py-10">
            {
                supplies.map((supply, index)=>(
                    <motion.div className="flex justify-center" key={index}
                        initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} 
                        transition={{duration:0.3, delay:0.3 + (index*0.1), ease:'easeInOut'}}>
                        <SupplyCard 
                            supply={supply}
                        />
                    </motion.div>
                ))
            }
        </div>

        {
            selected &&
            <div className="w-full flex justify-center px-5">
                <motion.button className="w-fit py-2 px-6 bg-primary text-white rounded-md cursor-pointer hover:shadow-lg 
                    transition-all duration-200"
                    onClick={()=> setCurrentStep(2)}
                    initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, ease:'easeInOut'}}>
                    Continue to Delivery Details
                </motion.button>
            </div>
        }
    </div>
  )
}

export default SelectMedicalSupply;