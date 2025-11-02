import doc_img from "../assets/images/doctor.png";
import { Star } from "lucide-react";

interface Props {
    name: string;
    location: string;
    text: string;
}

const TestimonialCardSmall = ({ name, location, text }:Props) => {
  return (
    <div className="w-[380px] bg-white rounded-2xl shadow-lg p-7">

        <div className="flex gap-2 items-center">
            <div className="min-w-13 min-h-13 rounded-full bg-blue-50 bg-center bg-no-repeat bg-cover"
            style={{backgroundImage:`url(${doc_img})`}}></div>
            <div className="">
                <p className="text-primary text-lg font-semibold">
                    {name}
                </p>
                <p className="text-text leading-tight">
                    {location}
                </p>
            </div>
        </div>

        <div className="flex items-center text-amber-400 max-md:justify-center mt-4">
            {
                Array.from({length:5}, (_,i)=> i + 1).map((_,index)=>(
                    <Star size={14} fill="gold" key={index}/>
                ))
            }
        </div>

        <p className="mt-4 text-text leading-normal">
            {text.length > 120? text.slice(0, 120) + '..."': text}
        </p>
    </div>
  )
}

export default TestimonialCardSmall;