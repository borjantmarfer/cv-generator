import { useDataContext } from "@/context/contextUtils";
import { i18n } from "@/lang";
import { Add, Description, Person } from "@mui/icons-material";
import { Box, ButtonBase, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()

    const { firstIdData } = useDataContext();

    return (
        <Box sx={(theme) => ({
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing(2),
        })}>
            <Box sx={(theme) => ({
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: theme.spacing(2),
            })}>
                <ButtonBase onClick={() => navigate('generator')} sx={{ height: 150, width: 150 }}>
                    <Paper sx={(theme) => ({
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: theme.spacing(2),
                    })}>
                        <Add sx={{ fontSize: 50 }} />
                        <Typography variant="h6">{i18n.generateCV}</Typography>
                    </Paper>
                </ButtonBase>

                <ButtonBase onClick={() => navigate('cvs')} sx={{ height: 150, width: 150 }}>
                    <Paper sx={(theme) => ({
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: theme.spacing(2),
                    })}>
                        <Description sx={{ fontSize: 50 }} />
                        <Typography variant="h6">{i18n.cvs}</Typography>
                    </Paper>

                </ButtonBase>
            </Box>
            {firstIdData && (
                <ButtonBase onClick={() => navigate('/generator/1/templates')} sx={{ height: 150, width: 316 }}>
                    <Paper sx={(theme) => ({
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: theme.spacing(1, 2),
                        gap: theme.spacing(2),
                    })}>
                        <Person sx={{ fontSize: 50 }} />
                        <Typography variant="h6">{firstIdData.fullName}</Typography>
                    </Paper>
                </ButtonBase>
            )}
        </Box>
    );
}