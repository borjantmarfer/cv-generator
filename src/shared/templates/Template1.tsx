import { Defs, Document, Font, Image, LinearGradient, Page, Path, Stop, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";
import { useMemo } from "react";
import type { FieldsInterface } from "../interfaces/FieldsInterface";
import { i18n } from "@/lang";
import { useTheme } from "@mui/material";
import { getLightVersionColor } from "../utils/colorUtils";
import RobotoRegular from '/fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from '/fonts/Roboto/Roboto-Bold.ttf';
import RobotoItalic from '/fonts/Roboto/Roboto-Italic.ttf';
import RobotoBoldItalic from '/fonts/Roboto/Roboto-BoldItalic.ttf';
import { formatDateLocalized } from "../utils/dayjsUtils";

Font.register({
    family: 'Roboto',
    fonts: [
        { src: RobotoRegular, fontWeight: 'normal' },
        { src: RobotoBold, fontWeight: 'bold' },
        { src: RobotoItalic, fontStyle: 'italic' },
        { src: RobotoBoldItalic, fontWeight: 'bold', fontStyle: 'italic' }
    ]
});

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        lineHeight: 1.3,
    },
    subtitle: {
        fontSize: 16,
    },
    text: {
        fontSize: 12,
    },
    boldText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    italicText: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    italicBoldText: {
        fontSize: 12,
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
})

export const Template1 = ({ currentData }: { currentData: FieldsInterface }) => {

    const theme = useTheme();

    const primaryColor = currentData.mainColor;
    const primaryColorLight = getLightVersionColor(currentData.mainColor);

    return useMemo(() => (
        <Document
            title={`Curriculum Vitae - ${currentData.fullName}`}
            author={currentData.fullName}
            subject="Curriculum Vitae"
            keywords="CV, Resume, Curriculum Vitae, PDF"
            creator="© BAM"
        >
            <Page
                size="A4"
                style={{
                    position: 'relative',
                    paddingHorizontal: '2cm',
                    paddingVertical: '2cm',
                    fontSize: 12,
                    color: '#000',
                    lineHeight: 1.5,
                    fontFamily: 'Roboto',
                }}
            >
                <Svg viewBox="0 0 1244 1267" style={{ width: 250, height: 'auto', position: 'absolute', top: 0, left: 0 }}>
                    <Defs>
                        <LinearGradient id="blueGradientDownUp" x1="0" y1="1267" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                            <Stop offset="0%" stopColor={primaryColorLight} stopOpacity={1} />
                            <Stop offset="100%" stopColor={primaryColorLight} stopOpacity={0.2} />
                        </LinearGradient>
                        <LinearGradient id="blueGradientUpDown" x1="0" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
                            <Stop offset="0%" stopColor={primaryColorLight} stopOpacity={1} />
                            <Stop offset="100%" stopColor={primaryColorLight} stopOpacity={0.2} />
                        </LinearGradient>
                        <LinearGradient id="blueGradientDark" x1="0" y1="1267" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                            <Stop offset="0%" stopColor={primaryColor} stopOpacity={1} />
                            <Stop offset="100%" stopColor={primaryColor} stopOpacity={0.2} />
                        </LinearGradient>
                    </Defs>
                    <Path
                        d="M336 850L892 1H1110L558.5 850H336Z"
                        fill="url(#blueGradientUpDown)"
                    />
                    <Path
                        d="M469.5 935L1025.5 1H1243.5L692 935H469.5Z"
                        fill="url(#blueGradientUpDown)"
                    />
                    <Path
                        d="M2.5 1267V834.5L429 -0.00012207H650.5L2.5 1267Z"
                        fill="url(#blueGradientDownUp)"
                    />
                    <Path
                        d="M512.176 425.751H0.421387V-0.131714H758.059L512.176 425.751Z"
                        fill={primaryColor}
                    />
                    <Path
                        d="M464 1H1110L1028.86 192.938C1013.21 229.949 976.935 254 936.753 254H464V1Z"
                        fill={primaryColor}
                    />
                    <Path
                        d="M3 750.5V319L164 0H386.5L3 750.5Z"
                        fill="url(#blueGradientDownUp)"
                    />
                </Svg>
                <View
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 20,
                        backgroundColor: primaryColor,
                        zIndex: 10,
                    }}
                    fixed
                />

                <View style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 15,
                }}>
                    <View style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end',
                    }}>
                        <View
                            style={{
                                flex: 0.5,
                                aspectRatio: 1,
                                borderRadius: 9999,
                                overflow: 'hidden',
                                backgroundColor: '#fff',
                                padding: 8,
                                paddingBottom: 0,
                            }}
                        >
                            <Image
                                src={currentData.img}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 9999,
                                    objectFit: 'cover',
                                }}
                            />
                        </View>
                        <View style={{
                            flex: 1,
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 15,
                            lineHeight: 0.8,
                        }}>
                            <Text style={styles.title}>{currentData.fullName.toUpperCase()}</Text>
                            <Text style={{ ...styles.subtitle, marginTop: -30 }}>{currentData.jobTitle.toUpperCase()}</Text>
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <Text style={styles.text}>{`${i18n.phone}: ${currentData.phone}`}</Text>
                                <Text style={styles.text}>{`${i18n.email}: ${currentData.email}`}</Text>
                                <Text style={styles.text}>{`${i18n.address}: ${currentData.address}`}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                    }}>
                        <View style={{
                            width: '100%',
                            padding: 10,
                            backgroundColor: primaryColor,
                            borderRadius: 5,
                            textAlign: 'center',
                            color: theme.palette.getContrastText(primaryColor)
                        }}>
                            <Text style={styles.subtitle}>{i18n.aboutMe.toUpperCase()}</Text>
                        </View>
                        <Text style={[styles.text, { textAlign: 'center', width: '100%' }]}>{currentData.about}</Text>
                    </View>

                    <View style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 5,
                    }}>
                        <View style={{
                            flex: 1,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10
                        }}>
                            <View style={{
                                width: '100%',
                                padding: 10,
                                backgroundColor: primaryColor,
                                borderTopLeftRadius: 5,
                                borderBottomLeftRadius: 5,
                                textAlign: 'center',
                                color: theme.palette.getContrastText(primaryColor)
                            }}>
                                <Text style={styles.subtitle}>{i18n.education.toUpperCase()}</Text>
                            </View>

                            <View
                                style={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10,
                                }}>
                                {currentData.education.map((edu) => (
                                    <View key={crypto.randomUUID()} style={{ flexDirection: 'column', width: '100%' }}>
                                        <Text style={[styles.boldText, { paddingHorizontal: 10 }]}>• {edu.titulation}</Text>
                                        <Text style={styles.text}>{edu.description}</Text>
                                        <Text style={[styles.italicText, { textAlign: 'right' }]}>
                                            {`${formatDateLocalized(edu.fromDate)} - ${edu.stillStudying ? i18n.present : formatDateLocalized(edu.toDate)}`}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={{
                            flex: 1,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10
                        }}>
                            <View style={{
                                width: '100%',
                                padding: 10,
                                backgroundColor: primaryColor,
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                                textAlign: 'center',
                                color: theme.palette.getContrastText(primaryColor)
                            }}>
                                <Text style={styles.subtitle}>{i18n.skills.toUpperCase()}</Text>
                            </View>
                            <View
                                style={{
                                    flexGrow: 1,
                                    flexDirection: 'column',
                                    gap: 5,
                                }}>
                                {currentData.skills.map((skill) => (
                                    <Text style={[styles.boldText, { paddingHorizontal: 10 }]}>• {skill}</Text>
                                ))}
                            </View>
                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                    }}>
                        <View style={{
                            width: '100%',
                            padding: 10,
                            backgroundColor: primaryColorLight,
                            borderRadius: 5,
                            textAlign: 'center',
                            color: theme.palette.getContrastText(primaryColorLight)
                        }}>
                            <Text style={styles.subtitle}>{i18n.professionalExperience.toUpperCase()}</Text>
                        </View>
                        <View
                            style={{
                                flexGrow: 1,
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10,
                            }}
                        >
                            {currentData.experiences.map((exp) => (
                                <View
                                    key={crypto.randomUUID()}
                                    wrap={false}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 5,
                                        borderBottomWidth: 2,
                                        borderBottomColor: primaryColor,
                                    }}
                                >
                                    <View
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Text style={styles.boldText}>{exp.title}</Text>
                                        <Text style={styles.italicBoldText}>
                                            {`${exp.companyName}, ${formatDateLocalized(exp.fromDate)} - ${exp.stillWorking ? i18n.present : formatDateLocalized(exp.toDate)}`}
                                        </Text>
                                    </View>
                                    <Text style={styles.text}>{exp.description}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>
        </Document >
    ), [currentData, primaryColor, primaryColorLight, theme.palette]);
}