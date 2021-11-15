// 006문장배우기 007주석 skip


var x = 5;               //number
var y = 'five';          //String
var isTrue = true;       //boolean
var empty = null;        //null
var nothing;             //undefined
var sym = Symbol('me')  //Symbol


var item = {
    price : 5000,
    count : 10

}; //Object


var fruits = ['apple','orange','kiwi']; //array


var addFruits =  function (fruit){
    fruits.push(fruit);
} //function

addFruits("watermelon");

console.log(fruits);
