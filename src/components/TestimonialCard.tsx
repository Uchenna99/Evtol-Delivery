import { Star } from "lucide-react";

interface Props {
    image: string;
    name: string;
    location: string;
    text: string;
    occupation: string;
}

const TestimonialCard = ({ image, location, name, text, occupation }:Props) => {
  return (
    <div className="w-full max-w-[800px] bg-white border border-gray-50 rounded-2xl p-10 shadow-xl flex flex-col 
        md:flex-row items-center justify-center gap-7">

        <div className="min-w-28 min-h-28 rounded-full bg-blue-100 shadow-lg bg-center bg-cover bg-no-repeat"
        style={{backgroundImage:`url(${image})`}}></div>

        <div className="flex flex-col gap-5">
            <p className="text-text text-xl italic max-md:text-center leading-normal">
                {text}
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
                    {name}
                </p>
                <p className="text-secondary font-semibold">
                    {occupation}
                </p>
                <p className="text-text">
                    {location}
                </p>
            </div>

        </div>

    </div>
  )
}

export default TestimonialCard;