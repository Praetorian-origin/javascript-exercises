const palindromes = function(sentence) {
 
    let i = 0;
    sentence = sentence.toLowerCase();
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    return checkPalindrome(sentence);

    function checkPalindrome(word) {
    
        word = word.replace(regex, "");
        word = word.replace(/ /g, "");
    

        let j = word.length - 1;

        for(i = 0; i < word.length; i++) {
            if(!(word[i] === word[j])) {
                return false;
            }
            j--;   
            if (i == j) {
                break;
            }
        }
        return true;
    }

   




}

module.exports = palindromes
