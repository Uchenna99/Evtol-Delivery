import { type SupplyCategory } from "../../assets/Interfaces";

interface Props {
    category: SupplyCategory;
    onSelect: (category: string)=>void;
}

const SupplyCategoryCard = ({ category, onSelect }:Props) => {

  return (
    <div className={`w-full max-w-80 rounded-lg ring ring-transparent active:ring-primary active:ring-2 hover:ring-secondary 
        transition-all duration-200 cursor-pointer p-2 sm:p-4 shadow-sm`}
        onClick={()=> onSelect(category.name.replace(/\s+/g, ""))}>

        {/* <div className="w-full aspect-[3/2] rounded-lg bg-gray-100 bg-no-repeat bg-center bg-cover"
        style={{backgroundImage:`url(${category.image})`}}></div> */}

        <div className="flex flex-col gap-2 py-4">
            <p className="text-text font-semibold">
                {category.name}
            </p>
            <p className="text-text/70 text-sm">
                {category.description}
            </p>
        </div>

    </div>
  )
}

export default SupplyCategoryCard;