// src/shared/components/ui/SpeechRecognitionTextField.tsx (o donde esté tu componente)
import {
    Box,
    IconButton,
    TextField,
    Tooltip,
    type TextFieldProps,
} from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import { useEffect, useRef, useState } from "react";
import LocalizedStrings from "react-localization";
import { i18n } from "@/lang";

const i18nSpeech = new LocalizedStrings({
    en: { speechLang: "en-US" },
    es: { speechLang: "es-ES" },
    fr: { speechLang: "fr-FR" },
});

export const SpeechRecognitionTextField = (props: TextFieldProps) => {
    const [listening, setListening] = useState(false);
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    useEffect(() => {
        interface SpeechRecognitionWindow extends Window {
            SpeechRecognition?: typeof window.SpeechRecognition;
            webkitSpeechRecognition?: typeof window.SpeechRecognition;
        }
        const SpeechRecognition =
            (window as SpeechRecognitionWindow).SpeechRecognition ||
            (window as SpeechRecognitionWindow).webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.warn("Web Speech API no es compatible con este navegador.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = i18nSpeech.speechLang;
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const text = event.results[0][0].transcript;
            if (props.onChange) {
                const syntheticEvent = {
                    target: {
                        name: props.name,
                        value: text,
                    },
                } as React.ChangeEvent<HTMLInputElement>;
                props.onChange(syntheticEvent);
            }
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
            console.error("Error en reconocimiento de voz:", event.error);
            setListening(false);
        };

        recognitionRef.current = recognition;
    }, [props]);

    const handleMicClick = () => {
        if (recognitionRef.current) {
            if (!listening) {
                setListening(true);
                recognitionRef.current.start();
            } else {
                recognitionRef.current.stop();
            }
        }
    };

    return (
        <Box sx={{ position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
            <Tooltip title={i18n.speak}>
                <IconButton
                    sx={{ position: "absolute", top: 5, right: 5, zIndex: 1 }}
                    aria-label="microphone"
                    onClick={handleMicClick}
                    color={listening ? "primary" : "default"}
                >
                    <MicIcon />
                </IconButton>
            </Tooltip>
            <TextField
                {...props}
                multiline
                minRows={4}
                sx={{
                    width: "100%",
                    flexGrow: 1,
                    overflow: "auto",
                    '.MuiInputBase-root': {
                        height: '100%',
                        alignItems: 'flex-start',
                        overflow: 'auto',
                    },
                    '.MuiInputBase-input': {
                        height: '100% !important',
                        overflow: 'auto',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        boxSizing: 'border-box',
                    },
                    '& .MuiFormLabel-root': {
                        marginTop: '6px'
                    }
                }}
            />
        </Box>
    );
};