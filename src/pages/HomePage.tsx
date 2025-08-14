import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button1 from "../components/Button1";
import FeaturesCard from "../components/FeaturesCard";
import { title } from "framer-motion/client";


const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolled2, setScrolled2] = useState(false);
  const features = [
    {icon:1, title:'Critical Medical Delivery', description:'Swift drone delivery of essential medications and medical equipment, bypassing traffic and delays.'},
    {icon:1, title:'Critical Medical Delivery', description:'Swift drone delivery of essential medications and medical equipment, bypassing traffic and delays.'},
    {icon:1, title:'Critical Medical Delivery', description:'Swift drone delivery of essential medications and medical equipment, bypassing traffic and delays.'},
    {icon:1, title:'Critical Medical Delivery', description:'Swift drone delivery of essential medications and medical equipment, bypassing traffic and delays.'},
    {icon:1, title:'Critical Medical Delivery', description:'Swift drone delivery of essential medications and medical equipment, bypassing traffic and delays.'},
    {icon:1, title:'Critical Medical Delivery', description:'Swift drone delivery of essential medications and medical equipment, bypassing traffic and delays.'}
  ]
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint1 = 200;
      const triggerPoint2 = 700;

      if (scrollPosition > triggerPoint2) { setScrolled(true);} 
      else { setScrolled(false); };

      if(scrollPosition > triggerPoint1) { setScrolled2(true) }
      else { setScrolled2(false) };
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);


  return (
    <>
      <div className="relative pt-[calc(100vh-100px)] flex flex-col items-center ">

        {/* Hero section */}
        <div className="fixed top-0 left-0 w-full h-screen bg-primary flex justify-center">
          <div className="w-full h-full xl:max-w-[1280px]"></div>
        </div>

        {/* Rest of the page */}
        <motion.div className={`relative z-10 bg-background p-5 h-[5000px] flex flex-col items-center gap-10`} 
          initial={{width:800, maxWidth:'100%'}}
          animate={scrolled2? {width:'100%'} : {}}
          transition={{duration:0.4, ease:'easeInOut'}}>
          
          <div className="w-full flex justify-center">
            <div className="w-[600px] max-w-full flex justify-between items-center gap-5">
              <h4 className="text-text text-xl font-semibold">
                MEDICAL SUPPLIES, <br />
                DRONE DELIVERED 
                <span className="text-accent"> ON TIME</span>
              </h4>

              <Button1 text="GET STARTED" />
            </div>
          </div>

          <div className="w-full xl:w-[1240px] md:px-5 flex flex-col ">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 row-auto gap-5">
              {
                features.map((feature, index)=>(

                  <div className="flex justify-center" key={index}>
                    <FeaturesCard 
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  </div>
                ))
              }

            </div>

          </div>

        </motion.div>

      </div>
    </>
  )
}

export default HomePage;