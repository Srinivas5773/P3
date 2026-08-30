import pytest
import sys, os
sys.path.insert(0, os.path.abspath(os.path.dirname(os.path.dirname(__file__))))
from backend.speedrun_leaderboard import record_speedrun_score

def test_speedrun_score_recording():
    top = record_speedrun_score("FastPlayer", 60, 500, "IN")
    assert len(top) == 1
    assert top[0]["score"] == 500
