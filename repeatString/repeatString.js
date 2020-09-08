const repeatString = function(stringToRepeat, numberOfOccurences) {

    if(numberOfOccurences < 0) {
        return "ERROR";
    }
    let word = "";
    let i;
    for (i = 0; i < numberOfOccurences; i++) {
        word = word + stringToRepeat;
    }

    return word;
}

module.exports = repeatString
