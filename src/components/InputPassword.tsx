import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

interface Props {
    title: string;
    placeHolder?: string;
    require?: boolean;
}


const InputPassword = ({ title, placeHolder, require }:Props) => {
    const [seeText, setSeeText] = useState(false);

  return (
    <div className="w-full min-w-[100px] flex flex-col gap-1">
        <label htmlFor="input" className="text-text">{title}</label>
        <div className="w-full relative flex items-center">
            <input type={seeText? 'text' : 'password'} 
                id="input"
                className="w-full h-10 px-4 rounded-md border-none outline-none ring-1 ring-primary focus:ring-2
                placeholder:text-primary/50 transition-all duration-200"
                placeholder={placeHolder}
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