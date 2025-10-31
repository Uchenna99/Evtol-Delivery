import { LogOut } from "lucide-react";

interface Props {
    onLogout: ()=>void;
}

const LogoutOption = ({ onLogout }:Props) => {
  return (
    <div className={`w-full h-10 px-5 flex items-center gap-2 cursor-pointer text-background hover:bg-accent transition-all duration-200`}
        onClick={onLogout}>

        <LogOut
            size={22}
        />

        <p className={`text-xl font-medium text-background mb-1`}>
            Log out
        </p>

    </div>
  )
}

export default LogoutOption;