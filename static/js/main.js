/**
 * Main Controller & Event Dispatcher for Country Flag Snake Game.
 */
document.addEventListener('DOMContentLoaded', () => {
    const game = new GameEngine('gameCanvas');

    // DOM Elements
    const countrySelect = document.getElementById('countrySelect');
    const startBtn = document.getElementById('startBtn');
    const resumeBtn = document.getElementById('resumeBtn');
    const restartBtn = document.getElementById('restartBtn');
    const audioToggleBtn = document.getElementById('audioToggleBtn');
    const leaderboardBtn = document.getElementById('leaderboardBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const leaderboardModal = document.getElementById('leaderboardModal');
    const leaderboardTbody = document.getElementById('leaderboardTbody');
    const saveScoreBtn = document.getElementById('saveScoreBtn');
    const playerNameInput = document.getElementById('playerNameInput');

    // D-Pad Touch Buttons
    const dpadUp = document.getElementById('dpadUp');
    const dpadDown = document.getElementById('dpadDown');
    const dpadLeft = document.getElementById('dpadLeft');
    const dpadRight = document.getElementById('dpadRight');
    const dpadPause = document.getElementById('dpadPause');

    // Populate / Sync Country Selector
    if (countrySelect) {
        countrySelect.addEventListener('change', (e) => {
            game.setCountry(e.target.value);
            audioManager.playClickSound();
        });
    }

    // Start / Restart Buttons
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            audioManager.playClickSound();
            game.start();
        });
    }

    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            audioManager.playClickSound();
            game.pause();
        });
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            audioManager.playClickSound();
            game.start();
        });
    }

    // Sound Toggle
    if (audioToggleBtn) {
        audioToggleBtn.addEventListener('click', () => {
            const isMuted = audioManager.toggleMute();
            audioToggleBtn.textContent = isMuted ? '🔇 Sound OFF' : '🔊 Sound ON';
        });
    }

    // Keyboard Controls
    window.addEventListener('keydown', (e) => {
        // Prevent page scrolling on arrow key press
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault();
        }

        if (e.key === ' ' || e.key === 'p' || e.key === 'P') {
            game.pause();
            return;
        }

        if (game.state !== 'PLAYING') return;

        switch (e.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                game.snake.setDirection('UP');
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                game.snake.setDirection('DOWN');
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                game.snake.setDirection('LEFT');
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                game.snake.setDirection('RIGHT');
                break;
        }
    });

    // Touch D-Pad Events
    if (dpadUp) dpadUp.addEventListener('click', () => game.snake.setDirection('UP'));
    if (dpadDown) dpadDown.addEventListener('click', () => game.snake.setDirection('DOWN'));
    if (dpadLeft) dpadLeft.addEventListener('click', () => game.snake.setDirection('LEFT'));
    if (dpadRight) dpadRight.addEventListener('click', () => game.snake.setDirection('RIGHT'));
    if (dpadPause) dpadPause.addEventListener('click', () => game.pause());

    // Leaderboard Modal Open/Close
    if (leaderboardBtn) {
        leaderboardBtn.addEventListener('click', async () => {
            audioManager.playClickSound();
            leaderboardModal.classList.remove('hidden');
            const scores = await leaderboardClient.fetchLeaderboard();
            leaderboardClient.renderModalTable(scores, leaderboardTbody);
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            leaderboardModal.classList.add('hidden');
        });
    }

    // Score Submission
    if (saveScoreBtn) {
        saveScoreBtn.addEventListener('click', async () => {
            const name = playerNameInput ? playerNameInput.value : 'Player';
            const country = CONFIG.COUNTRIES[game.selectedCountry];
            
            saveScoreBtn.disabled = true;
            saveScoreBtn.textContent = 'SAVING...';

            const res = await leaderboardClient.submitScore(
                name,
                game.score,
                country.code,
                country.flag
            );

            if (res.status === 'success') {
                saveScoreBtn.textContent = 'SAVED! ✓';
                setTimeout(async () => {
                    leaderboardModal.classList.remove('hidden');
                    const scores = await leaderboardClient.fetchLeaderboard();
                    leaderboardClient.renderModalTable(scores, leaderboardTbody);
                }, 400);
            } else {
                saveScoreBtn.textContent = 'ERROR';
                alert(res.message || 'Error saving score');
            }
        });
    }
});
