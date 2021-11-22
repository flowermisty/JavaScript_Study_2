/*##########################################################################
# 자료형을 확인 하는 방법은 다양하다 그중에서 주로 사용하는 typeof와 instanceof 를
# 어떻게 사용하고 무슨 차이점이 있는지 알아본다.
############################################################################*/

/*##########################################################################
# typeof를 통해 자료형을 확인하면, 원시 자료형 값중 문자형string와 숫자형number
# 불린형boolean undefined는 예상한 그대로 출력된다. 반대로 레퍼런스 타입과
# 원시자료형이 null일때는 object 문자열을 반환한다.
# 이를 통해 알 수 있듯이 typeof는 프리미티브타입과 레퍼런스타입을 구분하기 위해 사용하는 것이 좋다.
############################################################################*/

/*##########################################################################
# instanceof는 어떤종류의 객체인지 확인하기위해 사용한다.
############################################################################*/
const str = 'JavaScript';
const strObj = new String('JavaScript');
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function(){};
const arr = [10, 200, 4000];
const obj = {a1: 'test'};
const empty = null;
const notCalled = undefined;

console.log(typeof str === 'string');
console.log(typeof strObj === 'object');
console.log(typeof num === 'number');
console.log(typeof numObj === 'object');
console.log(typeof bool === 'boolean');
console.log(typeof boolObj === 'object');
console.log(typeof func === 'function');
console.log(typeof arr === 'object');
console.log(typeof obj === 'object');
console.log(typeof empty === 'object');
console.log(typeof notCalled === 'undefined');

console.log(str instanceof String);
console.log(strObj instanceof String);
console.log(num instanceof Number);
console.log(numObj instanceof Number);
console.log(bool instanceof Boolean);
console.log(boolObj instanceof Boolean);
console.log(arr instanceof Array);
console.log(obj instanceof Object);
console.log(func instanceof Function);
console.log(empty instanceof Object);
console.log(notCalled instanceof undefined);