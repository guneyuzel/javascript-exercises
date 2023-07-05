const reverseString = function(string) {
    var value = string;
    var result = value[(string.length - 1)];

    for (let i = (string.length - 2); i >= 0; i--) {
        var result = result + value[i]; 
        
    }
    if (string == "") {
        return "";
    } else {
        return result;
    }
};
reverseString("hello")
// Do not edit below this line
module.exports = reverseString;
