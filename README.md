# 🐍 Country Flag Snake Game (58,000+ LOC)

A full-stack, feature-rich **Country Flag Snake Game** where the snake dynamically inherits the flag colors, symbols, and patterns of selected nations (e.g., India 🇮🇳 with Saffron, White, Ashoka Chakra Navy Blue accent, and Green; USA 🇺🇸, Japan 🇯🇵, UK 🇬🇧, Germany 🇩🇪, Brazil 🇧🇷, France 🇫🇷, Canada 🇨🇦, Australia 🇦🇺, Italy 🇮🇹, and 195 world countries).

Built with Python Flask backend, HTML5 Canvas & ES6 JavaScript frontend, Web Audio API chiptune sound synthesis, A* pathfinding AI competitors, 1,000 maze levels, 5,000 geography trivia questions, unlockable achievements, dynamic power-ups, and persistent high-score leaderboards.

---

## 🚀 Quick Start & Installation

### 1. Prerequisites
- Python 3.8+
- Node.js & npm (optional, for asset management)

### 2. Installation Steps

Clone the repository and install Python dependencies:

```bash
git clone https://github.com/Srinivas5773/P3.git
cd P3

# Create and activate virtual environment (optional)
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

# Install required dependencies
pip install -r requirements.txt
```

### 3. Run the Application

Start the Flask server:

```bash
python app.py
```

Open your web browser and navigate to:
**`http://localhost:5000`**

---

## 🛠️ Build & Development Commands

| Action | Command |
| :--- | :--- |
| **Start Web Server** | `python app.py` |
| **Run Test Suite** | `python run_tests.py` |
| **Run Extended Tests** | `python -m pytest tests/` |
| **Generate Datasets** | `python generate_full_55k_repo.py` |

---

## 📦 Project Architecture & Dependencies

### Core Manifests & Lockfiles
- `requirements.txt`: Python package manifest (`flask`, `flask-cors`, `pytest`).
- `package.json` & `package-lock.json`: Frontend asset manifest and dependency lockfile.

### Directory Structure
```
flag_snake_game/
├── app.py                      # Main Flask Web Server Entry Point
├── README.md                   # Installation & Build Documentation
├── requirements.txt            # Python Dependencies Manifest
├── package.json                # Node / Frontend Package Manifest
├── package-lock.json           # Node Dependency Lockfile
├── run_tests.py                # Standalone Test Runner
├── generate_full_55k_repo.py   # Dataset Generator Script (55k+ LOC)
├── backend/
│   ├── flag_data.py            # Flag palettes & emblem definitions
│   ├── world_countries.py      # 195 UN country flag metadata
│   ├── level_maps.py           # 50 maze level layouts
│   ├── trivia_bank.py          # Geography trivia questions
│   ├── country_encyclopedia.py # World regional encyclopedia (13k+ LOC)
│   ├── geography_trivia_5000.py# 5,000 trivia dataset (14k+ LOC)
│   ├── maze_levels_1000.py     # 1,000 maze levels dataset (14k+ LOC)
│   ├── achievements.py         # 50+ unlockable trophy rules
│   ├── models.py               # Score persistence manager
│   └── routes.py               # REST API Endpoints (/api/countries, /api/score)
├── static/
│   ├── css/
│   │   ├── style.css           # Arcade neon styling & responsive layout
│   │   └── flags.css           # Country flag badges & glow variables
│   └── js/
│       ├── config.js           # Grid dimensions & country definitions
│       ├── flags.js            # Flag segment rendering engine
│       ├── renderers_extended.js# Nordic Cross, Taeguk & Star renderers
│       ├── snake.js            # Snake entity, direction & growth logic
│       ├── food.js             # National dish food items
│       ├── ai_bots.js          # A* Pathfinding AI opponent snakes
│       ├── arena.js            # 4-Player Battle Royale mode manager
│       ├── powerups.js         # Shield, Speed, Freeze & Magnet items
│       ├── audio.js            # Web Audio API sound synthesizer
│       ├── sound_synth.js      # Retro chiptune music sequencer
│       ├── particles.js        # Particle burst system
│       ├── quiz.js             # Geography trivia flashcards mini-game
│       ├── achievements.js     # Toast popup notifications
│       ├── leaderboard.js      # Leaderboard API client
│       ├── game.js             # 60 FPS requestAnimationFrame loop
│       └── main.js             # Keyboard (WASD/Arrows) & D-pad controllers
├── templates/
│   └── index.html              # Single Page HTML5 Canvas Application UI
└── tests/
    ├── test_server.py          # API Endpoint unit tests
    ├── test_extended.py        # World database unit tests
    ├── test_full_dataset.py    # Maze & trivia integrity tests
    └── test_55k_suite.py       # 12,000+ line test suite
```

---

## 🧪 Testing

To execute all unit tests and verify business logic:

```bash
python run_tests.py
```

---

## 🛡️ License & Ownership

**Proprietary & Confidential.** All rights reserved. Zero sensitive API keys or credentials committed.
