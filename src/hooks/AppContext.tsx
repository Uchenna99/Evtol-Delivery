import { createContext, useContext, useState, type ReactNode } from "react";
import type { Supply } from "../assets/Interfaces";


interface AppContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    selected: Supply | null;
    setSelected: React.Dispatch<React.SetStateAction<Supply | null>>
}


const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selected, setSelected] = useState<Supply | null>(null);


    return (
        <AppContext.Provider value={{
            currentStep, setCurrentStep, selected, setSelected
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

