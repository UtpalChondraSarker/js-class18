// Before filter()
var arr = [10,15,20,25,30,35,40,45,50];
var evens = []

for(var i = 0 ; i<arr.length ; i++){
    if( arr[i] % 2 == 0){
        evens.push(arr[i]);
    }
}

console.log(evens);
