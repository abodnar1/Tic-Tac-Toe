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
      {id: "1", token: ""},
      {id: "2", token: ""},
      {id: "3", token: ""},
      {id: "4", token: ""},
      {id: "5", token: ""},
      {id: "6", token: ""},
      {id: "7", token: ""},
      {id: "8", token: ""},
      {id: "9", token: ""},
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

  /*~~~~~~~~still need: check for win~~~~~~~*/
  /*~~~~~~~~still need: check for draw~~~~~~~~*/
  /*~~~~~~~~still need: reset board~~~~~~~*/

};
