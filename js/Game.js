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
            new Phrase('javascript'),
            new Phrase('react'),
            new Phrase('php'),
            new Phrase('node js'),
            new Phrase('programming')
        ]
        return phrases;
    }

    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomizer = Math.floor(Math.random() * 5)
        return this.phrases[randomizer];
    }

    handleInteraction(button) {
        if (this.activePhrase.checkLetter(button.textContent)) {
            this.activePhrase.showMatchedLetter(button.textContent);
            button.classList.add('chosen');
            if (this.checkForWin()) { 
                this.gameOver(this.checkForWin());
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.letter')
        for (let i = 0; i < hiddenLetters.length; i ++) {
            if (hiddenLetters[i].className.includes('hide')) {
                return false;
            }
        }
        return true;
    }

    removeLife() {
        this.missed += 1;
        const images = document.querySelectorAll('img');

        for (let i = 0; i < this.missed; i++) {
            images[i].setAttribute('src', 'images/lostHeart.png');
        }
        if (this.missed === 5) {
            this.gameOver();
        }
    }
    
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = overlay.querySelector('#game-over-message');

        if (gameWon) {
            gameOverMessage.textContent = 'You Won!'
            overlay.style.display = '';
            overlay.setAttribute('class', 'win');
            this.resetGame();
        } else if (this.missed === 5) {
            gameOverMessage.textContent = 'You Lost!'
            overlay.style.display = '';
            overlay.setAttribute('class', 'lose');
            this.resetGame();
        }
    }

    resetGame() {
        const ul = document.querySelector('ul');
        const letters = ul.querySelectorAll('li');
        const keyboardButtons = document.querySelectorAll('.key');
        const attempts = document.querySelectorAll('img');
        const banner = document.querySelector('#banner');
        this.missed = 0;

        letters.forEach(letter => ul.removeChild(letter));
        keyboardButtons.forEach(letter => letter.setAttribute('class', 'key'));
        attempts.forEach(attempt => attempt.setAttribute('src', 'images/liveHeart.png'));
        banner.nextElementSibling.remove();
    }
}