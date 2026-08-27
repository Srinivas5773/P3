"""
Comprehensive Unit Test Suite for World Countries Database & Achievements Engine.
"""
import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.dirname(os.path.dirname(__file__))))

from backend.world_countries import WORLD_COUNTRIES_DB, get_country_detail, get_countries_by_continent, fetch_all_country_codes
from backend.achievements import evaluate_user_achievements, ACHIEVEMENTS_LIST


def test_world_countries_db_integrity():
    """Verify that all countries have required metadata fields and valid hex colors."""
    codes = fetch_all_country_codes()
    assert len(codes) >= 20

    for code in codes:
        country = WORLD_COUNTRIES_DB[code]
        assert "name" in country
        assert "flag" in country
        assert "palette" in country
        assert "foodItem" in country
        assert country["palette"]["primary"].startswith("#")


def test_india_country_metadata():
    """Verify India metadata specifically."""
    india = get_country_detail("IN")
    assert india["name"] == "India"
    assert india["flag"] == "🇮🇳"
    assert india["palette"]["head"] == "#FF9933"  # Saffron
    assert india["palette"]["tertiary"] == "#138808" # Green
    assert india["foodItem"] == "Samosa 🥟"


def test_continent_filtering():
    """Verify filtering countries by continent."""
    asia_list = get_countries_by_continent("Asia")
    assert len(asia_list) >= 5
    assert any(c["name"] == "India" for c in asia_list)
    assert any(c["name"] == "Japan" for c in asia_list)

    europe_list = get_countries_by_continent("Europe")
    assert len(europe_list) >= 5
    assert any(c["name"] == "United Kingdom" for c in europe_list)


def test_achievements_evaluator():
    """Test achievement condition triggers."""
    stats_in = {
        "score": 180,
        "country": "IN",
        "foodEaten": 25,
        "powerupsCollected": 6,
        "botsDefeated": 3
    }
    unlocked = evaluate_user_achievements(stats_in)
    unlocked_ids = [a["id"] for a in unlocked]

    assert "century" in unlocked_ids
    assert "flag_master_in" in unlocked_ids
    assert "foodie_globe" in unlocked_ids
    assert "power_collector" in unlocked_ids
    assert "bot_slayer" in unlocked_ids
