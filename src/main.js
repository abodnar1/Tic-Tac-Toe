/*~~~~~~~~Query Selectors~~~~~~~~*/
var gameBoard = document.querySelector(".board-container");
var squares = document.querySelectorAll("div.square");
var display = document.querySelector(".display-announcements");
var player1WinCounter = document.querySelector(".player1-win-counter");
var player2WinCounter = document.querySelector(".player2-win-counter");

/*~~~~~~~~Global Variables~~~~~~~*/
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
    disableSquare(square);
    checkWinStatus();
    handleOutcome();
  }
};

function disableSquare(square) {
  square.classList.add("disabled");
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
    displayWin();
  } else if (game.win === null) {
    displayDraw();
  } else {
    game.switchPlayerTurn();
    announcePlayerTurn();
  }
};

function announcePlayerTurn() {
  if (game.win === false) {
    display.innerText = `It's ${game.currentPlayer.token}'s turn!`
  }
};

function clearTokens() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
    squares[i].classList.remove("disabled")
  }
  announcePlayerTurn();
};

function displayWin() {
  display.innerText = `${game.currentPlayer.token} wins!`
  game.handleWin();
  player1WinCounter.innerText = `${game.player1.wins} Wins`
  player2WinCounter.innerText = `${game.player2.wins} Wins`
  setTimeout(clearTokens, 3000);
};

function displayDraw() {
  display.innerText = `It's a cat's game!`
  game.handleDraw();
  setTimeout(clearTokens, 3000)
};
