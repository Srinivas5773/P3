/**
 * Flag Renderer Engine - Draws flag-themed snake segments and emblems.
 */
class FlagRenderer {
    /**
     * Render an individual snake segment according to country flag pattern.
     */
    static drawSegment(ctx, x, y, size, countryCode, segmentIndex, isHead, direction, totalSegments) {
        const country = CONFIG.COUNTRIES[countryCode] || CONFIG.COUNTRIES['IN'];
        const palette = country.palette;
        const pattern = country.pattern;

        ctx.save();
        ctx.translate(x, y);

        // Draw rounded box background segment
        const radius = isHead ? 8 : 4;
        
        // Determine segment base color according to country pattern
        let segmentColor = palette.primary;

        if (isHead) {
            segmentColor = palette.head;
        } else {
            // Pattern segment color logic
            if (pattern === 'tricolor_chakra' || pattern === 'tricolor_horizontal' || pattern === 'tricolor_vertical') {
                const colorCycle = [palette.primary, palette.secondary, palette.tertiary];
                segmentColor = colorCycle[(segmentIndex - 1) % 3];
            } else if (pattern === 'stripes_stars') {
                segmentColor = (segmentIndex % 2 === 0) ? palette.primary : palette.secondary;
            } else if (pattern === 'rising_sun') {
                segmentColor = (segmentIndex % 5 === 0) ? palette.secondary : palette.primary;
            } else if (pattern === 'canarinho') {
                segmentColor = (segmentIndex % 4 === 0) ? palette.secondary : palette.primary;
            } else if (pattern === 'union_jack' || pattern === 'southern_cross') {
                segmentColor = (segmentIndex % 3 === 0) ? palette.primary : palette.secondary;
            } else if (pattern === 'maple_leaf') {
                segmentColor = (segmentIndex % 3 === 1) ? palette.secondary : palette.primary;
            }
        }

        // Fill Base Segment
        ctx.fillStyle = segmentColor;
        this.fillRoundedRect(ctx, 1, 1, size - 2, size - 2, radius);

        // Segment Border
        ctx.strokeStyle = palette.border || 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Custom National Emblems & Accents
        if (countryCode === 'IN' && (isHead || segmentColor === '#FFFFFF')) {
            // Draw Ashoka Chakra (24-spoke Navy Blue wheel)
            this.drawAshokaChakra(ctx, size / 2, size / 2, isHead ? 5 : 4, palette.accent);
        } else if (countryCode === 'JP' && !isHead && segmentColor === palette.secondary) {
            // Draw Rising Sun Red Circle
            ctx.fillStyle = palette.accent;
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 3.5, 0, Math.PI * 2);
            ctx.fill();
        } else if (countryCode === 'US' && (isHead || segmentIndex % 4 === 0)) {
            // Draw Star accent
            this.drawStar(ctx, size / 2, size / 2, 5, isHead ? 4 : 3, palette.accent);
        } else if (countryCode === 'CA' && isHead) {
            // Draw Maple Leaf symbol representation
            this.drawMapleLeaf(ctx, size / 2, size / 2, 5, palette.accent);
        }

        // Draw Snake Head Eyes if isHead
        if (isHead) {
            this.drawHeadEyes(ctx, size, direction);
        }

        ctx.restore();
    }

    /**
     * Draw 24-spoke Navy Blue Ashoka Chakra for Indian Flag theme.
     */
    static drawAshokaChakra(ctx, cx, cy, radius, color) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.2;
        
        // Outer wheel circle
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Center hub dot
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(cx, cy, 1, 0, Math.PI * 2);
        ctx.fill();

        // 8 visible spokes for canvas scale clarity
        const spokes = 8;
        for (let i = 0; i < spokes; i++) {
            const angle = (i * Math.PI * 2) / spokes;
            const x2 = cx + Math.cos(angle) * radius;
            const y2 = cy + Math.sin(angle) * radius;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }

        ctx.restore();
    }

    /**
     * Draw 5-point Star symbol.
     */
    static drawStar(ctx, cx, cy, points, r, color) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        for (let i = 0; i < points * 2; i++) {
            const radius = (i % 2 === 0) ? r : r / 2;
            const angle = (i * Math.PI) / points;
            const x = cx + Math.sin(angle) * radius;
            const y = cy - Math.cos(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    /**
     * Draw Maple Leaf representation.
     */
    static drawMapleLeaf(ctx, cx, cy, r, color) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(cx, cy - 1, r / 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    /**
     * Draw Eyes on Snake Head depending on current direction.
     */
    static drawHeadEyes(ctx, size, direction) {
        ctx.fillStyle = '#FFFFFF';
        let eye1X, eye1Y, eye2X, eye2Y;
        const offset = 4;
        const eyeSize = 3;

        if (direction === 'RIGHT') {
            eye1X = size - offset; eye1Y = offset;
            eye2X = size - offset; eye2Y = size - offset;
        } else if (direction === 'LEFT') {
            eye1X = offset; eye1Y = offset;
            eye2X = offset; eye2Y = size - offset;
        } else if (direction === 'UP') {
            eye1X = offset; eye1Y = offset;
            eye2X = size - offset; eye2Y = offset;
        } else { // DOWN
            eye1X = offset; eye1Y = size - offset;
            eye2X = size - offset; eye2Y = size - offset;
        }

        ctx.beginPath();
        ctx.arc(eye1X, eye1Y, eyeSize, 0, Math.PI * 2);
        ctx.arc(eye2X, eye2Y, eyeSize, 0, Math.PI * 2);
        ctx.fill();

        // Pupils
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(eye1X, eye1Y, eyeSize / 2, 0, Math.PI * 2);
        ctx.arc(eye2X, eye2Y, eyeSize / 2, 0, Math.PI * 2);
        ctx.fill();
    }

    /**
     * Helper to fill rounded rectangle.
     */
    static fillRoundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();
    }
}
