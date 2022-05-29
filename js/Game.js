/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const startScreen = document.getElementById("overlay");
const hearts = document.querySelectorAll(".tries");

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase ("The Elephant in the Room"),
            new Phrase ("Keep Your Eyes Peeled"),
            new Phrase ("Put a Pin in it"),
            new Phrase ("Jump on the Bandwagon"),
            new Phrase ("Bend over Backwards")
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
    * Begins game by clearing previous game (if necessary) and selecting a random phrase and displaying it to user
    */
    startGame() {
        
        ul.innerHTML = "";
        for (let i=0; i < keys.length; i++) {
            keys[i].className = "key";
            keys[i].disabled = false;
        };
        for (let i=0; i < hearts.length; i++) {
            hearts[i].firstChild.src = "images/liveHeart.png";
        }
        this.missed = 0;
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