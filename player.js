Board = require('./board.js');
Game = require('./game.js')

const readlineSync = require('readline-sync');
let choice = readlineSync.question('Please pick a row and column.');

class Player {
  constructor(symbol, name) {
    this.symbol = symbol;
    this.name = name

  };

  getMove() {
    console.log(`Omg. ${choice} logged! It's a miracle!`);

  }
}

let moved = new Player();
moved.getMove();


module.exports = Player;
