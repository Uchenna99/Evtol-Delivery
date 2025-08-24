import { useState } from "react";
import MedicineCard from "../components/MedicineCard";
import type { Medication } from "../assets/Interfaces";



const NewDelivery = () => {
    const [medsList, setMedsList] = useState<Medication[] | null>(null);

    const drug: Medication = {
        id: 1,
        name: "Ibuprofen",
        weight: 60,
        code: "IBU_001",
        image: "https://res.cloudinary.com/df6xz7bqp/image/upload/v1742811109/ibuprofen_kpttux.png",
        price: 1400,
        group: "Musculoskeletal_Pain"
    }

  return (
    <div className="w-full flex flex-col p-5 relative overflow-y-auto">

        <div className="sticky top-0 z-20 bg-background">
            <h4 className="text-xl text-text font-medium">Meds Store</h4>
        </div>

        <div className="w-full grid grid-cols-3 gap-5">
            <MedicineCard medicine={drug}/>
        </div>

    </div>
  )
}

export default NewDelivery;