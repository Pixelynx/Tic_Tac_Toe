Board = require('./board.js');
// Player = require('./player.js')

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Board();
    this.currPlayer = player1;
  }

  startGame() {


      // need player's choice to convert to board selection
      // if player chooses 'A1' ==> '|A1'
      // user input: 'A1' = board.grid[0][0], 'A2' = board.grid[0][1]

      let selections = {
        'A1': this.board.grid[0][0], 'B1': this.board.grid[1][0], 'C1': this.board.grid[2][0],
        'A2': this.board.grid[0][1], 'B2': this.board.grid[1][1], 'C2': this.board.grid[2][1],
        'A3': this.board.grid[0][2], 'B3': this.board.grid[1][2], 'C3': this.board.grid[2][2],
        };
      return selections
}

getMove(x, o) {
  if (this.currPlayer === 'player1') {
    this.board.grid[0][1] = 'x';
  } else {
    this.board.grid[0][1] = '| o';
  }
  return this.board.setBoard();
}

updateBoard() {
  // if choice is isValidMove; change value on board to x/o

  // if () {
  //   this.board.grid[0][0] = choice;
  // } else {
  //   console.log('whoops')
  // }
}

}

let gameStart = new Game();
let updated = new Game();
gameStart.startGame();
// updated.getMove();


module.exports = Game;
