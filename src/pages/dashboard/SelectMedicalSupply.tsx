import SupplyCard from "./SupplyCard";
import type { LayoutContext, MedicalSupply, SupplyCategory } from "../../assets/Interfaces";
import { useAppContext } from "../../hooks/AppContext";
import { motion } from "framer-motion";
import SupplyCategoryCard from "./SupplyCategoryCard";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";



const SelectMedicalSupply = () => {
    const { selectedItems, setCurrentStep } = useAppContext();
    const { supply } = useOutletContext<LayoutContext>();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [supplies, setSupplies] = useState<MedicalSupply[] | null>(null);

    const categories: SupplyCategory[] = [
        {name:'Emergency', description:'Critical supplies for urgent, life-saving situations.', image:""},
        {name:'General', description:'Everyday medical items for routine care.', image:""},
        {name:'Laboratory', description:'Diagnostic and testing materials for labs.', image:""},
        {name:'Hospital Supplies', description:'Essential tools and consumables used across hospital departments.', image:""},
        {name:'Cold Chain', description:'Temperature-sensitive medical products requiring refrigeration.', image:""}
    ];

    useEffect(()=>{
        if(supply) {
            const filteredSupplies = supply.filter((item)=> item.category === selectedCategory);
            setSupplies(filteredSupplies);
        }
    },[selectedCategory]);

    // [
    //     {name:'Vaccines', description:'Temperature controlled vaccine vials for immunization.', price:35000},
    //     {name:'Blood units', description:'Sterile blood storage packs for emergency transfusions.', price:43000},
    //     {name:'HIV test kits', description:'HIV diagnostic test kit with medical sample collection tools', price:16000}
    // ];

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

        {
            !selectedCategory &&
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 py-10">
                {
                    categories.map((category, index)=>(
                        <motion.div className="flex justify-center" key={index}
                            initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} 
                            transition={{duration:0.3, delay:0.3 + (index*0.1), ease:'easeInOut'}}>
                            <SupplyCategoryCard 
                                category={category}
                                onSelect={(selection)=> setSelectedCategory(selection)}
                            />
                        </motion.div>
                    ))
                }
            </div>
        }


        {
            selectedCategory &&
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 py-10">
                {
                    supplies &&
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
        }

        {
            selectedCategory &&
            <div className="w-full flex justify-between gap-4">
                <motion.button className="w-fit py-2 px-4 sm:px-6 bg-primary text-white rounded-md cursor-pointer hover:shadow-lg 
                    transition-all duration-200"
                    onClick={()=> setSelectedCategory("")}
                    initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, delay:0.2, ease:'easeInOut'}}>
                    Back
                </motion.button>

                <motion.button className="w-fit py-2 px-4 sm:px-6 bg-primary text-white rounded-md cursor-pointer hover:shadow-lg 
                    disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200"
                    disabled={selectedItems.length === 0}
                    onClick={()=> setCurrentStep(2)}
                    initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, delay:0.2, ease:'easeInOut'}}>
                    Continue to Delivery Details
                </motion.button>
            </div>
        }
    </div>
  )
}

export default SelectMedicalSupply;