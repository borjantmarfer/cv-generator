import { useDataContext } from "@/context/contextUtils";
import { i18n } from "@/lang";
import { Add, Description, Person } from "@mui/icons-material";
import { Box, ButtonBase, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CV from '@/assets/CV.svg'

import { useState } from "react";

export const Home = () => {
    const navigate = useNavigate()

    const { firstIdData } = useDataContext();
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <Box sx={(theme) => ({
            flexGrow: 1,
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
                <ButtonBase onClick={() => navigate('configurator')} sx={{ height: 150, width: { xs: 200, md: 150 } }}>
                    <Paper
                        onMouseEnter={() => setHovered('generate')}
                        onMouseLeave={() => setHovered(null)}
                        sx={(theme) => ({
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: theme.spacing(2),
                        })}>
                        <Add
                            sx={{
                                fontSize: 50,
                                transition: 'transform 0.3s ease',
                                transform: hovered === 'generate' ? 'rotate(5deg) scale(1.1)' : 'none',
                            }}
                        />
                        <Typography variant="h6">{i18n.generateCV}</Typography>
                    </Paper>
                </ButtonBase>

                <ButtonBase onClick={() => navigate('coming-soon')} sx={{ height: 150, width: { xs: 200, md: 150 } }}>
                    <Paper
                        onMouseEnter={() => setHovered('cvs')}
                        onMouseLeave={() => setHovered(null)}
                        sx={(theme) => ({
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: theme.spacing(2),
                        })}>
                        <Description
                            sx={{
                                fontSize: 50,
                                transition: 'transform 0.3s ease',
                                transform: hovered === 'cvs' ? 'rotate(5deg) scale(1.1)' : 'none',
                            }}
                        />
                        <Typography variant="h6">{i18n.cvs}</Typography>
                    </Paper>
                </ButtonBase>
            </Box>
            {firstIdData && (
                <Box sx={(theme) => ({
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: theme.spacing(2),
                })}>
                    <ButtonBase onClick={() => navigate('/configurator/1')} sx={{ height: 'auto', width: { xs: 200, md: 150 } }}>
                        <Paper
                            onMouseEnter={() => setHovered('person')}
                            onMouseLeave={() => setHovered(null)}
                            sx={(theme) => ({
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: theme.spacing(1, 2),
                                gap: theme.spacing(2),
                            })}>
                            <Person
                                sx={{
                                    fontSize: 50,
                                    transition: 'transform 0.3s ease',
                                    transform: hovered === 'person' ? 'rotate(5deg) scale(1.1)' : 'none',
                                }}
                            />
                            <Typography variant="h6">{firstIdData.fullName}</Typography>
                        </Paper>
                    </ButtonBase>

                    <ButtonBase onClick={() => navigate('/configurator/1/templates')} sx={{ height: 'auto', width: { xs: 200, md: 150 } }}>
                        <Paper
                            onMouseEnter={() => setHovered('cv')}
                            onMouseLeave={() => setHovered(null)}
                            sx={(theme) => ({
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: theme.spacing(1, 2),
                                gap: theme.spacing(2),
                            })}
                        >
                            <Box
                                component="img"
                                src={CV}
                                alt="CV-Logo"
                                sx={{
                                    width: 50,
                                    height: 50,
                                    transition: 'transform 0.3s ease',
                                    transform: hovered === 'cv' ? 'rotate(5deg) scale(1.1)' : 'none',
                                }}
                            />
                            <Typography variant="h6">CV - {firstIdData.fullName}</Typography>
                        </Paper>
                    </ButtonBase>
                </Box>
            )}
        </Box>
    );
}