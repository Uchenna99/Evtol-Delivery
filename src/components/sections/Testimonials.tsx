import TestimonialCardSmall from "../TestimonialCardSmall";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TestimonialCard from "../TestimonialCard";
import doc_img from "../../assets/images/doctor.png";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Testimonials = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const isTitleInView = useInView(titleRef, { once: true, amount:0.9 });

    const reviews = [
        {name:'Dr. James Okon', image: doc_img, occupation:'Director of Emergency Medicine', location:'Rivercare Clinic', text:`"Reliable and fast! We depend on Evtol for emergency vaccine deliveries. The 24/7 availability has been crucial for our rural clinic operationss"`},
        {name:'Dr. James Okon', image: doc_img, occupation:'Director of Emergency Medicine', location:'Rivercare Clinic', text:`"Reliable and fast! We depend on Evtol for emergency vaccine deliveries. The 24/7 availability has been crucial for our rural clinic operationss"`},
        {name:'Dr. James Okon', image: doc_img, occupation:'Director of Emergency Medicine', location:'Rivercare Clinic', text:`"Reliable and fast! We depend on Evtol for emergency vaccine deliveries. The 24/7 availability has been crucial for our rural clinic operationss"`},
        {name:'Dr. James Okon', image: doc_img, occupation:'Director of Emergency Medicine', location:'Rivercare Clinic', text:`"Reliable and fast! We depend on Evtol for emergency vaccine deliveries. The 24/7 availability has been crucial for our rural clinic operationss"`}
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
        <div className="w-full max-w-[800px] flex flex-col justify-center relative">

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                className="mySwiper w-full"
            >
                {reviews.map((card, index) => (
                <SwiperSlide key={index} className="">
                    <TestimonialCard 
                        image={card.image}
                        name={card.name}
                        location={card.location}
                        occupation={card.occupation}
                        text={card.text}
                    />
                </SwiperSlide>
                ))}
            </Swiper>

            {/* <div className="min-w-10 min-h-10 rounded-full flex items-center justify-center text-primary shadow-md border 
                border-gray-50 bg-white absolute left-2 max-md:top-30 cursor-pointer transition-all duration-300
                hover:shadow-lg">
                <ChevronLeft />
            </div>
            <div className="min-w-10 min-h-10 rounded-full flex items-center justify-center text-primary shadow-md border 
                border-gray-50 bg-white absolute right-2 max-md:top-30 cursor-pointer transition-all duration-300
                hover:shadow-lg">
                <ChevronRight />
            </div> */}

            {/* <div className="w-full flex items-center justify-center gap-2 absolute -bottom-10">
                {Array.from({length:4}, (_,i)=> i+1).map((_, index)=>(
                    <div className={`min-w-3 min-h-3 rounded-full cursor-pointer ${index === 0? 'bg-primary':'bg-gray-200'}`} 
                    key={index}></div>
                ))}
            </div> */}

        </div>


        {/* Bottom cards slide */}
        <div className="w-full max-w-[1200px] mt-2 overflow-auto py-10 px-2 scrollbar-hide">
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