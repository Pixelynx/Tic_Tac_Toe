Board = require('./board.js');
Player = require('./player.js')

const readlineSync = require('readline-sync');

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Board();
    this.currPlayer = player1;
  }

  playGame() {

      let selections = {
        'a': this.board.grid[0][1], 'b': this.board.grid[0][2], 'c': this.board.grid[0][3],
        'd': this.board.grid[1][1], 'e': this.board.grid[1][2], 'f': this.board.grid[1][3],
        'g': this.board.grid[2][1], 'h': this.board.grid[2][2], 'i': this.board.grid[2][3],
        };
      return selections
}

playerMove(userInput) {
  this.userInput = readlineSync.question('Please pick a row and column.');
  return this.userInput ;
}

};


// let play = new Game(this.player1, this.player2);
let moved = new Game();

let updated = new Board();
let printBoard = new Board();

// play.playGame();


printBoard.setBoard();
moved.playerMove();
updated.updateBoard(' x ');


module.exports = Game;
