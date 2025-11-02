import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import TestimonialCardSmall from "../TestimonialCardSmall";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";



const Testimonials = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const isTitleInView = useInView(titleRef, { once: true, amount:0.9 });

    const reviews = [
        {name:'Dr. James Okon', location:'Rivercare Clinic', text:`"Reliable and fast! We depend on Evtol for emergency vaccine deliveries. The 24/7 availability has been crucial for our rural clinic operationss"`},
        {name:'Dr. James Okon', location:'Rivercare Clinic', text:`"Reliable and fast! We depend on Evtol for emergency vaccine deliveries. The 24/7 availability has been crucial for our rural clinic operationss"`},
        {name:'Dr. James Okon', location:'Rivercare Clinic', text:`"Reliable and fast! We depend on Evtol for emergency vaccine deliveries. The 24/7 availability has been crucial for our rural clinic operationss"`},
        {name:'Dr. James Okon', location:'Rivercare Clinic', text:`"Reliable and fast! We depend on Evtol for emergency vaccine deliveries. The 24/7 availability has been crucial for our rural clinic operationss"`}
    ];

  return (
    <div className="w-full flex flex-col items-center gap-14 py-20 px-4 bg-blue-50">

        <div className="w-full flex flex-col gap-7 items-center" ref={titleRef}>
            <motion.h1 className="text-primary text-4xl md:text-5xl text-center font-semibold"
                initial={{opacity:0, y:30}}
                animate={isTitleInView? {opacity:1, y:0}:{}}
                transition={{duration:0.4, ease:'easeInOut'}}>
                Trusted by Healthcare Professionals
            </motion.h1>
            <motion.p className="w-full max-w-[800px] text-text text-xl text-center leading-normal"
                initial={{opacity:0, y:30}}
                animate={isTitleInView? {opacity:1, y:0}:{}}
                transition={{duration:0.4, delay:0.3, ease:'easeInOut'}}>
                See what medical professionals are saying about Evtol's revolutionary drone delivery service.
            </motion.p>
        </div>


        {/* Slides */}
        <div className="w-full max-w-[800px] flex relative">
            <div className="w-full max-w-[800px] bg-white border border-gray-50 rounded-2xl p-10 shadow-xl flex flex-col 
                md:flex-row items-center justify-center gap-7">

                <div className="min-w-28 min-h-28 rounded-full bg-blue-100 shadow-lg"></div>

                <div className="flex flex-col gap-5">
                    <p className="text-text text-xl italic max-md:text-center leading-normal">
                        "Reliable and fast! We depend on Evtol for emergency vaccine deliveries. The 24/7 availability has 
                        been crucial for our rural clinic operationss"
                    </p>

                    <div className="flex items-center text-amber-400 max-md:justify-center">
                        {
                            Array.from({length:5}, (_,i)=> i + 1).map((_,index)=>(
                                <Star size={18} fill="gold" key={index}/>
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

                <div className="min-w-10 min-h-10 rounded-full flex items-center justify-center text-primary shadow-md border 
                    border-gray-50 bg-white absolute left-2 max-md:top-30 cursor-pointer transition-all duration-300
                    hover:shadow-lg">
                    <ChevronLeft />
                </div>
                <div className="min-w-10 min-h-10 rounded-full flex items-center justify-center text-primary shadow-md border 
                    border-gray-50 bg-white absolute right-2 max-md:top-30 cursor-pointer transition-all duration-300
                    hover:shadow-lg">
                    <ChevronRight />
                </div>

                <div className="w-full flex items-center justify-center gap-2 absolute -bottom-10">
                    {Array.from({length:4}, (_,i)=> i+1).map((_, index)=>(
                        <div className={`min-w-3 min-h-3 rounded-full ${index === 0? 'bg-primary':'bg-gray-200'}`} 
                        key={index}></div>
                    ))}
                </div>

            </div>

        </div>


        {/* Bottom cards slide */}
        <div className="w-full max-w-[1200px] mt-5 overflow-auto py-10 px-2 scrollbar-hide">
            <div className="w-fit min-w-fit flex items-center gap-7">
                {
                    reviews.map((card, index)=>(
                        <TestimonialCardSmall 
                            name={card.name}
                            location={card.location}
                            text={card.text}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Testimonials;