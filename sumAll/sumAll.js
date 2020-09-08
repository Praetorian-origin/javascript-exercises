const sumAll = function (number1, number2) {
  if (
    number1 < 0 ||
    number2 < 0 ||
    typeof number1 != "number" ||
    typeof number2 != "number"
  ) {
    return "ERROR";
  }

  let minNumber = Math.min(number1, number2);
  let maxNumber = Math.max(number1, number2);
  let count = 0;

  for (minNumber; minNumber <= maxNumber; minNumber++) {
    count += minNumber;
  }
  return count;
};

module.exports = sumAll;
