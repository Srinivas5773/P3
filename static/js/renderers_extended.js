/**
 * Extended Flag Renderers for 195 World Country Flags.
 */
class ExtendedFlagRenderers {

    static drawAdvancedPattern(ctx, x, y, size, countryCode, patternName, palette, isHead) {
        ctx.save();
        ctx.translate(x, y);

        switch (patternName) {
            case 'nordic_cross':
                this.drawNordicCross(ctx, size, palette);
                break;
            case 'taeguk':
                this.drawTaeguk(ctx, size, palette);
                break;
            case 'five_stars':
                this.drawFiveStars(ctx, size, palette);
                break;
            case 'crescent_stars':
                this.drawCrescent(ctx, size, palette);
                break;
            case 'sun_of_may':
                this.drawSunOfMay(ctx, size, palette);
                break;
            case 'swiss_cross':
                this.drawSwissCross(ctx, size, palette);
                break;
            default:
                // Fallback to basic color fill
                ctx.fillStyle = palette.primary;
                ctx.fillRect(1, 1, size - 2, size - 2);
                break;
        }

        ctx.restore();
    }

    static drawNordicCross(ctx, size, palette) {
        ctx.fillStyle = palette.primary;
        ctx.fillRect(1, 1, size - 2, size - 2);

        ctx.fillStyle = palette.secondary;
        // Vertical Bar
        ctx.fillRect(size * 0.3, 1, size * 0.2, size - 2);
        // Horizontal Bar
        ctx.fillRect(1, size * 0.4, size - 2, size * 0.2);
    }

    static drawTaeguk(ctx, size, palette) {
        ctx.fillStyle = palette.primary; // White background
        ctx.fillRect(1, 1, size - 2, size - 2);

        const r = size / 3;
        const cx = size / 2;
        const cy = size / 2;

        // Top Red S-Curve
        ctx.fillStyle = palette.secondary;
        ctx.beginPath();
        ctx.arc(cx, cy, r, Math.PI, 0, false);
        ctx.fill();

        // Bottom Blue S-Curve
        ctx.fillStyle = palette.tertiary;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI, false);
        ctx.fill();
    }

    static drawFiveStars(ctx, size, palette) {
        ctx.fillStyle = palette.primary;
        ctx.fillRect(1, 1, size - 2, size - 2);

        FlagRenderer.drawStar(ctx, size / 3, size / 3, 5, 4, palette.secondary);
    }

    static drawCrescent(ctx, size, palette) {
        ctx.fillStyle = palette.primary;
        ctx.fillRect(1, 1, size - 2, size - 2);

        ctx.fillStyle = palette.secondary;
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = palette.primary;
        ctx.beginPath();
        ctx.arc(size / 2 + 2, size / 2, size / 3.5, 0, Math.PI * 2);
        ctx.fill();
    }

    static drawSunOfMay(ctx, size, palette) {
        ctx.fillStyle = palette.primary;
        ctx.fillRect(1, 1, size - 2, size - 2);

        ctx.fillStyle = palette.accent;
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 4, 0, Math.PI * 2);
        ctx.fill();
    }

    static drawSwissCross(ctx, size, palette) {
        ctx.fillStyle = palette.primary;
        ctx.fillRect(1, 1, size - 2, size - 2);

        ctx.fillStyle = palette.secondary;
        ctx.fillRect(size * 0.4, size * 0.2, size * 0.2, size * 0.6);
        ctx.fillRect(size * 0.2, size * 0.4, size * 0.6, size * 0.2);
    }
}
