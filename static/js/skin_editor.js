/**
 * Custom Snake Skin Editor & Palette Builder Engine.
 */
class SkinEditor {
    constructor() {
        this.customPalette = {
            head: '#FF5722',
            primary: '#FF9800',
            secondary: '#FFEB3B',
            tertiary: '#4CAF50',
            accent: '#2196F3',
            border: '#9C27B0'
        };
    }

    setCustomColor(part, hexColor) {
        if (this.customPalette[part] !== undefined) {
            this.customPalette[part] = hexColor;
        }
    }

    exportSkinJSON() {
        return JSON.stringify(this.customPalette, null, 2);
    }
}
const skinEditor = new SkinEditor();
