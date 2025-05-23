import { Box, ButtonBase, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()
    return (
        <Box sx={(theme) => ({ flexGrow: 1, display: 'flex', flexDirection: { xs: "column", md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: theme.spacing(1) })}>
            <ButtonBase onClick={() => navigate('template/1')} sx={{ height: '90%', width: '30%' }}>
                <Card sx={{ height: '100%', width: '100%' }}>s</Card>
            </ButtonBase>
        </Box>
    );
}