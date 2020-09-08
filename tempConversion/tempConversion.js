const ftoc = function(farenheitT) {
// (32 °F − 32) × 5/9 = 0 °C
  return Number(((farenheitT - 32) * 5/9).toFixed(1));


}

const ctof = function(celsiusT) {
// (0 °C × 9/5) + 32 = 32 °F
  return Number(((celsiusT * 9/5) + 32).toFixed(1));

}

module.exports = {
  ftoc,
  ctof
}
