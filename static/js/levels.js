/**
 * Level Map Progression & Maze Manager for Flag Snake Game.
 */
class LevelManager {
    constructor(gridCols, gridRows) {
        this.cols = gridCols;
        this.rows = gridRows;
        this.currentLevel = 1;
        this.obstacles = [];
    }

    loadLevel(levelId) {
        this.currentLevel = levelId;
        this.obstacles = this.generateObstaclesForLevel(levelId);
    }

    generateObstaclesForLevel(levelId) {
        if (levelId === 1) return []; // Open field

        const obs = [];
        if (levelId === 2) {
            // Top and Bottom bar
            for (let x = 10; x < 30; x++) {
                obs.push({ x: x, y: 5 });
                obs.push({ x: x, y: this.rows - 6 });
            }
        } else if (levelId === 3) {
            // Pillars
            for (let y = 8; y < 22; y++) {
                obs.push({ x: 12, y: y });
                obs.push({ x: 28, y: y });
            }
        } else {
            // Maze pattern
            const offset = (levelId * 4) % 15;
            for (let i = 0; i < 20; i++) {
                obs.push({ x: (i + offset) % (this.cols - 4) + 2, y: (i * 2 + offset) % (this.rows - 4) + 2 });
            }
        }
        return obs;
    }

    draw(ctx, cellSize) {
        ctx.fillStyle = '#475569';
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;

        for (const obs of this.obstacles) {
            const px = obs.x * cellSize;
            const py = obs.y * cellSize;

            ctx.fillRect(px + 1, py + 1, cellSize - 2, cellSize - 2);
            ctx.strokeRect(px + 1, py + 1, cellSize - 2, cellSize - 2);
        }
    }
}
