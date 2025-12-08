import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { DecodedToken, MedicalSupply } from "../assets/Interfaces";
import { jwtDecode } from "jwt-decode";


interface AppContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    loadingSecurePage: boolean;
    setLoadingSecurePage: React.Dispatch<React.SetStateAction<boolean>>;
    dropDown: boolean;
    setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    selectedItem: MedicalSupply | null;
    setSelectedItem: React.Dispatch<React.SetStateAction<MedicalSupply | null>>
    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    notes: string;
    setNotes: React.Dispatch<React.SetStateAction<string>>;
    deliveryFormReset: ()=>void;
    isTokenExpired: (token: string)=>boolean;
    logout: ()=>void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loadingSecurePage, setLoadingSecurePage] = useState(true);
    const [dropDown, setDropDown] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedItem, setSelectedItem] = useState<MedicalSupply | null>(null);
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');

    // check token status
    const isTokenExpired = (token: string) => {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        return decoded.exp * 1000 < Date.now();
      } catch {
        return true;
      }
    };

    const logout = () => {
        localStorage.removeItem("evtol-user-token");
        setIsLoggedIn(false);
    };

    
    useEffect(() => {
      const verifyToken = async () => {
        const token = localStorage.getItem("evtol-user-token");

        if (!token || isTokenExpired(token)) {
          logout();
          setLoadingSecurePage(false);
          return;
        }else {
          setIsLoggedIn(true);
          setLoadingSecurePage(false);
        }

      };

      verifyToken();
    }, []);

    const deliveryFormReset = ()=>{
        setCurrentStep(1);
        setSelectedItem(null);
        setAddress('');
        setName('');
        setPhone('');
        setNotes('');
    };


    return (
        <AppContext.Provider value={{
            currentStep, setCurrentStep, selectedItem, setSelectedItem, address, setAddress, name, setName, phone, setPhone, isTokenExpired,
            notes, setNotes, deliveryFormReset, dropDown, setDropDown, isLoggedIn, setIsLoggedIn, loadingSecurePage, setLoadingSecurePage,
            logout
        }}>
            {children}
        </AppContext.Provider>
    )
};


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error("useAppContext must be used inside AppProvider");
    }
    return context;
};

