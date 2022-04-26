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
    square.innerText = game.currentPlayer.token;
    game.disableSquare(square);
    game.updateBoardToken(squareId);
    game.checkForHorizontalWin()
    game.checkForVerticalWin();
    game.checkForDiagonalWin();
    game.switchPlayerTurn();
    announcePlayerTurn();
  }
};

function announcePlayerTurn() {
  display.innerText = `It's ${game.currentPlayer.token}'s turn!`
};

function announceWinner() {
  display.innerText = `${game.currentPlayer.token} wins!`
};

function resetBoard() {
  // can querySelector all on the square class and remove disabled
  // it will return the whole array and you would reassign the tokens to ""
}

/*~~~~~~still need: announce winner~~~~~*/
/*~~~~~~still need: announce draw~~~~~~~*/
/*~~~~~~still need: update display win counters~~~~~*/
/*~~~~~~still need: reset board~~~~~~~*/
/*~~~~~~still need: timeout ~~~~~~~*/
