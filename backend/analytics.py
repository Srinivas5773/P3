"""
Player Career Statistics & Match Telemetry Manager.
"""
CAREER_STATS = {
    "total_games": 0,
    "total_food_eaten": 0,
    "total_score": 0,
    "highest_score": 0,
    "favorite_country": "IN"
}

def update_career_stats(score, food_count, country_code):
    CAREER_STATS["total_games"] += 1
    CAREER_STATS["total_food_eaten"] += food_count
    CAREER_STATS["total_score"] += score
    if score > CAREER_STATS["highest_score"]:
        CAREER_STATS["highest_score"] = score
    CAREER_STATS["favorite_country"] = country_code
    return CAREER_STATS
