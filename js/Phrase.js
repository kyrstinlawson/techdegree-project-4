/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const phraseDiv = document.getElementById("phrase");
const ul = phraseDiv.querySelector("ul");

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        ul.innerHTML = "";
        let phraseLetters = this.phrase.split(""); //phraseLetters is an array of all the letters in the phrase

        phraseLetters.forEach((letter) => {
            if (letter === " ") {
                ul.innerHTML += `<li class="space"> </li>`;
            } else {
                ul.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`
            }
        });
    };

    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase.
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            this.showMatchedLetter(letter);
            return true;
        } else {
            return false;
        };
    };
    
    /**
     * Reveals the letter(s) on the board that matches the player's selection. 
     */
    showMatchedLetter(letter) {
        let lettersInPhrase = ul.children;
        for (let i=0; i < lettersInPhrase.length; i++) {
            if (letter === lettersInPhrase[i].textContent) {
                lettersInPhrase[i].className = `show letter ${letter}`;
            }
        };
    };
};