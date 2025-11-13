import SupplyCard from "./SupplyCard";
import type { Supply } from "../../assets/Interfaces";
import { useAppContext } from "../../hooks/AppContext";



const SelectMedicalSupply = () => {
    const { selected } = useAppContext();

    const supplies: Supply[] = [
        {name:'Vaccines', description:'Temperature controlled vaccine vials for immunization.', price:35000},
        {name:'Blood units', description:'Sterile blood storage packs for emergency transfusions.', price:43000},
        {name:'HIV test kits', description:'HIV diagnostic test kit with medical sample collection tools', price:16000}
    ];

  return (
    <div className="w-full flex flex-col gap-2">

        <div className="flex flex-col gap-2 text-center">
            <h4 className="text-text text-2xl font-semibold leading-normal">
                Select Medical Supply
            </h4>
            <p className="text-text/70 leading-normal">
                Choose the type of medical supply you need delivered
            </p>
        </div>


        <div className="w-full grid grid-cols-2 md:grid-cols-3">
            {
                supplies.map((supply, index)=>(
                    <div className="flex justify-center" key={index}>
                        <SupplyCard 
                            supply={supply}
                        />
                    </div>
                ))
            }
        </div>

        {
            selected &&
            <div className="w-full flex justify-center p-5">
                <button className="w-fit py-2 px-6 bg-primary text-white rounded-md cursor-pointer hover:shadow-lg transition-all duration-200">
                    Continue to Delivery Details
                </button>
            </div>
        }
    </div>
  )
}

export default SelectMedicalSupply;