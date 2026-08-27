/**
 * Autonomous AI Opponent Snakes Engine using A* Pathfinding & BFS Collision Avoidance.
 */
class AISnake {
    constructor(id, startX, startY, countryCode, gridCols, gridRows) {
        this.id = id;
        this.countryCode = countryCode;
        this.cols = gridCols;
        this.rows = gridRows;
        this.direction = 'DOWN';
        this.alive = true;
        this.score = 0;
        this.body = [
            { x: startX, y: startY },
            { x: startX, y: startY - 1 },
            { x: startX, y: startY - 2 }
        ];
    }

    /**
     * Compute next move towards target food using A* Pathfinding algorithm.
     */
    computeNextMove(targetFood, allObstacles) {
        if (!this.alive || !targetFood) return;

        const head = this.body[0];
        const path = this.findAStarPath(head, targetFood, allObstacles);

        if (path && path.length > 1) {
            const nextStep = path[1];
            this.direction = this.getDirectionFromPoints(head, nextStep);
        } else {
            // Fallback: Pick safest neighboring cell
            const safeDir = this.findSafestNeighborDir(head, allObstacles);
            if (safeDir) {
                this.direction = safeDir;
            }
        }
    }

    update(foodManager, allObstacles) {
        if (!this.alive) return;

        const head = { ...this.body[0] };
        switch (this.direction) {
            case 'UP': head.y -= 1; break;
            case 'DOWN': head.y += 1; break;
            case 'LEFT': head.x -= 1; break;
            case 'RIGHT': head.x += 1; break;
        }

        // Check Wall or Obstacle Collision
        if (head.x < 0 || head.x >= this.cols || head.y < 0 || head.y >= this.rows ||
            allObstacles.some(obs => obs.x === head.x && obs.y === head.y)) {
            this.alive = false;
            return;
        }

        this.body.unshift(head);

        // Check if AI ate food
        if (foodManager.currentFood && head.x === foodManager.currentFood.x && head.y === foodManager.currentFood.y) {
            this.score += CONFIG.FOOD_POINTS;
            foodManager.spawnFood(this.body, this.countryCode);
        } else {
            this.body.pop();
        }
    }

    /**
     * A* Pathfinding Implementation
     */
    findAStarPath(start, goal, obstacles) {
        const openSet = [start];
        const cameFrom = new Map();
        const gScore = new Map();
        const fScore = new Map();

        const key = (p) => `${p.x},${p.y}`;
        const obstacleSet = new Set(obstacles.map(p => key(p)));

        gScore.set(key(start), 0);
        fScore.set(key(start), this.heuristic(start, goal));

        while (openSet.length > 0) {
            // Get node with lowest fScore
            openSet.sort((a, b) => (fScore.get(key(a)) || Infinity) - (fScore.get(key(b)) || Infinity));
            const current = openSet.shift();
            const currentKey = key(current);

            if (current.x === goal.x && current.y === goal.y) {
                return this.reconstructPath(cameFrom, current);
            }

            const neighbors = [
                { x: current.x + 1, y: current.y },
                { x: current.x - 1, y: current.y },
                { x: current.x, y: current.y + 1 },
                { x: current.x, y: current.y - 1 }
            ];

            for (const neighbor of neighbors) {
                const nKey = key(neighbor);
                if (neighbor.x < 0 || neighbor.x >= this.cols || neighbor.y < 0 || neighbor.y >= this.rows || obstacleSet.has(nKey)) {
                    continue; // Skip out of bounds or obstacles
                }

                const tentativeG = (gScore.get(currentKey) || 0) + 1;

                if (tentativeG < (gScore.get(nKey) || Infinity)) {
                    cameFrom.set(nKey, current);
                    gScore.set(nKey, tentativeG);
                    fScore.set(nKey, tentativeG + this.heuristic(neighbor, goal));

                    if (!openSet.some(p => p.x === neighbor.x && p.y === neighbor.y)) {
                        openSet.push(neighbor);
                    }
                }
            }
        }
        return null;
    }

    heuristic(p1, p2) {
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
    }

    reconstructPath(cameFrom, current) {
        const key = (p) => `${p.x},${p.y}`;
        const totalPath = [current];
        let currKey = key(current);

        while (cameFrom.has(currKey)) {
            current = cameFrom.get(currKey);
            currKey = key(current);
            totalPath.unshift(current);
        }
        return totalPath;
    }

    findSafestNeighborDir(head, obstacles) {
        const dirs = [
            { dir: 'UP', x: head.x, y: head.y - 1 },
            { dir: 'DOWN', x: head.x, y: head.y + 1 },
            { dir: 'LEFT', x: head.x - 1, y: head.y },
            { dir: 'RIGHT', x: head.x + 1, y: head.y }
        ];
        const obstacleSet = new Set(obstacles.map(p => `${p.x},${p.y}`));

        for (const d of dirs) {
            if (d.x >= 0 && d.x < this.cols && d.y >= 0 && d.y < this.rows && !obstacleSet.has(`${d.x},${d.y}`)) {
                return d.dir;
            }
        }
        return null;
    }

    getDirectionFromPoints(from, to) {
        if (to.x > from.x) return 'RIGHT';
        if (to.x < from.x) return 'LEFT';
        if (to.y > from.y) return 'DOWN';
        if (to.y < from.y) return 'UP';
        return this.direction;
    }

    draw(ctx, cellSize) {
        if (!this.alive) return;
        for (let i = 0; i < this.body.length; i++) {
            const seg = this.body[i];
            FlagRenderer.drawSegment(
                ctx,
                seg.x * cellSize,
                seg.y * cellSize,
                cellSize,
                this.countryCode,
                i,
                i === 0,
                this.direction,
                this.body.length
            );
        }
    }
}
