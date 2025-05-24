import type { FieldsInterface } from "@/shared/interfaces/FieldsInterface";
import { createContext, useContext } from "react";

interface DataContextInterface {
    currentData: FieldsInterface;
    setCurrentData: (data: FieldsInterface) => void;
    saveData: (data: FieldsInterface) => Promise<void>;
}

export const DataContext = createContext<DataContextInterface | null>(null);

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext must be used within a DataProvider");
    }
    return context;
}