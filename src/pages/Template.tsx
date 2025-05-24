import type { FieldsInterface } from "@/shared/interfaces/FieldsInterface";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormDataById } from "@/services/indexedDB";
import { ButtonBase, darken, Grid, Paper, Typography } from "@mui/material";
import { i18n } from "@/lang";
import * as templatesImg from '@/assets/templates';
import ProcessImagotype from '@/assets/imagotypes/ProcessImagotype.svg';
import { initialFormValues } from "@/shared/initialValues";
import { PDFViewer } from "@react-pdf/renderer";
import * as Templates from '@/shared/templates';

const templateComponents = Object.values(Templates);

const images = Object.values(templatesImg).filter((img) => typeof img === 'string') as string[];

export const Template = () => {
    const [initialValues, setInitialValues] = useState<FieldsInterface>(initialFormValues);
    const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

    const params = useParams();

    useEffect(() => {
        const loadData = async () => {
            const storedData = await getFormDataById(params.id || '');
            if (storedData) {
                setInitialValues(storedData);
            }
        };
        loadData();
    }
        , [params.id]);

    const getTemplate = () => {
        if (
            selectedTemplate === null ||
            selectedTemplate < 0 ||
            selectedTemplate >= templateComponents.length
        ) {
            setSelectedTemplate(null);
            return null;
        }

        const SelectedTemplate = templateComponents[selectedTemplate];

        if (!SelectedTemplate) {
            setSelectedTemplate(null);
            return null;
        }

        return (
            <PDFViewer
                style={{ width: '100%', height: '100%' }}
            >
                <SelectedTemplate values={initialValues} />
            </PDFViewer>
        );
    }

    return (
        <Grid container spacing={2} sx={(theme) => ({
            padding: theme.spacing(2),
            width: '100%',
            height: '100%',
        })}>
            <Grid size={{ xs: 12, md: 5 }}>
                <Paper
                    sx={(theme) => ({
                        width: '100%',
                        padding: theme.spacing(2, 4),
                        display: 'flex',
                        flexDirection: 'column',
                        gap: theme.spacing(1),
                    })}>
                    <Typography variant="h6" fontWeight={'bold'}>{i18n.templates}</Typography>

                    <Grid container spacing={2} sx={{ flexWrap: 'wrap', width: '100%', height: '100%' }}>
                        {images.map((templateImg: string, index: number) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <ButtonBase
                                    key={index}
                                    sx={(theme) => ({
                                        display: 'block',
                                        marginTop: 1,
                                        padding: 1,
                                        borderRadius: 1,
                                        transition: theme.transitions.create(['background-color', 'transform'], {
                                            duration: theme.transitions.duration.short,
                                            easing: theme.transitions.easing.easeInOut,
                                        }),
                                        '&:hover': {
                                            backgroundColor: darken(theme.palette.background.paper, 0.1),
                                        },
                                    })}
                                    onClick={() => setSelectedTemplate(index)}>
                                    <img src={templateImg} alt={`Template ${index + 1}`} style={{ width: '100%' }} />
                                </ButtonBase>
                            </Grid>
                        ))}
                        <Grid
                            size={{ xs: 12, md: 4 }}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <ButtonBase
                                sx={(theme) => ({
                                    display: 'block',
                                    marginTop: 1,
                                    padding: 1,
                                    borderRadius: 1,
                                    transition: theme.transitions.create(['background-color', 'transform'], {
                                        duration: theme.transitions.duration.short,
                                        easing: theme.transitions.easing.easeInOut,
                                    }),
                                    '&:hover': {
                                        backgroundColor: darken(theme.palette.background.paper, 0.1),
                                    },
                                })}
                                onClick={() => window.open('https://www.linkedin.com/in/borja-antonio-martínez-fernández-36109220a', '_blank', 'noopener,noreferrer')}>
                                <img src={ProcessImagotype} alt="Process Imagotype" style={{ width: '100%' }} />
                                <Typography variant="body1" sx={{ padding: 1, textAlign: 'center' }} fontWeight={'bold'}>
                                    {i18n.comingSoon}
                                </Typography>
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid >
            <Grid size={{ xs: 12, md: 7 }}>
                {selectedTemplate !== getTemplate() ? null : (
                    <Paper
                        sx={(theme) => ({
                            width: '100%',
                            height: '100%',
                            padding: theme.spacing(2, 4),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        })}
                    >
                        <Typography variant="h6" fontWeight={'bold'}>{i18n.selectTemplate}</Typography>
                    </Paper>
                )}
            </Grid>
        </Grid >
    );
}