const sumAll = function (num1, num2) {
  var c;
  var sum = 0;
  if (num1 > num2) {
    c = num1;
    num1 = num2;
    num2 = c;
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};
console.log(typeof 1);
console.log(sumAll(1, "5"));
// Do not edit below this line
module.exports = sumAll;
