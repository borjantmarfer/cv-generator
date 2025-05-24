import { getFormDataById, saveFormData } from "@/services/indexedDB";
import { initialFormValues } from "@/shared/initialValues";
import type { FieldsInterface } from "@/shared/interfaces/FieldsInterface";
import { deserializeFormData, serializeFormData } from "@/shared/utils/formDataTransform";
import { Box, CircularProgress } from "@mui/material";
import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "./contextUtils";

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [currentData, setCurrentData] = useState<FieldsInterface>(initialFormValues);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            const storedData = await getFormDataById(params.id || '');
            if (storedData) {
                const parsedData = deserializeFormData(storedData);
                setCurrentData(parsedData);
            }
            setIsLoading(false);
        };
        loadData();
    }, [params.id]);

    const saveData = useCallback(async (data: FieldsInterface) => {
        try {
            const serializableData = serializeFormData(data);
            const result = await saveFormData(serializableData);
            if (result !== undefined && result !== null) {
                if (data.id) {
                    navigate(`templates`);
                } else {
                    navigate(`${result.id}/template`);
                }
            } else {
                console.log('Datos guardados en IndexedDB, pero no se recibió un ID.');
            }
        } catch (error) {
            console.error('Error al guardar datos en IndexedDB:', error);
        }
    }, [navigate]);

    const returnData = useMemo(() => ({
        currentData,
        setCurrentData,
        saveData,
    }), [currentData, setCurrentData, saveData]);

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                <CircularProgress color='primary' />
            </Box>
        );
    }

    return (
        <DataContext.Provider value={returnData}>
            {children}
        </DataContext.Provider>
    )
}
