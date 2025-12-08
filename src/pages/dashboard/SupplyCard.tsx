import type { MedicalSupply } from "../../assets/Interfaces";
import { useAppContext } from "../../hooks/AppContext";

interface Props {
    supply: MedicalSupply;
}

const SupplyCard = ({ supply }:Props) => {
    const { selectedItem, setSelectedItem } = useAppContext();


  return (
    <div className={`w-full max-w-80 rounded-lg ring transition-all duration-200 
        cursor-pointer p-2 sm:p-4 shadow-sm
        ${selectedItem?.name === supply.name? 'ring-2 ring-primary':'ring-transparent hover:ring-secondary'}`}
        onClick={()=> {setSelectedItem(supply)}}>

        <div className="w-full aspect-[3/2] rounded-lg bg-gray-100 bg-no-repeat bg-center bg-cover"
        style={{backgroundImage:`url(${supply.image})`}}></div>

        <div className="flex flex-col gap-2 py-4">
            <p className="text-text font-semibold">
                {supply.name}
            </p>
            <p className="text-text/70 text-sm">
                {supply.description}
            </p>
            <p className="text-primary font-semibold">
                ₦{supply.price.toLocaleString()}
            </p>
        </div>

    </div>
  )
}

export default SupplyCard;