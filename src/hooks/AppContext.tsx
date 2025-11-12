import { createContext, useContext, useState, type ReactNode } from "react";


interface AppContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}


const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <AppContext.Provider value={{
            currentStep, setCurrentStep
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

