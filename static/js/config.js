/**
 * Configuration Constants for Country Flag Snake Game.
 */
const CONFIG = {
    GRID_COLS: 40,
    GRID_ROWS: 30,
    CELL_SIZE: 20, // 40 * 20 = 800 width, 30 * 20 = 600 height
    BASE_SPEED_MS: 110,
    SPEED_INCREMENT_PER_FOOD: 2,
    MIN_SPEED_MS: 45,
    INITIAL_SNAKE_LENGTH: 5,
    FOOD_POINTS: 10,
    BONUS_FOOD_POINTS: 30,
    BONUS_SPAWN_CHANCE: 0.25,
    PARTICLE_COUNT_EAT: 16,
    
    // Country Definitions & Flag Palettes
    COUNTRIES: {
        IN: {
            code: 'IN',
            name: 'India',
            flag: '🇮🇳',
            palette: {
                head: '#FF9933',      // Deep Saffron
                primary: '#FF9933',   // Saffron
                secondary: '#FFFFFF', // White
                tertiary: '#138808',  // India Green
                accent: '#000080',    // Navy Blue (Ashoka Chakra)
                border: '#FFFFFF'
            },
            foodItem: 'Samosa 🥟',
            bonusFood: 'Jalebi 🥮',
            glow: 'rgba(255, 153, 51, 0.7)'
        },
        US: {
            code: 'US',
            name: 'United States',
            flag: '🇺🇸',
            palette: {
                head: '#3C3B6E',
                primary: '#B22234',
                secondary: '#FFFFFF',
                tertiary: '#3C3B6E',
                accent: '#FFFFFF',
                border: '#3C3B6E'
            },
            foodItem: 'Burger 🍔',
            bonusFood: 'Hot Dog 🌭',
            glow: 'rgba(178, 34, 52, 0.7)'
        },
        UK: {
            code: 'UK',
            name: 'United Kingdom',
            flag: '🇬🇧',
            palette: {
                head: '#00247D',
                primary: '#CF142B',
                secondary: '#FFFFFF',
                tertiary: '#00247D',
                accent: '#CF142B',
                border: '#FFFFFF'
            },
            foodItem: 'Fish & Chips 🐟',
            bonusFood: 'Tea ☕',
            glow: 'rgba(207, 20, 43, 0.7)'
        },
        JP: {
            code: 'JP',
            name: 'Japan',
            flag: '🇯🇵',
            palette: {
                head: '#BC002D',
                primary: '#FFFFFF',
                secondary: '#BC002D',
                tertiary: '#F0F0F0',
                accent: '#BC002D',
                border: '#BC002D'
            },
            foodItem: 'Sushi 🍣',
            bonusFood: 'Ramen 🍜',
            glow: 'rgba(188, 0, 45, 0.7)'
        },
        DE: {
            code: 'DE',
            name: 'Germany',
            flag: '🇩🇪',
            palette: {
                head: '#000000',
                primary: '#000000',
                secondary: '#DD0000',
                tertiary: '#FFCC00',
                accent: '#FFCC00',
                border: '#FFCC00'
            },
            foodItem: 'Pretzel 🥨',
            bonusFood: 'Bratwurst 🌭',
            glow: 'rgba(255, 204, 0, 0.7)'
        },
        BR: {
            code: 'BR',
            name: 'Brazil',
            flag: '🇧🇷',
            palette: {
                head: '#009C3B',
                primary: '#009C3B',
                secondary: '#FFDF00',
                tertiary: '#002776',
                accent: '#FFFFFF',
                border: '#FFDF00'
            },
            foodItem: 'Acai 🍧',
            bonusFood: 'Brigadeiro 🍬',
            glow: 'rgba(0, 156, 59, 0.7)'
        },
        FR: {
            code: 'FR',
            name: 'France',
            flag: '🇫🇷',
            palette: {
                head: '#002395',
                primary: '#002395',
                secondary: '#FFFFFF',
                tertiary: '#ED2939',
                accent: '#FFFFFF',
                border: '#ED2939'
            },
            foodItem: 'Croissant 🥐',
            bonusFood: 'Macaron 🧁',
            glow: 'rgba(0, 35, 149, 0.7)'
        },
        AU: {
            code: 'AU',
            name: 'Australia',
            flag: '🇦🇺',
            palette: {
                head: '#000085',
                primary: '#000085',
                secondary: '#FFFFFF',
                tertiary: '#CC0000',
                accent: '#FFFFFF',
                border: '#FFFFFF'
            },
            foodItem: 'Meat Pie 🥧',
            bonusFood: 'Lamington 🍰',
            glow: 'rgba(0, 0, 133, 0.7)'
        },
        CA: {
            code: 'CA',
            name: 'Canada',
            flag: '🇨🇦',
            palette: {
                head: '#FF0000',
                primary: '#FF0000',
                secondary: '#FFFFFF',
                tertiary: '#FF0000',
                accent: '#FF0000',
                border: '#FF0000'
            },
            foodItem: 'Poutine 🍟',
            bonusFood: 'Maple Syrup 🥞',
            glow: 'rgba(255, 0, 0, 0.7)'
        },
        IT: {
            code: 'IT',
            name: 'Italy',
            flag: '🇮🇹',
            palette: {
                head: '#009246',
                primary: '#009246',
                secondary: '#FFFFFF',
                tertiary: '#CE2B37',
                accent: '#009246',
                border: '#CE2B37'
            },
            foodItem: 'Pizza 🍕',
            bonusFood: 'Gelato 🍨',
            glow: 'rgba(0, 146, 70, 0.7)'
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
