var ch = ['a','b','c','a','a','a','c','c','e']

var obj = {}

// obj.k = 10;

ch.forEach(function(value){
    if(obj[value]){
        obj[value] ++ ;
    }
    else{
        obj[value] = 1;
    }
    // console.log(obj);
})

console.log(obj)