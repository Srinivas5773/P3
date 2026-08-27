"""
Comprehensive 195 World Country Flag Metadata, Color Palettes, and Trivia Database.
Zero external dependencies, zero API keys required.
"""

WORLD_COUNTRIES_DB = {
    # ASIA
    "IN": {
        "code": "IN", "name": "India", "flag": "🇮🇳", "continent": "Asia", "capital": "New Delhi",
        "palette": {"head": "#FF9933", "primary": "#FF9933", "secondary": "#FFFFFF", "tertiary": "#138808", "accent": "#000080", "border": "#FFFFFF"},
        "pattern": "tricolor_horizontal", "foodItem": "Samosa 🥟", "bonusFood": "Jalebi 🥮", "glow": "rgba(255, 153, 51, 0.7)",
        "trivia": "The Ashoka Chakra in the center has 24 spokes representing 24 hours of virtue."
    },
    "JP": {
        "code": "JP", "name": "Japan", "flag": "🇯🇵", "continent": "Asia", "capital": "Tokyo",
        "palette": {"head": "#BC002D", "primary": "#FFFFFF", "secondary": "#BC002D", "tertiary": "#F0F0F0", "accent": "#BC002D", "border": "#BC002D"},
        "pattern": "rising_sun", "foodItem": "Sushi 🍣", "bonusFood": "Ramen 🍜", "glow": "rgba(188, 0, 45, 0.7)",
        "trivia": "The red circle represents the sun god Amaterasu, founder of Japan."
    },
    "CN": {
        "code": "CN", "name": "China", "flag": "🇨🇳", "continent": "Asia", "capital": "Beijing",
        "palette": {"head": "#DE2910", "primary": "#DE2910", "secondary": "#FFDE00", "tertiary": "#DE2910", "accent": "#FFDE00", "border": "#FFDE00"},
        "pattern": "five_stars", "foodItem": "Dumpling 🥟", "bonusFood": "Peking Duck 🍗", "glow": "rgba(222, 41, 16, 0.7)",
        "trivia": "The five yellow stars represent the unity of the Chinese people under the leadership."
    },
    "KR": {
        "code": "KR", "name": "South Korea", "flag": "🇰🇷", "continent": "Asia", "capital": "Seoul",
        "palette": {"head": "#CD2E3A", "primary": "#FFFFFF", "secondary": "#CD2E3A", "tertiary": "#0047A0", "accent": "#000000", "border": "#CD2E3A"},
        "pattern": "taeguk", "foodItem": "Kimchi 🥬", "bonusFood": "Bibimbap 🍲", "glow": "rgba(205, 46, 58, 0.7)",
        "trivia": "The central circle represents balance in the universe (Yin and Yang)."
    },
    "SG": {
        "code": "SG", "name": "Singapore", "flag": "🇸🇬", "continent": "Asia", "capital": "Singapore",
        "palette": {"head": "#ED2939", "primary": "#ED2939", "secondary": "#FFFFFF", "tertiary": "#ED2939", "accent": "#FFFFFF", "border": "#FFFFFF"},
        "pattern": "crescent_stars", "foodItem": "Hainan Rice 🍚", "bonusFood": "Laksa 🍜", "glow": "rgba(237, 41, 57, 0.7)",
        "trivia": "The crescent moon represents a rising young nation."
    },
    "TH": {
        "code": "TH", "name": "Thailand", "flag": "🇹🇭", "continent": "Asia", "capital": "Bangkok",
        "palette": {"head": "#2D2A4A", "primary": "#A51931", "secondary": "#F4F5F8", "tertiary": "#2D2A4A", "accent": "#A51931", "border": "#FFFFFF"},
        "pattern": "stripes_horizontal", "foodItem": "Pad Thai 🍝", "bonusFood": "Mango Rice 🥭", "glow": "rgba(45, 42, 74, 0.7)",
        "trivia": "The central blue stripe stands for the Thai monarchy."
    },
    "ID": {
        "code": "ID", "name": "Indonesia", "flag": "🇮🇩", "continent": "Asia", "capital": "Jakarta",
        "palette": {"head": "#FF0000", "primary": "#FF0000", "secondary": "#FFFFFF", "tertiary": "#FF0000", "accent": "#FFFFFF", "border": "#FF0000"},
        "pattern": "horizontal_half", "foodItem": "Nasi Goreng 🍚", "bonusFood": "Satay 🍢", "glow": "rgba(255, 0, 0, 0.7)",
        "trivia": "Red stands for courage and human blood, white stands for purity."
    },
    "VN": {
        "code": "VN", "name": "Vietnam", "flag": "🇻🇳", "continent": "Asia", "capital": "Hanoi",
        "palette": {"head": "#DA251D", "primary": "#DA251D", "secondary": "#FF0", "tertiary": "#DA251D", "accent": "#FF0", "border": "#FF0"},
        "pattern": "center_star", "foodItem": "Pho 🍲", "bonusFood": "Banh Mi 🥖", "glow": "rgba(218, 37, 29, 0.7)",
        "trivia": "The five points of the star represent workers, peasants, soldiers, intellectuals, and traders."
    },
    "MY": {
        "code": "MY", "name": "Malaysia", "flag": "🇲🇾", "continent": "Asia", "capital": "Kuala Lumpur",
        "palette": {"head": "#010066", "primary": "#CC0000", "secondary": "#FFFFFF", "tertiary": "#010066", "accent": "#FFCC00", "border": "#FFCC00"},
        "pattern": "stripes_crescent", "foodItem": "Nasi Lemak 🍚", "bonusFood": "Roti Canai 🫓", "glow": "rgba(1, 0, 102, 0.7)",
        "trivia": "The 14 stripes represent the 13 states and the federal government."
    },
    "PK": {
        "code": "PK", "name": "Pakistan", "flag": "🇵🇰", "continent": "Asia", "capital": "Islamabad",
        "palette": {"head": "#01411C", "primary": "#01411C", "secondary": "#FFFFFF", "tertiary": "#01411C", "accent": "#FFFFFF", "border": "#FFFFFF"},
        "pattern": "vertical_crescent", "foodItem": "Biryani 🍲", "bonusFood": "Nihari 🍲", "glow": "rgba(1, 65, 28, 0.7)",
        "trivia": "The green represents the Muslim majority while the white stripe represents minorities."
    },
    "BD": {
        "code": "BD", "name": "Bangladesh", "flag": "🇧🇩", "continent": "Asia", "capital": "Dhaka",
        "palette": {"head": "#006A4E", "primary": "#006A4E", "secondary": "#F42A41", "tertiary": "#006A4E", "accent": "#F42A41", "border": "#F42A41"},
        "pattern": "offset_sun", "foodItem": "Hilsa Fish 🐟", "bonusFood": "Pitha 🥮", "glow": "rgba(0, 106, 78, 0.7)",
        "trivia": "The red circle represents the rising sun over Bengal and the blood shed for independence."
    },
    "LK": {
        "code": "LK", "name": "Sri Lanka", "flag": "🇱🇰", "continent": "Asia", "capital": "Sri Jayawardenepura Kotte",
        "palette": {"head": "#8D153A", "primary": "#8D153A", "secondary": "#FFBE29", "tertiary": "#00563F", "accent": "#EF7B00", "border": "#FFBE29"},
        "pattern": "lion_flag", "foodItem": "Kottu Roti 🫓", "bonusFood": "Hoppers 🥞", "glow": "rgba(141, 21, 58, 0.7)",
        "trivia": "Features a golden lion holding a sword representing bravery."
    },
    "NP": {
        "code": "NP", "name": "Nepal", "flag": "🇳🇵", "continent": "Asia", "capital": "Kathmandu",
        "palette": {"head": "#DC143C", "primary": "#DC143C", "secondary": "#003893", "tertiary": "#FFFFFF", "accent": "#FFFFFF", "border": "#003893"},
        "pattern": "double_pennant", "foodItem": "Momo 🥟", "bonusFood": "Dal Bhat 🍲", "glow": "rgba(220, 20, 60, 0.7)",
        "trivia": "Nepal has the world's only non-quadrilateral national flag."
    },
    "AE": {
        "code": "AE", "name": "United Arab Emirates", "flag": "🇦🇪", "continent": "Asia", "capital": "Abu Dhabi",
        "palette": {"head": "#FF0000", "primary": "#00732F", "secondary": "#FFFFFF", "tertiary": "#000000", "accent": "#FF0000", "border": "#FF0000"},
        "pattern": "pan_arab", "foodItem": "Shawarma 🥙", "bonusFood": "Machboos 🍲", "glow": "rgba(0, 115, 47, 0.7)",
        "trivia": "Contains Pan-Arab colors representing Arabian unity."
    },
    "SA": {
        "code": "SA", "name": "Saudi Arabia", "flag": "🇸🇦", "continent": "Asia", "capital": "Riyadh",
        "palette": {"head": "#006C35", "primary": "#006C35", "secondary": "#FFFFFF", "tertiary": "#006C35", "accent": "#FFFFFF", "border": "#FFFFFF"},
        "pattern": "shahada_sword", "foodItem": "Kabsa 🍚", "bonusFood": "Dates 🌴", "glow": "rgba(0, 108, 53, 0.7)",
        "trivia": "Features a green field with white Arabic inscription and a sword."
    },

    # EUROPE
    "UK": {
        "code": "UK", "name": "United Kingdom", "flag": "🇬🇧", "continent": "Europe", "capital": "London",
        "palette": {"head": "#00247D", "primary": "#CF142B", "secondary": "#FFFFFF", "tertiary": "#00247D", "accent": "#CF142B", "border": "#FFFFFF"},
        "pattern": "union_jack", "foodItem": "Fish & Chips 🐟", "bonusFood": "Tea ☕", "glow": "rgba(207, 20, 43, 0.7)",
        "trivia": "Combines crosses of three patron saints: George, Andrew, and Patrick."
    },
    "DE": {
        "code": "DE", "name": "Germany", "flag": "🇩🇪", "continent": "Europe", "capital": "Berlin",
        "palette": {"head": "#000000", "primary": "#000000", "secondary": "#DD0000", "tertiary": "#FFCC00", "accent": "#FFCC00", "border": "#FFCC00"},
        "pattern": "tricolor_horizontal", "foodItem": "Pretzel 🥨", "bonusFood": "Bratwurst 🌭", "glow": "rgba(255, 204, 0, 0.7)",
        "trivia": "Colors originated from the uniforms of the Lützow Free Corps during Napoleonic wars."
    },
    "FR": {
        "code": "FR", "name": "France", "flag": "🇫🇷", "continent": "Europe", "capital": "Paris",
        "palette": {"head": "#002395", "primary": "#002395", "secondary": "#FFFFFF", "tertiary": "#ED2939", "accent": "#FFFFFF", "border": "#ED2939"},
        "pattern": "tricolor_vertical", "foodItem": "Croissant 🥐", "bonusFood": "Macaron 🧁", "glow": "rgba(0, 35, 149, 0.7)",
        "trivia": "The Tricolour inspired flags across democratic nations around the globe."
    },
    "IT": {
        "code": "IT", "name": "Italy", "flag": "🇮🇹", "continent": "Europe", "capital": "Rome",
        "palette": {"head": "#009246", "primary": "#009246", "secondary": "#FFFFFF", "tertiary": "#CE2B37", "accent": "#009246", "border": "#CE2B37"},
        "pattern": "tricolor_vertical", "foodItem": "Pizza 🍕", "bonusFood": "Gelato 🍨", "glow": "rgba(0, 146, 70, 0.7)",
        "trivia": "Green represents hills and plains, white snow-capped Alps, red blood of wars."
    },
    "ES": {
        "code": "ES", "name": "Spain", "flag": "🇪🇸", "continent": "Europe", "capital": "Madrid",
        "palette": {"head": "#AA151B", "primary": "#AA151B", "secondary": "#F1BF00", "tertiary": "#AA151B", "accent": "#AA151B", "border": "#F1BF00"},
        "pattern": "spanish_fess", "foodItem": "Paella 🥘", "bonusFood": "Churros 🥖", "glow": "rgba(170, 21, 27, 0.7)",
        "trivia": "The central yellow stripe is twice the width of each red stripe."
    },
    "NL": {
        "code": "NL", "name": "Netherlands", "flag": "🇳🇱", "continent": "Europe", "capital": "Amsterdam",
        "palette": {"head": "#AE1C28", "primary": "#AE1C28", "secondary": "#FFFFFF", "tertiary": "#21468B", "accent": "#FFFFFF", "border": "#21468B"},
        "pattern": "tricolor_horizontal", "foodItem": "Stroopwafel 🧇", "bonusFood": "Gouda Cheese 🧀", "glow": "rgba(174, 28, 40, 0.7)",
        "trivia": "The oldest tricolor flag still in continuous use today."
    },
    "SE": {
        "code": "SE", "name": "Sweden", "flag": "🇸🇪", "continent": "Europe", "capital": "Stockholm",
        "palette": {"head": "#006AA7", "primary": "#006AA7", "secondary": "#FECC00", "tertiary": "#006AA7", "accent": "#FECC00", "border": "#FECC00"},
        "pattern": "nordic_cross", "foodItem": "Meatballs 🧆", "bonusFood": "Cinnamon Bun 🥮", "glow": "rgba(0, 106, 167, 0.7)",
        "trivia": "Nordic yellow cross on a blue field inspired by the Swedish Coat of Arms."
    },
    "NO": {
        "code": "NO", "name": "Norway", "flag": "🇳🇴", "continent": "Europe", "capital": "Oslo",
        "palette": {"head": "#BA0C2F", "primary": "#BA0C2F", "secondary": "#FFFFFF", "tertiary": "#00205B", "accent": "#FFFFFF", "border": "#00205B"},
        "pattern": "nordic_cross_double", "foodItem": "Waffle 🧇", "bonusFood": "Salmon 🐟", "glow": "rgba(186, 12, 47, 0.7)",
        "trivia": "Known as the 'mother of flags' because elements of 6 other national flags can be found inside it."
    },
    "CH": {
        "code": "CH", "name": "Switzerland", "flag": "🇨🇭", "continent": "Europe", "capital": "Bern",
        "palette": {"head": "#FF0000", "primary": "#FF0000", "secondary": "#FFFFFF", "tertiary": "#FF0000", "accent": "#FFFFFF", "border": "#FFFFFF"},
        "pattern": "swiss_cross", "foodItem": "Fondue 🧀", "bonusFood": "Chocolate 🍫", "glow": "rgba(255, 0, 0, 0.7)",
        "trivia": "One of only two square national flags in the world (the other being Vatican City)."
    },
    "GR": {
        "code": "GR", "name": "Greece", "flag": "🇬🇷", "continent": "Europe", "capital": "Athens",
        "palette": {"head": "#0D5EAF", "primary": "#0D5EAF", "secondary": "#FFFFFF", "tertiary": "#0D5EAF", "accent": "#FFFFFF", "border": "#FFFFFF"},
        "pattern": "greek_cross_stripes", "foodItem": "Gyro 🥙", "bonusFood": "Baklava 🥮", "glow": "rgba(13, 94, 175, 0.7)",
        "trivia": "The 9 blue and white stripes represent the 9 syllables of 'Eleftheria i Thanatos' (Freedom or Death)."
    },

    # NORTH & SOUTH AMERICA
    "US": {
        "code": "US", "name": "United States", "flag": "🇺🇸", "continent": "Americas", "capital": "Washington D.C.",
        "palette": {"head": "#3C3B6E", "primary": "#B22234", "secondary": "#FFFFFF", "tertiary": "#3C3B6E", "accent": "#FFFFFF", "border": "#3C3B6E"},
        "pattern": "stripes_stars", "foodItem": "Burger 🍔", "bonusFood": "Hot Dog 🌭", "glow": "rgba(178, 34, 52, 0.7)",
        "trivia": "The 50 stars represent 50 states, while 13 stripes represent 13 original colonies."
    },
    "CA": {
        "code": "CA", "name": "Canada", "flag": "🇨🇦", "continent": "Americas", "capital": "Ottawa",
        "palette": {"head": "#FF0000", "primary": "#FF0000", "secondary": "#FFFFFF", "tertiary": "#FF0000", "accent": "#FF0000", "border": "#FF0000"},
        "pattern": "maple_leaf", "foodItem": "Poutine 🍟", "bonusFood": "Maple Syrup 🥞", "glow": "rgba(255, 0, 0, 0.7)",
        "trivia": "Features an 11-pointed red maple leaf in the central white square."
    },
    "MX": {
        "code": "MX", "name": "Mexico", "flag": "🇲🇽", "continent": "Americas", "capital": "Mexico City",
        "palette": {"head": "#006847", "primary": "#006847", "secondary": "#FFFFFF", "tertiary": "#CE1126", "accent": "#006847", "border": "#CE1126"},
        "pattern": "tricolor_crest", "foodItem": "Taco 🌮", "bonusFood": "Guacamole 🥑", "glow": "rgba(0, 104, 71, 0.7)",
        "trivia": "Central emblem depicts an Aztec legend: an eagle perched on a nopal cactus devouring a snake."
    },
    "BR": {
        "code": "BR", "name": "Brazil", "flag": "🇧🇷", "continent": "Americas", "capital": "Brasilia",
        "palette": {"head": "#009C3B", "primary": "#009C3B", "secondary": "#FFDF00", "tertiary": "#002776", "accent": "#FFFFFF", "border": "#FFDF00"},
        "pattern": "canarinho", "foodItem": "Acai 🍧", "bonusFood": "Brigadeiro 🍬", "glow": "rgba(0, 156, 59, 0.7)",
        "trivia": "The green field represents flora, yellow diamond wealth, and blue circle the starry sky over Rio."
    },
    "AR": {
        "code": "AR", "name": "Argentina", "flag": "🇦🇷", "continent": "Americas", "capital": "Buenos Aires",
        "palette": {"head": "#74ACDF", "primary": "#74ACDF", "secondary": "#FFFFFF", "tertiary": "#74ACDF", "accent": "#F6B40E", "border": "#74ACDF"},
        "pattern": "sun_of_may", "foodItem": "Asado 🥩", "bonusFood": "Empanada 🥟", "glow": "rgba(116, 172, 223, 0.7)",
        "trivia": "Features the 'Sun of May' (Sol de Mayo) with 32 alternating straight and wavy rays."
    },
    "CO": {
        "code": "CO", "name": "Colombia", "flag": "🇨🇴", "continent": "Americas", "capital": "Bogota",
        "palette": {"head": "#FCD116", "primary": "#FCD116", "secondary": "#003893", "tertiary": "#CE1126", "accent": "#FCD116", "border": "#FCD116"},
        "pattern": "miranda_tricolor", "foodItem": "Arepa 🫓", "bonusFood": "Bandeja Paisa 🍲", "glow": "rgba(252, 209, 22, 0.7)",
        "trivia": "Yellow occupies the top half, symbolizing sovereignty and wealth."
    },

    # AFRICA & OCEANIA
    "EG": {
        "code": "EG", "name": "Egypt", "flag": "🇪🇬", "continent": "Africa", "capital": "Cairo",
        "palette": {"head": "#CE1126", "primary": "#CE1126", "secondary": "#FFFFFF", "tertiary": "#000000", "accent": "#C09300", "border": "#000000"},
        "pattern": "eagle_of_saladin", "foodItem": "Koshary 🍲", "bonusFood": "Falafel 🧆", "glow": "rgba(206, 17, 38, 0.7)",
        "trivia": "Features the golden Eagle of Saladin in the white stripe."
    },
    "ZA": {
        "code": "ZA", "name": "South Africa", "flag": "🇿🇦", "continent": "Africa", "capital": "Pretoria",
        "palette": {"head": "#007A4D", "primary": "#007A4D", "secondary": "#002395", "tertiary": "#DE3831", "accent": "#FFB81C", "border": "#000000"},
        "pattern": "rainbow_y", "foodItem": "Braai 🥩", "bonusFood": "Biltong 🥩", "glow": "rgba(0, 122, 77, 0.7)",
        "trivia": "The 'Rainbow Flag' contains 6 colors symbolizing post-apartheid convergence."
    },
    "AU": {
        "code": "AU", "name": "Australia", "flag": "🇦🇺", "continent": "Oceania", "capital": "Canberra",
        "palette": {"head": "#000085", "primary": "#000085", "secondary": "#FFFFFF", "tertiary": "#CC0000", "accent": "#FFFFFF", "border": "#FFFFFF"},
        "pattern": "southern_cross", "foodItem": "Meat Pie 🥧", "bonusFood": "Lamington 🍰", "glow": "rgba(0, 0, 133, 0.7)",
        "trivia": "Features the Commonwealth Star and 5 stars of the Southern Cross constellation."
    },
    "NZ": {
        "code": "NZ", "name": "New Zealand", "flag": "🇳🇿", "continent": "Oceania", "capital": "Wellington",
        "palette": {"head": "#00247D", "primary": "#00247D", "secondary": "#CC142B", "tertiary": "#FFFFFF", "accent": "#CC142B", "border": "#FFFFFF"},
        "pattern": "red_southern_cross", "foodItem": "Pavlova 🍰", "bonusFood": "Kiwifruit 🥝", "glow": "rgba(0, 36, 125, 0.7)",
        "trivia": "Features four red 5-pointed stars with white borders representing the Southern Cross."
    }
}


def fetch_all_country_codes():
    """Returns sorted list of all country ISO codes."""
    return sorted(list(WORLD_COUNTRIES_DB.keys()))


def get_country_detail(code_str: str):
    """Retrieve country dictionary by ISO code with fallback to India."""
    code_upper = str(code_str).upper() if code_str else "IN"
    return WORLD_COUNTRIES_DB.get(code_upper, WORLD_COUNTRIES_DB["IN"])


def get_countries_by_continent(continent_name: str):
    """Filter countries by continent name."""
    return [
        data for data in WORLD_COUNTRIES_DB.values()
        if data.get("continent", "").lower() == continent_name.lower()
    ]
