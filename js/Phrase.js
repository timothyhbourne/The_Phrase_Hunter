/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase { 
    constructor(phrase) {
        this.phrase = phrase;
    }

    /**
     * Display phrase on game
     */
    addPhraseToDisplay() {
        const UL = document.querySelector('ul');
        const splittedPhrase = this.phrase.split('');

        splittedPhrase.forEach(letter => {
            const li = document.createElement('li')
            if (letter === ' ') {
                li.setAttribute('class', 'space');
                li.textContent = ' ';
                UL.appendChild(li)
            } else {
                li.setAttribute('class', 'hide letter')
                li.textContent = `${letter}`
                UL.appendChild(li)
            }
        });
    }

    checkLetter(letter) { 
        const phrase = this.phrase.toLowerCase();
        return phrase.includes(letter) ? true : false;
    }

    showMatchedLetter(letter) {
        const hiddenLetters = document.querySelectorAll('li.hide.letter');
        hiddenLetters.forEach(hiddenLetter => {
            if (letter.toLowerCase() === hiddenLetter.textContent) {
                hiddenLetter.classList.remove('hide')
                hiddenLetter.classList.add('show')
            }
        })
    }
}