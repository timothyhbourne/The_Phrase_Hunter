// /* Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * app.js */
let game;
const resetBtn = document.querySelector('#btn__reset')
const onScreenKeyboard = document.querySelector('#qwerty');
const key = document.querySelectorAll('.key')

//Create and start a new game
resetBtn.addEventListener('click', () => {
    game = new Game()
    game.startGame();
})

//Handles keyboard click
onScreenKeyboard.addEventListener('click', (e) => {
    const button = e.target;
    if (button.className === 'key') {
        game.handleInteraction(button);
        console.log(button);
    }
})

//Handles user keyboard press
document.addEventListener('keydown', (e) => {
    const keyPressed = e.key;
    for (let i = 0; i < key.length; i++) {
        if (keyPressed === key[i].textContent) {
            game.handleInteraction(key[i]);
        }
    }
})