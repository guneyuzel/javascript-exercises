const fibonacci = function (num) {
  var a = 1;
  var b = 1;
  var c = 0;
  if (num < 0) {
    return "OOPS";
  } else if (num <= 2) {
    return 1;
  } else {
    for (let i = 0; i < num - 2; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
};

// Do not edit below this line
module.exports = fibonacci;
