/**
 * Main Game Engine Controller for Country Flag Snake Game.
 */
class GameEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        
        this.state = 'READY'; // READY, PLAYING, PAUSED, GAME_OVER
        this.selectedCountry = 'IN';
        this.score = 0;
        this.highScore = parseInt(localStorage.getItem('flag_snake_highscore') || '0', 10);
        this.speedMs = CONFIG.BASE_SPEED_MS;

        this.snake = new Snake(CONFIG.GRID_COLS, CONFIG.GRID_ROWS);
        this.foodMgr = new FoodManager(CONFIG.GRID_COLS, CONFIG.GRID_ROWS, CONFIG.CELL_SIZE);
        this.particles = new ParticleSystem();

        this.lastFrameTime = 0;
        this.accumulatedTime = 0;

        this.initDOM();
    }

    initDOM() {
        this.scoreDisplay = document.getElementById('scoreDisplay');
        this.highScoreDisplay = document.getElementById('highScoreDisplay');
        this.flagEmoji = document.getElementById('flagEmoji');
        this.flagName = document.getElementById('flagName');
        this.foodItemDisplay = document.getElementById('foodItemDisplay');
        this.flagBadge = document.getElementById('flagBadge');

        this.overlayStart = document.getElementById('overlayStart');
        this.overlayPause = document.getElementById('overlayPause');
        this.overlayGameOver = document.getElementById('overlayGameOver');
        this.finalScore = document.getElementById('finalScore');
        this.finalFlag = document.getElementById('finalFlag');
        this.finalNation = document.getElementById('finalNation');

        this.updateUI();
    }

    setCountry(countryCode) {
        if (CONFIG.COUNTRIES[countryCode]) {
            this.selectedCountry = countryCode;
            this.updateUI();
        }
    }

    start() {
        this.state = 'PLAYING';
        this.score = 0;
        this.speedMs = CONFIG.BASE_SPEED_MS;
        this.snake.reset();
        this.foodMgr.spawnFood(this.snake.body, this.selectedCountry);
        this.particles.clear();
        this.updateUI();

        this.overlayStart.classList.remove('active');
        this.overlayStart.classList.add('hidden');
        this.overlayPause.classList.add('hidden');
        this.overlayGameOver.classList.add('hidden');

        this.lastFrameTime = performance.now();
        this.accumulatedTime = 0;
        requestAnimationFrame((t) => this.gameLoop(t));
    }

    pause() {
        if (this.state === 'PLAYING') {
            this.state = 'PAUSED';
            this.overlayPause.classList.remove('hidden');
            this.overlayPause.classList.add('active');
        } else if (this.state === 'PAUSED') {
            this.state = 'PLAYING';
            this.overlayPause.classList.remove('active');
            this.overlayPause.classList.add('hidden');
            this.lastFrameTime = performance.now();
            requestAnimationFrame((t) => this.gameLoop(t));
        }
    }

    gameOver() {
        this.state = 'GAME_OVER';
        audioManager.playGameOverSound();

        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('flag_snake_highscore', this.highScore.toString());
        }

        const country = CONFIG.COUNTRIES[this.selectedCountry];
        this.finalScore.textContent = this.score;
        this.finalFlag.textContent = country.flag;
        const saveScoreBtn = document.getElementById('saveScoreBtn');
        if (saveScoreBtn) {
            saveScoreBtn.disabled = false;
            saveScoreBtn.textContent = 'SAVE SCORE';
        }

        this.overlayGameOver.classList.remove('hidden');
        this.overlayGameOver.classList.add('active');
        this.updateUI();
    }

    gameLoop(currentTime) {
        if (this.state !== 'PLAYING') return;

        const deltaTime = currentTime - this.lastFrameTime;
        this.lastFrameTime = currentTime;
        this.accumulatedTime += deltaTime;

        // Snake movement update interval
        if (this.accumulatedTime >= this.speedMs) {
            this.update();
            this.accumulatedTime = 0;
        }

        this.draw();

        if (this.state === 'PLAYING') {
            requestAnimationFrame((t) => this.gameLoop(t));
        }
    }

    update() {
        this.snake.update();

        // 1. Check Collisions
        if (this.snake.checkWallCollision(CONFIG.GRID_COLS, CONFIG.GRID_ROWS) ||
            this.snake.checkSelfCollision()) {
            this.gameOver();
            return;
        }

        const head = this.snake.getHead();
        const country = CONFIG.COUNTRIES[this.selectedCountry];

        // 2. Check Regular Food Eating
        if (this.foodMgr.currentFood &&
            head.x === this.foodMgr.currentFood.x &&
            head.y === this.foodMgr.currentFood.y) {
            
            this.score += CONFIG.FOOD_POINTS;
            this.snake.grow(1);
            audioManager.playEatSound();

            // Particle burst at food position
            const px = head.x * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2;
            const py = head.y * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2;
            this.particles.spawnBurst(px, py, country.palette.primary);

            // Speed up game slightly
            this.speedMs = Math.max(CONFIG.MIN_SPEED_MS, this.speedMs - CONFIG.SPEED_INCREMENT_PER_FOOD);

            // Spawn next regular food
            this.foodMgr.spawnFood(this.snake.body, this.selectedCountry);

            // Random chance for bonus food
            if (!this.foodMgr.bonusFood && Math.random() < CONFIG.BONUS_SPAWN_CHANCE) {
                this.foodMgr.spawnBonusFood(this.snake.body, this.selectedCountry);
            }
            this.updateUI();
        }

        // 3. Check Bonus Food Eating
        if (this.foodMgr.bonusFood &&
            head.x === this.foodMgr.bonusFood.x &&
            head.y === this.foodMgr.bonusFood.y) {
            
            this.score += CONFIG.BONUS_FOOD_POINTS;
            this.snake.grow(2);
            audioManager.playBonusSound();

            const px = head.x * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2;
            const py = head.y * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2;
            this.particles.spawnBurst(px, py, country.palette.accent, 24);

            this.foodMgr.bonusFood = null;
            this.updateUI();
        }

        this.foodMgr.update();
        this.particles.update();
    }

    draw() {
        // Clear Canvas
        this.ctx.fillStyle = '#050811';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw Subtle Grid
        this.drawGrid();

        // Draw Game Entities
        this.foodMgr.draw(this.ctx);
        this.snake.draw(this.ctx, CONFIG.CELL_SIZE, this.selectedCountry);
        this.particles.draw(this.ctx);
    }

    drawGrid() {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        this.ctx.lineWidth = 1;

        for (let x = 0; x <= this.canvas.width; x += CONFIG.CELL_SIZE) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }

        for (let y = 0; y <= this.canvas.height; y += CONFIG.CELL_SIZE) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }

    updateUI() {
        const country = CONFIG.COUNTRIES[this.selectedCountry];
        if (this.scoreDisplay) this.scoreDisplay.textContent = this.score;
        if (this.highScoreDisplay) this.highScoreDisplay.textContent = this.highScore;
        if (this.flagEmoji) this.flagEmoji.textContent = country.flag;
        if (this.flagName) this.flagName.textContent = country.name;
        if (this.foodItemDisplay) this.foodItemDisplay.textContent = country.foodItem;

        // Apply Country Theme Glow to Flag Badge
        if (this.flagBadge) {
            this.flagBadge.style.borderColor = country.palette.primary;
            this.flagBadge.style.boxShadow = `0 0 12px ${country.glow}`;
        }

        // Apply Country Glow to Canvas Border
        if (this.canvas) {
            this.canvas.style.borderColor = country.palette.primary;
            this.canvas.style.boxShadow = `0 0 25px ${country.glow}`;
        }
    }
}
