import { Box } from "@mui/material";
import { Header } from "../shared/components/Header";
import { Outlet } from "react-router-dom";
import { DataProvider } from "@/context/DataProvider";

export const RootLayout = () => {
    return (
        <Box sx={(theme) => ({
            width: '100dvw',
            height: { xs: 'auto', md: '100dvh' },
            minHeight: { xs: '100dvh', md: '100dvh' },
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'column'
        })}>
            <Header />
            <DataProvider>
                <Box sx={{
                    margin: { xs: '1rem', md: '1rem 2rem' },
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflowX: 'hidden',
                    overflowY: { xs: 'auto', md: 'hidden' }
                }}>
                    <Outlet />
                </Box>
            </DataProvider>

        </Box>
    );
}