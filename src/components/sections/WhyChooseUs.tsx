import { ClockPlus, Goal, Timer } from "lucide-react";
import drone_1 from "../../assets/images/drone_image_1.png";
import drone_2 from "../../assets/images/drone_image_2.png";
import drone_3 from "../../assets/images/drone_image_3.png";
import InfoDisplay from "../InfoDisplay";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";



const WhyChooseUs = () => {
    const ref = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount:0.3 });
    const isTitleInView = useInView(titleRef, { once: true, amount:1 });
    const isInfoInView = useInView(infoRef, { once: true, amount:0.8 });

    const cardsInfo = [
        {img: drone_1, icon:<Timer/>, title:'Speed That Saves Lives', text:'Deliver critical medical supplies within minutes, not hours. Our autonomous drones cut delivery time by 80% compared to traditional methods.'},
        {img: drone_2, icon:<Goal/>, title:'Drone Precision', text:'Advanced GPS and AI-powered navigation ensures safe and accurate deliveries everytime. Our drones navigate complex urban environments with ease.'},
        {img: drone_3, icon:<ClockPlus/>, title:'24/7 Availability', text:'Round-the-clock service for hospitals and clinics. Emergency medical supplies delivered any time of day or night, ensuring continuous patient care.'}
    ];

    const info_1 = [
        {value:'500+', text:'Hospitals Served'},
        {value:'50K+', text:'Deliveries Completed'}
    ]

    const info_2 = [
        {value:'15', text:'Cities Covered'},
        {value:'2 mins', text:'Response Time'}
    ]

  return (
    <div className="w-full bg-white px-4 py-20 flex flex-col items-center gap-14">

        <div className="w-full flex flex-col gap-7 items-center" ref={titleRef}>
            <motion.h1 className="text-primary text-4xl md:text-5xl text-center font-semibold"
                initial={{opacity:0, y:30}}
                animate={isTitleInView? {opacity:1, y:0}:{}}
                transition={{duration:0.4, ease:'easeInOut'}}>
                Why Choose Evtol
            </motion.h1>
            <motion.p className="w-full max-w-[800px] text-text text-xl text-center leading-normal"
                initial={{opacity:0, y:30}}
                animate={isTitleInView? {opacity:1, y:0}:{}}
                transition={{duration:0.4, delay:0.3, ease:'easeInOut'}}>
                Our cutting edge drone technology transforms medical supply delivery, ensuring faster, 
                safer and more reliable service for healthcare providers.
            </motion.p>
        </div>



        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-6 py-5" ref={ref}>
            {
                // Card
                cardsInfo.map((card, index)=>(
                    <motion.div className="w-full max-w-[400px] h-[480px] flex flex-col rounded-2xl overflow-hidden shadow-lg"
                        key={index}
                        initial={{opacity:0, y:60}}
                        animate={isInView? {opacity:1, y:0}:{}}
                        transition={{duration:0.4, delay:0.1 + (index * 0.2) , ease:'easeInOut'}}>

                        <div className="w-full h-[180px] bg-primary/10 bg-center bg-cover bg-no-repeat" 
                        style={{backgroundImage:`url(${card.img})`}}></div>

                        <div className="w-full flex flex-col p-5 gap-5">
                            
                            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white">
                                {card.icon}
                            </div>
                            <h4 className="text-primary text-2xl font-semibold">
                                {card.title}
                            </h4>
                            <p className="">
                                {card.text}
                            </p>
                        </div>

                    </motion.div>

                ))
            }

        </div>



        <div className="w-full max-w-[1200px] flex flex-col md:flex-row max-md:gap-7 items-center justify-around 
            shadow-lg py-8 rounded-2xl" ref={infoRef}>
            <motion.div className="max-md:w-full flex-1 flex items-center justify-around gap-5"
                initial={{opacity:0, y:50}}
                animate={isInfoInView? {opacity:1, y:0}:{}}
                transition={{duration:0.4, ease:'easeInOut'}}>
                {
                    info_1.map((inf, index)=>(
                        <InfoDisplay key={index}
                            value={inf.value}
                            text={inf.text}
                        />
                    ))
                }
            </motion.div>
            <motion.div className="max-md:w-full flex-1 flex items-center justify-around gap-5"
                initial={{opacity:0, y:50}}
                animate={isInfoInView? {opacity:1, y:0}:{}}
                transition={{duration:0.4, delay:0.3, ease:'easeInOut'}}>
                {
                    info_2.map((inf, index)=>(
                        <InfoDisplay key={index}
                            value={inf.value}
                            text={inf.text}
                        />
                    ))
                }
            </motion.div>
        </div>

    </div>
  )
}

export default WhyChooseUs