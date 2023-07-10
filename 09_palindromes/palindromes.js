const palindromes = function (input) {
  input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  input = input.replace(/\s+/g, "");
  var sentence = "";
  var reverseSentence = "";

  for (let c = input.length - 1; c >= 0; c--) {
    reverseSentence = reverseSentence + input[c];
  }

  if (reverseSentence.toLowerCase() == input.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
