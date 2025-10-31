import { Rocket } from "lucide-react";
import background from "../../assets/images/hero_image.png";


const Hero = () => {
    const info = [
        {value:'15 mins', text:'Average Delivery Time'},
        {value:'99.8%', text:'Success Rate'},
        {value:'24/7', text:'Availability'}
    ];

  return (
    <div className="w-full md:h-[790px] flex flex-col gap-10 items-center bg-blue-200 bg-no-repeat bg-cover bg-center 
        pt-20 pb-30 px-4 relative"
        style={{backgroundImage:`url(${background}) `}}>

        <div className="w-full max-w-[730px] flex flex-col items-center gap-7 py-10 border-b border-white/30">
            <h1 className="text-white text-3xl md:text-6xl font-bold text-center leading-snug">
                Revolutionizing Medical <br />
                <span className="">
                    Supply Delivery
                </span>
            </h1>
            <p className="text-white text-xl md:text-2xl text-center font-light leading-normal">
                Using autonomous drones to deliver vaccines and other critical medical items in record time.
            </p>

            <div className="">
                <button className="w-fit min-w-fit px-6 py-4 bg-primary flex items-center gap-3 rounded-sm cursor-pointer
                    text-white text-xl shadow-md hover:bg-secondary active:bg-secondary hover:shadow-xl transition-all duration-300">
                    <Rocket size={20} />
                    Get Started
                </button>
            </div>
        </div>


        <div className="w-full max-w-[730px] flex flex-col md:flex-row items-center justify-around gap-7">
            {
                info.map((inf, index)=>(
                    <div className="min-w-fit flex flex-col items-center justify-center gap-2" key={index}>
                        <h1 className="text-secondary text-3xl md:text-4xl font-bold">
                            {inf.value}
                        </h1>
                        <p className="text-white text-lg md:text-xl text-center font-light text-nowrap">
                            {inf.text}
                        </p>
                    </div>
                ))
            }
        </div>


        <div className="w-6 h-10 border-2 border-white/60 rounded-xl absolute bottom-10 flex justify-center items-center">
            <div className="w-[3px] h-[10px] rounded-xl bg-white"></div>
        </div>

    </div>
  )
}

export default Hero;