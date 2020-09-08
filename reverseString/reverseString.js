const reverseString = function(stringToReverse) {

    let i;
    let reversedWord = "";
    for (i = stringToReverse.length - 1; i >= 0; i --) {
        reversedWord = reversedWord + stringToReverse[i];
    }
    return reversedWord;
}

module.exports = reverseString
