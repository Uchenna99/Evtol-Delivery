import { useState } from "react";



const NewDelivery = () => {
    const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="w-full flex flex-col items-center gap-4 p-5">
        
        {/* Step numbers */}
        <div className="w-full flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full grid place-items-center 
                ${currentStep === 1? 'text-white bg-primary':'text-gray-600 bg-gray-200'}`}>1</div>
                <div className="w-30 h-1 rounded-lg bg-gray-200"></div>
                <div className={`w-10 h-10 rounded-full grid place-items-center 
                ${currentStep === 2? 'text-white bg-primary':'text-gray-600 bg-gray-200'}`}>2</div>
                <div className="w-30 h-1 rounded-lg bg-gray-200"></div>
                <div className={`w-10 h-10 rounded-full grid place-items-center 
                ${currentStep === 3? 'text-white bg-primary':'text-gray-600 bg-gray-200'}`}>3</div>
            </div>
            <p className="text-text/70">
                {
                    currentStep === 1? 'Select Item Category' :
                    currentStep === 2? 'Enter Delivery Details' :
                    currentStep === 3? 'Payment & Confirmation' : null
                }
            </p>
        </div>


        
    </div>
  )
}

export default NewDelivery;