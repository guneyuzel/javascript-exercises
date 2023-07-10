const findTheOldest = function (object) {
  var arr = [];
  for (let i = 0; i < object.length; i++) {
    if (object[i].yearOfDeath == undefined) {
      object[i].yearOfDeath = 2023;
    }
    arr[i] = object[i].yearOfDeath - object[i].yearOfBirth;
  }

  for (let c = 0; c < object.length; c++) {
    if (object[c].yearOfDeath - object[c].yearOfBirth == Math.max(...arr)) {
      return object[c];
    }
  }
};

// Do not edit below this line
module.exports = findTheOldest;
