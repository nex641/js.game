class HelpTable {
    winners = [];
    whoWin(computerMove, strLength) {
        if (computerMove <= strLength / 2) {
            for (let i = 0; i < strLength; i++) {
                this.winners.push(i > computerMove && i <= computerMove + strLength / 2);
            }
        } else {
            for (let i = 0; i < strLength; i++) {
                this.winners.push(i < computerMove - strLength / 2 || i > computerMove);
            }
        }
        return this.winners;
    }
    show(computerMove, str) {
        this.whoWin(computerMove, str.length);
        for (let i = 0; i < str.length; i++) {
            if (this.winners[i] && i != computerMove) {
                console.log(i + 1 + ". " + str[i] + " - WIN Move");
            } else if (i != computerMove) {
                console.log(i + 1 + ". " + str[i] + " - Lose Move ");
            } else {
                console.log(i + 1 + ". " + str[i] + " - Computer Move");
            }

        }
    }
}