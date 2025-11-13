import SelectMedicalSupply from "./SelectMedicalSupply";
import { useAppContext } from "../../hooks/AppContext";
import DeliveryDetails from "./DeliveryDetails";
import PaymentConfirmation from "./PaymentConfirmation";



const NewDelivery = () => {
    const { currentStep } = useAppContext();

  return (
    <div className="w-full flex flex-col items-center gap-10 p-5 ">
        
        {/* Step numbers */}
        <div className="w-full flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full grid place-items-center transition-all duration-300
                ${currentStep >= 1? 'text-white bg-primary':'text-gray-600 bg-gray-200'}`}>1</div>

                <div className={`w-30 h-1 rounded-lg transition-all duration-300 ${currentStep >= 2? 'bg-primary':'bg-gray-200'}`}></div>

                <div className={`w-10 h-10 rounded-full grid place-items-center transition-all duration-300
                ${currentStep >= 2? 'text-white bg-primary':'text-gray-600 bg-gray-200'}`}>2</div>

                <div className={`w-30 h-1 rounded-lg transition-all duration-300 ${currentStep >= 3? 'bg-primary':'bg-gray-200'}`}></div>

                <div className={`w-10 h-10 rounded-full grid place-items-center transition-all duration-300
                ${currentStep >= 3? 'text-white bg-primary':'text-gray-600 bg-gray-200'}`}>3</div>
            </div>
            <p className="text-text/70">
                {
                    currentStep === 1? 'Select Item Category' :
                    currentStep === 2? 'Enter Delivery Details' :
                    currentStep === 3? 'Payment & Confirmation' : null
                }
            </p>
        </div>

        
        {
            currentStep === 1? <SelectMedicalSupply /> : 
            currentStep === 2? <DeliveryDetails /> :
            currentStep === 3? <PaymentConfirmation /> : null
        }
        
    </div>
  )
}

export default NewDelivery;