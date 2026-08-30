"""
Speedrun Challenge Leaderboard Storage Manager.
"""
SPEEDRUN_SCORES = []

def record_speedrun_score(username, time_seconds, score, country):
    entry = {
        "username": username,
        "time_seconds": time_seconds,
        "score": score,
        "country": country
    }
    SPEEDRUN_SCORES.append(entry)
    SPEEDRUN_SCORES.sort(key=lambda x: x["score"], reverse=True)
    return SPEEDRUN_SCORES[:10]
