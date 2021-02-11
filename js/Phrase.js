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

    // checkLetter() {
    //     this.phrase.forEach(letter => {
    //         if (letter === this.phrase) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     })
    // }

    // showMatchedLetter() {

    // }
}