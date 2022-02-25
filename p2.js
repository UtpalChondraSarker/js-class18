// Callback Function

/*

When use a function as an argument 
for another function

function s(param1,param12){

}
function p(){

}

s(10,p)

*/

// forEach()



number = [10,20,30,40]

function myCallBackFunction(item,index,arr){
    console.log(`${index} => ${item}`)
}


number.forEach(myCallBackFunction);