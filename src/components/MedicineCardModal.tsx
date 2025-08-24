import type { Medication } from "../assets/Interfaces";

interface Props {
    medicine: Medication;
}

const MedicineCardModal = ({ medicine }:Props) => {
  return (
    <>
        <div className="w-full h-screen bg-primary/50 fixed top-0 left-0 z-40 flex items-center justify-center">
        
            <div className="w-[400px] bg-background rounded-2xl shadow-sm hover:shadow-md p-3 flex flex-col gap-2 transition-all duration-200
                ">

                <div className="w-full aspect-[3/2] rounded-2xl bg-center bg-contain bg-no-repeat" 
                    style={{backgroundImage:`url(${medicine.image})`}}
                />

                <div className="flex flex-col items-center">
                    <h4 className="text-text text-lg font-medium">
                        {medicine.name}
                    </h4>

                    <p className="text-text/90 text-sm font-medium">
                        ₦{medicine.price}
                    </p>

                    <p className="text-text/90 text-sm">
                        {medicine.weight}g
                    </p>

                </div>
            </div>

        </div>

    </>
  )
}

export default MedicineCardModal;