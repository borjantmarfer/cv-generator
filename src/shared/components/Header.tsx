import { Box, Typography, ButtonBase } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import CV from '@/assets/CV.svg'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const theme = useTheme()
    const [mouseEnter, setMouseEnter] = useState<boolean>(false)

    const navigate = useNavigate();

    return (
        <Box
            component="header"
            sx={{
                width: '100%',
                height: '80px',
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 4,
                boxShadow: theme.shadows[2],
            }}
        >
            <ButtonBase
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    backgroundColor: 'transparent',
                    borderRadius: 2,
                    padding: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                    },
                }}
                disableRipple
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
                onClick={() => navigate('/')}
            >
                <Box
                    component="img"
                    src={CV}
                    alt="CV-Logo"
                    sx={{
                        width: 40,
                        height: 40,
                        transition: 'transform 0.3s ease',
                        transform: mouseEnter ? 'rotate(5deg) scale(1.1)' : 'none',
                    }}
                />
                <Typography
                    variant="h6"
                    sx={{
                        color: theme.palette.primary.contrastText,
                        fontWeight: 700,
                        letterSpacing: 1,
                        transition: 'color 0.3s ease',
                    }}
                >
                    CV-GENERATOR
                </Typography>
            </ButtonBase>
        </Box>
    )
}
