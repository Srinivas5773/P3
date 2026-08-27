/**
 * Achievements UI & Popup Notification Manager.
 */
class AchievementsManager {
    constructor() {
        this.unlockedIds = new Set(JSON.parse(localStorage.getItem('flag_snake_achievements') || '[]'));
    }

    checkMatchStats(stats) {
        const newlyUnlocked = [];

        // Check Century
        if (stats.score >= 100 && !this.unlockedIds.has('century')) {
            newlyUnlocked.push({ id: 'century', title: 'Century Club 💯', desc: 'Scored 100+ points in a match!' });
        }

        // Check India Flag Master
        if (stats.score >= 150 && stats.country === 'IN' && !this.unlockedIds.has('flag_master_in')) {
            newlyUnlocked.push({ id: 'flag_master_in', title: 'Jai Hind! 🇮🇳', desc: 'Scored 150+ points playing as India!' });
        }

        // Check US Flag Master
        if (stats.score >= 150 && stats.country === 'US' && !this.unlockedIds.has('flag_master_us')) {
            newlyUnlocked.push({ id: 'flag_master_us', title: 'Stars & Stripes 🇺🇸', desc: 'Scored 150+ points playing as USA!' });
        }

        newlyUnlocked.forEach(ach => {
            this.unlockedIds.add(ach.id);
            this.showAchievementPopup(ach);
        });

        localStorage.setItem('flag_snake_achievements', JSON.stringify(Array.from(this.unlockedIds)));
    }

    showAchievementPopup(ach) {
        const popup = document.createElement('div');
        popup.className = 'achievement-popup-toast';
        popup.innerHTML = `
            <div class="toast-icon">🏆</div>
            <div class="toast-text">
                <h4>ACHIEVEMENT UNLOCKED!</h4>
                <p><strong>${ach.title}</strong> - ${ach.desc}</p>
            </div>
        `;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('fade-out');
            setTimeout(() => popup.remove(), 500);
        }, 3500);
    }
}

const achievementsMgr = new AchievementsManager();
