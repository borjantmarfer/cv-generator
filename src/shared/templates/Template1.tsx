import { Defs, Document, LinearGradient, Page, Path, Stop, Svg } from "@react-pdf/renderer";
import { useMemo } from "react";
import type { FieldsInterface } from "../interfaces/FieldsInterface";

export const Template1 = ({ currentData }: { currentData: FieldsInterface }) => {

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
                    padding: '2cm',
                    fontFamily: 'Helvetica',
                    fontSize: 12,
                    color: '#000',
                    lineHeight: 1.5,
                }}
            >
                <Svg viewBox="0 0 1244 1267" style={{ width: 300, height: 'auto', position: 'absolute', top: 0, left: 0 }}>
                    <Defs>
                        <LinearGradient id="blueGradientDownUp" x1="0" y1="1267" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                            <Stop offset="0%" stopColor="#2B8EFF" stopOpacity={1} />
                            <Stop offset="100%" stopColor="#2B8EFF" stopOpacity={0.2} />
                        </LinearGradient>
                        <LinearGradient id="blueGradientUpDown" x1="0" y1="0" x2="0" y2="1085" gradientUnits="userSpaceOnUse">
                            <Stop offset="0%" stopColor="#2B8EFF" stopOpacity={1} />
                            <Stop offset="100%" stopColor="#2B8EFF" stopOpacity={0.2} />
                        </LinearGradient>
                        <LinearGradient id="blueGradientDark" x1="0" y1="1267" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                            <Stop offset="0%" stopColor="#2004C3" stopOpacity={1} />
                            <Stop offset="100%" stopColor="#2004C3" stopOpacity={0.2} />
                        </LinearGradient>
                    </Defs>
                    <Path
                        d="M2.5 1267V834.5L429 -0.00012207H650.5L2.5 1267Z"
                        fill="url(#blueGradientDownUp)"
                    />
                    <Path
                        d="M336 1085L892 1H1110L558.5 1085H336Z"
                        fill="url(#blueGradientUpDown)"
                    />
                    <Path
                        d="M469.5 1085L1025.5 1H1243.5L692 1085H469.5Z"
                        fill="url(#blueGradientUpDown)"
                    />
                    <Path
                        d="M512.176 426.751H0.421387V0.868286H758.059L512.176 426.751Z"
                        fill="#2004C3"
                    />
                    <Path
                        d="M464 1H1110L1028.86 192.938C1013.21 229.949 976.935 254 936.753 254H464V1Z"
                        fill="#2004C3"
                    />
                    <Path
                        d="M3 750.5V319L164 0H386.5L3 750.5Z"
                        fill="url(#blueGradientDownUp)"
                    />
                </Svg>

            </Page>
        </Document>
    ), [currentData]);
}