import { Box, Button, Typography } from "@mui/material";
import NotFoundImagotype from '@/assets/imagotypes/404NotFound.svg'
import { i18n } from "@/lang";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box sx={(theme) => ({
            width: '100dvw',
            height: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing(2),
        })}>
            <img src={NotFoundImagotype} alt="404 Not Found" style={{ width: '20%' }} />
            <Typography variant="h4" fontWeight={'bold'} sx={{ textAlign: 'center' }}>{i18n.notFoundTitle}</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>{i18n.notFoundDescription}</Typography>
            <Button
                variant="contained"
                color="primary"
                sx={(theme) => ({ color: theme.palette.getContrastText(theme.palette.primary.main) })}
                onClick={() => navigate('/')}
            >
                {i18n.comeBack}
            </Button>
        </Box>
    );
}