class Game {
  constructor() {
    this.player1 = new Player("one", "🛼");
    this.player2 = new Player("two", "🪩");
    this.startingPlayer = this.determineStartingPlayer();
    this.currentPlayer = this.player1;
    this.turnCounter = 0;
    this.gameCounter = 1;
    this.win = false;
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

  handleDraw() {
    this.gameCounter ++;
    this.resetGame();
  };

  checkForHorizontalWin() {
    if (this.board[0].token === this.currentPlayer.token && this.board[1].token === this.currentPlayer.token && this.board[2].token === this.currentPlayer.token ||
    this.board[3].token === this.currentPlayer.token && this.board[4].token === this.currentPlayer.token && this.board[5].token === this.currentPlayer.token ||
    this.board[6].token === this.currentPlayer.token && this.board[7].token === this.currentPlayer.token && this.board[8].token === this.currentPlayer.token) {
      this.win = true;
    }
  };

  checkForVerticalWin() {
    if (this.board[0].token === this.currentPlayer.token && this.board[3].token === this.currentPlayer.token && this.board[6].token === this.currentPlayer.token ||
    this.board[1].token === this.currentPlayer.token && this.board[4].token === this.currentPlayer.token && this.board[7].token === this.currentPlayer.token ||
    this.board[2].token === this.currentPlayer.token && this.board[5].token === this.currentPlayer.token && this.board[8].token === this.currentPlayer.token) {
      this.win = true;
    }
  };

  checkForDiagonalWin() {
    if (this.board[0].token === this.currentPlayer.token && this.board[4].token === this.currentPlayer.token && this.board[8].token === this.currentPlayer.token ||
    this.board[2].token === this.currentPlayer.token && this.board[4].token === this.currentPlayer.token && this.board[6].token === this.currentPlayer.token) {
      this.win = true;
    }
  };

  handleWin() {
    this.currentPlayer.increaseWins();
    this.gameCounter ++;
    this.resetGame();
  };

  determineStartingPlayer() {
    if (this.gameCounter % 2 === 0) {
      this.startingPlayer = this.player2;
      this.currentPlayer = this.player2;
    } else {
      this.startingPlayer = this.player1;
      this.currentPlayer = this.player1;
    }
  };

  resetGame() {
    this.turnCounter = 0;
    this.win = false;
    this.resetBoard();
    this.determineStartingPlayer();
  };

  resetBoard() {
    this.board = [
      {id: "1", token: ""},
      {id: "2", token: ""},
      {id: "3", token: ""},
      {id: "4", token: ""},
      {id: "5", token: ""},
      {id: "6", token: ""},
      {id: "7", token: ""},
      {id: "8", token: ""},
      {id: "9", token: ""},
    ]
  };
};
