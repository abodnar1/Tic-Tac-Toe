class Game {
  constructor() {
    this.player1 = new Player("one", "🛼", true);
    this.player2 = new Player("two", "🪩", false);
    this.currentPlayer = this.player1;
    this.board = {a1: null, a2: null, a3: null, b1: null, b2: null, b3: null, c1: null, c2: null, c3: null};
    this.player1Win = false;
    this.player2Win = false;
  };

  /*~~~~~~~~Switching player turn~~~~~~~~*/
  switchPlayerTurn() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
    display.innerText = `It's ${this.currentPlayer.token}'s turn!`
  };

  /*~~~~~~~~Checking for win conditions~~~~~~~*/
  // winning sequences:
  // ["a1", "a2", "a3"]
  // ["b1", "b2", "b3"]
  // ["c1", "c2", "c3"]
  // ["a1", "b1", "c1"]
  // ["a2", "b2", "c2"]
  // ["a3", "b3", "c3"]
  // ["a1", "b2", "c3"]
  // ["c1", "b2", "a3"]

  checkForWin() {
    if (this.board.a1 === this.player1.token && this.board.a2 === this.player1.token && this.board.a3 === this.player1.token) {
      this.player1Win = true;
      } else if (this.board.a1 === this.player2.token && this.board.a2 === this.player2.token && this.board.a3 === this.player2.token) {
        this.player2Win = true;
      } else if (this.board.b1 === this.player1.token && this.board.b2 === this.player1.token && this.board.b3 === this.player1.token) {
        this.player1Win = true;
      } else if (this.board.b1 === this.player2.token && this.board.b2 === this.player2.token && this.board.b3 === this.player2.token) {
        this.player2Win = true;
      } else if (this.board.c1 === this.player1.token && this.board.c2 === this.player1.token && this.board.c3 === this.player1.token) {
        this.player1Win = true;
      } else if (this.board.c1 === this.player2.token && this.board.c2 === this.player2.token && this.board.c3 === this.player2.token) {
        this.player2Win = true;
      } else if (this.board.a1 === this.player1.token && this.board.b1 === this.player1.token && this.board.c1 === this.player1.token) {
        this.player1Win = true;
      } else if (this.board.a1 === this.player2.token && this.board.b1 === this.player2.token && this.board.c1 === this.player2.token) {
        this.player2Win = true;
      } else if (this.board.a2 === this.player1.token && this.board.b2 === this.player1.token && this.board.c2 === this.player1.token) {
        this.player1Win = true;
      } else if (this.board.a2 === this.player2.token && this.board.b2 === this.player2.token && this.board.c2 === this.player2.token) {
        this.player2Win = true;
      } else if (this.board.a3 === this.player1.token && this.board.b3 === this.player1.token && this.board.c3 === this.player1.token) {
        this.player1Win = true;
      } else if (this.board.a3 === this.player2.token && this.board.b3 === this.player2.token && this.board.c3 === this.player2.token) {
        this.player2Win = true;
      } else if (this.board.a1 === this.player1.token && this.board.b2 === this.player1.token && this.board.c3 === this.player1.token) {
        this.player1Win = true;
      } else if (this.board.a1 === this.player2.token && this.board.b2 === this.player2.token && this.board.c3 === this.player2.token) {
        this.player2Win = true;
      } else if (this.board.c1 === this.player1.token && this.board.b2 === this.player1.token && this.board.a3 === this.player1.token) {
        this.player1Win = true;
      } else if (this.board.c1 === this.player2.token && this.board.b2 === this.player2.token && this.board.a3 === this.player2.token) {
        this.player2Win = true;
      };

    renderWinningAnnouncement();
    switchPlayerTurn();
    resetBoard();
  };

  /*~~~~~~~~Renders winner's anouncement~~~~~~~~*/
  renderWinningAnnouncement() {
    if (this.player1Win === true) {
      display.innerText = `${this.player1.token} wins!`
    } else if (this.player2Win === true) {
      display.innerText = `${this.player2.token} wins!`
    }
  };

  /*~~~~~~~~Check board for a draw~~~~~~~~*/
  // checkForDraw() {
  //   //
  //   //
  //   //
  //   //
  //   //
  //   //
  //   switchPlayerTurn();
  //   resetGame();
  // };

  /*~~~~~~~~Reset the game board to default~~~~~~~*/
  resetBoard() {
    this.board.a1 = null;
    this.board.a2 = null;
    this.board.a3 = null;
    this.board.b1 = null;
    this.board.b1 = null;
    this.board.b3 = null;
    this.board.c1 = null;
    this.board.c2 = null;
    this.board.c3 = null;
  };

};
