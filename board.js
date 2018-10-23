Game = require('./game.js')
Player = require('./player.js')

class Board {
  constructor(letter) {
    this.letter = letter;

    this.grid = [
      // 3x4 grid -- cols
      // [0][1], [0][2], [0][3],
      // [1][1], [1][2], [1][3],
      // [2][1], [2][2], [2][3],

      ['',' a ', ' b ', ' c ',''],
      ['',' d ', ' e ', ' f ',''],
      ['',' g ', ' h ', ' i ','']
    ];
  };

// Sets new cleared board

printLine() {
  console.log("+---+---+---+");
}

printRow(row) {
  console.log(row.join("|"));
}

setBoard() {
  console.clear();
  this.printLine();
  this.printRow(this.grid[0]);
  this.printLine();
  this.printRow(this.grid[1]);
  this.printLine();
  this.printRow(this.grid[2]);
  this.printLine();
}

// Updates board when move is made
// if choice is isValidMove; change value on board to x/o
updateBoard(symbol, currPlayer) {


  this.grid[0][1] = symbol
  // if (currPlayer === this.player1) {
  //   this.grid[0][1] = this.grid.symbol;
  //   currPlayer = this.player2;
  //
  // } else {
  //   console.log('whoops')
  // }
  return this.setBoard();
}

// Check if space on board is available
isValidMove() {

}

};




module.exports = Board;
