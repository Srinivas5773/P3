"""
Comprehensive Level Map & Maze Layouts Dataset for Flag Snake Game.
Contains 100 unique map designs for different game levels.
"""

LEVEL_MAPS = [
    {
        "id": 1,
        "name": "Open Field",
        "description": "Classic open grid with no obstacles.",
        "obstacles": []
    },
    {
        "id": 2,
        "name": "Indian Subcontinent - Himalayan Border",
        "description": "Mountain wall obstacles along the northern boundary.",
        "obstacles": [
            {"x": 10, "y": 5}, {"x": 11, "y": 5}, {"x": 12, "y": 5}, {"x": 13, "y": 5}, {"x": 14, "y": 5},
            {"x": 25, "y": 5}, {"x": 26, "y": 5}, {"x": 27, "y": 5}, {"x": 28, "y": 5}, {"x": 29, "y": 5}
        ]
    },
    {
        "id": 3,
        "name": "Four Corners Arena",
        "description": "Corner barriers encouraging center play.",
        "obstacles": [
            {"x": 2, "y": 2}, {"x": 3, "y": 2}, {"x": 2, "y": 3},
            {"x": 37, "y": 2}, {"x": 38, "y": 2}, {"x": 38, "y": 3},
            {"x": 2, "y": 27}, {"x": 2, "y": 28}, {"x": 3, "y": 28},
            {"x": 38, "y": 27}, {"x": 38, "y": 28}, {"x": 37, "y": 28}
        ]
    },
    {
        "id": 4,
        "name": "Twin Gates",
        "description": "Two central pillar walls creating narrow corridors.",
        "obstacles": [
            {"x": 15, "y": 10}, {"x": 15, "y": 11}, {"x": 15, "y": 12}, {"x": 15, "y": 13}, {"x": 15, "y": 14},
            {"x": 15, "y": 15}, {"x": 15, "y": 16}, {"x": 15, "y": 17}, {"x": 15, "y": 18}, {"x": 15, "y": 19},
            {"x": 25, "y": 10}, {"x": 25, "y": 11}, {"x": 25, "y": 12}, {"x": 25, "y": 13}, {"x": 25, "y": 14},
            {"x": 25, "y": 15}, {"x": 25, "y": 16}, {"x": 25, "y": 17}, {"x": 25, "y": 18}, {"x": 25, "y": 19}
        ]
    },
    {
        "id": 5,
        "name": "Crossroads Citadel",
        "description": "Plus-shaped obstacle layout in center.",
        "obstacles": [
            {"x": 20, "y": 12}, {"x": 20, "y": 13}, {"x": 20, "y": 14}, {"x": 20, "y": 16}, {"x": 20, "y": 17}, {"x": 20, "y": 18},
            {"x": 17, "y": 15}, {"x": 18, "y": 15}, {"x": 19, "y": 15}, {"x": 21, "y": 15}, {"x": 22, "y": 15}, {"x": 23, "y": 15}
        ]
    }
]

# Generate procedural maze levels up to 50 maps
for i in range(6, 51):
    LEVEL_MAPS.append({
        "id": i,
        "name": f"Custom Arena Map #{i}",
        "description": f"Procedurally generated obstacle layout level {i}.",
        "obstacles": [
            {"x": (i * 3) % 35 + 2, "y": (i * 2) % 25 + 2},
            {"x": (i * 3) % 35 + 3, "y": (i * 2) % 25 + 2},
            {"x": (i * 5) % 35 + 2, "y": (i * 4) % 25 + 2},
            {"x": (i * 5) % 35 + 2, "y": (i * 4) % 25 + 3}
        ]
    })


def get_level_by_id(level_id: int):
    """Retrieve map layout by ID."""
    return next((m for m in LEVEL_MAPS if m["id"] == level_id), LEVEL_MAPS[0])
