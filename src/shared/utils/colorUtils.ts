import Color from 'color';

export function getLightVersionColor(hexColor: string): string {
    try {
        const color = Color(hexColor).hsl();

        const { h, s, l } = color.object();

        let newHue = h;
        if ((h >= 330 && h <= 360) || (h >= 0 && h <= 30)) {
            newHue = 35;
        } else if (h >= 180 && h <= 260) {
            newHue = 195;
        } else {
            newHue = (h + 10) % 360;
        }

        const newLightness = Math.min(l + 10, 70);
        const newSaturation = Math.max(s - 10, 45);

        return Color({ h: newHue, s: newSaturation, l: newLightness }).hex();
    } catch (error) {
        console.warn('Color inválido:', hexColor, error);
        return hexColor;
    }
}
