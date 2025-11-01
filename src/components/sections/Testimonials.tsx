import { Star } from "lucide-react";



const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center gap-14 py-20 px-4">

        <div className="w-full flex flex-col gap-7 items-center">
            <h1 className="text-primary text-4xl md:text-5xl font-semibold">
                Trusted by Healthcare Professionals
            </h1>
            <p className="w-full max-w-[800px] text-text text-xl text-center leading-normal">
                See what medical professionals are saying about Evtol's revolutionary drone delivery service.
            </p>
        </div>


        <div className="w-full max-w-[800px] bg-white border border-gray-100 rounded-2xl p-10 shadow-xl flex flex-col 
            md:flex-row items-center gap-7">

            <div className="min-w-28 min-h-28 rounded-full bg-blue-100 shadow-lg"></div>

            <div className="flex flex-col gap-5">
                <p className="text-text text-xl italic max-md:text-center">
                    "Reliable and fast! We depend on Evtol for emergency vaccine deliveries. The 24/7 availability has 
                    been crucial for our rural clinic operationss"
                </p>

                <div className="flex items-center text-amber-400 max-md:justify-center">
                    {
                        Array.from({length:5}, (_,i)=> i + 1).map(()=>(
                            <Star size={18} fill="gold"/>
                        ))
                    }
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <p className="text-primary text-2xl font-semibold">
                        Dr. James Okon
                    </p>
                    <p className="text-secondary font-semibold">
                        Director of Emergency Medicine
                    </p>
                    <p className="text-text">
                        Rivercare Clinic
                    </p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Testimonials;