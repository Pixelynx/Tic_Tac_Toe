class Board {
  constructor() {
    this.grid = [
      ['| ', '', '  |'],
      ['| ', '', '  |'],
      ['| ', '', '  |']
    ];
  };

// Sets new cleared board

printLine() {
  console.log("+---+---+---+");
}

printRow(row) {
  this.row = row;
  console.log(row.join("  | "));
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
board.setBoard();
