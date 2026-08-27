"""
Flask Blueprint API Routes for Country Flag Snake Game.
"""
from flask import Blueprint, jsonify, request
from backend.flag_data import get_all_countries, get_country_by_code
from backend.models import LeaderboardManager

api_bp = Blueprint("api", __name__, url_prefix="/api")
leaderboard_mgr = LeaderboardManager()


@api_bp.route("/countries", methods=["GET"])
def list_countries():
    """Returns metadata and flag palettes for all supported countries."""
    countries = get_all_countries()
    return jsonify({
        "status": "success",
        "count": len(countries),
        "countries": countries
    })


@api_bp.route("/country/<code_str>", methods=["GET"])
def get_country_detail(code_str):
    """Retrieve detailed flag palette for a single country."""
    country = get_country_by_code(code_str)
    return jsonify({
        "status": "success",
        "country": country
    })


@api_bp.route("/leaderboard", methods=["GET"])
def get_leaderboard():
    """Retrieve top 10 global high scores."""
    scores = leaderboard_mgr.get_scores(limit=10)
    return jsonify({
        "status": "success",
        "leaderboard": scores
    })


@api_bp.route("/score", methods=["POST"])
def submit_score():
    """Submit a user's high score."""
    data = request.get_json(silent=True) or {}
    username = data.get("username", "Player")
    score = data.get("score", 0)
    country_code = data.get("country", "IN")
    flag_emoji = data.get("flag", "🇮🇳")

    try:
        score = int(score)
    except (ValueError, TypeError):
        return jsonify({"status": "error", "message": "Invalid score value"}), 400

    if score < 0:
        return jsonify({"status": "error", "message": "Score cannot be negative"}), 400

    success, msg = leaderboard_mgr.add_score(username, score, country_code, flag_emoji)
    if success:
        return jsonify({
            "status": "success",
            "message": msg,
            "leaderboard": leaderboard_mgr.get_scores(limit=10)
        }), 201
    
    return jsonify({"status": "error", "message": msg}), 500
