class Check {
    arguments(str) {
        if (str.length % 2 == 0) {

        }
        if (str.length < 2) {
            console.log("Even number of moves entered");
            return true;
        }
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < str.length; j++) {
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