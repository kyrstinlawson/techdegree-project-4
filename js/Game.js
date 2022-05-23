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
};