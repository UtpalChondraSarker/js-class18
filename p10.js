var arr = [10,15,20,25,30,35,40,45,50];

// arr.reduce(callbackFunction , initialValue)

var result = arr.reduce(function(total , value ){
    return total + value
} , 0);

console.log(result);