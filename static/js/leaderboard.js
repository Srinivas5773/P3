/**
 * Leaderboard Client & Modal Renderer for Flag Snake Game.
 */
class LeaderboardClient {
    constructor() {
        this.apiBase = '/api';
    }

    async fetchLeaderboard() {
        try {
            const res = await fetch(`${this.apiBase}/leaderboard`);
            const data = await res.json();
            if (data.status === 'success') {
                return data.leaderboard;
            }
        } catch (err) {
            console.error('Error fetching leaderboard:', err);
        }
        return [];
    }

    async submitScore(username, score, countryCode, flagEmoji) {
        try {
            const res = await fetch(`${this.apiBase}/score`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    score: score,
                    country: countryCode,
                    flag: flagEmoji
                })
            });
            const data = await res.json();
            return data;
        } catch (err) {
            console.error('Error submitting score:', err);
            return { status: 'error', message: 'Network connection error' };
        }
    }

    renderModalTable(scores, tbodyElement) {
        if (!tbodyElement) return;
        tbodyElement.innerHTML = '';

        if (!scores || scores.length === 0) {
            tbodyElement.innerHTML = '<tr><td colspan="5" style="text-align:center;">No high scores yet!</td></tr>';
            return;
        }

        scores.forEach((entry, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>#${index + 1}</strong></td>
                <td>${this.escapeHtml(entry.username)}</td>
                <td>${entry.flag || '🚩'} ${entry.country}</td>
                <td style="color:var(--accent-gold); font-weight:bold;">${entry.score}</td>
                <td style="font-size:0.8rem; color:var(--text-muted);">${entry.date || ''}</td>
            `;
            tbodyElement.appendChild(tr);
        });
    }

    escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
}

const leaderboardClient = new LeaderboardClient();
