/**
 * Snake Entity Manager for Flag Snake Game.
 */
class Snake {
    constructor(startCols, startRows, initialLength = CONFIG.INITIAL_SNAKE_LENGTH) {
        this.startCols = startCols;
        this.startRows = startRows;
        this.initialLength = initialLength;
        this.reset();
    }

    reset() {
        this.direction = 'RIGHT';
        this.nextDirection = 'RIGHT';
        this.body = [];
        this.growing = 0;

        const startX = Math.floor(this.startCols / 2);
        const startY = Math.floor(this.startRows / 2);

        for (let i = 0; i < this.initialLength; i++) {
            this.body.push({ x: startX - i, y: startY });
        }
    }

    setDirection(dir) {
        const opposites = {
            UP: 'DOWN',
            DOWN: 'UP',
            LEFT: 'RIGHT',
            RIGHT: 'LEFT'
        };
        if (dir !== opposites[this.direction]) {
            this.nextDirection = dir;
        }
    }

    update() {
        this.direction = this.nextDirection;
        const head = { ...this.body[0] };

        switch (this.direction) {
            case 'UP': head.y -= 1; break;
            case 'DOWN': head.y += 1; break;
            case 'LEFT': head.x -= 1; break;
            case 'RIGHT': head.x += 1; break;
        }

        // Insert new head at front
        this.body.unshift(head);

        // If not growing, pop tail
        if (this.growing > 0) {
            this.growing--;
        } else {
            this.body.pop();
        }
    }

    grow(amount = 1) {
        this.growing += amount;
    }

    getHead() {
        return this.body[0];
    }

    checkWallCollision(cols, rows) {
        const head = this.getHead();
        return head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows;
    }

    checkSelfCollision() {
        const head = this.getHead();
        return this.body.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
    }

    draw(ctx, cellSize, countryCode) {
        for (let i = 0; i < this.body.length; i++) {
            const segment = this.body[i];
            const px = segment.x * cellSize;
            const py = segment.y * cellSize;
            const isHead = (i === 0);

            FlagRenderer.drawSegment(
                ctx,
                px,
                py,
                cellSize,
                countryCode,
                i,
                isHead,
                this.direction,
                this.body.length
            );
        }
    }
}
