const repeatString = function(string, num) {
    var answer = string;
    for (let i = 1; i < num; i++) {
        answer = answer + string;      
    }
    if (num == 0) {
        return "";
    } else if (num < 0) {
        return "ERROR";
    } else {
        return answer;
    }
};

// Do not edit below this line
module.exports = repeatString;
