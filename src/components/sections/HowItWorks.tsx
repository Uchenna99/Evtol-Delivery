import { PlaneTakeoff, Smartphone } from "lucide-react";



const HowItWorks = () => {
  return (
    <div className="w-full flex flex-col items-center gap-14 py-20 px-4">

        <div className="w-full flex flex-col gap-7 items-center">
            <h1 className="text-primary text-4xl md:text-5xl font-semibold">
                How It Works
            </h1>
            <p className="w-full max-w-[800px] text-text text-xl text-center leading-normal">
                Our streamlined process ensures your medical supplies reach their destination quickly and safely, everytime.
            </p>
        </div>


        <div className="w-full max-w-[1200px] flex flex-col gap-14">

            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-10">

                <div className="w-full lg:max-w-[530px] flex flex-col gap-5">
                    
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                            <p className="text-white font-bold text-xl">1</p>
                        </div>
                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-primary bg-primary/20">
                            <Smartphone />
                        </div>
                    </div>

                    <h4 className="text-primary text-3xl font-semibold">
                        Request a Delivery
                    </h4>
                    <p className="text-text text-xl leading-normal">
                        Choose your medical supply item and destination through our intuitive platform.
                        Specify urgency level and delivery rquirements.
                    </p>
                </div>

                <div className="w-full lg:w-[550px] aspect-[2/1.3] bg-blue-100 rounded-2xl"></div>

            </div>


            <div className="w-full flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-10">

                <div className="w-full lg:w-[550px] aspect-[2/1.3] bg-blue-100 rounded-2xl"></div>

                <div className="w-full lg:max-w-[530px] flex flex-col gap-5">
                    
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                            <p className="text-white font-bold text-xl">2</p>
                        </div>
                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-primary bg-primary/20">
                            <PlaneTakeoff />
                        </div>
                    </div>

                    <h4 className="text-primary text-3xl font-semibold">
                        Drone Dispatched
                    </h4>
                    <p className="text-text text-xl leading-normal">
                        Our AI system automatically selects the next available drone and calculates the optimal flight path for 
                        the fastest delivery.
                    </p>
                </div>

            </div>

            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-10">

                <div className="w-full lg:max-w-[530px] flex flex-col gap-5">
                    
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                            <p className="text-white font-bold text-xl">1</p>
                        </div>
                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-primary bg-primary/20">
                            <Smartphone />
                        </div>
                    </div>

                    <h4 className="text-primary text-3xl font-semibold">
                        Request a Delivery
                    </h4>
                    <p className="text-text text-xl leading-normal">
                        Choose your medical supply item and destination through our intuitive platform.
                        Specify urgency level and delivery rquirements.
                    </p>
                </div>

                <div className="w-full lg:w-[550px] aspect-[2/1.3] bg-blue-100 rounded-2xl"></div>

            </div>
            
        </div>

    </div>
  )
}

export default HowItWorks;