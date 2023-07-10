

const getTheTitles = function(object) {

    var arr = [];
    for (let i = 0; i < object.length; i++) {
        arr[i] = object[i].title;
        
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
