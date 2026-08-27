/**
 * Power-Ups Engine for Flag Snake Game.
 */
class PowerUpManager {
    constructor(gridCols, gridRows, cellSize) {
        this.cols = gridCols;
        this.rows = gridRows;
        this.cellSize = cellSize;
        this.activePowerUpItem = null;
        this.activePlayerEffects = new Map(); // Effect -> Expiry Time
        
        this.powerUpTypes = [
            { type: 'SPEED', label: 'Speed ⚡', color: '#FFD700', durationMs: 6000 },
            { type: 'SHIELD', label: 'Shield 🛡️', color: '#00FFFF', durationMs: 8000 },
            { type: 'FREEZE', label: 'Freeze ❄️', color: '#1E90FF', durationMs: 5000 },
            { type: 'MAGNET', label: 'Magnet 🧲', color: '#FF1493', durationMs: 7000 },
            { type: 'SHRINK', label: 'Shrink 💊', color: '#32CD32', durationMs: 0 } // Instant
        ];
    }

    maybeSpawnPowerUp(snakeBody, obstacles = []) {
        if (this.activePowerUpItem || Math.random() > 0.15) return;

        const obstacleSet = new Set([...snakeBody, ...obstacles].map(p => `${p.x},${p.y}`));
        let x, y, attempts = 0;
        
        do {
            x = Math.floor(Math.random() * this.cols);
            y = Math.floor(Math.random() * this.rows);
            attempts++;
        } while (obstacleSet.has(`${x},${y}`) && attempts < 50);

        if (attempts < 50) {
            const pType = this.powerUpTypes[Math.floor(Math.random() * this.powerUpTypes.length)];
            this.activePowerUpItem = {
                x: x,
                y: y,
                ...pType,
                ttl: 300 // Frames until despawn
            };
        }
    }

    update() {
        if (this.activePowerUpItem) {
            this.activePowerUpItem.ttl--;
            if (this.activePowerUpItem.ttl <= 0) {
                this.activePowerUpItem = null;
            }
        }

        // Clean up expired player effects
        const now = Date.now();
        for (const [effect, expiry] of this.activePlayerEffects.entries()) {
            if (now >= expiry) {
                this.activePlayerEffects.delete(effect);
            }
        }
    }

    activateEffect(type, durationMs) {
        if (type === 'SHRINK') return; // Handled directly in snake logic
        this.activePlayerEffects.set(type, Date.now() + durationMs);
    }

    hasEffect(type) {
        const expiry = this.activePlayerEffects.get(type);
        return expiry && Date.now() < expiry;
    }

    draw(ctx) {
        if (!this.activePowerUpItem) return;

        const item = this.activePowerUpItem;
        const px = item.x * this.cellSize;
        const py = item.y * this.cellSize;

        ctx.save();
        ctx.translate(px + this.cellSize / 2, py + this.cellSize / 2);

        // Glowing circle background
        ctx.fillStyle = item.color;
        ctx.shadowColor = item.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(0, 0, this.cellSize / 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Icon text
        ctx.font = `${this.cellSize * 0.7}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(item.label.split(' ')[1] || '⚡', 0, 0);

        ctx.restore();
    }
}
