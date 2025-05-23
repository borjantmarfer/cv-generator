import type { FieldsInterface } from "@/shared/interfaces/FieldsInterface";
import { Avatar, Box, IconButton, styled, Tooltip } from "@mui/material"
import type { FormikProps } from "formik";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { i18n } from "@/lang";

const HiddenInput = styled('input')({
    display: 'none',
});

export const UploadImg = ({ formik }: { formik: FormikProps<FieldsInterface> }) => {

    const handleLoadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                formik.setFieldValue('img', result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box sx={{ position: 'relative', width: 200, height: 200 }}>
            <Avatar
                src={formik.values.img}
                sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    boxShadow: 3,
                }}
            />
            <Box sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: '50%',
                p: 1,
            }}>
                <label htmlFor="img-upload">
                    <HiddenInput id="img-upload" type="file" accept="image/*" onChange={handleLoadImage} />
                    <Tooltip title={i18n.uploadImage}>
                        <IconButton component="span" sx={{ fontSize: 32 }}>
                            <AddPhotoAlternateIcon />
                        </IconButton>
                    </Tooltip>
                </label>
            </Box>
        </Box>
    )
}