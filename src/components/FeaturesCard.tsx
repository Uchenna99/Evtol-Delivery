import { AlertTriangle, BriefcaseMedical, Hospital, MapPin, Route } from "lucide-react";

interface Props {
    icon: number;
    title: string;
    description: string;
}

const FeaturesCard = ({ title, description, icon }:Props) => {
  return (
    <div className="w-[350px] border border-black/10 rounded-3xl p-5 flex flex-col items-center gap-1 shadow-md">

        <div className="w-20 h-20 border border-primary/50 rounded-md flex items-center justify-center mb-4">
        {
            icon === 1?
            <BriefcaseMedical size={40} color="#5A67D8" strokeWidth={1.7}/>
            :
            icon === 2?
            <Hospital size={40} color="#5A67D8" strokeWidth={1.7}/>
            :
            icon === 3?
            <Route size={40} color="#5A67D8" strokeWidth={1.7}/>
            :
            icon === 4?
            <AlertTriangle size={40} color="#5A67D8" strokeWidth={1.7}/>
            :
            icon === 5?
            <MapPin size={40} color="#5A67D8" strokeWidth={1.7}/>
            : null
        }
        </div>

        <h4 className="text-text font-semibold text-center">
            {title}
        </h4>

        <p className="text-text/90 text-sm text-center">
            {description}
        </p>

    </div>
  )
}

export default FeaturesCard;