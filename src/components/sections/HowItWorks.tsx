import image_1 from "../../assets/images/drone_image_4.png";
import { PlaneTakeoff, ShieldCheck, Smartphone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";



const HowItWorks = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const step1Ref = useRef<HTMLDivElement>(null);
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);
    const getStartedRef = useRef<HTMLDivElement>(null);
    const isTitleInView = useInView(titleRef, { once: true, amount:0.9 });
    const isstep1InView = useInView(step1Ref, { once: true, amount:0.7 });
    const isstep2InView = useInView(step2Ref, { once: true, amount:0.7 });
    const isstep3InView = useInView(step3Ref, { once: true, amount:0.7 });
    const isGetStartedInView = useInView(getStartedRef, { once: true, amount:0.7 });

  return (
    <div className="w-full flex flex-col items-center gap-14 py-20 px-4">

        <div className="w-full flex flex-col gap-7 items-center" ref={titleRef}>
            <motion.h1 className="text-primary text-4xl md:text-5xl font-semibold"
                initial={{opacity:0, y:30}}
                animate={isTitleInView? {opacity:1, y:0}:{}}
                transition={{duration:0.4, ease:'easeInOut'}}>
                How It Works
            </motion.h1>
            <motion.p className="w-full max-w-[800px] text-text text-xl text-center leading-normal"
                initial={{opacity:0, y:30}}
                animate={isTitleInView? {opacity:1, y:0}:{}}
                transition={{duration:0.4, delay:0.3, ease:'easeInOut'}}>
                Our streamlined process ensures your medical supplies reach their destination quickly and safely, everytime.
            </motion.p>
        </div>


        <div className="w-full max-w-[1200px] flex flex-col gap-14 overflow-hidden">

            {/* Step 1 */}
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-10" ref={step1Ref}>

                <motion.div className="w-full lg:max-w-[530px] flex flex-col gap-5"
                    initial={{opacity:0, x:100}}
                    animate={isstep1InView? {opacity:1, x:0}:{}}
                    transition={{duration:0.5, ease:'easeInOut'}}>
                    
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
                </motion.div>

                <motion.div className="w-full lg:w-[550px] aspect-[2/1.3] bg-blue-100 rounded-2xl bg-center bg-no-repeat bg-cover"
                style={{backgroundImage:`url(${image_1})`}}
                initial={{opacity:0, x:-100}}
                animate={isstep1InView? {opacity:1, x:0}:{}}
                transition={{duration:0.5, ease:'easeInOut'}}></motion.div>

            </div>


            {/* Step 2 */}
            <div className="w-full flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-10" ref={step2Ref}>

                <motion.div className="w-full lg:w-[550px] aspect-[2/1.3] bg-blue-100 rounded-2xl bg-center bg-no-repeat bg-cover"
                style={{backgroundImage:`url(${image_1})`}}
                initial={{opacity:0, x:-100}}
                animate={isstep2InView? {opacity:1, x:0}:{}}
                transition={{duration:0.5, ease:'easeInOut'}}></motion.div>

                <motion.div className="w-full lg:max-w-[530px] flex flex-col gap-5"
                    initial={{opacity:0, x:100}}
                    animate={isstep2InView? {opacity:1, x:0}:{}}
                    transition={{duration:0.5, ease:'easeInOut'}}>
                    
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
                </motion.div>

            </div>

            {/* Step 3 */}
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-10" ref={step3Ref}>

                <motion.div className="w-full lg:max-w-[530px] flex flex-col gap-5"
                    initial={{opacity:0, x:100}}
                    animate={isstep3InView? {opacity:1, x:0}:{}}
                    transition={{duration:0.5, ease:'easeInOut'}}>
                    
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                            <p className="text-white font-bold text-xl">3</p>
                        </div>
                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-primary bg-primary/20">
                            <ShieldCheck />
                        </div>
                    </div>

                    <h4 className="text-primary text-3xl font-semibold">
                        Delivered Safely
                    </h4>
                    <p className="text-text text-xl leading-normal">
                        Secure handoff with verification confirmation. Real-time tracking ensures you know exactly when your 
                        supplies arrive.
                    </p>
                </motion.div>

                <motion.div className="w-full lg:w-[550px] aspect-[2/1.3] bg-blue-100 rounded-2xl bg-center bg-no-repeat bg-cover"
                style={{backgroundImage:`url(${image_1})`}}
                initial={{opacity:0, x:-100}}
                animate={isstep3InView? {opacity:1, x:0}:{}}
                transition={{duration:0.5, ease:'easeInOut'}}></motion.div>

            </div>

            <div className="w-full flex justify-center" ref={getStartedRef}>
                <div className="w-full max-w-[1200px] py-10 px-4 rounded-2xl bg-gradient-to-r from-primary to-secondary/60
                    flex flex-col items-center gap-4 text-white">
                    <motion.h4 className="text-3xl font-bold"
                        initial={{opacity:0, y:50}}
                        animate={isGetStartedInView? {opacity:1, y:0}:{}}
                        transition={{duration:0.4, ease:'easeInOut'}}>
                        Ready to Get Started?
                    </motion.h4>
                    <motion.p className="text-xl text-center"
                        initial={{opacity:0, y:50}}
                        animate={isGetStartedInView? {opacity:1, y:0}:{}}
                        transition={{duration:0.4, delay:0.3, ease:'easeInOut'}}>
                        Join hundreds of healthcare providers already using Evtol for faster, more reliable medical deliveries.
                    </motion.p>
                    <motion.button className="w-fit min-w-fit px-7 py-3 bg-white flex items-center gap-3 rounded-sm cursor-pointer
                    text-primary font-semibold text-xl shadow-md hover:bg-blue-50 active:bg-blue-100 
                    hover:shadow-xl transition-all duration-300 mt-2"
                    initial={{opacity:0}}
                    animate={isGetStartedInView? {opacity:1}:{}}
                    transition={{duration:0.8, delay:0.5, ease:'easeInOut'}}>
                    Start Your First Delivery
                    </motion.button>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default HowItWorks;