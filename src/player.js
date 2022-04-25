class Player {
  constructor(id, token, turn) {
    this.id = id;
    this.token = token;
    this.turn = turn;
    this.wins = 0;
  };

  increaseWins() {
    this.wins ++;
  };
};
