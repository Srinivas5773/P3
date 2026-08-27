/**
 * Country Flag Trivia Quiz Mini-Game Module.
 */
class FlagQuizEngine {
    constructor() {
        this.currentQuestion = null;
        this.correctCount = 0;
    }

    generateQuestion() {
        const countryKeys = Object.keys(CONFIG.COUNTRIES);
        const correctKey = countryKeys[Math.floor(Math.random() * countryKeys.length)];
        const correctCountry = CONFIG.COUNTRIES[correctKey];

        // Pick 3 wrong options
        const wrongKeys = countryKeys.filter(k => k !== correctKey).sort(() => 0.5 - Math.random()).slice(0, 3);
        const options = [correctCountry, ...wrongKeys.map(k => CONFIG.COUNTRIES[k])].sort(() => 0.5 - Math.random());

        this.currentQuestion = {
            flag: correctCountry.flag,
            correctCode: correctCountry.code,
            correctName: correctCountry.name,
            foodItem: correctCountry.foodItem,
            options: options
        };
        return this.currentQuestion;
    }

    answerQuestion(selectedCode) {
        if (!this.currentQuestion) return false;
        const isCorrect = (selectedCode === this.currentQuestion.correctCode);
        if (isCorrect) {
            this.correctCount++;
        }
        return isCorrect;
    }
}

const flagQuiz = new FlagQuizEngine();
