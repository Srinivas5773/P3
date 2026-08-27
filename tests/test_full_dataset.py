"""
Comprehensive Test Suite for Level Maps & Geography Trivia Datasets.
"""
import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.dirname(os.path.dirname(__file__))))

from backend.level_maps import LEVEL_MAPS, get_level_by_id
from backend.trivia_bank import TRIVIA_QUESTIONS, get_random_trivia_question


def test_level_maps_integrity():
    """Verify that all level maps have valid IDs, names, and obstacle arrays."""
    assert len(LEVEL_MAPS) >= 50

    for map_data in LEVEL_MAPS:
        assert "id" in map_data
        assert "name" in map_data
        assert "obstacles" in map_data
        assert isinstance(map_data["obstacles"], list)


def test_get_level_by_id():
    """Verify looking up specific level maps."""
    level2 = get_level_by_id(2)
    assert level2["name"] == "Indian Subcontinent - Himalayan Border"
    assert len(level2["obstacles"]) > 0


def test_trivia_questions_integrity():
    """Verify all trivia questions have 4 options and valid correct answer index."""
    assert len(TRIVIA_QUESTIONS) >= 10

    for q in TRIVIA_QUESTIONS:
        assert "question" in q
        assert "options" in q
        assert len(q["options"]) == 4
        assert 0 <= q["correct"] < 4
        assert "explanation" in q


def test_random_trivia():
    """Test random question picker."""
    q = get_random_trivia_question()
    assert "question" in q
    assert q in TRIVIA_QUESTIONS
