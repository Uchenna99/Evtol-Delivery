import { useState } from "react";
import MedicineCard from "../components/MedicineCard";
import type { Medication } from "../assets/Interfaces";
import MedicineCardModal from "../components/MedicineCardModal";



const NewDelivery = () => {
    // const [medsList, setMedsList] = useState<Medication[] | null>(null);
    const [openModal, setOpenModal] = useState(false);

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
    <div className="scroll-1 w-full h-full flex flex-col relative overflow-scroll">

        <div className="sticky top-0 z-20 bg-background px-5 pt-5 py-2">
            <h4 className="text-xl text-text font-medium">Meds Store</h4>
        </div>

        <div className="w-full grid grid-cols-4 gap-5 p-5">
            <MedicineCard medicine={drug} onSelect={()=> setOpenModal(true)}/>
            <MedicineCard medicine={drug}/>
            <MedicineCard medicine={drug}/>
            <MedicineCard medicine={drug}/>
            <MedicineCard medicine={drug}/>
            <MedicineCard medicine={drug}/>
            <MedicineCard medicine={drug}/>
            <MedicineCard medicine={drug}/>
            <MedicineCard medicine={drug}/>
        </div>

        {openModal && <MedicineCardModal medicine={drug}/>}

    </div>
  )
}

export default NewDelivery;