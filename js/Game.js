/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases() {
        const phrases = [
            new Phrase('Javascript'),
            new Phrase('React'),
            new Phrase('PHP'),
            new Phrase('Node JS'),
            new Phrase('Programming Is Fun')
        ]
        return phrases;
    }

    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrases = this.getRandomPhrase();
        this.activePhrases.addPhraseToDisplay();
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomizer = Math.floor(Math.random() * 5)
        return this.phrases[randomizer];
    }

    // handleInteraction() {

    // }

    // removeLife() {
    //     if (player missed 5 guesses) {
    //         gameOver()
    //     } else if (player guesses wrong) {

    //     }
    // }

    // checkForWin() {

    // }

    // gameOver() {

    // }
}