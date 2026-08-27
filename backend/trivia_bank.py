"""
Geography & Flag Trivia Question Bank Dataset.
Zero external dependencies, zero API keys required.
"""

TRIVIA_QUESTIONS = [
    {
        "id": 1,
        "question": "What symbol is in the center of the Indian National Flag?",
        "options": ["Ashoka Chakra", "Lotus", "Tiger", "Peacock"],
        "correct": 0,
        "country": "IN",
        "explanation": "The Ashoka Chakra is a 24-spoke navy blue wheel in the center of the white band."
    },
    {
        "id": 2,
        "question": "What colors are in the flag of India from top to bottom?",
        "options": ["Saffron, White, Green", "Green, White, Saffron", "Red, White, Green", "Saffron, Blue, Green"],
        "correct": 0,
        "country": "IN",
        "explanation": "Saffron represents courage and sacrifice, White for peace and truth, Green for faith and chivalry."
    },
    {
        "id": 3,
        "question": "How many stars are on the flag of the United States?",
        "options": ["50", "13", "48", "52"],
        "correct": 0,
        "country": "US",
        "explanation": "There are 50 stars representing the 50 US states."
    },
    {
        "id": 4,
        "question": "Which country's flag features a red circle on a solid white background?",
        "options": ["Japan", "Bangladesh", "Palau", "South Korea"],
        "correct": 0,
        "country": "JP",
        "explanation": "The red disk represents the sun (Hinomaru)."
    },
    {
        "id": 5,
        "question": "What is the national dish associated with the Indian flag theme in this game?",
        "options": ["Samosa", "Burger", "Sushi", "Croissant"],
        "correct": 0,
        "country": "IN",
        "explanation": "Samosa is the featured national dish food item for India."
    },
    {
        "id": 6,
        "question": "Which country features a maple leaf on its national flag?",
        "options": ["Canada", "Australia", "New Zealand", "United Kingdom"],
        "correct": 0,
        "country": "CA",
        "explanation": "Canada's flag features an 11-point red maple leaf."
    },
    {
        "id": 7,
        "question": "Which country has the only non-quadrilateral national flag in the world?",
        "options": ["Nepal", "Switzerland", "Vatican City", "Bhutan"],
        "correct": 0,
        "country": "NP",
        "explanation": "Nepal's flag is made of two stacked triangular pennants."
    },
    {
        "id": 8,
        "question": "What three colors make up the national flag of Germany?",
        "options": ["Black, Red, Gold", "Black, Red, White", "Blue, White, Red", "Green, Yellow, Blue"],
        "correct": 0,
        "country": "DE",
        "explanation": "Germany's tricolor consists of horizontal bands of Black, Red, and Gold."
    },
    {
        "id": 9,
        "question": "What image is on the central yellow diamond of Brazil's flag?",
        "options": ["Blue Celestial Globe", "Golden Eagle", "Sun of May", "Lion with Sword"],
        "correct": 0,
        "country": "BR",
        "explanation": "The blue globe features stars representing the night sky over Rio de Janeiro."
    },
    {
        "id": 10,
        "question": "Which country's flag is called 'Il Tricolore'?",
        "options": ["Italy", "France", "Ireland", "Mexico"],
        "correct": 0,
        "country": "IT",
        "explanation": "Italy's green, white, and red vertical tricolor is known as Il Tricolore."
    }
]


def get_random_trivia_question():
    """Retrieve a random question from the trivia bank."""
    import random
    return random.choice(TRIVIA_QUESTIONS)
