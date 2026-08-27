"""
Achievements & Trophy System Rules Manager for Flag Snake Game.
Zero external dependencies, zero API keys required.
"""

ACHIEVEMENTS_LIST = [
    {
        "id": "first_blood",
        "title": "Snake Rookie 🐍",
        "desc": "Score your first 10 points in any game mode.",
        "icon": "🌱",
        "condition": lambda s: s.get("score", 0) >= 10
    },
    {
        "id": "century",
        "title": "Century Club 💯",
        "desc": "Reach a score of 100 points in a single match.",
        "icon": "💯",
        "condition": lambda s: s.get("score", 0) >= 100
    },
    {
        "id": "flag_master_in",
        "title": "Jai Hind! 🇮🇳",
        "desc": "Score 150+ points playing as India with the Saffron, White, & Green tricolor.",
        "icon": "🛺",
        "condition": lambda s: s.get("score", 0) >= 150 and s.get("country") == "IN"
    },
    {
        "id": "flag_master_us",
        "title": "Stars & Stripes 🇺🇸",
        "desc": "Score 150+ points playing as United States.",
        "icon": "🦅",
        "condition": lambda s: s.get("score", 0) >= 150 and s.get("country") == "US"
    },
    {
        "id": "flag_master_jp",
        "title": "Rising Sun Samurai 🇯🇵",
        "desc": "Score 150+ points playing as Japan.",
        "icon": "⚔️",
        "condition": lambda s: s.get("score", 0) >= 150 and s.get("country") == "JP"
    },
    {
        "id": "flag_master_uk",
        "title": "Royal Union 🇬🇧",
        "desc": "Score 150+ points playing as United Kingdom.",
        "icon": "👑",
        "condition": lambda s: s.get("score", 0) >= 150 and s.get("country") == "UK"
    },
    {
        "id": "foodie_globe",
        "title": "Global Gourmet 🍲",
        "desc": "Eat 20 national dishes across different countries.",
        "icon": "🍱",
        "condition": lambda s: s.get("foodEaten", 0) >= 20
    },
    {
        "id": "power_collector",
        "title": "Overpowered! ⚡",
        "desc": "Collect 5 power-up items in a single match.",
        "icon": "⚡",
        "condition": lambda s: s.get("powerupsCollected", 0) >= 5
    },
    {
        "id": "bot_slayer",
        "title": "Battle Royale Champion 🏆",
        "desc": "Outlast all 3 AI bot snakes in Battle Royale mode.",
        "icon": "🤖",
        "condition": lambda s: s.get("botsDefeated", 0) >= 3
    },
    {
        "id": "quiz_whiz",
        "title": "Geography Genius 🧠",
        "desc": "Answer 5 flag trivia quiz questions correctly.",
        "icon": "🎓",
        "condition": lambda s: s.get("quizCorrect", 0) >= 5
    }
]


def evaluate_user_achievements(game_stats: dict):
    """
    Evaluates current match statistics and returns newly unlocked achievements.
    """
    unlocked = []
    for ach in ACHIEVEMENTS_LIST:
        try:
            if ach["condition"](game_stats):
                unlocked.append({
                    "id": ach["id"],
                    "title": ach["title"],
                    "desc": ach["desc"],
                    "icon": ach["icon"]
                })
        except Exception as e:
            continue
    return unlocked
