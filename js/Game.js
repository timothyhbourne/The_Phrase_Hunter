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

    checkForWin() {
    //loop through li, if any of the li still contains hide, return false
        const hiddenLetters = document.querySelectorAll('li.hide.letter')
        hiddenLetters.forEach(letter => {
            if (letter.className.includes('hide')) {
                return false;
            } else {
                return true;
            }
        });

    }

    removeLife() {
        //Use set attribute on the image element
        //increment missed property
        //if missed is total to 5, call gameover()
        this.missed += 1;
        const tries = document.querySelectorAll('.tries');

        for (let i = 0; i < tries.length; i++) {
            tries[i].setAttribute('src', './img/lostHeart.png')
            if (this.missed === 5) {
                this.gameOver();
            }
        }
    }
    
    gameOver(gameWon) {
        const gameOverMessage = document.querySelector('#game-over-message');
        const overlay = document.querySelector('#overlay')

        if (gameWon) {
            gameOverMessage.textContent = 'You Won!'
            overlay.style.display = 'none';
            overlay.setAttribute('class', 'win')
        } else if (!gameWon) {
            gameOverMessage.textContent = 'You Lost!'
            overlay.style.display = 'none';
            overlay.setAttribute('class', 'lose')
        }
    }
}