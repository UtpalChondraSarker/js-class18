number = [10,20,30,40]

var sum = 0;
function myCallBackFunction(value){
    sum = sum + value;
}

// console.log(sum);

number.forEach(myCallBackFunction);

console.log(sum);
