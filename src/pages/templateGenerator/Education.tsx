import { i18n } from "@/lang";
import type { FieldsInterface, EducationInterface } from "@/shared/interfaces/FieldsInterface";
import { Add, Delete } from "@mui/icons-material";
import {
    Box,
    IconButton,
    Paper,
    Popover,
    TextField,
    Tooltip,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { FormikProps } from "formik";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import dayjs from "dayjs";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Education = ({ formik }: { formik: FormikProps<FieldsInterface> }) => {
    const [openAnchorEl, setOpenAnchorEl] = useState<HTMLElement | null>(null);

    const addEducationFormik = useFormik<EducationInterface>({
        initialValues: {
            titulation: "",
            description: "",
            fromDate: dayjs(),
            toDate: dayjs(),
        },
        validationSchema: yup.object({
            titulation: yup.string().required(i18n.required),
            description: yup.string().nullable(),
            fromDate: yup.date().required(i18n.required),
            toDate: yup
                .date()
                .min(yup.ref("fromDate"), i18n.toDateAfterFromDate || "La fecha final debe ser posterior a la inicial")
                .required(i18n.required),
        }),
        onSubmit: (values) => {
            const newEducation = [...formik.values.education, values];
            formik.setFieldValue("education", newEducation);
            setOpenAnchorEl(null);
            addEducationFormik.resetForm();
        },
    });

    const handleDeleteEducation = (index: number) => {
        const newEducation = [...formik.values.education];
        newEducation.splice(index, 1);
        formik.setFieldValue("education", newEducation);
    };

    return (
        <Box sx={(theme) => ({
            maxHeight: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2),
        })}>
            <Paper
                sx={(theme) => ({
                    padding: "1rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "100%",
                    gap: theme.spacing(2),
                })}
            >
                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        {i18n.education}
                    </Typography>
                    <Tooltip title={i18n.addEducation}>
                        <IconButton onClick={(e) => setOpenAnchorEl(e.currentTarget)}>
                            <Add />
                        </IconButton>
                    </Tooltip>
                </Box>


            </Paper>
            <Box sx={{ overflowY: 'auto' }}>
                {formik.values.education.map((edu, index) => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<KeyboardArrowDownIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span" variant="h6" fontWeight={'bold'}>{edu.titulation}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={(theme) => ({
                                width: "100%",
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: theme.spacing(2)
                            })}>
                                <Tooltip title={i18n.removeEducation}>
                                    <IconButton
                                        onClick={() => handleDeleteEducation(index)}
                                        sx={{ position: "absolute", top: 2, right: 0 }}>
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="body2" fontStyle="italic" fontWeight={'bold'}>
                                    {`${dayjs(edu.fromDate).locale(i18n.getLanguage()).format("MMMM, YYYY")} - ${dayjs(edu.toDate).locale(i18n.getLanguage()).format("MMMM, YYYY")}`}
                                </Typography>
                                <Typography variant="body1" >{edu.description}</Typography>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

            <Popover
                open={Boolean(openAnchorEl)}
                onClose={() => setOpenAnchorEl(null)}
                anchorEl={openAnchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                sx={{ p: 2, maxWidth: 400 }}
            >
                <Box
                    component="form"
                    onSubmit={addEducationFormik.handleSubmit}
                    sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2, width: 350 }}
                    noValidate
                >
                    <TextField
                        label={i18n.titulation}
                        name="titulation"
                        value={addEducationFormik.values.titulation}
                        onChange={addEducationFormik.handleChange}
                        onBlur={addEducationFormik.handleBlur}
                        error={Boolean(addEducationFormik.touched.titulation && addEducationFormik.errors.titulation)}
                        helperText={addEducationFormik.touched.titulation && addEducationFormik.errors.titulation}
                        fullWidth
                    />
                    <TextField
                        label={i18n.description}
                        name="description"
                        value={addEducationFormik.values.description}
                        onChange={addEducationFormik.handleChange}
                        onBlur={addEducationFormik.handleBlur}
                        error={Boolean(addEducationFormik.touched.description && addEducationFormik.errors.description)}
                        helperText={addEducationFormik.touched.description && addEducationFormik.errors.description}
                        multiline
                        rows={3}
                        fullWidth
                    />

                    <DatePicker
                        label={i18n.fromDate}
                        value={addEducationFormik.values.fromDate}
                        disableFuture
                        onChange={(date) => addEducationFormik.setFieldValue("fromDate", date)}
                    />

                    <DatePicker
                        label={i18n.toDate}
                        value={addEducationFormik.values.toDate}
                        disableFuture
                        onChange={(date) => addEducationFormik.setFieldValue("toDate", date)}
                    />

                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={() => {
                                setOpenAnchorEl(null);
                                addEducationFormik.resetForm();
                            }}
                        >
                            {i18n.cancel || "Cancelar"}
                        </Button>
                        <Button type="submit" variant="contained" disabled={!addEducationFormik.isValid} color="info">
                            {i18n.add || "Agregar"}
                        </Button>
                    </Box>
                </Box>
            </Popover>
        </Box>
    );
};
