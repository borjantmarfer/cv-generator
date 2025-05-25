import { Box, Button, Paper, Typography } from "@mui/material";
import { SketchPicker } from 'react-color';
import type { FormikProps } from "formik";
import type { FieldsInterface } from "@/shared/interfaces/FieldsInterface";
import { i18n } from "@/lang";
import { useMemo } from "react";

export const LastConfig = ({ formik }: { formik: FormikProps<FieldsInterface> }) => {
    return useMemo(() => (
        <Box sx={(theme) => ({
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'center',
            gap: theme.spacing(2)
        })}>
            <Paper
                sx={(theme) => ({
                    padding: "1rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxHeight: "100%",
                    gap: theme.spacing(2),
                })}
            >
                <Typography variant="h6" fontWeight="bold">
                    {i18n.selectAColor}
                </Typography>

                <SketchPicker
                    color={formik.values.mainColor}
                    onChange={(value: { hex: string }) => {
                        formik.setFieldValue("mainColor", value.hex);
                    }}
                />

                <Box
                    sx={{
                        width: '100%',
                        height: '40px',
                        backgroundColor: formik.values.mainColor,
                        borderRadius: '4px',
                        marginTop: '1rem',
                        border: '1px solid #ccc',
                    }}
                />
            </Paper>
            <Button
                onClick={() => {
                    console.log("Touched:", formik.touched);
                    console.log("Errors:", formik.errors);
                    formik.handleSubmit();
                }}
                size="large"
                fullWidth
                variant="contained"
                color="info"
            >
                {i18n.generateCV}
            </Button>
        </Box>
    ), [formik]);
};
