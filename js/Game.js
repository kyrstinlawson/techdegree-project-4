/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const startScreen = document.getElementById("overlay");

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {phrase: "the elephant in the room"},
            {phrase: "keep your eyes peeled"},
            {phrase: "put a pin in it"},
            {phrase: "jump on the bandwagon"},
            {phrase: "bend over backwards"}
        ];
        this.activePhrase = null;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let phraseNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[phraseNum].phrase;
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        ul.innerHTML = "";
        let keys = document.querySelectorAll(".key");
        console.log(keys);
        for (let i=0; i < keys.length; i++) {
            keys[i].className = "key";
            keys[i].disabled = false;
        };
        startScreen.style.display = "none";
        let currentPhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase = currentPhrase;   
        currentPhrase.addPhraseToDisplay();    
    };

    /**
     * Checks for winning move by looking for any letters with the "hide" class
     */
    checkForWin() {
        let remainingLetters = 0
        for (let i=0; i < ul.children.length; i++) {
            if (ul.children[i].className.includes("hide")) {
                remainingLetters++;
            };
        };
        if (remainingLetters === 0) {
            return true;
        };
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
   removeLife() {
       const hearts = document.querySelectorAll(".tries");
       this.missed += 1;
       let heartIndex = hearts.length - this.missed;
       if (this.missed < 5) {
           hearts[heartIndex].firstChild.src = "images/lostHeart.png"
       } else {
           this.gameOver(false);
       };
   }

   /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
   gameOver(gameWon) {
        let message = document.getElementById("game-over-message");
        if (gameWon) {
           startScreen.style.display = "initial";
           startScreen.className = "win";
           message.innerHTML = "You win!"
        } else {
            startScreen.style.display = "initial";
            startScreen.className = "lose";
            message.innerHTML = `You lose! The phrase was <em>"${this.activePhrase.phrase}"</em>` 
        }; 
   };

    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.phrase.includes(button.innerHTML)) {
            button.className += " chosen";
            this.activePhrase.showMatchedLetter(button.innerHTML);
            if (this.checkForWin()) {
                this.gameOver(true);
            };
        } else {
            button.className += " wrong";
            this.removeLife();
        };
    };
};