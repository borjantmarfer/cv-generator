import { i18n } from "@/lang"
import { SpeechRecognitionTextField } from "@/shared/components/ui/SpeechRecognitionTextField"
import { UploadImg } from "@/shared/components/ui/UploadImg"
import type { FieldsInterface } from "@/shared/interfaces/FieldsInterface"
import { Box, Paper, TextField, Typography } from "@mui/material"
import type { FormikProps } from "formik"
import { useMemo } from "react"


export const PersonalData = ({ formik }: { formik: FormikProps<FieldsInterface> }) => {

    return useMemo(() => (
        <Paper sx={(theme) => ({
            width: '100%',
            height: '100%',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2)
        })}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{i18n.personalData}</Typography>
            <Box sx={(theme) => ({ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: theme.spacing(2) })}>
                <UploadImg formik={formik} />
                <Box sx={(theme) => ({ flexGrow: 1, width: { xs: '100%', md: 'auto' }, display: 'flex', flexDirection: 'column', gap: theme.spacing(2) })}>
                    <TextField
                        name="fullName"
                        label={i18n.fullName}
                        fullWidth
                        variant="outlined"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName}
                    />

                    <Box sx={(theme) => ({ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: theme.spacing(2) })}>
                        <TextField
                            name="phone"
                            label={i18n.phone}
                            variant="outlined"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            sx={{ flexGrow: 1 }}
                        />
                        <TextField
                            name="email"
                            label={i18n.email}
                            variant="outlined"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            sx={{ width: { xs: '100%', md: '80%' } }}
                        />
                    </Box>
                    <TextField
                        name="address"
                        label={i18n.address}
                        fullWidth
                        variant="outlined"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                    />
                </Box>
            </Box>
            <TextField
                name="jobTitle"
                label={i18n.jobTitle}
                fullWidth
                variant="outlined"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
                helperText={formik.touched.jobTitle && formik.errors.jobTitle}
            />

            <SpeechRecognitionTextField
                name="about"
                label={i18n.aboutMe}
                fullWidth
                multiline
                variant="outlined"
                value={formik.values.about}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.about && Boolean(formik.errors.about)}
                helperText={formik.touched.about && formik.errors.about}
                sx={{ flexGrow: 1, height: '100%' }}
            />
        </Paper >
    ), [
        formik.values.img,
        formik.values.about,
        formik.values.address,
        formik.values.email,
        formik.values.fullName,
        formik.values.jobTitle,
        formik.values.phone,
        formik.touched,
        formik.errors
    ]);
}