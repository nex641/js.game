class WhoWinner {
    result(computerMove, playerMove, str) {
        winners = new HelpTable().whoWin(computerMove, str.length);
        return winners[playerMove] ? "You Win!" : computerMove != playerMove ? "You Lose  :(" : "Draw";
    }
}