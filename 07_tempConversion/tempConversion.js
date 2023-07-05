const convertToCelsius = function (fval) {
  var result = ((fval - 32) * 5) / 9;
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (cval) {
  var result2 = (cval * 9/5) + 32
  return Math.round(result2 * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
