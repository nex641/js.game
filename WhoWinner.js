class WhoWinner {
    result(computerMove, playerMove, str) {
        let tableItem = new HelpTable();
        let winners = tableItem.whoWin(computerMove, str.length);
        return winners[playerMove] ? "You Win!" : computerMove != playerMove ? "You Lose  :(" : "Draw";
    }
}