var person = [
    {
        fname : 'Hasan',
        lname : ' Abid',
        email : 'something@gmail.com'
    },
    {
        fname : 'Salman',
        lname : 'Abir',
        email : 'something@gmail.com'
    },
    {
        fname : 'Amirul',
        lname : 'Islam',
        email : 'something@gmail.com'
    },
]


var onlyFname = person.map(function(value){
    return value.fname;
})

console.log(onlyFname);

