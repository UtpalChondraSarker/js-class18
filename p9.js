var arr = [10,15,20,25,30,35,40,45,50];

var evens = arr.filter(function(value){
    return (value % 2 == 0)
})

console.log(evens);
