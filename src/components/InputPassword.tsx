import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

interface Props {
    title: string;
    placeHolder?: string;
    require?: boolean;
    value: string;
    onInputChange: (value: string) => void;
}


const InputPassword = ({ title, placeHolder, require, value, onInputChange }:Props) => {
    const [seeText, setSeeText] = useState(false);

  return (
    <div className="w-full min-w-[100px] flex flex-col gap-1">
        <label htmlFor={title} className="text-text">{title}</label>
        <div className="w-full relative flex items-center">
            <input type={seeText? 'text' : 'password'} 
                id={title}
                className="w-full h-10 px-4 rounded-md border-none outline-none ring-1 ring-primary focus:ring-2
                placeholder:text-primary/50 transition-all duration-200"
                placeholder={placeHolder}
                value={value}
                onChange={(e)=>onInputChange(e.target.value)}
                required={require}
            />
            
            <div className="absolute right-4 text-primary/50 cursor-pointer hover:text-primary">
                {
                    seeText?
                    <EyeClosed
                        onClick={()=> setSeeText(false)}
                        size={20}
                    />
                    :
                    <Eye
                        onClick={()=> setSeeText(true)}
                        size={20}
                    />
                }
            </div>
        </div>
    </div>
  )
}

export default InputPassword;