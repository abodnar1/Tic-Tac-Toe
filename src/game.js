class Game {
  constructor() {
    this.player1 = new Player("one", "🛼");
    this.player2 = new Player("two", "🪩");
    this.startingPlayer = this.player1;
    this.currentPlayer = this.player1;
    this.turnCounter = 0;
    this.gameCounter = 0;
    this.win = false;
    this.draw = false;
    this.board = [
      {id: "1", token: ""}, {id: "2", token: ""}, {id: "3", token: ""},
      {id: "4", token: ""}, {id: "5", token: ""}, {id: "6", token: ""},
      {id: "7", token: ""}, {id: "8", token: ""}, {id: "9", token: ""},
    ];
  };

  updateBoardToken(squareId) {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i].id === squareId) {
        this.board[i].token = this.currentPlayer.token;
      }
    }
  };

  disableSquare(square) {
    square.classList.add("disabled");
  };

  switchPlayerTurn() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }

    this.updateTurnCounter();
  };

  updateTurnCounter() {
    this.turnCounter ++;
  };

  checkForDraw() {
    if (this.turnCounter === 8) {
      return this.win = null;
    }
  };

  // Horizontal wins by index position:
    // [0, 1, 2]
    // [3, 4, 5]
    // [6, 7, 8]

  checkForHorizontalWin() {
    if (this.board[0].token === this.currentPlayer.token && this.board[1].token === this.currentPlayer.token && this.board[2].token === this.currentPlayer.token ||
    this.board[3].token === this.currentPlayer.token && this.board[4].token === this.currentPlayer.token && this.board[5].token === this.currentPlayer.token ||
    this.board[6].token === this.currentPlayer.token && this.board[7].token === this.currentPlayer.token && this.board[8].token === this.currentPlayer.token) {
      this.win = true;
      this.handleWin();
    }
  };

  // Vertical wins by index position:
    // [0, 3, 6]
    // [1, 4, 7]
    // [2, 5, 8]

  checkForVerticalWin() {
    if (this.board[0].token === this.currentPlayer.token && this.board[3].token === this.currentPlayer.token && this.board[6].token === this.currentPlayer.token ||
    this.board[1].token === this.currentPlayer.token && this.board[4].token === this.currentPlayer.token && this.board[7].token === this.currentPlayer.token ||
    this.board[2].token === this.currentPlayer.token && this.board[5].token === this.currentPlayer.token && this.board[8].token === this.currentPlayer.token) {
      this.win = true;
      this.handleWin();
    }
  };

  // Diagonal wins by index position:
    // [0, 4, 8]
    // [2, 4, 6]

  checkForDiagonalWin() {
    if (this.board[0].token === this.currentPlayer.token && this.board[0].token === this.currentPlayer.token && this.board[8].token === this.currentPlayer.token ||
    this.board[2].token === this.currentPlayer.token && this.board[4].token === this.currentPlayer.token && this.board[6].token === this.currentPlayer.token) {
      this.win = true;
      this.handleWin();
    }
  };

  handleWin() {
    this.currentPlayer.increaseWins();
    this.gameCounter ++;
    // reset the gameBoard to ""
    // switch the player turn display in the DOM
    // set the starting player
  };

  determineStartingPlayer() {
    if (this.gameCounter % 2 === 0) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  };

  // resetBoard() {
  //   this.board = [
  //     {id: "1", token: ""},
  //     {id: "2", token: ""},
  //     {id: "3", token: ""},
  //     {id: "4", token: ""},
  //     {id: "5", token: ""},
  //     {id: "6", token: ""},
  //     {id: "7", token: ""},
  //     {id: "8", token: ""},
  //     {id: "9", token: ""},
  //   ]
  // };

  /*~~~~~~~still need: reset board~~~~~~~~*/
};
