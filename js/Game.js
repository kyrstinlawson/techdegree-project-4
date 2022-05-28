/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
        const startScreen = document.getElementById("overlay");
        overlay.style.display = "none";
        let currentPhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase = currentPhrase;   
        currentPhrase.addPhraseToDisplay();     
    };

    /**
     * Checks for winning move by looking for any letters with the "hide" class
     */
    checkForWin() {
        for (let i=0; i < ul.children.length; i++) {
            if (ul.children[i].className === "hide") {
                return false;
            } else {
                return true;
            }
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
   removeLife() {
       
   }

    handleInteraction() {};
};