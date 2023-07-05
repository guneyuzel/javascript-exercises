const removeFromArray = function () {
  var arr = arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    var index = arr.indexOf(arguments[i]);

    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  return arr;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2, 1));

// Do not edit below this line
module.exports = removeFromArray;
