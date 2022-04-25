// /*~~~~~~~~Query Selectors~~~~~~~~*/
var userClick = document.querySelector(".grid-container");
var player1WinCounter = document.querySelector(".player1-win-counter");
var player2WinCounter = document.querySelector(".player2-win-counter");
var display = document.querySelector(".display-announcements");

/*~~~~~~~~Global Variables~~~~~~~~*/
var game = new Game();

/*~~~~~~~~Event Listeners~~~~~~~~*/
userClick.addEventListener("click", renderToken);

/*~~~~~~~~Functions & Event Handlers~~~~~~~~*/
function renderToken() {
  if (game.currentPlayer.turn === game.player1.turn) {
    event.target.innerText = game.player1.token;
  } else {
    event.target.innerText = game.player2.token;
  };

  game.switchPlayerTurn();
  // need to disable clickability of the div after clicked once...how?
};

// function disableGridCell() {
//   event.preventDefault();
// }
