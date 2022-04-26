class Game {
  constructor() {
    this.player1 = new Player("one", "🛼");
    this.player2 = new Player("two", "🪩");
    this.startingPlayer = this.player1;
    this.currentPlayer = this.player1;
    this.turnCounter = 0;
    this.draw = false;
    this.gameCounter = 0;
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

  switchPlayerTurn() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
      this.turnCounter ++;
    } else {
      this.currentPlayer = this.player1;
      this.turnCounter ++;
    }
  };

  disableSquare(square) {
    square.classList.add("disabled");
  };

  // Horizontal wins by index position:
    // [0, 1, 2]
    // [3, 4, 5]
    // [6, 7, 8]
  checkForHorizontalWin() {
    if (this.board[0].token === this.currentPlayer.token && this.board[1].token === this.currentPlayer.token && this.board[2].token === this.currentPlayer.token ||
    this.board[3].token === this.currentPlayer.token && this.board[4].token === this.currentPlayer.token && this.board[5].token === this.currentPlayer.token ||
    this.board[6].token === this.currentPlayer.token && this.board[7].token === this.currentPlayer.token && this.board[8].token === this.currentPlayer.token) {
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
      this.handleWin();
    }
  };

  // Diagonal wins by index position:
    // [0, 4, 8]
    // [2, 4, 6]
  checkForDiagonalWin() {
    if (this.board[0].token === this.currentPlayer.token && this.board[0].token === this.currentPlayer.token && this.board[8].token === this.currentPlayer.token ||
    this.board[2].token === this.currentPlayer.token && this.board[4].token === this.currentPlayer.token && this.board[6].token === this.currentPlayer.token) {
      this.handleWin();
    }
  };

  handleWin() {
    this.currentPlayer.increaseWins();
    this.gameCounter ++;
    // set the starting player
    // switch the player turn display in the DOM
    // reset the gameBoard to ""
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

  /*~~~~~~~still need: check for draw~~~~~*/
  /*~~~~~~~still need: reset board~~~~~~~~*/

};
