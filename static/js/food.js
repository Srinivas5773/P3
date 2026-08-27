/**
 * Food Manager - Spawns regular and bonus national dish food items.
 */
class FoodManager {
    constructor(gridCols, gridRows, cellSize) {
        this.cols = gridCols;
        this.rows = gridRows;
        this.cellSize = cellSize;
        this.currentFood = null;
        this.bonusFood = null;
    }

    /**
     * Spawn regular food item on empty cell.
     */
    spawnFood(snakeBody, countryCode) {
        const country = CONFIG.COUNTRIES[countryCode] || CONFIG.COUNTRIES['IN'];
        const position = this.getRandomEmptyPosition(snakeBody);
        this.currentFood = {
            x: position.x,
            y: position.y,
            type: 'REGULAR',
            label: country.foodItem,
            points: CONFIG.FOOD_POINTS,
            color: country.palette.primary
        };
    }

    /**
     * Spawn bonus food item randomly.
     */
    spawnBonusFood(snakeBody, countryCode) {
        const country = CONFIG.COUNTRIES[countryCode] || CONFIG.COUNTRIES['IN'];
        const position = this.getRandomEmptyPosition(snakeBody);
        this.bonusFood = {
            x: position.x,
            y: position.y,
            type: 'BONUS',
            label: country.bonusFood,
            points: CONFIG.BONUS_FOOD_POINTS,
            timer: 400, // frames until despawn
            color: country.palette.accent
        };
    }

    getRandomEmptyPosition(snakeBody) {
        let valid = false;
        let x, y;
        while (!valid) {
            x = Math.floor(Math.random() * this.cols);
            y = Math.floor(Math.random() * this.rows);
            valid = !snakeBody.some(segment => segment.x === x && segment.y === y);
        }
        return { x, y };
    }

    update() {
        if (this.bonusFood) {
            this.bonusFood.timer--;
            if (this.bonusFood.timer <= 0) {
                this.bonusFood = null;
            }
        }
    }

    draw(ctx) {
        // Draw Regular Food
        if (this.currentFood) {
            this.drawFoodItem(ctx, this.currentFood);
        }
        // Draw Bonus Food if active
        if (this.bonusFood) {
            this.drawFoodItem(ctx, this.bonusFood);
        }
    }

    drawFoodItem(ctx, food) {
        const px = food.x * this.cellSize;
        const py = food.y * this.cellSize;
        const size = this.cellSize;

        ctx.save();
        ctx.translate(px + size / 2, py + size / 2);

        // Pulsing glow effect
        const pulse = Math.sin(Date.now() / 150) * 2;
        
        ctx.font = `${size * 0.85 + pulse}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Extract emoji icon from label string
        const emojiMatch = food.label.match(/[\u{1F300}-\u{1F9FF}]/u) || [food.label];
        ctx.fillText(emojiMatch[0], 0, 0);

        ctx.restore();
    }
}
