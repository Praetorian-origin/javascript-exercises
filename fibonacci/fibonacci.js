const fibonacci = function (number) {
  if (number < 0) {
    return "OOPS";
  }
  if(number == 0) {
      return 0;
  }
  let array = [];

  for (let i = 0; i < number; i++) {
    let sum = array[i - 1] + array[i - 2];
    array.push(isNaN(sum) ? 1 : sum);
  }
  return array[array.length - 1];
};

module.exports = fibonacci;
