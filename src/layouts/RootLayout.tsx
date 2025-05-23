import { Box } from "@mui/material";
import { Header } from "../shared/components/Header";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
    return (
        <Box sx={(theme) => ({ width: '100dvw', height: '100dvh', backgroundColor: theme.palette.background.default, display: 'flex', flexDirection: 'column' })}>
            <Header />
            <Box sx={{ margin: '1rem 2rem', flexGrow: 1, display: "flex" }}>
                <Outlet />
            </Box>
        </Box>
    );
}