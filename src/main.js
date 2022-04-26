/*~~~~~~~~Query Selectors~~~~~~~~*/
var gameBoard = document.querySelector(".board-container");
var player1WinCounter = document.querySelector(".player1-win-counter");
var player2WinCounter = document.querySelector(".player2-win-counter");
var display = document.querySelector(".display-announcements");

/*~~~~~~~~Global Variables~~~~~~~~*/
var game = new Game();

/*~~~~~~~~Event Listeners~~~~~~~~*/
gameBoard.addEventListener("click", renderToken);

/*~~~~~~~~Functions & Event Handlers~~~~~~~~*/
function renderToken(event) {
  var squareId = event.target.id;
  var square = event.target;

  if (square.classList.contains("disabled")) {
    event.preventDefault();
  } else {
    game.updateBoardToken(squareId);
    square.innerText = game.currentPlayer.token;
    game.disableSquare(square);
    checkWinStatus();
    handleOutcome();
    game.switchPlayerTurn();
    announcePlayerTurn();
  }
};

function announcePlayerTurn() {
  if (game.win === false) {
    display.innerText = `It's ${game.currentPlayer.token}'s turn!`
  }
};

function checkWinStatus() {
  game.checkForHorizontalWin();
  game.checkForVerticalWin();
  game.checkForDiagonalWin();

  if (game.win === false) {
    game.checkForDraw();
  }
};

function handleOutcome() {
  if (game.win === true) {
    display.innerText = `${game.currentPlayer.token} wins!`
  } else if (game.win === null) {
    display.innerText = `It's a cat's game!`
  }
};

/*~~~~~~still need: update display win counters~~~~~*/
/*~~~~~~still need: reset board/timeout~~~~~~~*/
