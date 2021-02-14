// /* Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * app.js */
let game;
const resetBtn = document.querySelector('#btn__reset')
const onScreenKeyboard = document.querySelector('#qwerty');

resetBtn.addEventListener('click', () => {
    game = new Game()
    game.startGame();
})

onScreenKeyboard.addEventListener('click', (e) => {
    const button = e.target;
    if (button.className === 'key') {
        game.handleInteraction(button);
    }
})