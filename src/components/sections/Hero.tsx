import { Rocket } from "lucide-react";
import background from "../../assets/images/hero_image.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Hero = () => {
    const [bgLoaded, setBgLoaded] = useState(false);

    const info = [
        {value:'15 mins', text:'Average Delivery Time'},
        {value:'99.8%', text:'Success Rate'},
        {value:'24/7', text:'Availability'}
    ];

    useEffect(() => {
        const img = new Image();
        img.src = background
        img.onload = () => setBgLoaded(true);
    }, []);

  return (
    <div className="w-full md:h-[790px] flex flex-col gap-10 items-center bg-blue-200 bg-no-repeat bg-cover bg-center 
        pt-20 pb-30 px-4 relative"
        style={{backgroundImage:`url(${background}) `}}>

        {
            bgLoaded &&
            <div className="w-full max-w-[730px] flex flex-col items-center gap-7 py-10 border-b border-white/30">
                <div className="">
                    <motion.h1 className="text-white text-3xl md:text-6xl font-bold text-center leading-snug"
                        initial={{opacity:0, x:150}} animate={{opacity:1, x:0}}
                        transition={{duration:0.5, ease:'easeInOut'}}>
                        Revolutionizing Medical
                    </motion.h1>
                    <motion.h1 className="text-white text-3xl md:text-6xl font-bold text-center leading-snug"
                        initial={{opacity:0, x:-150}} animate={{opacity:1, x:0}}
                        transition={{duration:0.5, ease:'easeInOut'}}>
                        Supply Delivery
                    </motion.h1>
                </div>
                <motion.p className="text-white text-xl md:text-2xl text-center font-light leading-normal"
                    initial={{opacity:0, y:50}} animate={{opacity:1, y:0}}
                    transition={{duration:0.4, delay:0.2, ease:'easeInOut'}}>
                    Using autonomous drones to deliver vaccines and other critical medical items in record time.
                </motion.p>

                <div className="">
                    <motion.button className="w-fit min-w-fit px-7 py-3 bg-primary flex items-center gap-3 rounded-lg cursor-pointer
                        text-white text-xl shadow-md hover:bg-secondary active:bg-secondary hover:shadow-xl 
                        transition-all duration-300"
                        initial={{opacity:0}} animate={{opacity:1}}
                        transition={{duration:0.4, delay:0.4, ease:'easeInOut'}}>
                        <Rocket size={20} />
                        Get Started
                    </motion.button>
                </div>
            </div>
        }


        {
            bgLoaded &&
            <div className="w-full max-w-[730px] flex flex-col md:flex-row items-center justify-around gap-7">
                {
                    info.map((inf, index)=>(
                        <motion.div className="min-w-fit flex flex-col items-center justify-center gap-2" key={index}
                            initial={{opacity:0, y:60}} animate={{opacity:1, y:0}}
                            transition={{duration:0.5, delay:0.7 + (index * 0.2), ease:'easeInOut'}}>
                            <h1 className="text-secondary text-3xl md:text-4xl font-bold">
                                {inf.value}
                            </h1>
                            <p className="text-white text-lg md:text-xl text-center font-light text-nowrap">
                                {inf.text}
                            </p>
                        </motion.div>
                    ))
                }
            </div>
        }


        <div className="w-6 h-10 border-2 border-white/60 rounded-xl absolute bottom-10 flex justify-center items-center">
            <div className="w-[3px] h-[10px] rounded-xl bg-white"></div>
        </div>

    </div>
  )
}

export default Hero;