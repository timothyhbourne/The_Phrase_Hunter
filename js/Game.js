/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game 
    */
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

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
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

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
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

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
    won */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.letter')
        for (let i = 0; i < hiddenLetters.length; i ++) {
            if (hiddenLetters[i].className.includes('hide')) {
                return false;
            }
        }
        return true;
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        this.missed += 1;
        const images = document.querySelectorAll('img');

        for (let i = 0; i < this.missed; i++) {
            images[i].setAttribute('src', 'images/lostHeart.png')
        }
        if (this.missed === 5) {
            this.gameOver();
        }
    }
   
    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay')
        const gameOverMessage = overlay.querySelector('#game-over-message');

        if (gameWon) {
            gameOverMessage.textContent = 'You Won!'
            overlay.style.display = '';
            overlay.setAttribute('class', 'win')
            this.resetGame()
        } else if (this.missed >= 5) {
            gameOverMessage.textContent = 'You Lost!'
            overlay.style.display = '';
            overlay.setAttribute('class', 'lose')
            this.resetGame()
        }
    }

    /**
     * Resets the game state. 
     */
    resetGame() {
        const ul = document.querySelector('ul');
        const letters = ul.querySelectorAll('li');
        const keyboardButtons = document.querySelectorAll('.key');
        const attempts = document.querySelectorAll('img');
        this.missed = 0;

        letters.forEach(letter => ul.removeChild(letter))
        keyboardButtons.forEach(letter => letter.setAttribute('class', 'key'))
        attempts.forEach(attempt => attempt.setAttribute('src', 'images/liveHeart.png'))
    }

    /**
     * Adds a Timer
     */
    addTimer() {
        //Add H3 Element below Banner 
        const banner = document.querySelector('#banner')
        const timerH3 = document.createElement('h3');
        banner.insertAdjacentElement('afterend', timerH3);
        
        //Modify timer HTML and attribute
        timerH3.setAttribute('id', 'timer');
        timerH3.style.fontSize = '28px';
        timerH3.textContent = 'GO!';
        
        // Initial time
        let time = 1 * 60;

        //Select timer element
        const timer = document.querySelector('#timer');

        //Timer countdown functionality using setInterval
        let interval = setInterval(() => {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;

            if (seconds < 10) {
                timer.textContent = `${minutes} : 0${seconds}`;
            } else {
                timer.textContent = `${minutes} : ${seconds}`;
            }

            time > 0 ? time -= 1 : null;
    
            if (this.checkForWin() || time === 0) {
                clearInterval(interval);
                timer.remove();
            }

            if (this.missed > 4 && time > 0) {
                clearInterval(interval);
                timer.remove();
            }

            if (time === 0) {
                this.missed += 5;
                this.gameOver();
                timer.remove();
            }
        }, 1000);
    }
}