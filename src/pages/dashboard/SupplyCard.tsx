import type { MedicalSupply } from "../../assets/Interfaces";
import { useAppContext } from "../../hooks/AppContext";

interface Props {
    supply: MedicalSupply;
}

const SupplyCard = ({ supply }:Props) => {
    const { selectedItems, setSelectedItems } = useAppContext();

    const handleSelection = ()=>{
        setSelectedItems((prev)=>{
            const exists = prev.some(item => item.name === supply.name);
            if(exists) {
                return prev.filter(item => item.id !== supply.id)
            }
            return [...prev, supply]
        })
    };


  return (
    <div className={`w-full max-w-80 rounded-lg ring transition-all duration-200 
        cursor-pointer p-2 sm:p-4 shadow-sm
        ${selectedItems?.some(item => item.name === supply.name)? 'ring-2 ring-primary':'ring-transparent hover:ring-secondary'}`}
        onClick={handleSelection}>

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