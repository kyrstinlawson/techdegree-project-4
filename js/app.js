/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = "";
const startButton = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");
const keys = document.querySelectorAll(".key");

startButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
});

keyboard.onclick = (e) => {
    let target = e.target;
    if (target.className === "key") {
        game.handleInteraction(target);
    };
};

// document.addEventListener("keyup", (e) => {
//     console.log(e.key);
//     for (let i=0; i < ) {}
// });