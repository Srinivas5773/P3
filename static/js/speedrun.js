/**
 * Speedrun & Time Attack Challenge Mode Engine.
 */
class SpeedrunManager {
    constructor(timeLimitSeconds = 60) {
        this.timeLimit = timeLimitSeconds;
        this.remainingSeconds = timeLimitSeconds;
        this.active = false;
        this.scoreMultiplier = 1.5;
    }

    startChallenge() {
        this.active = true;
        this.remainingSeconds = this.timeLimit;
    }

    tick() {
        if (this.active && this.remainingSeconds > 0) {
            this.remainingSeconds--;
            if (this.remainingSeconds === 0) {
                this.active = false;
            }
        }
    }
}
const speedrunMgr = new SpeedrunManager();
