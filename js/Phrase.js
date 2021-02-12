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
        //select all of the letter DOM elements that have a CSS class name that matches the selected letter
        const li = document.querySelectorAll('li.hide.letter');
        li.forEach(phrase => {
            if (letter.toLowerCase() === phrase.textContent.toLowerCase()) {
                phrase.classList.remove('hide')
                phrase.classList.add('show')
            }
        })
    }
}