import SupplyCard from "./SupplyCard";



const SelectMedicalSupply = () => {
    const supplies = [
        {name:'Vaccines', description:'Temperature controlled vaccine vials for immunization.', price:35000},
        {name:'Blood units', description:'Sterile blood storage packs for emergency transfusions.', price:43000},
        {name:'HIV test kits', description:'HIV diagnostic test kit with medical sample collection tools', price:16000}
    ]
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
                    <SupplyCard 
                        key={index}
                        name={supply.name}
                        description={supply.description}
                        price={supply.price}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default SelectMedicalSupply;