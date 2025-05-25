import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { i18n } from "@/lang";
import FeatureImagotype from '@/assets/imagotypes/ProcessImagotype.svg';
import { useNavigate } from "react-router-dom";
import { useMemo } from 'react';

export const ComingSoon = () => {
    const navigate = useNavigate();

    const xs = useMediaQuery('(max-width: 600px)');

    const content = useMemo(() => (
        <Box sx={(theme) => ({
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing(2),
        })}>
            <img src={FeatureImagotype} alt="404 Not Found" style={{ width: xs ? '80%' : '20%' }} />
            <Typography variant="h4" fontWeight={'bold'} sx={{ textAlign: 'center' }}>{i18n.comingSoon}</Typography>
            <Button
                variant="contained"
                color="primary"
                sx={(theme) => ({ color: theme.palette.getContrastText(theme.palette.primary.main) })}
                onClick={() => navigate('/')}
            >
                {i18n.comeBack}
            </Button>
        </Box>
    ), [navigate, xs]);

    return content;
}