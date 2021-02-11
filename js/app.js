let game;
const resetBtn = document.querySelector('#btn__reset')

resetBtn.addEventListener('click', () => {
    game = new Game()
    game.startGame();
})

// const onScreenKeyboard = document.querySelector('#qwerty');

// onScreenKeyboard.addEventListener('click', (e) => {
    
// })
// /* Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * app.js */

// const newGame = new Game()

// const startGame = document.querySelector('#btn__reset');
// const inGameKeyboard = document.querySelector('#qwerty');

// startGame.addEventListener('click', () => {
//     newGame.startGame()
// })

// inGameKeyboard.addEventListener('click', (e) => {
//     newGame.handleInteraction()
// })