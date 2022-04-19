class HelpTable {
    whoWin(computerMove, strLength) {
        let winners = [];
        if (computerMove <= strLength / 2) {
            for (let i = 0; i < strLength; i++) {
                let res = i > computerMove && i <= computerMove + strLength / 2;
                winners.push(res);
            }
        } else {
            for (let i = 0; i < strLength; i++) {
                let res = i < computerMove - strLength / 2 || i > computerMove;
                winners.push(res);
            }
        }
        return winners;
    }
    show(computerMove, str) {
        let winners = this.whoWin(computerMove, str.length);
        for (let i = 0; i < str.length; i++) {
            if (winners[i] && i != computerMove) {
                console.log(i + 1 + ". " + str[i] + " - WIN Move");
            } else if (i != computerMove) {
                console.log(i + 1 + ". " + str[i] + " - Lose Move ");
            } else {
                console.log(i + 1 + ". " + str[i] + " - Computer Move");
            }

        }
    }
}