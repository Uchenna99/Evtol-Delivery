import SupplyCard from "./SupplyCard";



const SelectMedicalSupply = () => {
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
            <SupplyCard 
                name="Vaccine"
                description="Temperature controlled vaccine vials for immunization."
                price={35000}
            />
        </div>
    </div>
  )
}

export default SelectMedicalSupply;