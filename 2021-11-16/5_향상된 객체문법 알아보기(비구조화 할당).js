var obj = {a:1, b:2, c:30, d:44, e:5}

var{a, c} = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

var {a:newA=10, f:newF=5} = obj; //newA와 newF에 값을 10과 5로 할당한다는 것이 아니고 default값이다.
console.log(`newA >>> ${newA}`); //따라서 a는 속성에 대한 값이 있으므로 1
console.log(`newF >>> ${newF}`); //f는 없는 속성이므로 5가 할당된다.

console.log('===============================================================')

var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr;

console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);


var [a = 10, f = 9] = [1];

[a,f] = [f,a];
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

function getArr(){
    return[1,2,3,4,5,6];
}
[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);