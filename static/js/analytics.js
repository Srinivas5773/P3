/**
 * Client Telemetry & Match Analytics Manager.
 */
class MatchAnalytics {
    constructor() {
        this.sessionStartTime = Date.now();
        this.movesCount = 0;
    }

    recordMove() {
        this.movesCount++;
    }

    getSummary() {
        return {
            durationSeconds: Math.floor((Date.now() - this.sessionStartTime) / 1000),
            movesCount: this.movesCount
        };
    }
}
const matchAnalytics = new MatchAnalytics();
