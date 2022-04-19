class Processor {
    start(args) {
        let check = new Check();
        let generation = new GenerationKey();
        let choice;
        let computerMove;
        if (check.arguments(args)) {
            console.log("Restart the program with more than one odd number of moves");
            return;
        }
        let hmacKey = generation.hmacKey();
        computerMove = Math.round((Math.random() * args.length));
        let hmac = generation.hmac(args[computerMove], hmacKey);
        console.log("HMAC:" + hmac);
        console.log("Available moves:");
        for (let i = 0; i < args.length; i++) {
            console.log(i + 1 + " - " + args[i]);
        }
        console.log("0 - Exit\n? - Help");
        do {
            do {
                let readline = require('readline-sync');;
                choice = readline.question("Enter your choice: ");
            } while (check.inputData(choice, args.length));
            if (choice == "?") {
                new HelpTable().show(computerMove, args);
            } else if (choice == "0") {
                return;
            } else {
                console.log("Your move: " + args[choice - 1] + "\nComputer move: " +
                    args[computerMove]);
                console.log(new WhoWinner().result(computerMove, choice - 1, args));
                console.log("HMAC key:  " + hmacKey);
                return;
            }
        } while (true)
    }
}
class Check {
    arguments(str) {
        if (str.length % 2 == 0) {

        }
        if (str.length < 2) {
            console.log("Even number of moves entered");
            return true;
        }
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                if (str[i] == str[j]) {
                    console.log("There are repetitive moves");
                    return true;
                }
            }
        }
        return false;
    }
    inputData(str, numberArguments) {
        try {
            return str != "?" && (str.length > numberArguments || str.length < 0)
        } catch (error) {
            console.log("This item is not on the menu");
            return true;
        }
    }
}
class GenerationKey {
    constructor() {
        let crypto;
        try {
            this.crypto = require('crypto');
        } catch (err) {
            console.log('crypto support is disabled!');
        }
    }
    hmac(message, key) {
        return this.crypto.createHash('sha256').update(message + key).digest('hex').toUpperCase();
    }
    hmacKey() {
        return this.crypto.createHash('sha256').update(Math.random(100) + "").digest('hex').toUpperCase();
    }
}
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
class WhoWinner {
    result(computerMove, playerMove, str) {
        let tableItem = new HelpTable();
        let winners = tableItem.whoWin(computerMove, str.length);
        return winners[playerMove] ? "You Win!" : computerMove != playerMove ? "You Lose  :(" : "Draw";
    }
}
let arr = process.argv;
arr.shift();
arr.shift();
new Processor().start(arr);