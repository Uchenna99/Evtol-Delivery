import { History, Package, Route, User2 } from "lucide-react"

interface Props {
    title: 'New Delivery' | 'Order Tracking' | 'History' | 'Profile';
    selectedOption: string;
    onClick: (title: string)=>void;
}

const DashOption = ({ title, selectedOption, onClick }:Props) => {
  return (
    <div className={`w-full h-10 px-5 flex items-center gap-2 cursor-pointer ${selectedOption === title? 'bg-background':''}`}
        onClick={()=> onClick(title)}>

        {
            title === 'New Delivery'?
            <Package
                size={22}
                color={selectedOption === title? '#5A67D8':'#EDF2F7'}
            /> : 
            title === 'Order Tracking'?
            <Route
                size={22}
                color={selectedOption === title? '#5A67D8':'#EDF2F7'}
            /> : 
            title === 'History'?
            <History
                size={22}
                color={selectedOption === title? '#5A67D8':'#EDF2F7'}
            /> : 
            title === 'Profile'?
            <User2
                size={22}
                color={selectedOption === title? '#5A67D8':'#EDF2F7'}
            /> : null
        }

        <p className={`text-xl font-medium ${selectedOption === title? 'text-primary':'text-background'}`}>
            {title}
        </p>
    </div>
  )
}

export default DashOption