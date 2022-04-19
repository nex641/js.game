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