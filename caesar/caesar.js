const caesar = function (str, shiftPosition) {
  let arrStr = Array.from(str);
  arrStr = arrStr.map((arrCharacter) => {
    let uppercase = arrCharacter.toUpperCase() === arrCharacter;

    arrCharacter = arrCharacter.toLowerCase();
    if (arrCharacter.charCodeAt(0) < 97 || arrCharacter.charCodeAt(0) > 122) {
      return arrCharacter;
    }

    let keyCode = arrCharacter.charCodeAt(0);
    keyCode = keyCode + shiftPosition;
    while (keyCode > 122) {
      keyCode = 96 + (keyCode - 122);
    }
    while (keyCode < 97) {
      keyCode = 122 - (96 - keyCode);
    }

    return uppercase
      ? String.fromCharCode(keyCode).toUpperCase()
      : String.fromCharCode(keyCode);
  });

  return arrStr.join("");
};



module.exports = caesar;
