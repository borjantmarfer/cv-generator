import { useFormik } from 'formik';
import * as yup from 'yup';
import { i18n } from '@/lang';
import {
    Box,
    Grid,
    IconButton,
    Tooltip,
    darken,
} from '@mui/material';
import { PersonalData } from './templateGenerator/PersonalData';
import { Skills } from './templateGenerator/Skills';
import { useState } from 'react';
import { ChevronRight } from '@mui/icons-material';
import { Education } from './templateGenerator/Education';
import { ProfesionalExperience } from './templateGenerator/ProfessionalExperience';
import { LastConfig } from './templateGenerator/LastConfig';
import { useDataContext } from '@/context/contextUtils';
import { useParams } from 'react-router-dom';
import { initialFormValues } from '@/shared/initialValues';

const validationSchema = yup.object({
    fullName: yup.string().required(i18n.required),
    jobTitle: yup.string().required(i18n.required),
    phone: yup.string().required(i18n.required),
    email: yup.string().email(i18n.invalidEmail).required(i18n.required),
    address: yup.string().required(i18n.required),
    about: yup.string().nullable(),
});

export const TemplateConfigurator = () => {
    const [openNext, setOpenNext] = useState<boolean>(false);

    const { currentData, saveData } = useDataContext();
    const params = useParams();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: params.id ? currentData : initialFormValues,
        validationSchema,
        onSubmit: async (values) => {
            console.log('TemplateGenerator - onSubmit - values:', values);
            saveData(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ flexGrow: 1, position: 'relative', display: 'flex', flexDirection: 'row' }}>
            <Box
                sx={(theme) => ({
                    flexGrow: 1,
                    position: 'relative',
                    overflowY: { xs: 'auto', md: 'hidden' },
                    overflowX: 'hidden',
                    display: 'flex',
                    gap: theme.spacing(2)
                })}
            >
                <Box
                    sx={(theme) => ({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        transition: theme.transitions.create('transform', {
                            duration: theme.transitions.duration.standard,
                            easing: theme.transitions.easing.easeInOut,
                        }),
                        transform: openNext ? 'translateX(-110%)' : 'translateX(0)',
                    })}
                >
                    <Grid container spacing={2} sx={{ width: '100%', height: { xs: '200%', md: '100%' } }}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <PersonalData formik={formik} />
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <Skills formik={formik} />
                        </Grid>
                    </Grid>
                </Box>

                <Box
                    sx={(theme) => ({
                        position: 'absolute',
                        top: 0,
                        left: '100%',
                        width: '100%',
                        height: '100%',
                        transition: theme.transitions.create('transform', {
                            duration: theme.transitions.duration.standard,
                            easing: theme.transitions.easing.easeInOut,
                        }),
                        transform: openNext ? 'translateX(-100%)' : 'translateX(0)',
                    })}
                >
                    <Grid container spacing={2} sx={{ width: '100%', height: '100%' }}>
                        <Grid size={{ xs: 12, md: 4 }} sx={{ maxHeight: '100%' }}>
                            <Education formik={formik} />
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }} sx={{ maxHeight: '100%' }}>
                            <ProfesionalExperience formik={formik} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }} sx={{ maxHeight: '100%' }}>
                            <LastConfig formik={formik} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Tooltip title={openNext ? i18n.previous : i18n.next}>
                <IconButton
                    onClick={() => setOpenNext(!openNext)}
                    sx={(theme) => ({
                        position: 'absolute',
                        bottom: 16,
                        right: 16,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.getContrastText(theme.palette.primary.main),
                        boxShadow: 3,
                        transition: theme.transitions.create(['background-color', 'bottom'], {
                            duration: theme.transitions.duration.standard,
                            easing: theme.transitions.easing.easeInOut,
                        }),
                        '&:hover': {
                            backgroundColor: darken(theme.palette.primary.main, 0.1),
                        },
                    })}
                >
                    <ChevronRight
                        sx={(theme) => ({
                            transform: openNext ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: theme.transitions.create('transform', {
                                duration: theme.transitions.duration.standard,
                                easing: theme.transitions.easing.easeInOut,
                            }),
                            fontSize: 40,
                        })}
                    />
                </IconButton>
            </Tooltip>
        </form>
    );
};
