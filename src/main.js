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
    event.stopImmediatePropagation();
  } else {
    square.innerText = game.currentPlayer.token;
    game.disableSquare(square);
    game.updateBoardToken(squareId);
    game.switchPlayerTurn();
    announcePlayerTurn();
  }
};

function announcePlayerTurn() {
  display.innerText = `It's ${game.currentPlayer.token}'s turn!`
};

/*~~~~~~Still need: announce winner~~~~~*/
/*~~~~~~Still need: announce draw~~~~~~~*/
/*~~Still need: update player win counters~~~*/
/*~~~~~~Still need: reset board~~~~~~~*/
