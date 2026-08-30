import pytest
import sys, os
sys.path.insert(0, os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
from backend.analytics import update_career_stats, CAREER_STATS

def test_career_stats_update():
    stats = update_career_stats(150, 15, "IN")
    assert stats["total_games"] >= 1
    assert stats["highest_score"] >= 150
