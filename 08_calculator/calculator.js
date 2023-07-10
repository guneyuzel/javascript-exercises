const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function () {
  var sumResult = 1;
  var arrayResult = 0;
  if (typeof arguments[0] == "object") {
    var arr = arguments[0];
    for (let c = 0; c < arguments[0].length; c++) {
      arrayResult = arrayResult + arr[c];
    }
    return arrayResult;
  } else {
    for (let i = 0; i < arguments.length; i++) {
      sumResult = sumResult + arguments[i];
    }
    return sumResult;
  }
};

const multiply = function () {
  var multiplyResult = 1;
  for (let i = 0; i < arguments.length; i++) {
    multiplyResult = multiplyResult * arguments[i];
  }
  return multiplyResult;
};

const power = function (num1, power) {
  return num1 ** power;
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  } else {
    var result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
