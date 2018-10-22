Game = require('./game.js')

class Board {
  constructor() {
    // this.grid = [
    //   ['|A1', 'A2', 'A3 |'],
    //   ['|B1', 'B2', 'B3 |'],
    //   ['|C1', 'C2', 'C3 |']
    // ];
    // maybe
    // this.grid = [
    //   ['',' ', ' ', ' ',''],
    //   ['',' ', ' ', ' ',''],
    //   ['',' ', ' ', ' ','']
    // ];
    this.grid = [
      // 3x4 grid -- cols
      // [0][1], [0][2], [0][3],
      // [1][1], [1][2], [1][3],
      // [2][1], [2][2], [2][3],

      ['','   ', '   ', '   ',''],
      ['','   ', '   ', '   ',''],
      ['','   ', '   ', '   ','']
    ];
  };

// Sets new cleared board

printLine() {
  console.log("+---+---+---+");
}

printRow(row) {
  console.log(row.join("|"));
  // maybe
  // console.log(row.join("|  "));
}

setBoard() {
  this.printLine();
  this.printRow(this.grid[0]);
  this.printLine();
  this.printRow(this.grid[1]);
  this.printLine();
  this.printRow(this.grid[2]);
  this.printLine();
}

};

// Updates board when move is made

// Check if space on board is available
let board = new Board();
// console.log(board.selections);
board.setBoard();

module.exports = Board;
