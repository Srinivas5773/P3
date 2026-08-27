"""
Leaderboard Data Store & High Score Persistence Manager.
"""
import os
import json
from datetime import datetime

LEADERBOARD_FILE = os.path.join(os.path.dirname(__file__), "leaderboard_store.json")

# Default seed data if store does not exist
DEFAULT_SCORES = [
    {"username": "Aryabhata", "score": 250, "country": "IN", "flag": "🇮🇳", "date": "2026-08-20"},
    {"username": "EagleEye", "score": 210, "country": "US", "flag": "🇺🇸", "date": "2026-08-21"},
    {"username": "SamuraiSnake", "score": 195, "country": "JP", "flag": "🇯🇵", "date": "2026-08-22"},
    {"username": "UnionKing", "score": 180, "country": "UK", "flag": "🇬🇧", "date": "2026-08-23"},
    {"username": "SambaMaster", "score": 160, "country": "BR", "flag": "🇧🇷", "date": "2026-08-24"},
    {"username": "MapleRider", "score": 140, "country": "CA", "flag": "🇨🇦", "date": "2026-08-25"}
]


class LeaderboardManager:
    def __init__(self, filepath=LEADERBOARD_FILE):
        self.filepath = filepath
        self._ensure_file_exists()

    def _ensure_file_exists(self):
        if not os.path.exists(self.filepath):
            self.save_scores(DEFAULT_SCORES)

    def get_scores(self, limit=10):
        """Retrieve top high scores sorted in descending order."""
        try:
            with open(self.filepath, "r", encoding="utf-8") as f:
                data = json.load(f)
            # Sort by score descending
            sorted_scores = sorted(data, key=lambda x: x.get("score", 0), reverse=True)
            return sorted_scores[:limit]
        except Exception as e:
            print(f"Error loading leaderboard: {e}")
            return DEFAULT_SCORES[:limit]

    def save_scores(self, scores):
        """Write scores array to JSON file."""
        try:
            with open(self.filepath, "w", encoding="utf-8") as f:
                json.dump(scores, f, indent=2, ensure_ascii=False)
            return True
        except Exception as e:
            print(f"Error saving leaderboard: {e}")
            return False

    def add_score(self, username, score, country_code, flag_emoji):
        """Validate and insert a new score into the persistent leaderboard."""
        try:
            score = int(score)
        except (ValueError, TypeError):
            return False, "Invalid score value"

        if score < 0:
            return False, "Score cannot be negative"

        username_clean = str(username).strip()[:15] if username else "Anonymous"
        if not username_clean:
            username_clean = "Player"
        
        current_scores = self.get_scores(limit=100)
        new_entry = {
            "username": username_clean,
            "score": score,
            "country": country_code.upper() if country_code else "IN",
            "flag": flag_emoji or "🏳️",
            "date": datetime.now().strftime("%Y-%m-%d %H:%M")
        }
        
        current_scores.append(new_entry)
        current_scores = sorted(current_scores, key=lambda x: x.get("score", 0), reverse=True)[:50]
        
        if self.save_scores(current_scores):
            return True, "Score submitted successfully!"
        return False, "Failed to persist score."
