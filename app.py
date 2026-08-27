"""
Main Flask Server Entry Point for Country Flag Snake Game.
"""
import os
from flask import Flask, render_template, send_from_directory
from backend.routes import api_bp

app = Flask(
    __name__,
    template_folder="templates",
    static_folder="static"
)

# Register API blueprint
app.register_blueprint(api_bp)


@app.route("/")
def index():
    """Render the primary HTML5 Canvas Snake Game page."""
    return render_template("index.html")


@app.route("/favicon.ico")
def favicon():
    """Return empty favicon response."""
    return "", 204


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"[SNAKE GAME] Starting Country Flag Snake Game Server on http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=True)

