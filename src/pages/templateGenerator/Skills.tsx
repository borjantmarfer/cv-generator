import { i18n } from "@/lang";
import type { FieldsInterface } from "@/shared/interfaces/FieldsInterface";
import {
    Box,
    ButtonBase,
    IconButton,
    Paper,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import type { FormikProps } from "formik";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { Cancel } from "@mui/icons-material";

export const Skills = ({ formik }: { formik: FormikProps<FieldsInterface> }) => {
    const [newSkill, setNewSkill] = useState("");

    const handleAddSkill = () => {
        const trimmed = newSkill.trim();
        if (!trimmed) return;

        if (!formik.values.skills.includes(trimmed)) {
            formik.setFieldValue("skills", [...formik.values.skills, trimmed]);
        }

        setNewSkill("");
    };

    const handleDeleteSkill = (indexToDelete: number) => {
        const updatedSkills = formik.values.skills.filter(
            (_, index) => index !== indexToDelete
        );
        formik.setFieldValue("skills", updatedSkills);
    };

    const handleEditSkill = (index: number) => {
        const skill = formik.values.skills[index];
        setNewSkill(skill);
        handleDeleteSkill(index);
    };

    return (
        <Paper
            sx={(theme) => ({
                width: "100%",
                height: "100%",
                padding: "1rem 2rem",
                display: "flex",
                flexDirection: "column",
                maxHeight: '100%',
                gap: theme.spacing(2),
            })}
        >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {i18n.skills}
            </Typography>

            <Box sx={{ position: "relative" }}>
                <Tooltip title={i18n.addSkill}>
                    <IconButton
                        onClick={handleAddSkill}
                        sx={{ position: "absolute", right: 5, top: 5, zIndex: 1 }}
                        aria-label={i18n.addSkill}
                    >
                        <SendIcon />
                    </IconButton>
                </Tooltip>
                <TextField
                    name="newSkill"
                    label={i18n.addSkill}
                    fullWidth
                    multiline
                    minRows={3}
                    maxRows={3}
                    variant="outlined"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddSkill();
                        }
                    }}
                    sx={{
                        '& .MuiInputBase-input': {
                            paddingRight: '50px',
                            wordBreak: 'break-word',
                        },
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    overflowY: "auto",
                    maxHeight: '60dvh',
                    padding: 1,
                }}
            >
                {formik.values.skills.map((skill: string, index: number) => (
                    <ButtonBase
                        key={index}
                        onClick={() => handleEditSkill(index)}
                        sx={{
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: 2,
                            px: 2,
                            py: 0.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            backgroundColor: "background.paper",
                            wordBreak: "break-word",
                            maxWidth: "100%",
                            whiteSpace: "normal",
                        }}
                    >
                        <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
                            {skill}
                        </Typography>

                        <Cancel />
                    </ButtonBase>
                ))}
            </Box>
        </Paper>
    );
};