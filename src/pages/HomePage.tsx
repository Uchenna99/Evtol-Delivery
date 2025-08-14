import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button1 from "../components/Button1";
import FeaturesCard from "../components/FeaturesCard";
import { useNavigate } from "react-router-dom";
import AboutUsCard from "../components/AboutUsCard";


const HomePage = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [scrolled2, setScrolled2] = useState(false);
  const features = [
    {icon:1, title:'Critical Medical Delivery', description:'Swift drone delivery of essential medications and medical equipment, bypassing traffic and delays.'},
    {icon:2, title:'Rapid Inter-Hospital Transport', description:'Fast, secure transfer of lab samples, blood, and life-saving drugs between healthcare facilities.'},
    {icon:3, title:'Smart Logistics Optimization', description:'AI-powered route planning for the fastest, safest, and most efficient delivery every time.'},
    {icon:4, title:'Emergency Response Supply', description:'On-demand drone dispatch for urgent medical needs in critical situations.'},
    {icon:5, title:'Remote Area Access', description:'Reaching underserved regions with timely deliveries, overcoming terrain challenges.'},
  ]
  const about = [
    {text:"Preventing avoidable casualties through faster emergency drugs delivery."},
    {text:"We're on a mission to revolutionize medical logistics, speeding up critical drug deliveries to save more lives every day."},
    {text:"Our drone network ensures swift and safe transportation of emergency drugs, reducing response times dramatically."}
  ]
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint1 = 150;
      const triggerPoint2 = 700;

      if (scrollPosition > triggerPoint2) { setScrolled(true);} 
      else { setScrolled(false); };

      if(scrollPosition > triggerPoint1) { setScrolled2(true) }
      else { setScrolled2(false) };
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleClick = ()=>{
    navigate('')
  };


  return (
    <>
      <div className="relative pt-[calc(100vh-120px)] xs:pt-[calc(100vh-100px)] flex flex-col items-center ">

        {/* Hero section */}
        <div className="fixed top-0 left-0 w-full h-screen bg-primary flex justify-center">
          <div className="w-full h-full xl:max-w-[1280px]"></div>
        </div>


        {/* Rest of the page */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <motion.div className={`bg-background p-5 flex flex-col items-center gap-14`} 
            initial={{width:800, maxWidth:'100%'}}
            animate={scrolled2? {width:'100%'} : {}}
            transition={{duration:0.4, ease:'easeInOut'}}>
            
            <div className="w-full flex justify-center">
              <div className="w-[600px] max-w-full flex justify-between items-center gap-5">
                <div className="">
                  <h4 className="text-text text-xl max-2xs:text-base font-semibold">
                    MEDICAL SUPPLIES,
                    
                  </h4>
                  <div className="flex gap-0 xs:gap-2 max-xs:flex-col">
                    <h4 className="text-text text-xl max-2xs:text-base font-semibold text-nowrap">
                      DRONE DELIVERED
                    </h4>
                    <h4 className="text-accent text-xl max-2xs:text-base font-semibold text-nowrap">
                      ON TIME
                    </h4>
                  </div>
                </div>

                <Button1 text="GET STARTED" onClick={handleClick} />
              </div>
            </div>

            <div className="w-full xl:w-[1240px] md:px-5 flex flex-col">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 row-auto gap-6 py-12">
                {
                  features.map((feature, index)=>(

                    <motion.div className="flex justify-center" key={index}
                      initial={{scale:0.5, opacity:0}}
                      animate={scrolled2? {scale:1, opacity:1} : {}}
                      transition={{duration:0.4, ease:'easeInOut', delay:0.1}}>

                      <FeaturesCard 
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                      />
                    </motion.div>
                  ))
                }
              </div>
            </div>

          </motion.div>


          {/* More about us section */}
          <div className="w-full flex justify-center bg-white">
            <div className="w-full xl:w-[1240px] flex flex-col gap-6 py-12 px-5 md:px-10">

              <div className="flex justify-center">
                <h4 className="text-text text-xl font-bold">
                  MORE ABOUT US
                </h4>
              </div>

              <div className="w-full overflow-x-scroll pb-2">
                <div className="min-w-fit flex gap-6">
                  {
                    about.map((card, index)=>(

                      <AboutUsCard 
                        key={index}
                        text={card.text}
                      />
                    ))
                  }
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default HomePage;