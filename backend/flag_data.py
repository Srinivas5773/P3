"""
Country Flag Metadata, Color Palettes, and Theme Definitions for Flag Snake Game.
"""

COUNTRY_FLAGS = {
    "IN": {
        "code": "IN",
        "name": "India",
        "flag_emoji": "🇮🇳",
        "palette": {
            "head": "#FF9933",      # Deep Saffron
            "primary": "#FF9933",   # Saffron
            "secondary": "#FFFFFF", # White
            "tertiary": "#138808",  # India Green
            "accent": "#000080",    # Navy Blue (Ashoka Chakra)
            "border": "#000080"
        },
        "pattern": "tricolor_chakra",
        "description": "Saffron, White, and Green with Navy Blue Ashoka Chakra accents",
        "food_item": "Samosa 🥟",
        "bonus_food": "Jalebi 🥮",
        "glow_color": "rgba(255, 153, 51, 0.6)"
    },
    "US": {
        "code": "US",
        "name": "United States",
        "flag_emoji": "🇺🇸",
        "palette": {
            "head": "#3C3B6E",      # Old Glory Blue
            "primary": "#B22234",   # Old Glory Red
            "secondary": "#FFFFFF", # White
            "tertiary": "#3C3B6E",  # Blue
            "accent": "#FFFFFF",    # White Stars
            "border": "#3C3B6E"
        },
        "pattern": "stripes_stars",
        "description": "Red and White stripes with Star Spangled Blue head",
        "food_item": "Burger 🍔",
        "bonus_food": "Hot Dog 🌭",
        "glow_color": "rgba(178, 34, 52, 0.6)"
    },
    "UK": {
        "code": "UK",
        "name": "United Kingdom",
        "flag_emoji": "🇬🇧",
        "palette": {
            "head": "#00247D",      # Union Jack Blue
            "primary": "#CF142B",   # Union Jack Red
            "secondary": "#FFFFFF", # White
            "tertiary": "#00247D",  # Blue
            "accent": "#CF142B",    # Red Cross
            "border": "#FFFFFF"
        },
        "pattern": "union_jack",
        "description": "Union Jack Red, White, and Navy Royal Blue pattern",
        "food_item": "Fish & Chips 🐟",
        "bonus_food": "Tea & Scone ☕",
        "glow_color": "rgba(207, 20, 43, 0.6)"
    },
    "JP": {
        "code": "JP",
        "name": "Japan",
        "flag_emoji": "🇯🇵",
        "palette": {
            "head": "#BC002D",      # Crimson Sun
            "primary": "#FFFFFF",   # Snow White
            "secondary": "#BC002D", # Sun Red
            "tertiary": "#F0F0F0",  # Light White
            "accent": "#BC002D",    # Red Circle
            "border": "#BC002D"
        },
        "pattern": "rising_sun",
        "description": "Snow white body with Crimson Red Sun head and accents",
        "food_item": "Sushi 🍣",
        "bonus_food": "Ramen 🍜",
        "glow_color": "rgba(188, 0, 45, 0.6)"
    },
    "DE": {
        "code": "DE",
        "name": "Germany",
        "flag_emoji": "🇩🇪",
        "palette": {
            "head": "#000000",      # Black
            "primary": "#000000",   # Black
            "secondary": "#DD0000", # Red
            "tertiary": "#FFCC00",  # Gold
            "accent": "#FFCC00",
            "border": "#FFCC00"
        },
        "pattern": "tricolor_horizontal",
        "description": "Classic Black, Red, and Gold tricolor segments",
        "food_item": "Pretzel 🥨",
        "bonus_food": "Bratwurst 🌭",
        "glow_color": "rgba(255, 204, 0, 0.6)"
    },
    "BR": {
        "code": "BR",
        "name": "Brazil",
        "flag_emoji": "🇧🇷",
        "palette": {
            "head": "#009C3B",      # Brazilian Green
            "primary": "#009C3B",   # Green
            "secondary": "#FFDF00", # Yellow Diamond
            "tertiary": "#002776",  # Blue Celestial Globe
            "accent": "#FFFFFF",    # Star Band
            "border": "#FFDF00"
        },
        "pattern": "canarinho",
        "description": "Lush Green body with Yellow Diamond & Celestial Blue accents",
        "food_item": "Acai Bowl 🍧",
        "bonus_food": "Brigadeiro 🍬",
        "glow_color": "rgba(0, 156, 59, 0.6)"
    },
    "FR": {
        "code": "FR",
        "name": "France",
        "flag_emoji": "🇫🇷",
        "palette": {
            "head": "#002395",      # Royal Blue
            "primary": "#002395",   # Blue
            "secondary": "#FFFFFF", # White
            "tertiary": "#ED2939",  # Red
            "accent": "#FFFFFF",
            "border": "#ED2939"
        },
        "pattern": "tricolor_vertical",
        "description": "French Tricolore Blue, White, and Red segments",
        "food_item": "Croissant 🥐",
        "bonus_food": "Macaron 🧁",
        "glow_color": "rgba(0, 35, 149, 0.6)"
    },
    "AU": {
        "code": "AU",
        "name": "Australia",
        "flag_emoji": "🇦🇺",
        "palette": {
            "head": "#000085",      # Navy Blue
            "primary": "#000085",   # Deep Blue
            "secondary": "#FFFFFF", # White Southern Cross Stars
            "tertiary": "#CC0000",  # Red Union Jack Stripe
            "accent": "#FFFFFF",
            "border": "#FFFFFF"
        },
        "pattern": "southern_cross",
        "description": "Deep Navy Blue body with Southern Cross Star highlights",
        "food_item": "Meat Pie 🥧",
        "bonus_food": "Lamington 🍰",
        "glow_color": "rgba(0, 0, 133, 0.6)"
    },
    "CA": {
        "code": "CA",
        "name": "Canada",
        "flag_emoji": "🇨🇦",
        "palette": {
            "head": "#FF0000",      # Canada Red
            "primary": "#FF0000",   # Red
            "secondary": "#FFFFFF", # White
            "tertiary": "#FF0000",  # Red
            "accent": "#FF0000",    # Maple Leaf
            "border": "#FF0000"
        },
        "pattern": "maple_leaf",
        "description": "Red and White body with Red Maple Leaf head pattern",
        "food_item": "Poutine 🍟",
        "bonus_food": "Maple Syrup 🥞",
        "glow_color": "rgba(255, 0, 0, 0.6)"
    },
    "IT": {
        "code": "IT",
        "name": "Italy",
        "flag_emoji": "🇮🇹",
        "palette": {
            "head": "#009246",      # Italian Green
            "primary": "#009246",   # Green
            "secondary": "#FFFFFF", # White
            "tertiary": "#CE2B37",  # Red
            "accent": "#009246",
            "border": "#CE2B37"
        },
        "pattern": "tricolor_vertical",
        "description": "Green, White, and Red Il Tricolore segments",
        "food_item": "Pizza 🍕",
        "bonus_food": "Gelato 🍨",
        "glow_color": "rgba(0, 146, 70, 0.6)"
    }
}


def get_all_countries():
    """Return a list of all country flag metadata for the API."""
    return [
        {
            "code": code,
            "name": data["name"],
            "flag_emoji": data["flag_emoji"],
            "palette": data["palette"],
            "description": data["description"],
            "food_item": data["food_item"],
            "bonus_food": data["bonus_food"],
            "glow_color": data["glow_color"]
        }
        for code, data in COUNTRY_FLAGS.items()
    ]


def get_country_by_code(code: str):
    """Retrieve country metadata by ISO code."""
    code_upper = code.upper() if code else "IN"
    return COUNTRY_FLAGS.get(code_upper, COUNTRY_FLAGS["IN"])
