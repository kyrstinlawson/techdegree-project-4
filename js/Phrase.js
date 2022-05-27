/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById("phrase");
        const ul = phraseDiv.querySelector("ul");
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
};