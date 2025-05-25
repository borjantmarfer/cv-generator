import { i18n } from "@/lang";
import type { FieldsInterface, ExperienceInterface } from "@/shared/interfaces/FieldsInterface";
import { Add, Delete } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
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
import { useCallback, useMemo, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { formatDateLocalized } from "@/shared/utils/dayjsUtils";
import dayjs from "dayjs";

export const ProfesionalExperience = ({ formik }: { formik: FormikProps<FieldsInterface> }) => {
    const [openAnchorEl, setOpenAnchorEl] = useState<HTMLElement | null>(null);

    const addExperienceFormik = useFormik<ExperienceInterface>({
        initialValues: {
            title: "",
            companyName: "",
            description: "",
        },
        validationSchema: yup.object({
            title: yup.string().required(i18n.required),
            companyName: yup.string().required(i18n.required),
            description: yup.string().nullable(),
            fromDate: yup.date().required(i18n.required),
            toDate: yup
                .date()
                .nullable(),
            stillWorking: yup.boolean().default(false),
        }),
        onSubmit: (values) => {
            const newEducation = [...formik.values.experiences, values];
            formik.setFieldValue("experiences", newEducation);
            setOpenAnchorEl(null);
            addExperienceFormik.resetForm();
        },
    });

    const handleDeleteExperience = useCallback((index: number) => {
        const newEducation = [...formik.values.experiences];
        newEducation.splice(index, 1);
        formik.setFieldValue("experiences", newEducation);
    }, [formik])

    return useMemo(() => (
        <Box sx={(theme) => ({
            maxHeight: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2)
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
                        {i18n.professionalExperience}
                    </Typography>
                    <Tooltip title={i18n.addProfesionalExperience}>
                        <IconButton onClick={(e) => setOpenAnchorEl(e.currentTarget)}>
                            <Add />
                        </IconButton>
                    </Tooltip>
                </Box>


            </Paper>
            <Box sx={{ overflowY: 'auto' }}>
                {formik.values.experiences.map((exp, index) => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<KeyboardArrowDownIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span" variant="h6" fontWeight={'bold'}>{exp.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={(theme) => ({
                                width: "100%",
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: theme.spacing(2)
                            })}>
                                <Tooltip title={i18n.removeProfessionalExperience}>
                                    <IconButton
                                        onClick={() => handleDeleteExperience(index)}
                                        sx={{ position: "absolute", top: 2, right: 0 }}>
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="body1" fontWeight={'bold'}>
                                    {exp.companyName}
                                </Typography>
                                <Typography variant="body2" fontStyle="italic" fontWeight={'bold'}>
                                    {`${formatDateLocalized(exp.fromDate)} - ${exp.stillWorking ? i18n.present : formatDateLocalized(exp.toDate)}`}
                                </Typography>
                                <Typography variant="body1" >{exp.description}</Typography>
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
                    onSubmit={addExperienceFormik.handleSubmit}
                    sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2, width: 350 }}
                    noValidate
                >
                    <TextField
                        label={i18n.jobTitle}
                        name="title"
                        value={addExperienceFormik.values.title}
                        onChange={addExperienceFormik.handleChange}
                        onBlur={addExperienceFormik.handleBlur}
                        error={Boolean(addExperienceFormik.touched.title && addExperienceFormik.errors.title)}
                        helperText={addExperienceFormik.touched.title && addExperienceFormik.errors.title}
                        fullWidth
                    />
                    <TextField
                        label={i18n.enterprise}
                        name="companyName"
                        value={addExperienceFormik.values.companyName}
                        onChange={addExperienceFormik.handleChange}
                        onBlur={addExperienceFormik.handleBlur}
                        error={Boolean(addExperienceFormik.touched.companyName && addExperienceFormik.errors.companyName)}
                        helperText={addExperienceFormik.touched.companyName && addExperienceFormik.errors.companyName}
                        fullWidth
                    />
                    <TextField
                        label={i18n.description}
                        name="description"
                        value={addExperienceFormik.values.description}
                        onChange={addExperienceFormik.handleChange}
                        onBlur={addExperienceFormik.handleBlur}
                        error={Boolean(addExperienceFormik.touched.description && addExperienceFormik.errors.description)}
                        helperText={addExperienceFormik.touched.description && addExperienceFormik.errors.description}
                        multiline
                        rows={3}
                        fullWidth
                    />

                    <DatePicker
                        label={i18n.fromDate}
                        value={addExperienceFormik.values.fromDate}
                        disableFuture
                        onChange={(date) => addExperienceFormik.setFieldValue("fromDate", date)}
                    />

                    <DatePicker
                        label={i18n.toDate}
                        value={addExperienceFormik.values.toDate}
                        disableFuture
                        onChange={(date) => addExperienceFormik.setFieldValue("toDate", date)}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                name="stillWorking"
                                checked={addExperienceFormik.values.toDate === null}
                                value={addExperienceFormik.values.stillWorking}
                                onChange={(e) => {
                                    const checked = e.target.checked;
                                    addExperienceFormik.setFieldValue("stillWorking", checked);
                                    addExperienceFormik.setFieldValue("toDate", checked ? null : dayjs());

                                }}
                                onBlur={addExperienceFormik.handleBlur}
                            />
                        }
                        label={i18n.stillWorking || "Actualmente trabajando"}
                    />

                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={() => {
                                setOpenAnchorEl(null);
                                addExperienceFormik.resetForm();
                            }}
                        >
                            {i18n.cancel || "Cancelar"}
                        </Button>
                        <Button type="submit" variant="contained" disabled={!addExperienceFormik.isValid} color="info">
                            {i18n.add || "Agregar"}
                        </Button>
                    </Box>
                </Box>
            </Popover>
        </Box>
    ), [formik.values.experiences, openAnchorEl, addExperienceFormik, handleDeleteExperience])
};
