"""
Pytest Test Suite for Country Flag Snake Game Flask Backend APIs.
"""
import pytest
import sys
import os

# Ensure project root is on Python path
sys.path.insert(0, os.path.abspath(os.path.dirname(os.path.dirname(__file__))))

from app import app
from backend.flag_data import get_all_countries, get_country_by_code
from backend.models import LeaderboardManager


@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client


def test_index_page(client):
    """Test that main index HTML page renders cleanly."""
    rv = client.get('/')
    assert rv.status_code == 200
    assert b"FLAG SNAKE" in rv.data
    assert b"gameCanvas" in rv.data


def test_list_countries_api(client):
    """Test GET /api/countries endpoint."""
    rv = client.get('/api/countries')
    assert rv.status_code == 200
    json_data = rv.get_json()
    assert json_data["status"] == "success"
    assert json_data["count"] >= 10
    
    # Verify India 🇮🇳 is present
    india_entry = next((c for c in json_data["countries"] if c["code"] == "IN"), None)
    assert india_entry is not None
    assert india_entry["name"] == "India"
    assert india_entry["palette"]["primary"] == "#FF9933"  # Saffron
    assert india_entry["palette"]["tertiary"] == "#138808" # Green
    assert india_entry["palette"]["accent"] == "#000080"   # Navy Ashoka Chakra


def test_get_country_detail_api(client):
    """Test GET /api/country/<code_str> endpoint."""
    rv = client.get('/api/country/IN')
    assert rv.status_code == 200
    json_data = rv.get_json()
    assert json_data["status"] == "success"
    assert json_data["country"]["name"] == "India"


def test_leaderboard_get_and_post_api(client):
    """Test GET /api/leaderboard and POST /api/score endpoints."""
    # Fetch initial leaderboard
    rv_get = client.get('/api/leaderboard')
    assert rv_get.status_code == 200
    initial_data = rv_get.get_json()
    assert initial_data["status"] == "success"
    assert isinstance(initial_data["leaderboard"], list)

    # Post new score
    score_payload = {
        "username": "TestPlayer",
        "score": 9999,
        "country": "IN",
        "flag": "🇮🇳"
    }
    rv_post = client.post('/api/score', json=score_payload)
    assert rv_post.status_code == 201
    post_data = rv_post.get_json()
    assert post_data["status"] == "success"
    assert any(s["username"] == "TestPlayer" for s in post_data["leaderboard"])


def test_flag_data_lookup_helpers():
    """Direct unit test for flag_data module functions."""
    countries = get_all_countries()
    assert len(countries) >= 10

    in_flag = get_country_by_code("IN")
    assert in_flag["name"] == "India"
    assert in_flag["food_item"] == "Samosa 🥟"

    fallback = get_country_by_code("UNKNOWN_CODE")
    assert fallback["code"] == "IN"
