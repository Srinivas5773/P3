/**
 * Battle Royale Multi-Snake Arena Engine for Flag Snake Game.
 */
class ArenaEngine {
    constructor(gridCols, gridRows, cellSize) {
        this.cols = gridCols;
        this.rows = gridRows;
        this.cellSize = cellSize;
        this.aiSnakes = [];
        this.active = false;
    }

    initArena(playerCountryCode) {
        this.aiSnakes = [];
        this.active = true;

        // Choose 3 distinct AI country competitors
        const availableCountries = Object.keys(CONFIG.COUNTRIES).filter(c => c !== playerCountryCode);
        const botCountries = availableCountries.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spawnPositions = [
            { x: 5, y: 5 },
            { x: this.cols - 6, y: 5 },
            { x: 5, y: this.rows - 6 }
        ];

        botCountries.forEach((country, index) => {
            const pos = spawnPositions[index];
            this.aiSnakes.push(new AISnake(index + 1, pos.x, pos.y, country, this.cols, this.rows));
        });
    }

    getAllObstacles(playerSnakeBody) {
        const obstacles = [...playerSnakeBody];
        this.aiSnakes.forEach(bot => {
            if (bot.alive) {
                obstacles.push(...bot.body);
            }
        });
        return obstacles;
    }

    update(foodManager, playerSnakeBody) {
        if (!this.active) return;

        const allObstacles = this.getAllObstacles(playerSnakeBody);

        this.aiSnakes.forEach(bot => {
            if (bot.alive) {
                bot.computeNextMove(foodManager.currentFood, allObstacles);
                bot.update(foodManager, allObstacles);
            }
        });
    }

    draw(ctx) {
        if (!this.active) return;
        this.aiSnakes.forEach(bot => {
            if (bot.alive) {
                bot.draw(ctx, this.cellSize);
            }
        });
    }

    getAliveBotsCount() {
        return this.aiSnakes.filter(bot => bot.alive).length;
    }
}
