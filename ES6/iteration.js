var numbers = [1,2,3,4,5,4,3,2,1];

//ES5
var everyResult = numbers.every(function(item,index,array){
    return (item > 2);
})
alert (everyResult); //false

var someResult = numbers.some(function(item,index,array){
    return (item > 2);
})
alert (someResult); //true

var filterResult = numbers.filter(function(item,index,array){
    return (item > 2);
})
alert (filterResult); //[3,4,5,4,3]

var mapResult = numbers.map(function(item,index,array){
    return item * 2;
})
alert (mapResult); //[2,4,6,8,10,8,6,4,2]

numbers.forEach(function(item,index,array){
    //执行某些操作，无返回值
})

//ES6
var everyResult = numbers.every((item,index,array) => {
    return (item > 2);
})
alert (everyResult); //false

var someResult = numbers.some((item,index,array) => {
    return (item > 2);
})
alert (someResult); //true

var filterResult = numbers.filter((item,index,array) => {
    return (item > 2);
})
alert (filterResult); //[3,4,5,4,3]

var mapResult = numbers.map((item,index,array) => {
    return item * 2;
})
alert (mapResult); //[2,4,6,8,10,8,6,4,2]

numbers.forEach((item,index,array) => {
    //执行某些操作，无返回值
})



