"""
Master Test Suite Runner for Country Flag Snake Game.
"""
import unittest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from app import app
from backend.flag_data import get_all_countries, get_country_by_code
from backend.world_countries import WORLD_COUNTRIES_DB, get_country_detail, get_countries_by_continent
from backend.achievements import evaluate_user_achievements


class TestFlagSnakeBackend(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        self.client = app.test_client()

    def test_index_page(self):
        rv = self.client.get('/')
        self.assertEqual(rv.status_code, 200)

    def test_list_countries_api(self):
        rv = self.client.get('/api/countries')
        self.assertEqual(rv.status_code, 200)

    def test_world_countries_db(self):
        self.assertGreaterEqual(len(WORLD_COUNTRIES_DB), 20)
        in_country = get_country_detail("IN")
        self.assertEqual(in_country["name"], "India")
        self.assertEqual(in_country["palette"]["head"], "#FF9933")

    def test_achievements(self):
        stats = {"score": 200, "country": "IN", "foodEaten": 30}
        unlocked = evaluate_user_achievements(stats)
        self.assertTrue(any(a["id"] == "flag_master_in" for a in unlocked))


if __name__ == "__main__":
    unittest.main()
