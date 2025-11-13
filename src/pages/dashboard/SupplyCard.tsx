import vial_img from "../../assets/images/vials.jpg";
import type { Supply } from "../../assets/Interfaces";
import { useAppContext } from "../../hooks/AppContext";

interface Props {
    supply: Supply;
}

const SupplyCard = ({ supply }:Props) => {
    const { selected, setSelected } = useAppContext();


  return (
    <div className={`w-full max-w-80 h-[360px] rounded-lg ring transition-all duration-200 
        cursor-pointer p-4 shadow-sm
        ${selected?.name === supply.name? 'ring-2 ring-primary':'ring-transparent hover:ring-secondary'}`}
        onClick={()=> {setSelected(supply); console.log(supply, selected)}}>

        <div className="w-full aspect-[3/2] rounded-lg bg-gray-100 bg-no-repeat bg-center bg-cover"
        style={{backgroundImage:`url(${vial_img})`}}></div>

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