import { createContext, useContext, useState, type ReactNode } from "react";
import type { Supply } from "../assets/Interfaces";


interface AppContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    selected: Supply | null;
    setSelected: React.Dispatch<React.SetStateAction<Supply | null>>
    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    notes: string;
    setNotes: React.Dispatch<React.SetStateAction<string>>;
    deliveryFormReset: ()=>void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selected, setSelected] = useState<Supply | null>(null);
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');

    const deliveryFormReset = ()=>{
        setCurrentStep(1);
        setSelected(null);
        setAddress('');
        setName('');
        setPhone('');
        setNotes('');
    };


    return (
        <AppContext.Provider value={{
            currentStep, setCurrentStep, selected, setSelected, address, setAddress, name, setName, phone, setPhone,
            notes, setNotes, deliveryFormReset
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

