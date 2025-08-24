import type { Medication } from "../assets/Interfaces";

interface Props {
    medicine: Medication;
}

const MedicineCard = ({ medicine }:Props) => {
  return (
    <div className="w-full rounded-2xl shadow-sm border p-3 flex flex-col gap-2">

        <div className="w-full aspect-[3/2] rounded-2xl bg-center bg-contain bg-no-repeat" 
            style={{backgroundImage:`url(${medicine.image})`}}
        />

        <div className="flex flex-col items-center">
            <h4 className="text-text text-lg font-medium">
                {medicine.name}
            </h4>

            <p className="text-text/90">
                ₦{medicine.price}
            </p>

        </div>
    </div>
  )
}

export default MedicineCard;